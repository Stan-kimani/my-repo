# Architecture — RemoteKind

Static-first Astro site with exactly one server function (the contact form).
The diagram is the source of truth for page structure; this file records how it's built.

![Sitemap](./diagrams/sitemap.drawio.svg)

## Overview

- **Framework:** Astro + TypeScript + Tailwind. Content in markdown/MDX via content collections.
- **Rendering:** `output: 'static'` (Astro's default). The entire site is prerendered
  to static HTML and served from a CDN — *except* the one contact endpoint.
- **The one exception:** `src/pages/api/contact.ts` sets `export const prerender = false`
  so it runs on-demand at request time. This is required because it sends email via
  Postmark, which needs a secret token that must never reach the browser.
- **No database, no auth, no other server code in v1.**

## Rendering model (why one function, not a backend)

Astro 5 merged the old `hybrid` mode into `static`: the site stays static by default,
and you opt individual routes into server rendering with `export const prerender = false`.
So the build output is 99% static CDN assets plus a single serverless function for the form.
This keeps performance (static pages) and security (token stays server-side) without a
standing backend.

Requires a hosting **adapter**. Recommendation: **Vercel** (`npx astro add vercel`) or
Netlify — both give a Node serverless runtime, so the official `postmark` npm SDK works
directly. Cloudflare Pages is cheaper but its Workers runtime isn't Node; there you'd call
Postmark's REST API with `fetch` instead of the SDK.

## Integrations

| Concern | Tool | How it connects | Server needed? |
|---|---|---|---|
| Book a call (primary CTA) | **Calendly** | Inline embed widget or a plain link, client-side only | No |
| Contact form email (notify + confirm) | **Postmark** | Form POSTs to `/api/contact`; the function calls Postmark's transactional API | Yes — one endpoint |
| Join the list (secondary CTA) | **TBD — deferred** | Needs a marketing ESP (Kit / MailerLite / Beehiiv). NOT Postmark. | Deferred to post-v1 |

Postmark is transactional-only. Do not route the newsletter through it — separate ESP later.

## Data flow: the contact form

1. Visitor submits the form on `/contact` (name, email, message + a hidden honeypot field).
2. Browser POSTs to `/api/contact` (the one on-demand route).
3. The function:
   - rejects the request if the honeypot field is filled (bot) or required fields are invalid;
   - calls Postmark twice — a **notification** email to the RemoteKind inbox, and a
     **confirmation** email to the visitor;
   - returns success/error JSON; the page shows a thank-you state.
4. Calendly is independent — the "Book a call" button opens the Calendly embed/link directly,
   no server involved.

## Security & anti-abuse (never cut, per AGENTS.md)

- **Secrets:** `POSTMARK_SERVER_TOKEN` lives in `.env` (gitignored) and in the host's env-var
  settings. Never in client code, never committed. Document it in `.env.example`.
- **Sender verification:** Postmark requires a verified Sender Signature or domain (DKIM/Return-Path)
  before it will send. Set this up before the form goes live, or emails bounce.
- **Spam protection:** a public email-sending endpoint is a spam vector. Minimum defense:
  a honeypot field + server-side validation of every field. Add basic rate limiting if abuse appears.
- **Input:** treat all form input as untrusted; validate and sanitize server-side before sending.

## Environment variables

```
POSTMARK_SERVER_TOKEN=      # Postmark transactional stream server token (server-side only)
CONTACT_TO_EMAIL=           # where form notifications are sent (RemoteKind inbox)
CONTACT_FROM_EMAIL=         # verified Postmark sender address
# PUBLIC_CALENDLY_URL=      # Calendly link; PUBLIC_ prefix = safe to expose client-side
```

Only `PUBLIC_`-prefixed vars are exposed to the browser in Astro. The Postmark token has no
prefix on purpose — it stays server-only.

## Open items to confirm before the Contact build
- Hosting choice (Vercel / Netlify / Cloudflare) — determines the adapter.
- Postmark sender domain/signature verified.
- The RemoteKind Calendly event link.
- (Deferred) newsletter ESP + the lead magnet itself.

## Key decisions
See planning/decisions.md — not duplicated here.