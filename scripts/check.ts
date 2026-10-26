import { SUBJECTS } from '../src/data/subjects';
import { BY_SUBJECT, TESTS_BY_SUBJECT, QUESTIONS } from '../src/data/bank';
import { COURSES } from '../src/data/courses';
let bad = 0;
const fail = (m: string) => { console.error('✗', m); bad++; };
for (const s of SUBJECTS) {
  const qs = BY_SUBJECT[s.id] ?? [];
  if (qs.length < 8) fail(`${s.id}: only ${qs.length} questions`);
  const sets = TESTS_BY_SUBJECT[s.id] ?? [];
  if (sets.length !== 20) fail(`${s.id}: ${sets.length} sets`);
  for (const q of qs) {
    if (new Set(q.options).size !== 4) fail(`${q.id}: duplicate options`);
    if (q.answer < 0 || q.answer > 3) fail(`${q.id}: bad answer`);
    if (!q.explanation) fail(`${q.id}: no explanation`);
  }
  for (const t of sets) for (const id of t.qids) if (!QUESTIONS[id]) fail(`${t.id}: missing ${id}`);
  const c = COURSES.find(c => c.subjectId === s.id);
  if (!c || c.lessons.length !== 3) fail(`${s.id}: course/lessons`);
}
console.log(bad ? `${bad} problems` : `OK: ${SUBJECTS.length} subjects, ${Object.keys(QUESTIONS).length} questions`);
process.exit(bad ? 1 : 0);
