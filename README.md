# RemoteKind

**Founder-led matchmaking that connects overwhelmed entrepreneurs with vetted remote operators.**

RemoteKind is a premium, solo-founder-led service that sources, vets, and personally matches
operators to founders — so business owners can hand off the day-to-day and get back to the work
only they can do. This repository is the production marketing site.

🔗 **Live:** [remotekind.co](https://remotekind.co) · Booking via Calendly · Contact form via Postmark

<!-- Add a hero screenshot: capture the Home page and save as docs/screenshot-home.png, then: -->
<!-- ![RemoteKind home page](docs/screenshot-home.png) -->

---

## Overview

A four-page conversion-focused website for a boutique matchmaking service. Every page funnels to a
single call-to-action — *Book a call* — with the founder's story and a transparent vetting standard
carrying the trust the service depends on.

- **Audience:** overwhelmed 6–7-figure founders who need leverage, not more résumés.
- **Positioning:** founder-led matchmaking (not a job board, not a faceless agency).
- **Goal:** turn visitors into discovery calls.

## Features

- Four pages — Home, How It Works, About, Contact — plus a styled 404.
- Serverless **contact form** with spam protection (honeypot + server-side validation), sending a
  notification and an auto-confirmation via Postmark.
- **Calendly** booking embedded as the single primary CTA site-wide.
- Custom **design system** — brand tokens (warm gold / lavender / sage / charcoal), Fraunces + Inter
  typography — with **WCAG AA** contrast verified across every color pair.
- Optimized imagery (`astro:assets`), SEO metadata + Open Graph, and a single reduced-motion-aware
  scroll-reveal animation.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 7 + TypeScript |
| Styling | Tailwind CSS 4 (theme tokens, no ad-hoc hex) |
| Content | MDX / Astro components |
| Email | Postmark (transactional) via a serverless function |
| Booking | Calendly embed |
| Hosting | Netlify (`@astrojs/netlify` adapter) |

## Architecture

Static-first: the entire site is prerendered to the CDN, **except one serverless function** —
`src/pages/api/contact.ts` (`export const prerender = false`) — which validates the contact form and
sends email through Postmark. No database, no auth, no standing backend. Secrets live only in
environment variables, never in the repo.

```
Visitor ──▶ Netlify CDN (static pages)
        └─▶ Calendly (client-side booking)
Contact form ──▶ /api/contact (serverless) ──▶ Postmark (notify + confirm)
```

## Project structure

```
├── src/                  # the Astro application
│   └── src/
│       ├── pages/        # routes + api/contact.ts (the one function)
│       ├── components/   # Hero, Header, Footer, Steps, CtaBand
│       ├── layouts/      # base Layout
│       └── styles/       # global.css — brand design tokens
├── docs/                 # architecture notes + draw.io diagrams
├── planning/             # brief, roadmap, decision log, build plan, deploy runbook
├── reference/            # brand system + assets
└── samples/              # page copy (source of truth for all site text)
```

## Getting started

```bash
cd src
npm install
npm run dev        # http://localhost:4321
```

Create `src/.env` (gitignored) from `.env.example`. For local development, `POSTMARK_API_TEST`
lets the contact form succeed without sending real email.

```
POSTMARK_SERVER_TOKEN=POSTMARK_API_TEST
CONTACT_TO_EMAIL=info@remotekind.co
CONTACT_FROM_EMAIL=info@remotekind.co
PUBLIC_CALENDLY_URL=https://calendly.com/remotekind/discovery-call
```

`npm run build` produces the production build; `npm run preview` serves it.

## Deployment

Auto-deploys to Netlify on push to `main`. Build config lives in `netlify.toml` (base `src`, publish
`dist`). Production environment variables — including the real Postmark token — are set in the Netlify
dashboard, never committed. See `planning/deploy-runbook.md` for the full go-live checklist.

## How this was built

Planning-first, in reviewed phases: brief → brand system → copy → foundation → pages → contact
endpoint → accessibility/SEO polish → deploy. Architecture and copy decisions are logged in
`planning/decisions.md` so the reasoning is traceable. Built with an AI-assisted workflow
(Claude Code for implementation, Claude Design for visual exploration) under explicit, human-reviewed
acceptance criteria at each phase gate.

---

© RemoteKind. Code is for portfolio/reference; brand, copy, and assets are proprietary.