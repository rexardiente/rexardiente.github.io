# rexardiente.github.io

Personal site for **Rex Ardiente** — software engineer & founder building AI infrastructure.

Live: https://rexardiente.github.io

## Stack

- **Vite + React** (SPA)
- **Tailwind CSS** (design system in `tailwind.config.js`)
- **Framer Motion** (reveals + hero orchestration)
- Type: Clash Display + Satoshi (Fontshare), JetBrains Mono (Google Fonts)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Edit content

All copy lives in [`src/data/content.js`](src/data/content.js) — profile, about,
work, archive, and stack. Items marked `// TODO: confirm` are best-effort and
should be verified before publishing.

## Deploy

GitHub Pages serves this repo from the **`gh-pages` branch** (Settings → Pages →
Source = "Deploy from a branch", `gh-pages` / root).

```bash
npm run deploy   # builds, then pushes dist/ to the gh-pages branch
```

Source code lives on `master`; the built site lives on `gh-pages`.
