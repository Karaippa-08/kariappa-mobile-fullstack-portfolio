# Kariappa M M – Portfolio

Suggested repository name: **kariappa-mobile-fullstack-portfolio**

## Overview
A single-page portfolio for an early-career Android and full-stack developer. Projects come first, followed by internships, about, skills, credentials and contact. Dark theme by default with a light toggle. All content comes from the resume and LinkedIn PDFs; no metrics were invented.

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. System fonts, no API keys, no environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. For production: `npm run build && npm start`.

## Customize
- All text lives in `data/portfolio.js` (profile, projects, experience, skills, credentials).
- Colors for light and dark themes are CSS variables at the top of `app/globals.css`.
- Sections are components in `components/`; reorder them in `app/page.js`.

## Content notes to verify
- LinkedIn URL differs slightly between the two PDFs (`kariappa-m-m-…` vs `kariappa-mm-…`). The LinkedIn PDF version is used.
- GitHub handle is spelled `Karaippa-08` in the resume. Confirm it.
- Internship dates differ: resume says Apr–Jun 2026 (Technothrive) and Aug–Sep 2025 (Mudranalayam); LinkedIn says Mar–May 2026 and Aug–Nov 2025. Resume dates are used.
- Add live links or screenshots per project by extending the objects in `data/portfolio.js`.
