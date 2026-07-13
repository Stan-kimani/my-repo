## 2026-07-09 — Placeholder production domain for OG/canonical URLs
Open Graph and canonical `<link>` tags need an absolute site URL, set via Astro's
`site` config. No domain has been locked yet, so `astro.config.mjs` uses
`https://remotekind.co` (matches the working inbox domain, info@remotekind.co) as a
PLACEHOLDER. Confirm the real production domain and update `site` before launch —
add to the pre-launch swap checklist alongside PUBLIC_CALENDLY_URL / CONTACT_TO_EMAIL.

## 2026-07-06 — Integrations: Calendly + Postmark
Booking (primary CTA) = Calendly, client-side embed/link, no server.
Contact form email = Postmark (transactional), via one on-demand Astro endpoint
(`/api/contact`, prerender=false). Site stays static everywhere else.
Hosting adapter recommended = Vercel/Netlify (Node runtime) so the postmark npm SDK
works; Cloudflare possible via fetch to Postmark REST.

## 2026-07-06 — Newsletter deferred
"Join the list" secondary CTA has NO provider in v1. Postmark is transactional-only
and must not send marketing email. Defer newsletter to post-v1 with a dedicated ESP
(Kit / MailerLite / Beehiiv) once a lead magnet exists. Primary conversion is the call.

## 2026-07-06 — Single-CTA launch

v1 ships with ONE call to action: Book a call. Newsletter "Join the list" + lead magnet
(10 Tasks to Delegate Today PDF) deferred to post-launch — needs an ESP (Postmark is
transactional-only) and the PDF built. Cleaner conversion; add in week two.

## 2026-07-06 — Homepage claims locked (must stay true)


Operator standard: 2–3 yrs executive support experience + 4-stage skills test.
Guarantee: 10-day replacement re-match, no extra cost. (Bench must honor this.)
Testimonial: Lynet (Founder) — real, consenting client. Strengthen with company/photo.

## 2026-07-06 — Hosting locked: Netlify (not Vercel)
Supersedes the "Vercel/Netlify" note above. Vercel's free Hobby plan is
non-commercial-use only; RemoteKind is a commercial site, so Vercel would require
Pro ($20/mo). Netlify's free Starter tier allows commercial use, runs a Node runtime
(so the postmark npm SDK works directly), and includes ~125K function
invocations / 100GB bandwidth — ample for 4 static pages + one contact endpoint.
Adapter: `npx astro add netlify`. Cloudflare Pages was the alternative (also
free + commercial-OK) but its Workers runtime means calling Postmark via fetch
instead of the SDK.

## 2026-07-07 — Service model = placement; guarantee dropped
Confirmed model: source → vet → shortlist → CLIENT selects → placement/onboarding. Supersedes
any "ready bench / we match / you delegate" framing. Retainer = the placement service (candidate
sourcing, vetting, shortlist presentation, interview support, placement coordination).
Claims: "every operator has 2–3 yrs experience + passes a 4-stage skills test" CONFIRMED TRUE —
retained and stated definitively on Home + How It Works.
10-day replacement guarantee DROPPED for v1 (supersedes the 2026-07-06 guarantee decision).
Typography locked: Fraunces (headings) + Inter (body). CTA: gold #D9A441 button + charcoal #2A2A2A text.

## 2026-07-08 — Solo founder-led (Mary)
RemoteKind is led by Mary as a solo founder — NOT a team. About page = first-person ("I"),
single founder story + one/two photos of Mary; the "Meet the team" grid is removed. Home /
How It Works / Contact keep "we" (standard business voice, implies no team). All photos in
reference/brand/ are of Mary. Founder-led intimacy is a positioning strength for a boutique
premium service, not a limitation.

## 2026-07-08 — Production integration values
- Calendly (public): https://calendly.com/remotekind/discovery-call — confirmed, wired via PUBLIC_CALENDLY_URL.
- Contact email (public): info@remotekind.co — used for CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.
- Domain: remotekind.co — confirmed; astro.config `site` already set to https://remotekind.co.
- Postmark server token: OBTAINED. Stored ONLY in local .env (gitignored) + Netlify env vars.
  NOT committed anywhere (repo is public). The token value is intentionally absent from all
  tracked files. Recommend rotating it in Postmark since it was shared in plaintext.
- ACTION before real sends: verify info@remotekind.co (or the remotekind.co domain via DKIM) as a
  sender signature in Postmark, or transactional emails will bounce.

## 2026-07-13 — Category word: matchmaker (supersedes placement framing)
RemoteKind's category word is now **matchmaker**, consistent site-wide (Home, How It Works,
About). Mary sources, vets, and personally matches each operator to a founder — there is no
self-select shortlist for the client to choose from. Supersedes the 2026-07-07 "placement"
framing (source → vet → shortlist → client selects). Step 4 renamed "The match" everywhere
the Steps component appears; brand.md's "operator-placement service" line updated to
"founder-led matchmaker" to match.