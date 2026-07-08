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
- [ ] About copy — samples/about.md  (BLOCKED: needs founder bios + who's in the photos)
- [ ] Contact copy — samples/contact.md  (BLOCKED: needs Calendly link + inbox email)

## Decisions still open (cheap, but needed before build)
- [ ] Typography: confirm A (Fraunces + Inter) or B (all Inter)
- [ ] CTA colour: confirm gold button + charcoal text (recommended) vs charcoal button
- [ ] How It Works: name the 4 vetting stages + retainer inclusions, or keep high-level
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

## Later — post-v1 (deferred on purpose)
- [ ] Newsletter ESP + lead magnet PDF ("10 Tasks to Delegate Today")
- [ ] Expand testimonials as more real ones arrive
- [ ] Blog — only if it can be maintained

## Done
- 2026-07-06  Planning locked: brief, sitemap, architecture, decisions
- 2026-07-06  Homepage + How It Works copy drafted
- 2026-07-07  Brand kit integrated: assets + full brand.md (warm palette, a11y rules)