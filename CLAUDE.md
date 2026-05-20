# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A Docusaurus v3 static site that publishes the **CAMMRA AI** user manual and integration guide to GitHub Pages at `https://ffgroup-usa.github.io/manuals/`. The site is docs-only (no blog), and the docs root (`/`) maps directly to `docs/intro.md`.

## Commands

```bash
npm ci           # install dependencies (use npm, not yarn)
npm run start    # local dev server with hot reload
npm run build    # production build → build/
npm run serve    # serve the production build locally
npm run clear    # clear Docusaurus cache
```

CI runs `npm ci && npm run build` on every push to `main` and deploys to GitHub Pages automatically.

## Doc structure and sidebar wiring

All content lives in `docs/`. Each file needs a frontmatter `id` that matches the entry in `sidebars.js`. The convention is `category-filename` (e.g., a file at `docs/camera-installation/overview.md` uses `id: camera-installation-overview`).

The sidebar is defined manually in `sidebars.js` — Docusaurus autogeneration is **not** used. When adding a new page, you must:
1. Add the file under `docs/` with the correct `id`, `title`, and `sidebar_position` frontmatter.
2. Add the `id` string to the appropriate category in `sidebars.js`.

`onBrokenLinks` is set to `'throw'`, so broken internal links will fail the build.

## Images

Images are stored under `static/img/` and referenced in markdown as `/img/<path>`. The `static/` folder is copied verbatim into the build output, so the path in markdown mirrors the folder structure under `static/`.
