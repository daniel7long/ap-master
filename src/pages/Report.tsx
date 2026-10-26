import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { QUESTIONS, dynTestId, similarFor, TESTS } from '../data/bank';
import { subjectById, shortName } from '../data/subjects';
import { useStore } from '../store';
import { Empty, QuestionReview, ScoreRing, TopBar, fmtDate, fmtTime, pct } from '../ui';

export default function Report() {
  const { aid = '' } = useParams();
  const st = useStore();
  const nav = useNavigate();
  const a = st.attempts.find(x => x.id === aid);
  const [filter, setFilter] = useState<'all' | 'wrong'>('wrong');
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const b = () => setPrinting(true), f = () => setPrinting(false);
    window.addEventListener('beforeprint', b); window.addEventListener('afterprint', f);
    return () => { window.removeEventListener('beforeprint', b); window.removeEventListener('afterprint', f); };
  }, []);

  const topics = useMemo(() => {
    const m = new Map<string, { t: number; c: number }>();
    a?.qids.forEach((id, i) => { const q = QUESTIONS[id]; const e = m.get(q.topic) ?? { t: 0, c: 0 }; e.t++; if (a.answers[i] === q.answer) e.c++; m.set(q.topic, e); });
    return [...m.entries()].sort((x, y) => x[1].c / x[1].t - y[1].c / y[1].t);
  }, [a]);

  if (!a) return <><TopBar title="Report" back="/me" /><Empty icon="📄" title="Report not found" text="This attempt isn’t in your history (data may have been reset)." /></>;
  const s = subjectById(a.subjectId)!;
  const score = pct(a.correct, a.qids.length);
  const wrongIdx = a.qids.map((_, i) => i).filter(i => a.answers[i] !== QUESTIONS[a.qids[i]].answer);
  const shown = filter === 'wrong' ? wrongIdx : a.qids.map((_, i) => i);
  const verdict = score >= 85 ? 'Excellent work!' : score >= 70 ? 'Solid — keep polishing.' : score >= 50 ? 'Getting there. Review the explanations below.' : 'Let’s build up the basics. Review each explanation.';
  const toggle = (id: string) => setOpenIds(o => (o.includes(id) ? o.filter(x => x !== id) : [...o, id]));
  const wrongIds = wrongIdx.map(i => a.qids[i]);
  const startRetry = () => nav(`/quiz/${dynTestId('retry', a.subjectId, wrongIds)}`);
  const startCustom = () => { const ids = similarFor(wrongIds, new Set(wrongIds)); nav(`/quiz/${dynTestId('custom', a.subjectId, ids.length ? ids : wrongIds)}`); };
  const doPrint = () => { setPrinting(true); setTimeout(() => window.print(), 80); };

  return (
    <div className="report">
      <TopBar title="Test report" sub={`${shortName(s)} · ${a.title}`} back={`/subject/${a.subjectId}`} right={<button className="btn light small no-print" onClick={doPrint}>⬇ Download PDF</button>} />
      <div className="page">
        <div className="score-card">
          <ScoreRing value={score} />
          <div>
            <h2>{verdict}</h2>
            <div className="stats">
              <div><b>{a.correct}/{a.qids.length}</b><small>Correct</small></div>
              <div><b>{a.qids.length - a.correct}</b><small>Incorrect</small></div>
              <div><b>{fmtTime(a.durationSec)}</b><small>Time</small></div>
            </div>
            <small className="print-meta">{fmtDate(a.date)} · AP Master</small>
          </div>
        </div>

        <h2 className="sec">Performance by topic</h2>
        <div className="card">
          {topics.map(([t, v]) => (
            <div key={t} className="topic-row"><span>{t}</span><div className="bar"><span className={v.c === v.t ? 'g' : v.c === 0 ? 'r' : ''} style={{ width: `${pct(v.c, v.t)}%` }} /></div><small>{v.c}/{v.t}</small></div>
          ))}
        </div>

        <div className="sec-row no-print">
          <h2 className="sec">Question review</h2>
          <div className="seg">
            <button className={filter === 'wrong' ? 'on' : ''} onClick={() => setFilter('wrong')}>Incorrect ({wrongIdx.length})</button>
            <button className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>All ({a.qids.length})</button>
          </div>
        </div>
        {!printing && shown.length === 0 && <Empty icon="🎉" title="Perfect score!" text="No mistakes to review in this test." />}
        {(printing ? a.qids.map((_, i) => i) : shown).map(i => {
          const q = QUESTIONS[a.qids[i]];
          return <QuestionReview key={q.id} q={q} index={i} chosen={a.answers[i]} open={printing || openIds.includes(q.id)} onToggle={() => toggle(q.id)} />;
        })}
        {wrongIdx.length > 0 && <p className="note no-print">✓ {wrongIdx.length} question{wrongIdx.length > 1 ? 's were' : ' was'} added to your <Link to="/me?tab=errors">Errors Bank</Link>.</p>}

        <div className="actions-col no-print">
          {wrongIdx.length > 0 && <button className="btn primary" onClick={startCustom}>Practice similar questions</button>}
          {wrongIdx.length > 0 && <button className="btn ghost" onClick={startRetry}>Retry my mistakes</button>}
          {TESTS[a.testId] && <button className="btn ghost" onClick={() => nav(`/quiz/${a.testId}`)}>Retake this test</button>}
          <Link className="btn ghost" to={`/subject/${a.subjectId}`}>Back to {shortName(s)}</Link>
        </div>
      </div>
    </div>
  );
}
