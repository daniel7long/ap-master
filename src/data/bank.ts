import type { Q, Raw, TestDef } from '../types';
import { SUBJECTS } from './subjects';
import { POOLS } from './pools';
import { SET_SIZE, SETS_PER_SUBJECT } from '../config';

function hash(s: string) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed: number) { let a = seed; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export function shuffle<T>(arr: T[], seed: string): T[] {
  const r = rng(hash(seed)); const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export const QUESTIONS: Record<string, Q> = {};
export const BY_SUBJECT: Record<string, Q[]> = {};
export const TESTS: Record<string, TestDef> = {};
export const TESTS_BY_SUBJECT: Record<string, TestDef[]> = {};

function build(sid: string, raws: Raw[]) {
  const list: Q[] = raws.map((r, i) => {
    const id = `${sid}-q${i + 1}`;
    const opts = shuffle([r[2], r[3], r[4], r[5]], id);
    return { id, subjectId: sid, topic: r[0], stem: r[1], options: opts, answer: opts.indexOf(r[2]), explanation: r[6] };
  });
  list.forEach(q => (QUESTIONS[q.id] = q));
  BY_SUBJECT[sid] = list;
  const n = Math.min(SET_SIZE, list.length);
  const sets: TestDef[] = [];
  for (let k = 1; k <= SETS_PER_SUBJECT; k++) {
    const ids = shuffle(list.map(q => q.id), `${sid}-set-${k}`).slice(0, n);
    const t: TestDef = { id: `${sid}-set-${k}`, subjectId: sid, title: `Practice Test ${k}`, qids: ids, kind: 'set' };
    TESTS[t.id] = t; sets.push(t);
  }
  TESTS_BY_SUBJECT[sid] = sets;
}
for (const s of SUBJECTS) build(s.id, POOLS[s.id] ?? []);

/** Same-topic questions the student has not missed — used for "similar" custom practice. */
export function similarFor(qids: string[], exclude: Set<string>, size = SET_SIZE): string[] {
  const out: string[] = [];
  const seen = new Set<string>(exclude);
  for (const id of qids) {
    const q = QUESTIONS[id]; if (!q) continue;
    const c = BY_SUBJECT[q.subjectId].find(x => x.topic === q.topic && !seen.has(x.id));
    if (c) { out.push(c.id); seen.add(c.id); }
  }
  for (const id of qids) { // top up from the same subject
    if (out.length >= size) break;
    const q = QUESTIONS[id]; if (!q) continue;
    const c = BY_SUBJECT[q.subjectId].find(x => !seen.has(x.id));
    if (c) { out.push(c.id); seen.add(c.id); }
  }
  return out.slice(0, size);
}

/** Custom / retry tests carry their question ids in the id itself, so they survive a page reload. */
export function dynTestId(kind: 'custom' | 'retry', sid: string, qids: string[]) { return `${kind}~${sid}~${qids.join('.')}`; }
export function resolveTest(id: string): TestDef | undefined {
  if (TESTS[id]) return TESTS[id];
  const [kind, sid, ids] = id.split('~');
  if ((kind !== 'custom' && kind !== 'retry') || !sid || !ids) return undefined;
  const qids = ids.split('.').filter(q => QUESTIONS[q]);
  if (!qids.length) return undefined;
  const subj = SUBJECTS.find(s => s.id === sid);
  return { id, subjectId: sid, kind, qids, title: kind === 'custom' ? `Custom Practice – ${subj?.name.replace(/^AP /, '') ?? ''}` : `Mistake Retry – ${subj?.name.replace(/^AP /, '') ?? ''}` };
}
