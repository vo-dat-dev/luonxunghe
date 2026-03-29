# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Run production server
npm run lint      # ESLint
```

## Architecture

Single-page restaurant landing site (Lươn Xứ Nghệ) built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4. No backend, no database, no state management.

- `app/page.tsx` — entire landing page (hero, menu, contact, footer). Menu data is hardcoded inline.
- `app/layout.tsx` — root layout with metadata and Geist font.
- `app/globals.css` — Tailwind base import plus CSS custom properties and `scroll-behavior: smooth`.
- Navigation uses anchor links (`#menu`, `#contact`, etc.) — no client-side routing.

### Styling

Tailwind CSS v4 via PostCSS. Color palette is amber-based (`amber-50` through `amber-950`). Responsive breakpoints: `sm:` and `lg:`. Path alias `@/*` maps to the project root.
