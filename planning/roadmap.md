# Roadmap

Ordered. Agents work top-down. Reflects current reality: 4-page site, Netlify,
Calendly + Postmark, single-CTA launch.

## Now — content (finish before any building)
- [x] brief.md
- [x] Sitemap diagram
- [x] architecture.md (Calendly + Postmark + Netlify)
- [x] Homepage copy — samples/homepage.md (FINAL, claims locked)
- [ ] How It Works copy — samples/how-it-works.md
- [ ] About copy — samples/about.md  (needs founder bio + photo)
- [ ] Contact copy — samples/contact.md

## Next — build setup (in VS Code / Claude Code)
- [ ] Install stack: `npx astro add tailwind mdx netlify`
- [ ] Base Layout + design tokens (blue / green / neutrals)
- [ ] Build Home from samples/homepage.md
- [ ] Build How It Works, About, Contact from their copy files

## Then — integrations
- [ ] Calendly embed on Contact + all "Book a call" CTAs
- [ ] Contact form -> /api/contact (prerender=false) -> Postmark
- [ ] Verify Postmark sender domain/signature (or emails bounce)
- [ ] Set env vars locally (.env) and in Netlify dashboard
- [ ] Deploy to Netlify + connect custom domain

## Later — post-v1 (deferred on purpose)
- [ ] Newsletter ESP + lead magnet PDF ("10 Tasks to Delegate Today")
- [ ] Expand testimonials as more real ones arrive
- [ ] Blog — only if it can be maintained

## Blocked / needs your input
- Brand assets: logo + founder photo (blocks About page + Home hero visual)
- Calendly event link; Postmark account + verified sender

## Done
- 2026-07-06  Planning locked: brief, sitemap, architecture, decisions
- 2026-07-06  Homepage copy finalized