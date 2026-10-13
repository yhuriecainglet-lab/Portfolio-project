# Portfolio — Website

A developer portfolio website built with **plain HTML, CSS and JavaScript**.
No build step, no frameworks, no dependencies, no server.

This is separate from the GitHub profile README. The README is a document you
read on GitHub; this is a website you open in a browser.

---

## Running it

**Option 1 — just open it**

Double-click `index.html`. That is all it needs.

**Option 2 — in VS Code**

1. Open this `portfolio-site` folder in VS Code
2. Install the *Live Server* extension
3. Right-click `index.html` → **Open with Live Server**

Live Server is nicer to work in because the page reloads when you save a
change, and it serves the folder over `localhost`, which the clipboard
copy feature prefers.

> **Note on copying contact details.** The clipboard API needs a secure
> context. If you open `index.html` directly from disk and copying fails,
> the site falls back to an older copy method, and both GitHub and email are
> still shown as plain text on screen either way.

---

## Structure

```
portfolio-site/
├── index.html          Markup: header, five sections, footer, project overlay
├── css/styles.css      Dark theme, rounded cards, responsive layout
├── js/main.js          Project data, card rendering, overlay, navigation
└── assets/             Screenshots and profile picture
```

The six projects are defined as data at the top of `js/main.js`. Editing a
description there updates both the card grid and the detail view, because the
detail overlay reads from the same object.

---

## Screens

| Section | Contents |
|:--|:--|
| **Home** | Portrait, headline, and the three questions a visitor arrives with |
| **About** | Background, education, and the learn → build → break → fix loop |
| **Projects** | Six clickable cards, each showing its own limitations |
| **Stack** | Languages used in projects, tools, and languages still being learned |
| **Contact** | GitHub handle and email — click either row to copy it |

Clicking a project opens a full detail view with its screenshot, description,
skills, declared limitations, team credit, and a link to the source.

---

## Notes on the content

- Project descriptions were written from the **actual source code**, not from
  project names. Every project states its known limitations, and those are real —
  for example, the data in the C# project is in-memory only, and the login
  button in SCP is not wired to a credential check.
- The four Apache NetBeans projects are **Java Swing, not C#**. NetBeans does
  not build C# Windows Forms; only *Enrollment System* is C#.
- Enrollment System is shared as a **Google Drive folder**, not a git
  repository. The other four coded projects are GitHub repositories.
- *Notebook* is a Figma prototype, so it has no code repository.

---

## Accessibility

- Navigation, cards and contact rows are real buttons, so they are
  keyboard-focusable
- Project cards are `role="button"` and open with Enter or Space as
  well as with a click
- The overlay closes with `Escape` or by clicking outside it
- Images have `alt` text, and screenshots load lazily
- The overlay is a `role="dialog"` with `aria-modal`
- `prefers-reduced-motion` disables smooth scrolling and animations
