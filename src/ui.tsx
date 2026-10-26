import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Q } from './types';

export const fmtTime = (sec: number) => { const m = Math.floor(sec / 60), s = Math.round(sec % 60); return `${m}:${String(s).padStart(2, '0')}`; };
export const fmtDate = (t: number) => new Date(t).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
export const pct = (a: number, b: number) => (b ? Math.round((a / b) * 100) : 0);
export const LETTERS = ['A', 'B', 'C', 'D'];

export function TopBar({ title, back, right, sub }: { title: string; back?: string | boolean; right?: ReactNode; sub?: string }) {
  const nav = useNavigate();
  return (
    <header className="topbar">
      {back !== undefined && back !== false && (
        <button className="icon-btn" aria-label="Back" onClick={() => (typeof back === 'string' ? nav(back) : nav(-1))}>‹</button>
      )}
      <div className="topbar-title"><h1>{title}</h1>{sub && <p>{sub}</p>}</div>
      <div className="topbar-right">{right}</div>
    </header>
  );
}

export function Empty({ icon, title, text, children }: { icon: string; title: string; text: string; children?: ReactNode }) {
  return <div className="empty"><div className="empty-icon">{icon}</div><h3>{title}</h3><p>{text}</p>{children}</div>;
}

export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} onClick={e => e.stopPropagation()}>
        <div className="modal-head"><h2>{title}</h2><button className="icon-btn dark" aria-label="Close" onClick={onClose}>×</button></div>
        {children}
      </div>
    </div>
  );
}

export function ScoreRing({ value, size = 120 }: { value: number; size?: number }) {
  const r = (size - 14) / 2, c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${value}% correct`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="10" />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round"
        strokeDasharray={`${(c * value) / 100} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={size / 3.6} fontWeight="800">{value}%</text>
    </svg>
  );
}

/** One reviewed question with the student's answer, the right answer and the explanation. */
export function QuestionReview({ q, chosen, open, onToggle, index }: { q: Q; chosen: number | null; open: boolean; onToggle: () => void; index?: number }) {
  const ok = chosen === q.answer;
  return (
    <div className={`qrev ${ok ? 'ok' : 'bad'}`}>
      <button className="qrev-head" onClick={onToggle} aria-expanded={open}>
        <span className="qrev-badge">{ok ? '✓' : '✗'}</span>
        <span className="qrev-stem">{index !== undefined && <b>{index + 1}. </b>}{q.stem}</span>
        <span className="chev">{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div className="qrev-body">
          <p className="topic-chip">{q.topic}</p>
          <ul className="opts">
            {q.options.map((o, i) => (
              <li key={i} className={i === q.answer ? 'right' : i === chosen ? 'wrong' : ''}>
                <b>{LETTERS[i]}</b> {o}
                {i === q.answer && <em> — correct answer</em>}
                {i === chosen && i !== q.answer && <em> — your answer</em>}
              </li>
            ))}
            {chosen === null && <li className="skipped">You skipped this question.</li>}
          </ul>
          <div className="explain"><b>Explanation</b><p>{q.explanation}</p></div>
        </div>
      )}
    </div>
  );
}
