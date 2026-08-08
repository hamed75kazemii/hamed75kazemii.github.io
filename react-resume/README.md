# Hamed Kazemi — Resume (React)

React rebuild of the original Flutter portfolio site, pixel-matched to the same design:
dark/light theme, English/Persian (RTL) toggle, typing animation, project video modals.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The static output goes to `dist/`. To deploy on GitHub Pages (hamed75kazemii.github.io),
copy the contents of `dist/` to the root of the Pages repository.

## Structure

- `src/data/content.js` — all text content (EN/FA), projects, skills, links. Edit this file to update the resume.
- `src/components/` — Navbar, Hero, About, Skills, Projects, Contact, ScrollTop.
- `src/styles.css` — all styling; theme tokens at the top (`:root` = dark, `:root[data-theme="light"]` = light).
- `public/images/` — project logos.
