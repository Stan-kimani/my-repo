# AGENTS.md — instructions for AI coding agents

You are working on **RemoteKind**, a premium operator-placement website.
Read this file fully before writing code. Claude Code, Cursor, Codex, and most
agents read it automatically. CLAUDE.md just points here — one source of truth.

Ground truth lives in `planning/` and `docs/`. Read `planning/brief.md` before any
feature and `planning/decisions.md` before re-deciding anything.

## 0. Project at a glance
- **What:** sells a vetted remote-operator placement service. Sells time, leverage,
  peace of mind — never a task list. Voice: premium, calm, confident.
- **Stack:** Astro + TypeScript + Tailwind. App in `src/`. Content via content collections.
- **Hosting:** Netlify (`npx astro add netlify`). Node runtime.
- **Pages (v1, exactly four):** Home, How It Works, About, Contact.
- **One CTA:** "Book a call" (Calendly). Newsletter/lead-magnet is deferred — do not build it.
- **Copy is written first** in `samples/` and approved before it becomes a page.

## 1. Prime directive: minimal code (ponytail)
The **ponytail** skill is installed and always on; its rules apply even if it fails to load:
- Before writing anything, ask in order: (1) does this need to exist? (2) does the
  codebase already do it? (3) does the framework, stdlib, or a native browser feature
  do it? (4) can it be a few lines? Stop at the first rung that works.
- No speculative abstractions, no "for later" scaffolding, no dependency when a native
  feature exists (e.g. `<input type="date">` before a date-picker library).
- Never cut: input validation at trust boundaries, security, accessibility, data-loss handling.
- Commands: `/ponytail-review` (diff review), `/ponytail-audit` (repo bloat audit), `/ponytail lite|off`.

## 2. Diagram-first workflow (draw.io)
Diagrams in `docs/diagrams/` are the source of truth for structure.
- Any new page flow, data flow, or architecture change: update/create the `.drawio.svg`
  BEFORE implementing, and describe the change for human approval.
- Convention: `name.drawio.svg` — one file that is BOTH editable draw.io source and a
  GitHub-renderable image. Edit with the "Draw.io Integration" VS Code extension.
- Existing: `sitemap.drawio.svg` (pages + conversion path), `architecture.drawio.svg`
  (static site + the one function + Calendly + Postmark).

## 3. Security & dependency hygiene
- **Never install a new agent skill/plugin without scanning it first** with NVIDIA
  SkillSpector (https://github.com/NVIDIA/SkillSpector): `skillspector scan <dir-or-url> --no-llm`.
  0–20 OK · 21–50 show findings and wait · 51+ do not install. Log every scan in decisions.md.
  SkillSpector is static analysis, not a sandbox — a pass is a filter, not a guarantee.
- Fewest dependencies possible. Before adding one, state what it's for and the native
  alternative. Run `npm audit` after any dependency change.
- **Secrets:** never commit. `POSTMARK_SERVER_TOKEN` and other non-`PUBLIC_` vars are
  server-side only. In Astro, only `PUBLIC_`-prefixed vars reach the browser — the Postmark
  token must never have that prefix. See `.env.example`.
- Treat all form input as untrusted; validate server-side.

## 4. Continuous improvement (/improve)
The **/improve** skill (TerenceBristol/claude-improve) is installed. After significant
sessions the human may run `/improve`; it proposes edits to config one at a time with
approval. Keep this file concise — replace, don't append endlessly.

## 5. Architecture rules (do not violate without a logged decision)
- The site is **static** (`output: 'static'`). Everything prerenders to the CDN.
- **Exactly one** server route: `src/pages/api/contact.ts` with `export const prerender = false`.
  It validates the form and sends via Postmark (notify + confirm). That is the only server code.
- Calendly is **client-side only** (embed or link) — no server involvement.
- No database, no auth, no portal, no payments, no CMS in v1. If a task seems to need one,
  stop and ask — it's almost certainly out of scope (see brief).

## 6. Copy & claims (trust business — accuracy is non-negotiable)
- Page copy is drafted in `samples/` and approved before building. Pull approved copy
  into components; don't invent headlines or body text.
- **Never invent or alter brand claims.** These are locked in decisions.md and must stay
  exactly true: operators = 2–3 yrs experience + 4-stage skills test; 10-day replacement
  guarantee; the Lynet testimonial is the only real one — do not fabricate others.

## 7. Conventions
- Components small, colocated, no premature extraction (extract on the 3rd duplication).
- Tailwind utilities in markup; no custom CSS unless Tailwind can't express it.
- Brand palette + tokens come from `reference/`; don't hardcode ad-hoc colors.
- Accessibility: semantic HTML, alt text, keyboard navigable. Non-negotiable.

## 8. Testing & CI
- Proportional to a content site: `npm run build` must pass, plus typecheck and lint.
  That's the CI gate (`.github/workflows/ci.yml`).
- Real tests only for real logic (the contact endpoint) — not static markup.

## 9. Definition of done
1. Diagram updated if structure changed.
2. Minimal diff; `/ponytail-review` clean or exceptions justified.
3. `npm run build` passes locally.
4. `planning/decisions.md` updated if anything non-obvious was decided.
5. Short summary to the human: what changed, and what was deliberately NOT built.

## Note on src/AGENTS.md
`src/AGENTS.md` holds Astro-specific dev commands only. THIS root file governs the
project. When they conflict, this file wins.    