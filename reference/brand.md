# Brand — RemoteKind

Single source of truth for the RemoteKind brand. Derived from the official brand kit in
`reference/brand/` (logo, Canva colour kit, founder photography). Governs the website, future
SaaS platform, marketing, and all products. Designers, developers, and AI tools (Claude Code,
Cursor, Codex, ChatGPT) should treat this as authoritative.

---

## 1. Brand personality

RemoteKind is **premium but personal** — a boutique operator-placement service, not a faceless
agency. Drawn from the palette and the founders' photography, the identity is:

- **Warm** — golden, human, inviting. The opposite of cold corporate staffing.
- **Trustworthy & calm** — soft, considered, never loud or hype-driven.
- **Aspirational** — polished, modern, a life-with-more-freedom feeling.
- **Human & real** — actual founders, real faces, authentic light. Not stock imagery.
- **Confident, understated** — quiet authority; lets proof and craft speak.

Tone in one line: *a trusted, stylish partner who gives you your time back.* This warmth is the
strategic wedge against the institutional competitors in `inspiration.md`: borrow their
credibility, reject their coldness.

---

## 2. Logo

- **Primary asset:** `reference/brand/logo.png` (official wordmark, 500×500 source).
- **Clear space:** padding equal to the wordmark's cap height on all sides.
- **Minimum size:** never below 120px wide on screen.
- **Placement:** top-left of the header; centered in the footer.
- **Backgrounds:** white or warm cream (`#F7F4EF`). On photography, only over a calm, low-detail
  area or a solid brand-colour block — never busy image regions.
- **Do not:** recolour outside the palette, stretch, rotate, add shadows/outlines, or place the
  coloured wordmark on a low-contrast tint.
- **Favicon:** derive from the logo mark; replace Astro's default `favicon.svg`.
- **Action item:** the source is 500×500 PNG — export an **SVG** for crisp retina/hero use and
  add it as `reference/brand/logo.svg`.

---

## 3. Colour palette

Exact values sampled from the official Canva brand kit (`reference/brand/colors.png`).

### Core brand colours
| Token | Hex | Character | Primary use |
|---|---|---|---|
| Gold | `#D9A441` | Warm, signature, premium | Primary CTAs, key highlights, hover accents |
| Lavender | `#C7B6D3` | Soft, calm, refined | Backgrounds, tints, illustrative accents ONLY |
| Sage | `#75A7A1` | Muted, grounded, trust | Secondary accents, section tints, icons |
| Charcoal | `#2A2A2A` | Grounding, authoritative | Headings, primary text, dark buttons |
| White | `#FFFFFF` | Clean, spacious | Base background |

### Warm neutral ramp (matches the warm palette — not cool slate)
| Token | Hex | Use |
|---|---|---|
| Ink | `#2A2A2A` | Headings |
| Body | `#4A463F` | Body text (warm dark grey) |
| Muted | `#8A857B` | Captions, secondary text |
| Line | `#E7E3DC` | Borders, dividers |
| Cream | `#F7F4EF` | Alternating section backgrounds |
| White | `#FFFFFF` | Page background |

### Derived "deep" variants — REQUIRED for accessible text/links on white
Core brand colours are too light to use as text or behind white text. Use these where contrast matters:
| Token | Hex | Use |
|---|---|---|
| Gold-deep | `#9A6E1B` | Gold-toned text/links on white (≥4.5:1) |
| Sage-deep | `#3E6B65` | Sage-toned text/links on white (≥4.5:1) |

---

## 4. Colour usage rules (accessibility is non-negotiable)

The palette is soft; naive use fails WCAG. Follow these:

- **Gold points.** Signature + primary action colour. Gold buttons MUST use **charcoal text**
  (`#2A2A2A`), never white — gold + charcoal passes AA (~6:1); gold + white fails (~2.2:1).
- **Charcoal is the workhorse.** All body copy and headings. Charcoal buttons use white text.
- **Lavender & sage reassure — they are tints, not text.** Section backgrounds, cards, icon
  fills, illustration. **Never** as text on white, **never** behind white text.
- **Coloured links/text:** use `charcoal`, `gold-deep`, or `sage-deep` — never raw gold/sage/lavender.
- **Cream** (`#F7F4EF`) is the warm section background that ties the palette together; reach for
  it before pure white when you want warmth.
- Rule of thumb: on any coloured fill, text is charcoal (or white only on charcoal). White text
  on a light brand colour is always wrong.

Per-page hierarchy: mostly white/cream + charcoal text (calm), gold for the one CTA and a few
highlights (warmth + direction), lavender/sage as occasional soft blocks (personality). Restraint
is the premium signal — space, not saturation.

---

## 5. Typography

Pick one (rec: **A**), load via Fontsource/Google Fonts in the base Layout.
- **A) Warm serif headings + clean sans body — RECOMMENDED.** Fraunces (headings) + Inter (body).
  The soft, high-end serif matches the warm palette and boutique personality; Inter keeps body crisp.
- **B) All-sans.** Inter throughout. Safe and modern, but gives up the editorial warmth.

Rules: sentence case headings (human, not shouty caps); generous line-height (~1.7 body); two body
weights (regular + medium). If the logo uses a specific display face, mirror it in H1/H2.

---

## 6. Photography & imagery

Use the **real founder photography** in `reference/brand/` (`founder-1.jpg` … `founder-5.jpeg`).
Its qualities define the visual tone: natural light, warm tones, authentic, relaxed — polished but human.

- **Do:** feature founders on About and the Home hero; favour warm natural light; leave breathing
  room; let faces carry trust.
- **Don't:** generic stock (smiling teams, laptop-at-café), cold/blue-toned images, busy comps.
- **Treatment:** minimal; keep warm consistency across shots; avoid heavy filters. Pair with cream
  or lavender blocks, not clashing colours.

The founder photos are a strategic asset, not decoration — the human proof that separates
RemoteKind from institutional competitors.

---

## 7. Design principles (for designers, developers, and AI tools)

1. **Warm, not corporate.** If it feels like an enterprise staffing site, it's wrong.
2. **Space is premium.** Whitespace and few elements signal quality more than colour or effects.
3. **One job per screen.** Single CTA ("Book a call"), in gold. No competing asks.
4. **Accessible by default.** Follow §4 everywhere; semantic HTML, alt text, keyboard nav (see root `AGENTS.md`).
5. **Proof over adjectives.** Show founders, vetting bar, testimonial — never "world-class."
6. **Tokens, not ad-hoc values.** All colour/spacing from the tokens below; never hardcode a stray hex.

---

## 8. Implementation notes (Tailwind)

Map into `theme.extend.colors` in `src/`:
```
brand:   { gold:'#D9A441', lavender:'#C7B6D3', sage:'#75A7A1', charcoal:'#2A2A2A' }
deep:    { gold:'#9A6E1B', sage:'#3E6B65' }
neutral: { ink:'#2A2A2A', body:'#4A463F', muted:'#8A857B', line:'#E7E3DC', cream:'#F7F4EF' }
```
CTA = `bg-brand-gold text-brand-charcoal`; dark button = `bg-brand-charcoal text-white`;
links on white = `text-deep-sage` or `text-brand-charcoal`; section bands alternate white / cream.

---

## 9. Asset inventory
`reference/brand/`
- `logo.png` — primary wordmark (add `logo.svg` when exported)
- `colors.png` — Canva colour kit (reference image)
- `founder-1.jpg`, `founder-2.jpeg`, `founder-3.jpeg`, `founder-4.jpeg`, `founder-5.jpeg` — founder photography
Optimise (resize/compress) before using on the site; keep raw originals here.