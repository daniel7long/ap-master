import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FAMILIES, SUBJECTS, subjectById, shortName } from '../data/subjects';
import { TESTS_BY_SUBJECT, TESTS } from '../data/bank';
import { courseBySubject } from '../data/courses';
import { useStore } from '../store';
import { Empty, TopBar, fmtDate, pct } from '../ui';
import { MIN_PER_QUESTION } from '../config';

export default function Practice() {
  const st = useStore();
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<string | null>(null);
  const query = q.trim().toLowerCase();
  const results = useMemo(() => (query ? SUBJECTS.filter(s => s.name.toLowerCase().includes(query) || s.blurb.toLowerCase().includes(query)) : []), [query]);
  const inProgress = Object.entries(st.progress).filter(([id, p]) => TESTS[id] && p.answers.some(a => a !== null)).slice(0, 3);
  const last = st.attempts[0];

  return (
    <>
      <div className="hero">
        <h1>What are you studying today?</h1>
        <p>Pick an AP subject and take a full practice test with instant reports.</p>
        <input className="search" type="search" placeholder="Search AP subjects…" value={q} onChange={e => setQ(e.target.value)} aria-label="Search subjects" />
      </div>
      <div className="page">
        {query ? (
          results.length ? <div className="grid">{results.map(s => <SubjectCard key={s.id} id={s.id} />)}</div>
            : <Empty icon="🔍" title="No subjects found" text="Try another keyword, e.g. “calculus” or “history”." />
        ) : (
          <>
            {inProgress.length > 0 && (
              <section>
                <h2 className="sec">Continue where you left off</h2>
                {inProgress.map(([id, p]) => (
                  <button key={id} className="row-card" onClick={() => nav(`/quiz/${id}`)}>
                    <div className="row-icon amber">▶</div>
                    <div className="grow"><b>{subjectById(TESTS[id].subjectId) && shortName(subjectById(TESTS[id].subjectId)!)} · {TESTS[id].title}</b>
                      <small>{p.answers.filter(a => a !== null).length}/{TESTS[id].qids.length} answered</small></div>
                    <span className="chev">›</span>
                  </button>
                ))}
              </section>
            )}
            {last && !inProgress.length && (
              <Link className="row-card" to={`/report/${last.id}`}>
                <div className="row-icon">★</div>
                <div className="grow"><b>Latest result: {last.title}</b><small>{shortName(subjectById(last.subjectId)!)} · {pct(last.correct, last.qids.length)}% · {fmtDate(last.date)}</small></div>
                <span className="chev">›</span>
              </Link>
            )}
            <h2 className="sec">AP subjects</h2>
            <div className="grid">
              {FAMILIES.map(f => {
                const subs = SUBJECTS.filter(s => s.family === f.id);
                if (subs.length === 1) return <SubjectCard key={f.id} id={subs[0].id} />;
                const isOpen = open === f.id;
                return (
                  <div key={f.id} className={`family ${isOpen ? 'open' : ''}`}>
                    <button className="subject-card" onClick={() => setOpen(isOpen ? null : f.id)} aria-expanded={isOpen}>
                      <div className="s-icon">{subs[0].icon}</div>
                      <div className="grow"><b>{f.name}</b><small>{subs.length} subjects · {f.blurb}</small></div>
                      <span className="chev">{isOpen ? '▴' : '▾'}</span>
                    </button>
                    {isOpen && <div className="family-list">{subs.map(s => <SubjectCard key={s.id} id={s.id} compact />)}</div>}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

function SubjectCard({ id, compact }: { id: string; compact?: boolean }) {
  const s = subjectById(id)!;
  const st = useStore();
  const done = new Set(st.attempts.filter(a => a.subjectId === id && a.kind === 'set').map(a => a.testId)).size;
  return (
    <Link to={`/subject/${id}`} className={`subject-card ${compact ? 'compact' : ''}`}>
      <div className="s-icon">{s.icon}</div>
      <div className="grow"><b>{s.name}</b><small>{s.blurb}</small>
        {done > 0 && <div className="mini-bar"><span style={{ width: `${pct(done, 20)}%` }} /></div>}</div>
      <span className="chev">›</span>
    </Link>
  );
}

export function SubjectPage() {
  const { sid = '' } = useParams();
  const s = subjectById(sid);
  const st = useStore();
  const nav = useNavigate();
  if (!s) return <><TopBar title="Subject not found" back="/" /><Empty icon="?" title="Unknown subject" text="That subject doesn’t exist." /></>;
  const tests = TESTS_BY_SUBJECT[sid] ?? [];
  const course = courseBySubject(sid);
  const errCount = st.errors.filter(e => e.subjectId === sid).length;
  const attemptsFor = (tid: string) => st.attempts.filter(a => a.testId === tid);
  const doneCount = tests.filter(t => attemptsFor(t.id).length).length;

  return (
    <>
      <TopBar title={shortName(s)} sub={`${tests.length} practice tests · ${doneCount} completed`} back="/" />
      <div className="page">
        <div className="progress-card">
          <div><b>{pct(doneCount, tests.length)}%</b><small>of tests completed</small></div>
          <div className="bar"><span style={{ width: `${pct(doneCount, tests.length)}%` }} /></div>
          <div className="chips">
            {errCount > 0 && <Link className="chip" to="/me?tab=errors">{errCount} in Errors Bank</Link>}
            {course && <Link className="chip alt" to={`/courses/${course.id}`}>Try 3 free lessons</Link>}
          </div>
        </div>
        <h2 className="sec">Practice tests</h2>
        <div className="list">
          {tests.map(t => {
            const at = attemptsFor(t.id);
            const best = at.length ? Math.max(...at.map(a => pct(a.correct, a.qids.length))) : null;
            const prog = st.progress[t.id];
            const started = prog && prog.answers.some(a => a !== null);
            return (
              <button key={t.id} className="test-row" onClick={() => nav(`/quiz/${t.id}`)}>
                <div className={`row-icon ${best !== null ? 'done' : ''}`}>{best !== null ? '✓' : t.title.replace('Practice Test ', '')}</div>
                <div className="grow">
                  <b>{t.title}</b>
                  <small>{t.qids.length} questions · ~{Math.round(t.qids.length * MIN_PER_QUESTION)} min{at.length ? ` · ${at.length} attempt${at.length > 1 ? 's' : ''}` : ''}</small>
                </div>
                {started ? <span className="tag amber">In progress</span> : best !== null ? <span className={`tag ${best >= 70 ? 'green' : 'red'}`}>Best {best}%</span> : <span className="tag">New</span>}
              </button>
            );
          })}
        </div>
        <p className="note">Each test mixes questions from across the whole course so you practice like exam day. Questions you miss go to your Errors Bank automatically.</p>
      </div>
    </>
  );
}
