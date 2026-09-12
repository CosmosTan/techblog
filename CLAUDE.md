# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress static blog deployed to GitHub Pages at base path `/techblog/`. Blog content lives entirely in `blog/` as Markdown files.

## Common Commands

```bash
pnpm dev        # Start dev server with hot reload (http://localhost:5173)
pnpm build      # Build for production
pnpm preview    # Preview production build locally
```

## Architecture

- `blog/` — all content (Markdown articles)
  - `blog/.vitepress/config.ts` — VitePress config (nav, head, theme)
  - `blog/index.md` — home page with hero section
  - `blog/public/img/` — static images (banner.png, logo.png)
- Content categories: `agent/`, `ml/`, `dl/`, `python/`, `guide/`
- `guide/` contains `linux/` subcategory for tools

## VitePress Config Notes

- `base: '/techblog/'` — GitHub Pages subdirectory, must be set for correct asset paths
- `public/` folder maps to `/` in deployed site (e.g., `public/favicon.ico` → `/favicon.ico`)
- Nav links in config.ts must match actual directory paths

## Deployment

Built static files are deployed to GitHub Pages. The GitHub repository is `https://github.com/CosmosTan/techblog`.
