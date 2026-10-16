---
name: myp-bold-sections
description: >-
  Use this skill when designing or upgrading any myp-community tenant page (tenants/myp-community/; not other tenants) to the "modern, big, bold"
  look introduced on the logged-out home page (tenants/myp-community/pages/home-logged-out.html). Provides the display
  type tier, section rhythm rules, and copy-ready patterns: hero question sequence, marquee band,
  editorial split with photo + vector accents, numbered editorial columns, full-bleed dark band,
  bold colour panels, serif pull quote, icon cards, and the closing green timeline/CTA block.
---

# MyPeople Bold Section Patterns

Reference implementation: [tenants/myp-community/pages/home-logged-out.html](../../../tenants/myp-community/pages/home-logged-out.html).
All patterns obey `myp-brand-tokens` (colours and fonts) and `cms-page-embed` (scoping, px units, no document tags).
Copy the CSS from the reference file and rename the root ID (`#mp-home-embed` → `#mp-<page>-embed`).

---

## 1. Why pages looked "dull" (avoid these)
1. **Same rhythm repeated**: centred heading + small bar + grid of white cards, seven times in a row.
2. **Timid scale**: headlines at or below 56px, so nothing commands the page.
3. **Invisible background changes**: `#FFFCF8` → near-identical tints.
4. **Brand font missing in the template**: Inria Serif must be loaded by the CMS template (both `00_Myp-Community-Pages.html` and `myp-community-logout-home-template.html` now load it).

## 2. Section Rhythm Rule
Never place two sections with the same layout or the same background next to each other.
Alternate through these backgrounds (tokens only):

| Background | Token | Text |
| :--- | :--- | :--- |
| Canvas | `--color-page-bg` | black / black-500 |
| Green tint band | `--color-mp-green-50` + 1px `--color-mp-green-200` top/bottom borders | black / black-500 |
| Slate dark | `--color-mp-blue-900` (+ dot grid `radial-gradient(var(--color-mp-blue-700) 1.2px, transparent 1.6px)` at 28px) | white, accents `--color-mp-green-400` |
| Brand green | `--color-mp-green-700` | white, body `--color-mp-green-50` |

Home order: hero (slate/green scenes) → marquee (green) → welcome (canvas) → better (green tint) → architecture (slate) → types (canvas, coloured panels) → quote (green tint) → difference (canvas) → build (green).

## 3. Display Type Tier (approved extension of the type scale)
| Role | Font | 1440+ | 1200+ | base | ≤991 | ≤576 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Display XL (hero questions) | Inria Serif 700 | 92/98 | 80/86 | 68/74 | 52/58 | 38/44 |
| Display L (hero statement) | Inria Serif 700 | 76/82 | 68/74 | 60/66 | 48/54 | 38/44 |
| Section H2 `.mp_h2` | Inria Serif 700 | 56/64 | 50/58 | 44/52 | 38/46 | 30/38 |
| Statement `.mp_arch_tag` | Inter 600 | 64/72 | 58/66 | 52/60 | 44/52 | 34/42 |
| Pull quote | Inria Serif 700 | 40/56 | 36/50 | 32/46 | 28/40 | 22/32 |
| Lead `.mp_lead` | Inter 600 | 24/34 | 22/32 | 21/31 | 20/30 | 18/27 |

Large type uses negative tracking (-0.75px to -2.5px). All values are in px.

## 4. Patterns

### 4.1 Hero Question Sequence (`.mp_hero`)
- Four question scenes + one final scene, stacked in **one grid cell** (`grid-area: 1/1`) so the stage height follows the tallest scene. No fixed heights.
- Each scene reveals with `clip-path: circle()` from its own origin (`--cx/--cy`); words rise one by one (`[data-mp-split]` → `.mp_w > span` with `--i` delay); a "Yes." stamp pops at 2.6s.
- Scene palettes: green-700/white, blue-900/white, green-100/green-900 (`data-tone="light"` flips the control bar colour), blue-800/white; final blue-900.
- **CMS-safe behaviour (non-negotiable):** contained section (no full-screen takeover, no `body{overflow:hidden}`), click-to-advance only inside the stage, arrow keys only when focus is inside the hero, Pause / Skip / Replay buttons, plays once per session (`sessionStorage` key wrapped in try/catch), hidden scenes get `aria-hidden` + `inert`.
- **No-JS / reduced motion:** the final scene carries `is-on` in markup, so it is what renders without JS and with `prefers-reduced-motion`.
- The real `<h1>` lives in the final scene (eyebrow + display line), never in the rotating questions.
- Min height: `max(640px, min(calc(100vh - 78px), 900px))` (78px = CMS header).

