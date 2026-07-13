# Roadmap

Ordered. Agents work top-down. Reflects current reality: 4-page site, Astro + Netlify,
Calendly + Postmark, single-CTA launch, warm brand palette (gold/lavender/sage/charcoal).

## Content — nearly done
- [x] brief.md
- [x] Sitemap diagram
- [x] architecture.md (Calendly + Postmark + Netlify)
- [x] Homepage copy — samples/homepage.md (FINAL, claims locked)
- [x] How It Works copy — samples/how-it-works.md (draft; 2 optional [YOU PROVIDE] slots)
- [x] Brand assets placed — reference/brand/ (logo, colours, 5 founder photos)
- [x] brand.md — full brand system (palette, accessibility rules, typography, principles)
- [x] inspiration.md — competitors + design direction
- [x] About copy — samples/about.md (PLACEHOLDER structure; real bio swapped before launch)
- [x] Contact copy — samples/contact.md (PLACEHOLDER Calendly/email; real values before launch)

## Decisions still open (cheap, but needed before build)
- [x] Typography: A — Fraunces (headings) + Inter (body)
- [x] CTA colour: gold button (#D9A441) + charcoal text (#2A2A2A)
- [x] How It Works process (Discovery/Sourcing/Vetting/Placement) + retainer provided
- [x] Reconciled all copy to the placement model; guarantee dropped; claims confirmed
- [ ] Logo: export SVG for retina/hero (PNG is 500×500)

## Build setup (in VS Code / Claude Code)
- [ ] Install stack: `npx astro add tailwind mdx netlify`
- [ ] Base Layout + design tokens from reference/brand.md (warm palette + accessibility rules)
- [ ] Fonts (per typography choice) loaded in Layout
- [ ] Build Home from samples/homepage.md
- [ ] Build How It Works from samples/how-it-works.md
- [ ] Build About + Contact once their copy exists

## Integrations
- [ ] Calendly embed on Contact + all "Book a call" CTAs
- [ ] Contact form -> /api/contact (prerender=false) -> Postmark
- [ ] Verify Postmark sender domain/signature (or emails bounce)
- [ ] Env vars locally (.env) + Netlify dashboard: POSTMARK_SERVER_TOKEN, CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL, PUBLIC_CALENDLY_URL
- [ ] Deploy to Netlify + connect custom domain

## Pre-launch swap checklist (placeholders that MUST become real before going live)
- [ ] About: replace all [PLACEHOLDER] bio/story with real founder facts + names
- [x] Calendly: real link set (https://calendly.com/remotekind/discovery-call)
- [x] Postmark token obtained (in .env + Netlify, NOT committed) — [ ] still verify sender info@remotekind.co in Postmark
- [x] Contact emails: info@remotekind.co set — [ ] confirm it's Postmark-verified
- [ ] Logo: swap 500px PNG for SVG if available
- [ ] Final grep: no "[PLACEHOLDER]" or "POSTMARK_API_TEST" strings remain

## Later — post-v1 (deferred on purpose)
- [ ] Newsletter ESP + lead magnet PDF ("10 Tasks to Delegate Today")
- [ ] Expand testimonials as more real ones arrive
- [ ] Blog — only if it can be maintained

## Done
- 2026-07-06  Planning locked: brief, sitemap, architecture, decisions
- 2026-07-06  Homepage + How It Works copy drafted
- 2026-07-07  Brand kit integrated: assets + full brand.md (warm palette, a11y rules)