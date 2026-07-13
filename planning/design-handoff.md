# RemoteKind — Visual Refinement Handoff (About + Home hero)

> ## IMPLEMENTATION NOTES — READ FIRST (copy precedence)
> This handoff is authoritative for **layout, tokens, spacing, motion, image optimization,
> and structure**. It is **not** authoritative for **copy**. Canonical copy lives in `samples/*.md`.
> Where this doc's copy differs from `samples/`, `samples/` wins — unless Mary adopts a change here
> AND `samples/` is updated to match (keep the repo single-source-of-truth).
>
> **Must-fix before/at implementation:**
> 1. **The story is NOT a TODO.** `samples/about.md` already contains Mary's final first-person
>    story ("I didn't plan to build a company…"). Use it verbatim. Do not insert a placeholder.
> 2. **No "shortlist."** The site is matchmaker: "matched to you," not a self-select shortlist.
>    Replace "No one reaches your shortlist…" → "No one is matched to you…", and
>    "I sign off on every shortlist" → "I sign off on every match."
> 3. **Reconcile (adopt here + sync `samples/`, or keep `samples/`):** About hero eyebrow
>    "Hi, I'm Mary…" (was removed), About hero subhead wording, "The bar I hold" card microcopy,
>    Home hero eyebrow "For overwhelmed founders." Whatever ships must also live in `samples/*.md`.
>
> **Unchanged/verified-good in this handoff:** section band order, aspect-ratio 4/5 portrait (no
> cover-in-fixed-box), single gold CTA (charcoal text), token discipline, single scroll-reveal with
> reduced-motion no-op, hero paints instantly, image optimization to <~200KB. Implement those as written.

---

**Goal:** refine the visual feel of two pages against the *existing* tokens and components. This is not a redesign — reuse the current layout primitives, spacing scale, button, and section wrappers. Only the two pages below change.

**Selected directions:** About = **6a**, Home hero = **5a**.

## 0. Ground rules
- **Tokens only.** Use the existing CSS custom properties in `src/styles/global.css`. If a lavender/sage tint used in the mockup is not already a token, add it to `global.css` as a new token rather than inlining it. Tints referenced: lavender band `#F1EAF6`, hairline/accent `#C7B6D3`, quote label `#7A5AA0`; sage circle fill `#E3EEEC`, numeral/icon `#2F5B55`, ring `#9BBAB3`; body `#4A463F`, muted `#8A857B`, gold-ink label `#9A6E1B`.
- **Type:** Fraunces headings (500) + pull-quote (400 italic); Inter body/labels. Use existing font setup.
- **CTA:** gold bg + charcoal text everywhere, single CTA per hero, reuse existing button; never gold-on-gold.
- **Contrast AA:** charcoal/gold ≈5.9:1; charcoal on cream/lavender/white pass; gold-ink on cream for small caps only; no gold text on white body.
- **No stock, no team grid, no captioned tiles, no 2nd photo, no testimonial.** One portrait of Mary, About hero only.
- **Reduced motion:** all motion no-ops under `prefers-reduced-motion: reduce`.

## 1. Home hero — 5a ("Quiet confidence")
Type-only, centered, cream band, no photo.
1. Eyebrow — Inter 12px .14em uppercase 600 gold-ink `#9A6E1B`: "For overwhelmed founders"
2. H1 — Fraunces 500 ~46px (clamp on mobile) lh1.22 charcoal max-width 17ch: "The leverage of a great operator — without the hiring risk."
3. Subhead — Inter 400 ~16.5px lh1.7 `#4A463F` max-width 46ch: "RemoteKind sources and vets the right remote operator for overwhelmed founders — so you can hand off the day-to-day and get back to the work only you can do."
4. CTA (existing gold): "Book a call"
5. Thin lavender rule under CTA: 36px×2px `#C7B6D3`.
Center column, cream bg, ~132/100px desktop padding, ~26px gaps. H1 `clamp(30px,6vw,46px)`; ~72px mobile padding.

