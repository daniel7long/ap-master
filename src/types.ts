export type Subject = { id: string; name: string; family: string; icon: string; blurb: string };
export type Q = { id: string; subjectId: string; topic: string; stem: string; options: string[]; answer: number; explanation: string };
export type TestKind = 'set' | 'custom' | 'retry';
export type TestDef = { id: string; subjectId: string; title: string; qids: string[]; kind: TestKind };
export type Attempt = {
  id: string; testId: string; title: string; subjectId: string; kind: TestKind; date: number;
  durationSec: number; qids: string[]; answers: (number | null)[]; correct: number;
};
export type ErrorEntry = { qid: string; subjectId: string; count: number; last: number };
export type Progress = { idx: number; answers: (number | null)[]; flags: number[]; elapsed: number };
export type Lead = { name: string; email: string; message: string; course: string; date: number };
export type Raw = [topic: string, stem: string, correct: string, w1: string, w2: string, w3: string, explanation: string];
