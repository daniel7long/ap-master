import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { QUESTIONS, resolveTest } from '../data/bank';
import { subjectById, shortName } from '../data/subjects';
import { clearProgress, getState, recordAttempt, saveProgress } from '../store';
import { Empty, LETTERS, Modal, TopBar, fmtTime } from '../ui';

export default function Quiz() {
  const { tid = '' } = useParams();
  const test = useMemo(() => resolveTest(tid), [tid]);
  if (!test) return <><TopBar title="Test not found" back="/" /><Empty icon="?" title="Test not found" text="This test no longer exists." /></>;
  return <QuizBody key={tid} tid={tid} />;
}

function QuizBody({ tid }: { tid: string }) {
  const test = resolveTest(tid)!;
  const nav = useNavigate();
  const qs = test.qids.map(id => QUESTIONS[id]);
  const saved = getState().progress[tid];
  const resumable = saved && saved.answers.length === qs.length;
  const [idx, setIdx] = useState(resumable ? saved.idx : 0);
  const [answers, setAnswers] = useState<(number | null)[]>(resumable ? saved.answers : qs.map(() => null));
  const [flags, setFlags] = useState<number[]>(resumable ? saved.flags : []);
  const [elapsed, setElapsed] = useState(resumable ? saved.elapsed : 0);
  const [confirm, setConfirm] = useState<'submit' | 'exit' | null>(null);
  const t0 = useRef(Date.now() - elapsed * 1000);

  useEffect(() => { const i = setInterval(() => setElapsed(Math.floor((Date.now() - t0.current) / 1000)), 1000); return () => clearInterval(i); }, []);
  useEffect(() => { // auto-save so students can resume after closing the tab
    if (answers.some(a => a !== null) || flags.length) saveProgress(tid, { idx, answers, flags, elapsed });
  }, [tid, idx, answers, flags, elapsed]);

  const pick = useCallback((o: number) => setAnswers(a => a.map((v, i) => (i === idx ? (v === o ? null : o) : v))), [idx]);
  const unanswered = answers.filter(a => a === null).length;

  const submit = () => {
    const correct = answers.filter((a, i) => a === qs[i].answer).length;
    const wrong = qs.filter((q, i) => answers[i] !== q.answer).map(q => ({ qid: q.id, subjectId: q.subjectId }));
    const right = qs.filter((q, i) => answers[i] === q.answer).map(q => q.id);
    const id = `a${Date.now().toString(36)}`;
    recordAttempt({ id, testId: tid, title: test.title, subjectId: test.subjectId, kind: test.kind, date: Date.now(), durationSec: elapsed, qids: test.qids, answers, correct }, wrong, right);
    nav(`/report/${id}`, { replace: true });
  };

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (confirm || (e.target as HTMLElement)?.tagName === 'INPUT') return;
      const n = ['1', '2', '3', '4', 'a', 'b', 'c', 'd'].indexOf(e.key.toLowerCase());
      if (n >= 0) pick(n % 4);
      else if (e.key === 'ArrowRight') setIdx(i => Math.min(i + 1, qs.length - 1));
      else if (e.key === 'ArrowLeft') setIdx(i => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [pick, qs.length, confirm]);

  const q = qs[idx];
  const subj = subjectById(test.subjectId)!;
  const last = idx === qs.length - 1;
  return (
    <div className="quiz">
      <TopBar title={test.title} sub={shortName(subj)} back={false}
        right={<><span className="timer" aria-label="Elapsed time">⏱ {fmtTime(elapsed)}</span><button className="btn ghost small" onClick={() => setConfirm('exit')}>Exit</button></>} />
      <div className="page">
        <div className="bar thin"><span style={{ width: `${((idx + 1) / qs.length) * 100}%` }} /></div>
        <div className="qnav" role="tablist" aria-label="Questions">
          {qs.map((_, i) => (
            <button key={i} role="tab" aria-selected={i === idx} className={`qdot ${i === idx ? 'cur' : ''} ${answers[i] !== null ? 'ans' : ''} ${flags.includes(i) ? 'flag' : ''}`} onClick={() => setIdx(i)}>{i + 1}</button>
          ))}
        </div>
        <div className="qcard">
          <div className="qmeta"><span>Question {idx + 1} of {qs.length}</span>
            <button className={`flag-btn ${flags.includes(idx) ? 'on' : ''}`} onClick={() => setFlags(f => (f.includes(idx) ? f.filter(x => x !== idx) : [...f, idx]))}>⚑ {flags.includes(idx) ? 'Flagged' : 'Flag for review'}</button></div>
          <p className="stem">{q.stem}</p>
          <div className="options" role="radiogroup" aria-label="Answer choices">
            {q.options.map((o, i) => (
              <button key={i} role="radio" aria-checked={answers[idx] === i} className={`option ${answers[idx] === i ? 'sel' : ''}`} onClick={() => pick(i)}>
                <span className="letter">{LETTERS[i]}</span><span>{o}</span>
              </button>
            ))}
          </div>
          <p className="hint">Tip: use keys 1–4 to answer and ← → to move.</p>
        </div>
        <div className="quiz-actions">
          <button className="btn ghost" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>‹ Previous</button>
          {last ? <button className="btn primary" onClick={() => setConfirm('submit')}>Finish &amp; see report</button>
            : <button className="btn primary" onClick={() => setIdx(idx + 1)}>Next ›</button>}
        </div>
      </div>
      {confirm === 'submit' && (
        <Modal title="Submit this test?" onClose={() => setConfirm(null)}>
          <p>{unanswered ? `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}${flags.length ? ` and ${flags.length} flagged` : ''}. Unanswered questions count as incorrect.` : 'All questions are answered.'}</p>
          <div className="modal-actions"><button className="btn ghost" onClick={() => setConfirm(null)}>Keep working</button><button className="btn primary" onClick={submit}>Submit</button></div>
        </Modal>
      )}
      {confirm === 'exit' && (
        <Modal title="Leave this test?" onClose={() => setConfirm(null)}>
          <p>Your progress is saved automatically, so you can resume later. Or discard it to start fresh.</p>
          <div className="modal-actions">
            <button className="btn ghost" onClick={() => { clearProgress(tid); nav(`/subject/${test.subjectId}`, { replace: true }); }}>Discard</button>
            <button className="btn primary" onClick={() => nav(`/subject/${test.subjectId}`, { replace: true })}>Save &amp; exit</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
