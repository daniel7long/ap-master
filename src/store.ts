import { useSyncExternalStore } from 'react';
import type { Attempt, ErrorEntry, Lead, Progress } from './types';

type State = {
  attempts: Attempt[];
  errors: ErrorEntry[];
  progress: Record<string, Progress>; // keyed by testId (resume support)
  leads: Lead[];
  bookmarks: string[];                // saved course ids
  watched: string[];                  // trial lesson ids
  lastSubject?: string;
};
const KEY = 'ap-master-v1';
const empty: State = { attempts: [], errors: [], progress: {}, leads: [], bookmarks: [], watched: [] };

function load(): State {
  try { const r = localStorage.getItem(KEY); if (r) return { ...empty, ...JSON.parse(r) }; } catch { /* ignore */ }
  return { ...empty };
}
let state: State = load();
const subs = new Set<() => void>();
function set(next: State) {
  state = next;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage unavailable */ }
  subs.forEach(f => f());
}
export function useStore(): State {
  return useSyncExternalStore(f => { subs.add(f); return () => subs.delete(f); }, () => state);
}
export const getState = () => state;

export function saveProgress(testId: string, p: Progress) { set({ ...state, progress: { ...state.progress, [testId]: p } }); }
export function clearProgress(testId: string) { const { [testId]: _, ...rest } = state.progress; set({ ...state, progress: rest }); }

export function recordAttempt(a: Attempt, wrong: { qid: string; subjectId: string }[], right: string[]) {
  const now = a.date;
  let errors = [...state.errors];
  for (const w of wrong) {
    const i = errors.findIndex(e => e.qid === w.qid);
    if (i >= 0) errors[i] = { ...errors[i], count: errors[i].count + 1, last: now };
    else errors.push({ qid: w.qid, subjectId: w.subjectId, count: 1, last: now });
  }
  // a retry that is answered correctly clears the question from the Errors Bank
  if (a.kind === 'retry') errors = errors.filter(e => !right.includes(e.qid));
  const { [a.testId]: _, ...rest } = state.progress;
  set({ ...state, attempts: [a, ...state.attempts], errors, progress: rest, lastSubject: a.subjectId });
}
export function removeError(qid: string) { set({ ...state, errors: state.errors.filter(e => e.qid !== qid) }); }
export function addLead(l: Lead) { set({ ...state, leads: [l, ...state.leads] }); }
export function toggleBookmark(id: string) {
  set({ ...state, bookmarks: state.bookmarks.includes(id) ? state.bookmarks.filter(b => b !== id) : [...state.bookmarks, id] });
}
export function resetAll() { set({ ...empty }); }
export function markWatched(id: string) { if (!state.watched.includes(id)) set({ ...state, watched: [...state.watched, id] }); }
