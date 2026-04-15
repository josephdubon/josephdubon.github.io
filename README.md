# Joseph Dubon Personal Site

Source for [josephdubon.github.io](https://josephdubon.github.io), a personal website, writing archive, and portfolio built to present Joseph Dubon as an AI-augmented technical manager, technology educator, systems operator, and builder.

This project is not just a resume site. It is meant to show how positioning, writing, case studies, and implementation can work together to create a clear public-facing professional signal.

## What This Site Shows

- Clear positioning around AI workflows, operations, education, and systems thinking
- Long-form writing on technology, troubleshooting, and modern technical literacy
- Project case studies spanning internal tooling, operations leadership, consulting, and education
- A custom visual layer built with Astro, React, and lightweight motion
- A static deployment model designed for GitHub Pages

## Audience

This repository is most relevant to:

- hiring managers evaluating technical judgment and communication
- collaborators reviewing how the site is structured and maintained
- clients or teams interested in the mix of software, operations, education, and AI integration work represented here

## Tech Stack

- Astro
- React
- Framer Motion
- Markdown content collections
- GitHub Pages via committed `docs/` output

## Structure

```text
src/
  components/             Shared UI and React motion components
  content/blog/           Blog posts
  content/projects/       Project case studies
  data/site.js            Core site copy and homepage metadata
  layouts/                Shared Astro layouts
  pages/                  Routes
  styles/                 Global styling

public/
  images/                 Static images and SVG assets

docs/
  ...                     Built site committed for deployment
```

## Content Strategy

The site is organized around three main public surfaces:

1. Homepage
Presents the professional framing: AI-augmented operations, technology education, hardware-aware execution, and systems leadership.

2. Projects
Shows selected case studies rather than a generic work history.

3. Journal
Uses writing to demonstrate technical clarity, teaching ability, and point of view.

## Implementation Notes

- Site-wide positioning and homepage copy live in `src/data/site.js`
- Blog posts are authored in `src/content/blog/`
- Project case studies are authored in `src/content/projects/`
- Content schemas are defined in `src/content.config.js`
- Motion is handled in the React components, not through CSS animation rules
- Astro builds the site into `docs/`, which is committed for GitHub Pages

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Run checks:

```bash
npm run check
```

Build production output:

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## Publishing

This repository publishes from `main` using the generated `docs/` directory.

Typical workflow:

1. Edit source files in `src/` or `public/`
2. Run `npm run build`
3. Commit both source changes and updated `docs/`
4. Push to `main`

## Why The Repo Is Public

The public repo helps make the site legible as a body of work. It shows not only the final interface, but also the structure behind it: content organization, technical choices, iteration history, and the care taken to make the site readable, maintainable, and current.
