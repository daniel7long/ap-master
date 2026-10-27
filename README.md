# AP Master — AP Exam Practice

[![Live demo](https://img.shields.io/badge/Live%20demo-ap--master.onrender.com-2BBEC7?style=for-the-badge)](https://ap-master.onrender.com)

AP Master is a mobile-first web app that helps students around the world prepare for **Advanced Placement** exams. It brings structured practice, trial courses and a personal study hub together in one calm, teal-themed experience.

It is an English-language web adaptation of an existing mobile product: the information architecture and visual language were carried over, then re-designed and rebuilt for the web.

<!-- Add 3–4 screenshots here, e.g.:
<p align="center"><img src="docs/screenshots/practice.png" width="22%"> <img src="docs/screenshots/courses.png" width="22%"> <img src="docs/screenshots/hub.png" width="22%"></p>
-->

| | |
| --- | --- |
| **Live demo** | <https://ap-master.onrender.com> |
| **Type** | Mobile-first web app |
| **Audience** | AP students worldwide |
| **Source** | <https://github.com/daniel7long/ap-master> |

---

## Three flows

### 1. Practice
- **20 practice sets for every AP subject**, including each subject's branches.

### 2. Courses
- **Three trial lessons** so students can try a course before committing.
- A clear next step to **contact a consultant** for the full programme.

### 3. Profile hub
- **Records** of past practice.
- **Errors Bank:** a collection of the questions you got wrong, ready to revisit.
- **Custom practice:** build your own practice sessions.

## Design and UX highlights

- **Teal visual identity** (`#2BBEC7`) applied consistently, down to the browser theme colour.
- **Mobile-first and safe-area aware:** the page uses `viewport-fit=cover` so content can extend to the screen edges on notched phones.
- **English UI for a global audience,** adapted from an existing product's screens and Figma styles.
- **Mistakes become a feature.** The Errors Bank turns wrong answers into study material.

## Tech stack

| Layer | Technology |
| --- | --- |
| Front end | Responsive, mobile-first web app |
| Hosting | **Render** Static Site |
| Source control | **Git / GitHub** |
| Design | Figma-derived screens and CSS from the original mobile product |

<!-- TODO(stack): add the framework, language, routing and state libraries (check package.json). -->

## Engineering highlights

- **Static-site deployment.** The app is built and served as static assets from Render, so there is no server to maintain.
- **Git-based workflow.** Code lives on GitHub and is deployed to Render from the repository.
- **Three clearly separated flows** (Practice, Courses and Profile hub) share one visual system.

---

**Designed and built by [Daniel Long](https://daniel7long.com)** · M.S. Human-Computer Interaction, Carnegie Mellon University
