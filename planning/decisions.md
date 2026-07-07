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