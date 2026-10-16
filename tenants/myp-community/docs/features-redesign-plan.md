# Features Page Redesign: Plan (agreed 2026-10-15)

**Page:** `tenants/myp-community/pages/features.html` (root `#mp-features-embed`, story template page).
**Reference pages:** `pages/HR Tech and B2B Customer Communities.html`, `pages/other-communities.html`. Reuse their CSS and patterns.

## User decisions
- **Content stays exactly as it is.** Card text, full popup text, "Example Use Case" lines, logo heading and button labels are kept word for word (including any typos; flag doubtful copy, don't fix it). The short card text and the full popup text differ: keep both.
- **Feature details popup:** the current design is wrong (padding, layout). Redesign it in the new style; the content inside must not change.
- **Logos move to the new CDN.** Download the 14 logos from `public-cdn.hr.com/.../logout_home/images/logo/`, save them to `pages/images/features/` with a `features_logo_` prefix (web-size), and point the page at `https://public-cdn.myp.community/images/<file>` with a local `onerror` fallback. The user uploads them.
- Everything else is Claude's call (decided below).

## Decisions made by Claude
| Area | Decision |
| :--- | :--- |
| Hero (slate) | Eyebrow + big Inria title "MyPeople Features" (existing text) + existing "Book 30-Minute Discovery Call" button. The existing banner `$public/images/mp_features_banner-2.jpg` (people in front of product screens; user likes it) is kept unchanged, shown in a large 28px-radius frame with floating icon chips and code-drawn accents. Keep its `$public` CMS path (it won't render in local preview; use a placeholder box there). |
| Marquee (green) | The 17 feature names, already on the page |
| Features grid | Same order, 17 features + "& much much more!". **Not** 17 identical cards: a bento grid of mixed tile sizes and colours (green / white / slate, like the home "Better" tiles). Each tile: animated picture, H3 feature name, short card text, "details" button. No new group headings (they'd be invented copy). Keep the tagline "One Platform. Every Capability Your Community Needs." as the section H2 |
| Images | **Every feature gets a small animated picture drawn in HTML/SVG/CSS** (no image files): e.g. a page assembling for Site Designer, a chart drawing in for Analytics, a points badge for Gamification, chat bubbles for Forums. Brand tokens only, no readable words or numbers, plays once on reveal, static with reduced motion. The old `mypeople.ai/images/mp_features_*.png` stock images are dropped |
| "& much much more!" | Bold green tile with that text as HTML (today it only exists inside `mp_features_18.png`) |
| Logos (slate band) | Heading + 14 logos as a slow scrolling strip, white on slate, full colour on hover; pause on hover/focus; static wrap with reduced motion |
| Details popup | One shared, data-driven popup instead of 17 copies: title, full text, "Example Use Case" in a highlighted box, the feature's animated picture, prev/next arrows, Esc / overlay close, focus trap, scroll lock. Feature text lives once in the HTML (hidden detail blocks or `<template>`), not duplicated in JS strings |
| Closing CTA | Repeat the existing "Book 30-Minute Discovery Call" button after the features (existing label only, no new copy) |
| Contact modal | Inside the root div (like Other Communities); keep this page's own form copy |
| Size | Page is 77 KB today (HR Tech 98 KB works). The shared popup frees space for the animations; report the final `wc -c` |

## Section rhythm
slate hero → green marquee → canvas/green-tint feature bento → green "& much much more!" (inside the bento) → slate logos → green closing CTA band.

## Verification
Story-mode preview (`build-preview.sh … story`), captures at 1440 / 1024 / 390 via `cdp-capture.mjs` (true 390 viewport; plain Chrome `--window-size` can't go below ~500px), `scrollWidth` = viewport, light text stays light, popup checked open at 390 and 1440, then the `brand-auditor` agent. Log decisions in `docs/home-redesign-decisions.md`, update `docs/session-handoff.md` and the `myp-image-style` registry.
