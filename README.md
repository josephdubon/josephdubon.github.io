# Joseph Dubon Personal Site

This repository is now set up as an Astro-powered personal blog and portfolio that builds to the committed `docs/` directory for GitHub Pages.

## Local Development

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:4321`.

## Content Structure

- Portfolio and homepage copy lives in `src/data/site.js`
- Blog posts live in `src/content/blog/*.md`
- Shared layout and styling live in `src/layouts`, `src/components`, and `src/styles`

## Main Pages

- `src/pages/index.astro`: homepage and portfolio sections
- `src/pages/blog/index.astro`: blog archive
- `src/pages/blog/[slug].astro`: blog post template

## Build Check

Run a production build with:

```bash
npm run build
```

Astro outputs the static site to `docs/`, which keeps the repo ready for GitHub Pages publishing.
