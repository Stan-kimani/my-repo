# Build plan — RemoteKind (phased)

Read alongside AGENTS.md, brief.md, and reference/brand.md. Build ONE phase per session.
Commit at the end of each phase; run `npm run build` before every commit. Stop for human
review at each phase gate — do not run ahead into the next phase.

---

## Phase 1 — Foundation (design system, no pages yet)
**Deliverables**
- Install stack: `npx astro add tailwind mdx netlify` (run in `src/`).
- Tailwind theme wired to the exact tokens in reference/brand.md §8 (brand/deep/neutral).
- Fonts: Fraunces (headings) + Inter (body), loaded in the base Layout.
- `Layout.astro` (base shell), `Header.astro` (logo + nav), `Footer.astro`.
- One temporary demo route proving the system (fonts, colours, a button).

**Acceptance criteria**
- `npm run build` passes; `npm run dev` renders the demo.
- Gold button uses charcoal text (never white); links use charcoal/deep variants (brand.md §4).
- Header shows logo.png + nav (Home / How It Works / About / Contact); footer present.
- No hardcoded hex values in components — all via theme tokens.
**Effort:** ~1 session.

## Phase 2 — Pages from copy
**Deliverables**
- Home, How It Works, About, Contact built from the matching samples/*.md files.
- Reusable section components (hero, steps, CTA band, testimonial).
- Founder photos optimised (resize/compress) and placed; About uses them.
- Every "Book a call" CTA links to `import.meta.env.PUBLIC_CALENDLY_URL`.
- Single CTA per page. Testimonials = a Home section (no separate page).

**Acceptance criteria**
- All four pages match their copy files; responsive at 360 / 768 / 1280px.
- About renders placeholder bio text as-is (clearly still placeholder) + real photos.
- No invented claims; copy pulled verbatim from samples/. `npm run build` + typecheck pass.
**Effort:** ~2–3 sessions.

## Phase 3 — Contact endpoint + Calendly
**Deliverables**
- `src/pages/api/contact.ts` with `export const prerender = false`.
- Postmark send (SDK) using `POSTMARK_SERVER_TOKEN` (POSTMARK_API_TEST in dev): notify + confirm.
- Honeypot field + server-side validation of every field; success/error UI states.
- Calendly inline embed on Contact, from PUBLIC_CALENDLY_URL.

**Acceptance criteria**
- Form submits; with POSTMARK_API_TEST returns success without sending real mail.
- Honeypot blocks bots; invalid input rejected server-side.
- `/api/contact` is the ONLY non-prerendered route. Build passes.
**Effort:** ~1 session.

## Phase 4 — Polish, a11y, performance, SEO
**Deliverables**
- Responsive QA pass; keyboard navigation; alt text on all images.
- Per-page `<title>`/meta, Open Graph tags, favicon derived from logo, 404 page.
- Image optimisation; remove unused code (`/ponytail-audit`).

**Acceptance criteria**
- Lighthouse ≥ 90 in Performance, Accessibility, Best Practices, SEO.
- WCAG AA contrast everywhere (verify gold/charcoal, links, muted text).
- No console errors; semantic HTML; visible focus states.
**Effort:** ~1 session.

## Phase 5 — Deploy (pre-launch swaps + Netlify)
**Deliverables**
- Complete the pre-launch swap checklist in roadmap.md (real About copy, Calendly, Postmark
  token + verified sender, contact emails, logo SVG).
- Deploy to Netlify; set env vars in the dashboard; connect custom domain.

**Acceptance criteria**
- Live site; real Calendly loads; a real form submission delivers both emails.
- Final `grep -r "PLACEHOLDER\|POSTMARK_API_TEST"` returns nothing. CI green on main.
**Effort:** ~1 session + DNS wait.

---

## Cadence & quality (applies every phase)
- One phase per session; commit with a clear message; push to GitHub.
- Before each commit: `npm run build` passes + `/ponytail-review` on the diff.
- Review gate: after each phase, push and have the human (or Claude in chat) check the diff
  against this file's acceptance criteria before starting the next phase.
- Standards: minimal code (AGENTS.md §1), tokens not ad-hoc values, accessibility non-negotiable,
  copy verbatim from samples/, one CTA per page.