## 2. About — 6a ("Classic split")
Band order: cream → white → lavender → white → charcoal.
### (1) Hero — cream
Two cols `0.8fr 1.2fr`, centered; mobile stacks portrait-first.
- Left portrait: rounded frame `radius 6px; overflow hidden; shadow 0 14px 36px rgba(42,42,42,.16)`. Container MUST be aspect-correct: `aspect-ratio:4/5` OR natural height (`width:100%;height:auto`). Do NOT use cover in a short fixed box; no `object-position:top`/arbitrary crop. Whole subject visible.
- Right text: label (Fraunces italic 15px gold-ink) "Hi, I'm Mary — founder of RemoteKind"; H1 (Fraunces 500 ~34px lh1.28) "I'd never hand you someone I wouldn't hire myself."; subhead (Inter 15.5px lh1.75 `#4A463F` max-width 40ch) "I've been the overwhelmed founder and the operator on the other end of the handoff. RemoteKind is built from both — I source and vet every match myself."
### (2) Story — white
Label "The short version"; H2 "Why I started RemoteKind"; body = REAL story from samples/about.md (NOT a TODO).
### (3) Pull-quote — lavender `#F1EAF6`
Gold rule 40×2px; `<blockquote>` Fraunces 400 italic ~40px lh1.32 charcoal max-width 20ch: "'Available' and 'excellent' are not the same word."
### (4) The bar I hold — white, 3 cards
Header H2 "The bar I hold"; subline "No one is matched to you until they clear every one of these." (matchmaker — not "shortlist"). 3-col card grid (stack mobile), each: cream bg, 1px `#E7E3DC` border, radius 6px, pad 30/26px; sage numeral badge 46px circle `#E3EEEC` `#2F5B55` 01/02/03; H3 Fraunces 500 ~19px; body Inter 13.5px.
- 01 "2–3 years, minimum" — "Real executive-support experience — never someone's first remote role."
- 02 "A four-stage test" — "Communication, judgment, tools, and follow-through — assessed before any match."
- 03 "Trust, personally" — "I sign off on every match. If I wouldn't hire them, you won't meet them."
### (5) CTA — charcoal band + gold button
Charcoal `#2A2A2A` bg; H2 Fraunces 500 ~28px cream text max-width 22ch: "Let's find the operator you've been missing."; CTA gold + charcoal text "Book a call". (Alt: cream band + gold button.)

## 3. Motion — single scroll-reveal fade
Sections (2)–(5) fade up once on entering viewport via IntersectionObserver (add class + unobserve). No loops/autoplay. Hero paints instantly. Under `prefers-reduced-motion: reduce`, show immediately, no transition.
```css
[data-reveal]{opacity:0;transform:translateY(18px);transition:opacity .75s ease-out, transform .75s ease-out}
[data-reveal].is-in{opacity:1;transform:none}
@media (prefers-reduced-motion: reduce){[data-reveal]{opacity:1!important;transform:none!important;transition:none!important}}
```

## 4. Image optimization
`reference/brand/founder-1.jpg` is 3–4MB. Resize to ~1000px long edge, emit webp/avif (Astro `<Image>`), set width/height (or aspect-ratio) to avoid CLS, alt "Mary, founder of RemoteKind", target <~200KB.

## 5. Acceptance checklist
- [ ] Only About + Home hero changed; other 2 pages untouched.
- [ ] All colors from tokens (new tints added as tokens).
- [ ] Fraunces headings + pull-quote (400 italic), Inter body.
- [ ] One founder photo (About hero); no grid/tiles/2nd photo/testimonial.
- [ ] Portrait aspect 4/5 or natural height; no cover-in-fixed-box; no top/arbitrary crop.
- [ ] Single gold CTA per hero; gold bg + charcoal text; no gold-on-gold.
- [ ] AA contrast verified.
- [ ] Scroll-reveal once, no loops; disabled under reduced-motion; hero paints instantly.
- [ ] Founder image optimized (<~200KB, modern format, sized, no CLS).
- [ ] Responsive: heroes stack, cards → 1 col, type clamps.
- [ ] STORY uses real samples/about.md copy (no TODO); NO "shortlist" wording anywhere.

**Visual source of truth:** RemoteKind Explorations — About 6a, Home hero 5a.