### 4.2 Marquee Band (`.mp_marquee`)
Green-700 band, Inter 600, items separated by green-300 dots. One `<ul class="mp_marquee_group">` in HTML; JS appends 3 `aria-hidden` clones and the track animates `translateX(-25%)`. Pauses on hover; static and centred with reduced motion.

### 4.3 Editorial Split + Photo with Vector Accents (`.mp_welcome`, `.mp_media`)
Text left (rule bar, H2, lead, body), photo right in a 28px-radius frame, plus vector accents: dashed green-300 ring, three-dot cluster SVG, floating white badge with icon-only circles (heart, chat, calendar). Accents are decorative (`aria-hidden`) and **never contain new copy**.

### 4.3b People-Network Collage + Photo Overlays (`.mp_net`, `.mp_media_frame > .mp_vec`)
Reference: HR Tech page. Hero visual built in code: five portrait crops (circle / pill / rounded rect, 4px white border) positioned in % on a square stage, joined by an SVG bézier layer (viewBox 0 0 100 100) with nodes placed only in visible gaps, plus floating white icon chips and the three-dot cluster. Section photos get an SVG overlay in image coordinates (`xMidYMid slice`). See `myp-image-style` section 0.

### 4.3c Zig-zag Numbered Rows (`.mp_row`, `.is-flip`)
Alternating photo/text rows with a giant Inria Serif index (green-300), Inter H3, an icon chip on one photo corner and a quarter-orbit SVG arc hugging the opposite corner. Good for 2 to 4 long-copy items that each have an image.

### 4.4 Split Heading + Colour-Block Tiles (`.mp_better_layout`, `.mp_better_item.is-green / .is-white / .is-slate`)
Green-tint band. On desktop the H2 sits in a left column (0.8fr) beside a 2×2 tile grid (1.2fr); below 992px it stacks, and below 577px the tiles go to one column. Tiles form a checkerboard (green-700 / white / white / blue-800) with 28px radius. Each tile has an icon chip at the top-left and a giant Inria Serif index (01–04) as a low-contrast watermark at the top-right (green-500 / green-100 / blue-700); the H4 and body are pushed to the bottom with `margin-top: auto`. On hover the tile lifts, the icon tilts and the index rises. A faint network motif (`--mp-network-mask`, shared with the hero) sits behind the heading. Don't use this next to the white icon cards (4.8): both are tile grids.

### 4.5 Full-bleed Dark Statement (`.mp_arch`)
Slate band with a dot grid and a soft green glow. Left: H2 + giant two-line Inter statement (second line green-400). Right: divided checklist rows that slide right on hover.

### 4.6 Bold Colour Panels (`.mp_type_panel.is-green / .is-slate`)
Solid panels with an inset photo (20px radius), Inter H3, a white `.btn-light` CTA pinned to the bottom (`margin-top:auto`). Panel CTAs **link to their real pages**; they don't open the contact modal.

### 4.7 Serif Pull Quote (`.mp_quote`)
Green-tint band, SVG quote mark in green-500, Inria Serif 700 text with the final clause highlighted in green-700.

### 4.8 Icon Cards (`.mp_diff_card`)
White, 24px radius, blue-200 border; icon tile inverts on hover. Emphasise numbers **already in the copy** with `<strong>` in green-700. Never invent stats.

### 4.9 Closing Timeline + CTA (`.mp_build`)
Green-700 block with outline rings, product UI image left, H2 with a tilted white "badge" word, a numbered vertical timeline (white number circles joined by a green-500 line), and a large `.btn-light` CTA.

## 5. Buttons
- `.btn-primary`: green-700 / hover green-800 / focus green-default, 12px radius.
- `.btn-light`: white with black text, for green or slate backgrounds; hover green-50.
- `.btn-ghost-light`: transparent with a 2px blue-500 border and white text, for slate backgrounds.
- `.btn-lg`: 60px height (the design-system "Large" size).

## 6. Motion Rules
- Reveal only after JS boots (`#root.mp-js .mp-reveal`), so content never stays hidden if JS fails.
- Easing `cubic-bezier(0.16, 1, 0.3, 1)`. Stagger with `data-delay="1..4"` (80ms steps).
- Everything respects `prefers-reduced-motion`.

## 7. Verification
1. Build a preview with `platform/tools/preview/build-preview.sh <page> <out>`; for story pages (everything except the logged-out home) add `story` so the template's forced `!important` rules apply. Light text on dark/green sections must stay light (see `cms-page-embed` Rule 4b).
2. Capture with headless Chrome. **Don't trust `--virtual-time-budget` for clip-path transitions**; drive Chrome in real time over the DevTools protocol (Node 22 has a global `WebSocket`) and check `document.documentElement.scrollWidth === viewport` at 390px.
3. Run the `brand-auditor` agent.
