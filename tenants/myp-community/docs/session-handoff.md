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
- [x] **Home hero (2026-10-16)**: rebuilt as an HTML `.mp_net` (HR Tech geometry) from the clean `home_hero_people.jpg`; connectors draw in when the final scene turns on. Checked at 1440/1024/390 without story. **User to upload** `home_hero_people.jpg` to the CDN (the page falls back to the local file until then).
- [x] **Home welcome + B2B photos (2026-10-16)**: `home_welcome_v2.jpg` (5 nodes above the heads) and `home_b2b_v2.jpg` (SVG fan + 3 HTML avatar crops of `home_hero_people.jpg`) wired with code overlays that zoom with the photo on hover. Checked at 1440/1024/390 without story. **User to upload** both to the CDN.
- [x] **Home public/media photo (2026-10-16)**: `home_public_v2.jpg` wired with 4 nodes above the adults. Brand-auditor run on the whole page: no code blockers; hero hover origin, halo fade-in and a duplicate selector fixed after it.
- [x] **Home architecture tags (2026-10-16)**: "AI-first." / "API-first." (copy unchanged) are now two animated cards with code-drawn glyphs (AI: neural pulses + ping; API: breathing `</>` + redrawing slash), staggered slide-in, alternating glow and a light sweep; all static under reduced motion. Page is now ~132 KB.
- [ ] **User to upload before publishing the home page** (all return 403 on the CDN today; the relative fallback won't resolve on the live site): `home_hero_people.jpg`, `home_welcome_v2.jpg`, `home_b2b_v2.jpg`, `home_public_v2.jpg`. Keep `home_platform_ui.jpg` on the server (HR Tech still uses it).
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
