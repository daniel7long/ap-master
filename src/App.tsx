import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Practice, { SubjectPage } from './pages/Practice';
import Quiz from './pages/Quiz';
import Report from './pages/Report';
import Courses, { CourseDetail } from './pages/Courses';
import Profile, { About } from './pages/Profile';

const NAV = [
  { to: '/', label: 'Practice', icon: '✎', end: true },
  { to: '/courses', label: 'Courses', icon: '▶', end: false },
  { to: '/me', label: 'My Hub', icon: '☺', end: false },
];

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  const inQuiz = pathname.startsWith('/quiz');
  return (
    <div className={`app ${inQuiz ? 'focus' : ''}`}>
      {!inQuiz && (
        <aside className="side">
          <div className="brand"><span className="logo">AP</span><div><b>AP Master</b><small>Practice. Learn. Score 5.</small></div></div>
          <nav>{NAV.map(n => <NavLink key={n.to} to={n.to} end={n.end} className="side-link"><i>{n.icon}</i>{n.label}</NavLink>)}</nav>
          <NavLink to="/about" className="side-about">About &amp; disclaimer</NavLink>
        </aside>
      )}
      <main className="main">
        <Routes>
          <Route path="/" element={<Practice />} />
          <Route path="/subject/:sid" element={<SubjectPage />} />
          <Route path="/quiz/:tid" element={<Quiz />} />
          <Route path="/report/:aid" element={<Report />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:cid" element={<CourseDetail />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Practice />} />
        </Routes>
      </main>
      {!inQuiz && (
        <nav className="tabbar" aria-label="Main">
          {NAV.map(n => <NavLink key={n.to} to={n.to} end={n.end} className="tab"><i>{n.icon}</i><span>{n.label}</span></NavLink>)}
        </nav>
      )}
    </div>
  );
}
