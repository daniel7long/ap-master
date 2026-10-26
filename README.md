# AP Master

**An English-language web app that helps AP® exam students practice, learn and review their mistakes.**

Live demo: **<add your Render URL here>**

AP Master adapts the structure of an existing Chinese mobile learning app into an English product for students preparing for AP exams worldwide. I used the original screens and Figma specs as a reference for the architecture, then redesigned the flows, copy and details for an international audience.

> This is a portfolio project. See [Scope and limitations](#scope-and-limitations) for what is real and what is placeholder.

## What it does

The app has three main flows.

**1. Practice**
- 27 AP subjects across English, Math & CS, Sciences, World Languages, History & Social Science and Arts. Related subjects such as Calculus AB/BC and Microeconomics/Macroeconomics are grouped, and each has its own tests.
- 20 practice tests per subject, listed as "Practice Test 1–20" rather than by unit.
- A timed quiz with a question navigator, flag-for-review, keyboard shortcuts (1–4, ← →), and auto-save so a student can leave and resume.
- A test report with score, time, performance by topic, and a review of every question with explanations. The report can be downloaded as a PDF.

**2. Courses**
- A tutoring course for every subject, with 3 free trial lessons (10–15 min each).
- Each lesson shows its course contents table and the tutor's introduction.
- "Unlock this course" opens a contact form to reach a consultant.

**3. My Hub (profile and dashboard)**
- Practice records grouped by subject.
- An Errors Bank: every missed question is saved, grouped by subject, and can be reviewed with its explanation.
- Custom practice sets built from past mistakes, and a retry mode where answering a question correctly clears it from the bank.
- Data export (JSON backup) and reset.

## Design decisions

- **Feedback after, not during.** Tests run like the real exam. Explanations appear in the report, so students don't get the answer by clicking.
- **Mistakes are the core loop.** A wrong answer is saved automatically and turns into later practice, so the student doesn't have to build a review list by hand.
- **Resume anywhere.** Progress is saved on every answer, since students study in short sessions.
- **Responsive.** A bottom tab bar on phones and a sidebar on desktop, with a focused full-screen layout during quizzes.
- **Accessible basics.** Real buttons and labels, radio semantics on answer options, visible focus states, dialogs that close with Esc.
- **Visual language.** Teal gradient and soft cards carried over from the original Figma tokens, with an English-first type setup.

## Tech stack

| Area | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Routing | React Router (hash routing, so it works on any static host) |
| State | A small custom store on `useSyncExternalStore`, persisted to `localStorage` |
| Styling | Plain CSS with design tokens, no UI library |
| Hosting | Render (static site) |

There is no backend. The app is local-first, and a student's data stays in their own browser.

## Run it locally

```bash
npm install
npm run dev          # start the dev server
npm run build        # type-check and build to dist/
npm run check:content  # verify the question bank (27 subjects × 20 tests)
```

## Project structure

```
src/
  data/       subjects, question pools, bank builder, courses
  pages/      Practice, Quiz, Report, Courses, Profile
  store.ts    persisted app state
  ui.tsx      shared components
  styles.css  tokens and layout
scripts/
  check.ts    content integrity check
```

Question pools are plain TypeScript arrays. Each question has a topic, stem, four options, a correct answer and an explanation. Option order is shuffled deterministically, so a given question always looks the same.

## Scope and limitations

I want to be clear about what this is:

- **Question content is a seed set.** There are 8 original questions per subject (12 for Calculus BC), 220 in total. The 20 tests per subject are built from those pools, so tests overlap. The data layer is designed so a full bank can be dropped in or generated later.
- **"Similar questions" is topic-based.** Custom practice picks other questions on the same topic that the student hasn't missed. It does not generate new variants. A production version would need an authoring pipeline or an LLM to do that.
- **Course video, tutors and the consultant contact are placeholders.** The trial lesson player is a demo, the tutors are fictional, and the contact form saves requests locally and opens a `mailto:` link.
- **No accounts or sync.** Clearing browser data clears progress, which is why the Hub offers an export.

## Disclaimer

AP® and Advanced Placement® are registered trademarks of the College Board, which is not affiliated with and does not endorse this project. All practice questions are original and are not actual exam questions.

## About

Designed and built by **Daniel Long**, M.S. Human-Computer Interaction and M.A. Applied Linguistics, Carnegie Mellon University.
