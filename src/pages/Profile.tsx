import { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { QUESTIONS, dynTestId, similarFor } from '../data/bank';
import { SUBJECTS, shortName } from '../data/subjects';
import { getState, removeError, resetAll, useStore } from '../store';
import { Empty, Modal, QuestionReview, TopBar, fmtDate, fmtTime, pct } from '../ui';

type Tab = 'records' | 'errors';

export default function Profile() {
  const st = useStore();
  const [params, setParams] = useSearchParams();
  const tab: Tab = params.get('tab') === 'errors' ? 'errors' : 'records';
  const [reset, setReset] = useState(false);
  const total = st.attempts.reduce((n, a) => n + a.qids.length, 0);
  const right = st.attempts.reduce((n, a) => n + a.correct, 0);
  const days = useMemo(() => new Set(st.attempts.map(a => new Date(a.date).toDateString())).size, [st.attempts]);
  return (
    <>
      <TopBar title="My Hub" sub="Your progress, records and mistakes" />
      <div className="page">
        <div className="dash">
          <div><b>{st.attempts.length}</b><small>Tests taken</small></div>
          <div><b>{total ? pct(right, total) : 0}%</b><small>Accuracy</small></div>
          <div><b>{st.errors.length}</b><small>Errors Bank</small></div>
          <div><b>{days}</b><small>Study days</small></div>
        </div>
        <div className="seg wide">
          <button className={tab === 'records' ? 'on' : ''} onClick={() => setParams({})}>Practice records</button>
          <button className={tab === 'errors' ? 'on' : ''} onClick={() => setParams({ tab: 'errors' })}>Errors Bank ({st.errors.length})</button>
        </div>
        {tab === 'records' ? <Records /> : <Errors />}
        <h2 className="sec">Data</h2>
        <div className="card data">
          <p>Your data is stored only in this browser. Export a backup or reset to start over.</p>
          <div className="modal-actions left">
            <button className="btn ghost small" onClick={() => {
              const blob = new Blob([JSON.stringify(getState(), null, 2)], { type: 'application/json' });
              const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'ap-master-backup.json'; a.click();
            }}>Export backup</button>
            <button className="btn danger small" onClick={() => setReset(true)}>Reset all data</button>
          </div>
        </div>
      </div>
      {reset && <Modal title="Reset all data?" onClose={() => setReset(false)}><p>This permanently deletes your records, Errors Bank and saved progress on this device.</p>
        <div className="modal-actions"><button className="btn ghost" onClick={() => setReset(false)}>Cancel</button><button className="btn danger" onClick={() => { resetAll(); setReset(false); }}>Delete everything</button></div></Modal>}
    </>
  );
}

function Records() {
  const st = useStore();
  const [collapsed, setCollapsed] = useState<string[]>([]);
  if (!st.attempts.length) return <Empty icon="📝" title="No practice records yet" text="Finish a practice test and it will appear here, grouped by subject."><Link className="btn primary" to="/">Start practicing</Link></Empty>;
  const subs = SUBJECTS.filter(s => st.attempts.some(a => a.subjectId === s.id));
  return (
    <>
      {subs.map(s => {
        const at = st.attempts.filter(a => a.subjectId === s.id);
        const open = !collapsed.includes(s.id);
        return (
          <div key={s.id} className="group">
            <button className="group-head" onClick={() => setCollapsed(open ? [...collapsed, s.id] : collapsed.filter(x => x !== s.id))}>
              <b>{shortName(s)}</b><small>{at.length} attempt{at.length > 1 ? 's' : ''} · avg {pct(at.reduce((n, a) => n + a.correct, 0), at.reduce((n, a) => n + a.qids.length, 0))}%</small><span className="chev">{open ? '▴' : '▾'}</span>
            </button>
            {open && at.map(a => (
              <Link key={a.id} to={`/report/${a.id}`} className="test-row">
                <div className={`row-icon ${pct(a.correct, a.qids.length) >= 70 ? 'done' : 'bad'}`}>{pct(a.correct, a.qids.length)}</div>
                <div className="grow"><b>{a.title}</b><small>{fmtDate(a.date)} · {a.correct}/{a.qids.length} · {fmtTime(a.durationSec)}{a.kind !== 'set' ? ` · ${a.kind === 'custom' ? 'Custom' : 'Retry'}` : ''}</small></div><span className="chev">›</span>
              </Link>
            ))}
          </div>
        );
      })}
    </>
  );
}

function Errors() {
  const st = useStore();
  const nav = useNavigate();
  const [open, setOpen] = useState<string[]>([]);
  if (!st.errors.length) return <Empty icon="✅" title="Your Errors Bank is empty" text="Questions you answer incorrectly are collected here so you can master them."><Link className="btn primary" to="/">Take a practice test</Link></Empty>;
  const subs = SUBJECTS.filter(s => st.errors.some(e => e.subjectId === s.id));
  return (
    <>
      {subs.map(s => {
        const es = st.errors.filter(e => e.subjectId === s.id).sort((a, b) => b.last - a.last);
        const ids = es.map(e => e.qid);
        return (
          <div key={s.id} className="group">
            <div className="group-head static"><b>{shortName(s)}</b><small>{es.length} question{es.length > 1 ? 's' : ''}</small></div>
            <div className="chips pad">
              <button className="btn primary small" onClick={() => { const sim = similarFor(ids, new Set(ids)); nav(`/quiz/${dynTestId('custom', s.id, sim.length ? sim : ids)}`); }}>Custom practice</button>
              <button className="btn ghost small" onClick={() => nav(`/quiz/${dynTestId('retry', s.id, ids.slice(0, 10))}`)}>Retry these</button>
            </div>
            {es.map(e => (
              <div key={e.qid} className="err-wrap">
                <QuestionReview q={QUESTIONS[e.qid]} chosen={null} open={open.includes(e.qid)} onToggle={() => setOpen(o => (o.includes(e.qid) ? o.filter(x => x !== e.qid) : [...o, e.qid]))} />
                <div className="err-meta"><small>Missed {e.count}× · {fmtDate(e.last)}</small><button className="link" onClick={() => removeError(e.qid)}>Remove</button></div>
              </div>
            ))}
          </div>
        );
      })}
      <p className="note">“Custom practice” builds a new set from the same topics using questions you haven’t missed. Answer a “Retry” question correctly and it leaves your Errors Bank.</p>
    </>
  );
}

export function About() {
  return (
    <>
      <TopBar title="About AP Master" back="/" />
      <div className="page prose">
        <p>AP Master helps students worldwide prepare for AP® exams with practice tests, instant reports, a personal Errors Bank and tutor-led courses.</p>
        <h2>How it works</h2>
        <ul><li>Each AP subject has 20 practice tests; finishing one produces a report you can download as a PDF.</li><li>Missed questions are stored in your Errors Bank, and custom practice draws more questions from the same topics.</li><li>Your progress is stored in your browser only.</li></ul>
        <h2>Disclaimer</h2>
        <p>AP® and Advanced Placement® are registered trademarks of the College Board, which is not affiliated with and does not endorse this product. Practice questions are original and not actual exam questions. Tutors and course details shown are placeholders.</p>
        <p><Link to="/">← Back to Practice</Link> · <span>{SUBJECTS.length} subjects</span></p>
      </div>
    </>
  );
}
