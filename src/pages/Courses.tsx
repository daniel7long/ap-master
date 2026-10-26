import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { COURSES, courseById, type Course, type Lesson } from '../data/courses';
import { FAMILIES, subjectById } from '../data/subjects';
import { addLead, markWatched, toggleBookmark, useStore } from '../store';
import { CONSULTANT_EMAIL } from '../config';
import { Empty, Modal, TopBar } from '../ui';

export default function Courses() {
  const st = useStore();
  const [fam, setFam] = useState('all');
  const [q, setQ] = useState('');
  const [saved, setSaved] = useState(false);
  const list = COURSES.filter(c => {
    const s = subjectById(c.subjectId)!;
    return (fam === 'all' || s.family === fam) && (!q || c.title.toLowerCase().includes(q.toLowerCase())) && (!saved || st.bookmarks.includes(c.id));
  });
  return (
    <>
      <div className="hero">
        <h1>Learn with expert AP tutors</h1>
        <p>Every course includes 3 free trial lessons (10–15 min each). Unlock the full course when you’re ready.</p>
        <input className="search" type="search" placeholder="Search courses…" value={q} onChange={e => setQ(e.target.value)} aria-label="Search courses" />
      </div>
      <div className="page">
        <div className="chips scroll">
          <button className={`chip ${fam === 'all' && !saved ? 'on' : ''}`} onClick={() => { setFam('all'); setSaved(false); }}>All</button>
          {FAMILIES.map(f => <button key={f.id} className={`chip ${fam === f.id ? 'on' : ''}`} onClick={() => { setFam(f.id); setSaved(false); }}>{f.name}</button>)}
          <button className={`chip ${saved ? 'on' : ''}`} onClick={() => setSaved(!saved)}>♥ Saved ({st.bookmarks.length})</button>
        </div>
        {list.length === 0 ? <Empty icon="📚" title="No courses found" text="Try clearing the filters." /> : (
          <div className="grid">
            {list.map(c => {
              const watched = c.lessons.filter(l => st.watched.includes(l.id)).length;
              return (
                <Link key={c.id} to={`/courses/${c.id}`} className="course-card">
                  <div className="course-cover"><span>{subjectById(c.subjectId)!.icon}</span>
                    <button className={`heart ${st.bookmarks.includes(c.id) ? 'on' : ''}`} aria-label="Save course" onClick={e => { e.preventDefault(); toggleBookmark(c.id); }}>{st.bookmarks.includes(c.id) ? '♥' : '♡'}</button></div>
                  <div className="course-body">
                    <b>{c.title}</b>
                    <small>{c.tutor.name} · {c.weeks} weeks · {c.sessions} live sessions</small>
                    <div className="chips"><span className="tag green">3 free lessons</span>{watched > 0 && <span className="tag">{watched}/3 watched</span>}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export function CourseDetail() {
  const { cid = '' } = useParams();
  const c = courseById(cid);
  const st = useStore();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [unlock, setUnlock] = useState(false);
  if (!c) return <><TopBar title="Course" back="/courses" /><Empty icon="?" title="Course not found" text="That course doesn’t exist." /></>;
  const s = subjectById(c.subjectId)!;
  const watched = c.lessons.filter(l => st.watched.includes(l.id)).length;
  return (
    <>
      <TopBar title={c.title} back="/courses" right={<button className="icon-btn" aria-label="Save" onClick={() => toggleBookmark(c.id)}>{st.bookmarks.includes(c.id) ? '♥' : '♡'}</button>} />
      <div className="page">
        <div className="course-hero"><div className="s-icon big">{s.icon}</div><div><h2>{c.title}</h2><p>{c.tagline}</p>
          <div className="chips"><span className="tag">{c.weeks} weeks</span><span className="tag">{c.sessions} live sessions</span><span className="tag">{c.level}</span></div></div></div>

        <h2 className="sec">Free trial lessons <small>{watched}/3 watched</small></h2>
        <div className="list">
          {c.lessons.map((l, i) => (
            <button key={l.id} className="test-row" onClick={() => setLesson(l)}>
              <div className={`row-icon ${st.watched.includes(l.id) ? 'done' : ''}`}>{st.watched.includes(l.id) ? '✓' : i + 1}</div>
              <div className="grow"><b>{l.title}</b><small>{l.minutes} min · {l.summary}</small></div><span className="chev">▶</span>
            </button>
          ))}
        </div>

        <h2 className="sec">Your tutor</h2>
        <div className="card tutor"><div className="avatar">{c.tutor.initials}</div><div><b>{c.tutor.name}</b><small>{c.tutor.title}</small><p>{c.tutor.bio}</p></div></div>

        <h2 className="sec">What you’ll get</h2>
        <ul className="checks">{c.outcomes.map(o => <li key={o}>{o}</li>)}</ul>

        <div className="cta-bar"><div><b>Ready for the full course?</b><small>Talk to a learning consultant about schedule and pricing.</small></div>
          <button className="btn primary" onClick={() => setUnlock(true)}>Unlock this course</button></div>
      </div>
      {lesson && <LessonModal course={c} lesson={lesson} onClose={() => setLesson(null)} onUnlock={() => { setLesson(null); setUnlock(true); }} />}
      {unlock && <UnlockModal course={c} onClose={() => setUnlock(false)} />}
    </>
  );
}

function LessonModal({ course, lesson, onClose, onUnlock }: { course: Course; lesson: Lesson; onClose: () => void; onUnlock: () => void }) {
  const total = lesson.minutes * 60;
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const i = setInterval(() => setT(x => Math.min(total, x + 15)), 1000); // demo speed: 15x
    return () => clearInterval(i);
  }, [playing, total]);
  useEffect(() => { if (t >= total) { setPlaying(false); markWatched(lesson.id); } }, [t, total, lesson.id]);
  const mm = (x: number) => `${Math.floor(x / 60)}:${String(x % 60).padStart(2, '0')}`;
  return (
    <Modal title={lesson.title} onClose={onClose}>
      <div className="player">
        <div className="screen">{t >= total ? '✓ Lesson complete' : playing ? '▶ Playing…' : 'Video placeholder'}<small>Demo player – connect your video host (YouTube/Vimeo/Mux) in Courses.tsx</small></div>
        <div className="bar"><span style={{ width: `${(t / total) * 100}%` }} /></div>
        <div className="player-row"><button className="btn primary small" onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : t >= total ? 'Replay' : 'Play'}</button><small>{mm(t)} / {mm(total)}</small>
          <button className="btn ghost small" onClick={() => { markWatched(lesson.id); }}>Mark as watched</button></div>
      </div>
      <h3>Course contents</h3>
      <table className="contents"><tbody>{lesson.contents.map((x, i) => <tr key={x}><td>{i + 1}</td><td>{x}</td></tr>)}</tbody></table>
      <h3>Your tutor</h3>
      <div className="tutor inline"><div className="avatar">{course.tutor.initials}</div><div><b>{course.tutor.name}</b><small>{course.tutor.title}</small></div></div>
      <div className="modal-actions"><button className="btn ghost" onClick={onClose}>Close</button><button className="btn primary" onClick={onUnlock}>Unlock this course</button></div>
    </Modal>
  );
}

function UnlockModal({ course, onClose }: { course: Course; onClose: () => void }) {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [done, setDone] = useState(false);
  const valid = f.name.trim() && /^\S+@\S+\.\S+$/.test(f.email);
  const send = () => {
    addLead({ ...f, course: course.title, date: Date.now() });
    const body = `Hi, I'd like to unlock "${course.title}".\n\nName: ${f.name}\nEmail: ${f.email}\n\n${f.message}`;
    window.location.href = `mailto:${CONSULTANT_EMAIL}?subject=${encodeURIComponent('Unlock request: ' + course.title)}&body=${encodeURIComponent(body)}`;
    setDone(true);
  };
  return (
    <Modal title="Unlock this course" onClose={onClose}>
      {done ? (
        <><p>✓ Thanks, {f.name.split(' ')[0]}! Your request is saved. If your email app didn’t open, write to <b>{CONSULTANT_EMAIL}</b> and mention “{course.title}”.</p>
          <div className="modal-actions"><button className="btn primary" onClick={onClose}>Done</button></div></>
      ) : (
        <>
          <p>A learning consultant will contact you about schedule, pricing and a placement plan for <b>{course.title}</b>.</p>
          <label>Your name<input value={f.name} onChange={e => setF({ ...f, name: e.target.value })} autoComplete="name" /></label>
          <label>Email<input type="email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} autoComplete="email" /></label>
          <label>Message (optional)<textarea rows={3} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} placeholder="Exam date, target score, time zone…" /></label>
          <div className="modal-actions"><button className="btn ghost" onClick={onClose}>Cancel</button><button className="btn primary" disabled={!valid} onClick={send}>Contact consultant</button></div>
        </>
      )}
    </Modal>
  );
}
