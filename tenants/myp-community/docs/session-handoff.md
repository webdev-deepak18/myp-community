# Session Handoff: MyP Page Redesigns (read this first)

**Last updated:** 2026-10-15. **All pages are redesigned (2026-10-15).** Remaining work is the open items below; the form endpoint is a team decision.

## Status by page
| Page | File | Status |
| :--- | :--- | :--- |
| Logged-out home | `pages/home-logged-out.html` (`#mp-home-embed`) | Redesigned, **live** since 2026-10-12. Open issues below |
| HR Tech & B2B | `pages/HR Tech and B2B Customer Communities.html` (`#mp-hrtech-embed`) | Redesigned 2026-10-15, CMS colour fix applied. **Reference page for the remaining pages** |
| Other Communities | `pages/other-communities.html` (`#mp-other-communities-embed`) | Redesigned 2026-10-15 (HR Tech patterns; hero crops from `other_hero_collage.jpg`, closing UI drawn in code). `other_insights_ui.jpg` no longer used |
| Contact Us | `pages/contact-us.html` (`#mp-contact-us-embed`) | Redesigned 2026-10-15: slate hero with photo + code-drawn overlay, green perks band, modal inside root. 44 KB |
| Features | `pages/features.html` (`#mp-features-embed`) | Redesigned 2026-10-15: centred slate hero with banner, marquee, 4-col bento with a code-drawn animated SVG per feature, one shared data-driven details popup, slate logo strip (logos now in `images/features/`), green CTA. 116 KB. Decisions + copy flags in the decision log |

## How to start a page (the rules are all written down)
1. Read `tenants/myp-community/TENANT.md`, then the skills: `myp-bold-sections` (section patterns, type tier, rhythm), `myp-image-style` (section 0: **vectors drawn in code, never generated**), `cms-page-embed` (**Rule 4b: host `!important` rules**).
2. Keep content verbatim; drop only obvious placeholder notes and flag them (decision log).
3. Plan images up front. New photos come from Gemini as **clean photos only** (prompts in `myp-image-style`); every line/node/ring is SVG in the page.
4. Build, then preview **in story mode** (all pages except the logged-out home use the story template):
   ```bash
   platform/tools/preview/build-preview.sh "tenants/myp-community/pages/<page>.html" "$SCRATCH/p.html" story
   ```
   Check 1440 / 1024 / 390 px, `scrollWidth` = viewport at 390, and that light text on dark/green sections stays light.
5. Log decisions in `docs/home-redesign-decisions.md`.

## Images (one local folder, one flat server folder)
- Local: `tenants/myp-community/pages/images/<page>/<prefix>_<slot>.jpg` (`home/`, `hr-tech-b2b/`, `contact-us/`, `other-communities/`, `features/`). Each image stored once; ≤ 1400px longest side, ≤ 220 KB.
- Server: **flat** `https://public-cdn.myp.community/images/<file>` (user's choice, no per-page folders). `src` = full CDN URL, `onerror` fallback = local subfolder path. **Exception:** client/partner logos live in `images/client-logos/` on the server (user's folder, 2026-10-15).

## Open items
- [x] Features logos uploaded 2026-10-15 to `public-cdn.myp.community/images/client-logos/` (all 14 return 200).
- [ ] All pages: marquee/logo strips need a pause button (WCAG 2.2.2, flagged by the brand-auditor on Features); fix site-wide.
- [ ] Features copy flags for the writer (Storefront card repeats the LMS text, "effortlessly" twice in CMS, "member's inboxes"): see the decision log.
- [ ] **User to upload** all 12 files from the local subfolders flat into `public-cdn.myp.community/images/` (incl. `home_*`: the home page now points at the flat URLs), and delete the old 600px `community_*.jpg` files and the old `images/home/` folder there.
- [ ] **Contact form doesn't submit anywhere** on any page (TODO in each script: home, HR Tech, Other Communities, Features, Contact Us). Endpoint is a team decision; once known, wire all five pages.
- [ ] **Home page images (in progress 2026-10-15; text is final v1, don't touch)**: hero collage (baked lines, one face repeated 3×), welcome, B2B and public/media (baked lines/icon cards, Apple logos) are being replaced. Gemini brief: `docs/handoffs/2026-10-15-home-images.md` (4 clean photos, new names `home_hero_people.jpg`, `home_*_v2.jpg`). When they're back: rebuild the hero as an HTML `.mp_net`, add SVG overlays to the 3 photos (shared `.mp-draw` / `.mp_chip` / `.mp_dots` CSS is already in the page), preview without story, audit.
- [x] **Home page** host check 2026-10-15: the logout-home template forces no heading/p fonts or colours (only its own nav/footer/old classes), so `!important` colours aren't needed; the Rule 4b inheritance shield was added as a precaution.
- [ ] HR Tech copy to confirm with the writer: "10X goes here" was dropped from the Benefits heading; typos kept verbatim ("education )", bold "Quicken the").
- [x] Home "Let's Build" uses the code-drawn `.mp_ui` bento instead of `home_platform_ui.jpg` (2026-10-15).
- [ ] HR Tech closing still uses `home_platform_ui.jpg` (readable text, "70%"): swap for the bento there too?
- [ ] Confirm the live CMS header height (hero sizing assumes 78px).

## Home page reference (`#mp-home-embed`)
Hero question sequence (`#mpHero`, plays once per session, key `mpHomeHeroPlayed`) → marquee → welcome split → "Better" tiles → architecture slate band → community-type panels → pull quote → difference cards → green build/timeline, plus contact modal and scroll bar. Full rationale: `docs/home-redesign-decisions.md`.

## Tools
- `platform/tools/preview/build-preview.sh <page> <out> [story]`: wraps a page with fonts, host CSS and a fake 78px header; `story` adds the story template's forced rules.
- `platform/tools/preview/cdp-capture.mjs`: real-time viewport captures (for the animated home hero).
- Chrome at `C:/Program Files/Google/Chrome/Application/chrome.exe`; Node 22; no Python or ImageMagick (use PowerShell `System.Drawing` for image work).
- Claude/Gemini split: `.agents/skills/ai-task-routing/SKILL.md`. Audit: `.claude/agents/brand-auditor.md`.

## Rules that still apply
AGENTS.md: embed format (style → root div → script, no document tags), brand tokens only, px units, `#mp-<page>-embed` scoping, 1200/1320/1440 container tiers, zero copy invention, Claude/Gemini routing.
