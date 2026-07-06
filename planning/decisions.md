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