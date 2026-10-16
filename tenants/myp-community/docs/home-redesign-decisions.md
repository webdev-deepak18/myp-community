# Logged-out Home Redesign: Decision Log

**Page:** `tenants/myp-community/pages/home-logged-out.html` (live: https://www.myp.community/en?t=/Default/spl_login)
**Started:** 2026-10-12. **Status:** v1 is **LIVE** (published by the user on 2026-10-12). Images are on `https://public-cdn.myp.community/images/`. The user has reported live "glitches" that are not yet itemised; fixing them is the next session's task (see `tenants/myp-community/docs/session-handoff.md`).

## Brief
Feedback was that the page looked "dull" (it was a direct port of the old website). The content writer proposed two hero concepts (`tenants/myp-community/research/MyPeople Homepage Concept.html`, `…v2.html`) and recommended v2. Goal: modern, big, bold, fully on-brand, CMS-safe.
The user granted full design freedom (sizes, colours within the brand, widths) under the brand and CMS constraints.

## Decisions
| # | Decision | Why |
| :--- | :--- | :--- |
| 1 | Use the **v2 concept** copy for the hero (4 questions + "You need to see MyPeople." + v2 paragraph + v2 marquee items) | It explains what the product is and shows people. The writer's recommendation |
| 2 | Add v1's credibility line "Built by the team behind HR's largest online community." | Backed by existing copy ("informed by building and owning the largest online community in the HR space") |
| 3 | Real `<h1>` = eyebrow "The Trusted People Engagement Platform" + "You need to see MyPeople." | Keeps a stable heading for SEO; the rotating questions are `<p>` |
| 4 | Hero is a **contained section**, not a full-screen takeover; plays once per session; Pause / Skip / Replay; arrow keys only inside the hero; reduced motion and no-JS show the final scene | The concept's body-overflow lock and global key capture would break the CMS header and scrolling |
| 5 | Concept palette (cobalt, pink, yellow, mint) and Bricolage font **dropped**; scenes use green-700, blue-900, green-100, blue-800 | Brand compliance |
| 6 | New **Display type tier** (up to 92px) and `--radius-panel: 28px` added to the design system | The 56px Hero 1 cap couldn't deliver "big, bold" |
| 7 | Every section gets a different layout and alternating background | Root cause of "dull": seven identical centred-heading + card-grid sections |
| 8 | Removed placeholder subtitle "10X ... when do we talk about this" | It was a note, not copy. Re-add when real copy exists |
| 9 | Removed the old "Want a community that you and your members LOVE and TRUST?" hero line and the legacy banners (`mp_head_banner-2.jpg`, `mp_center_banner.png`, `mp_notebook_banner.png`) | Replaced by the v2 hero and new imagery |
| 10 | Community-type CTAs ("See the Benefits", "Learn More") now **link to their pages** instead of opening the contact modal | Correct destination |
| 11 | Numbers already in the copy ("over 25 years", "more than 90 modules") are emphasised; **no new stats invented** | Content fidelity rule |
| 12 | Five new images generated in the house "photo + vector network" style → `tenants/myp-community/pages/images/home/` | User asked for non-stock, community-themed imagery |
| 13 | Added Inria Serif to `tenants/myp-community/pages/templates/myp-community-logout-home-template.html` | Template only loaded Inter + Roboto, so serif headings fell back to a generic font |
| 14 | Hero secondary CTA "Explore Features" → `/en/features/` | Navigation label from the site menu |

## Open items
- [x] Images uploaded to `https://public-cdn.myp.community/images/` (verified 200, 2026-10-12).
- [ ] **Contact form doesn't submit anywhere**; it only shows the success state. Needs the real lead endpoint (TODO in the script).
- [ ] Confirm the live CMS header height (assumed 78px for the hero min-height).
- [ ] Writer to confirm or adjust hero copy and the dropped "LOVE and TRUST" line.
- [ ] Apply `myp-bold-sections` patterns to Features / Community Types / Getting Started pages.

---

# HR Tech & B2B Page Redesign (2026-10-15)
**Page:** `tenants/myp-community/pages/HR Tech and B2B Customer Communities.html` (root `#mp-hrtech-embed`, was `#mp-community-embed`). Content kept; design moved to the home page's bold patterns.

| # | Decision | Why |
| :--- | :--- | :--- |
| 1 | **Vectors drawn in code, never generated** (new rule in `myp-image-style` §0) | User: AI-drawn connector lines look scribbled, not clean curves |
| 2 | Hero collage rebuilt in HTML from five crops of `community_hero_banner.jpg` + SVG connectors | Perfect curves, no new image or CDN upload needed |
| 3 | Section order: slate hero → green marquee → canvas split → green-tint tiles → slate roles → canvas capability cards → green-tint zig-zag rows → green closing | Section rhythm rule |
| 4 | Marquee items = the six stakeholder verbs already in the copy | No invented copy |
| 5 | "10X goes here" dropped from the Benefits heading | Placeholder note, same as home decision #8. **Re-add when the writer supplies the real line** |
| 6 | "1." / "2." prefixes on Window and step titles shown as the visual index instead | Same text, presentational |
| 7 | "LET'S BUILD…" all-caps set in title case with the "Let's" badge | Matches home; case only |
| 8 | Discovery-call CTAs now open a contact modal (copied from home) | They did nothing before. Form still only fakes success (same TODO as home) |
| 9 | Window row 1 uses `contact_community_consultation.jpg` | Avoids repeating the table photo used above it |
| 10 | `community_insights_home.jpg` not used | Contains readable text and fake stats (92%) |

Open: copy typos kept verbatim for the writer: "LMS (personalized career paths and education )", "Quicken the implementation process." (bold on "Quicken the"). Home images `home_b2b_customers.jpg` / `home_welcome_connected.jpg` still have baked-in scribbled vectors.

## Image folder clean-up (2026-10-15)
- One local folder: `pages/images/<page>/`. Server: one flat folder `public-cdn.myp.community/images/<file>` (user's choice: small site, per-page server folders not worth it). Removed the duplicate 600px set in `tenants/myp-community/images/` and the multi-MB flat files in `pages/images/`.
- Renamed and re-compressed (≤ 220 KB, full resolution kept): `hr-tech-b2b/hrtech_*`, `contact-us/contact_consultation.jpg`, `other-communities/other_*`. HR Tech, Contact Us and Other Communities now point at the new CDN paths.
- **To do:** upload every file from the local subfolders (including `home_*`) flat into `public-cdn.myp.community/images/`; delete the 600px `community_*.jpg` files and the old `images/home/` copies there.

## Live fix: host CSS overriding the HR Tech page (2026-10-15)
- Live: role verbs, role descriptions, closing subtitle and step text rendered black; stakeholder H2 spans rendered in serif. Cause: story template `!important` rules on `p` colour and on h1–h4 / `p` children.
- Fix: all `color` / `letter-spacing` declarations on the page are `!important`, plus an inheritance shield for heading/paragraph children. Verified with the new `build-preview.sh … story` mode (computed colours/fonts correct).
- Rule recorded in `cms-page-embed` Rule 4b and TENANT.md so future pages ship with it.

---

# Other Communities Page Redesign (2026-10-15)
**Page:** `tenants/myp-community/pages/other-communities.html` (root `#mp-other-communities-embed`, kept). Sister page of HR Tech: same patterns, content kept verbatim.

| # | Decision | Why |
| :--- | :--- | :--- |
| 1 | Order: slate hero → green marquee → green-tint split heading + 2×2 org tiles → slate "Place to Call Home" statement + checklist → canvas capability cards → green closing | Section rhythm rule. Capabilities moved after "Place to Call Home" so the org tiles don't sit next to the capability cards (`myp-bold-sections` 4.4: two tile grids side by side) |
| 2 | Hero network built from five crops of `other_hero_collage.jpg` | Its baked-in AI lines stay outside every crop; connectors are SVG. No new image or upload |
| 3 | `other_insights_ui.jpg` **dropped**; the closing visual is a product-UI bento drawn in HTML/SVG (placeholder bars, chart, ring; avatars are face crops of the same collage) | The old image had readable text and fake stats ("92%"). Code-drawn UI has no words or numbers |
| 4 | Marquee items = the four organization names already in the copy | No invented copy |
| 5 | Eyebrow "Community Types" + "Explore Features" ghost button | Nav labels, same as HR Tech |
| 6 | "LET'S BUILD…" in title case with the "Let's" badge; "1." / "2." / "3." step prefixes shown as number circles | Same as HR Tech decisions #6–7 |
| 7 | Contact modal moved **inside** the root div; keeps this page's own form copy (title, subject options, privacy line, success message) | It sat outside the root (embed rule). Form still only fakes success (same TODO as home and HR Tech) |
| 8 | Below 1200px the ecosystem heading stacks above the tiles | At 1024 the side-by-side tiles were ~245px wide |

Open: the closing section on HR Tech (and home) still uses `home_platform_ui.jpg`, which also has readable text ("Topic Chips", "Loos") and "70%". Consider swapping it for this page's code-drawn bento.

---

# Features Page Redesign (2026-10-15)
**Page:** `tenants/myp-community/pages/features.html` (root `#mp-features-embed`, story template). Plan: `docs/features-redesign-plan.md`. Content kept verbatim (checked by script: all 66 old text blocks + 14 logo alts present).

| # | Decision | Why |
| :--- | :--- | :--- |
| 1 | Order: slate hero → green marquee (17 feature names) → green-tint bento → slate logo strip → green closing CTA | Section rhythm rule |
| 2 | Hero centred: Inria Display title "MyPeople Features" (now the H1; it was an H2), existing CTA, banner below in a white 28px frame with chips, dot cluster, dashed rings. No eyebrow | Banner is 1920×847 on white, so a side-by-side hero would squash it. An eyebrow would have been new copy |
| 3 | Banner keeps `$public/images/mp_features_banner-2.jpg`; `onerror` falls back to `https://public-cdn.myp.community/images/mp_features_banner-2.jpg` | `$public` resolves to that CDN on the live site, so the fallback is harmless and makes local previews work |
| 4 | Bento: 4 columns at ≥1200 (6 wide colour tiles + 12 white tiles + "& much much more!" = 6 full rows), 2 columns below 1200, 1 column ≤576. Wide tiles: 01 green, 06 slate, 07 green, 12 slate, 13 slate | Not 17 identical cards; rows tile exactly with no gaps, original order kept |
| 5 | Each feature has a code-drawn SVG picture (viewBox 240×150, token classes only, no words or numbers) that animates once when its tile is revealed (pop / rise / grow / draw primitives); static without JS and with reduced motion | `myp-image-style` §0; the old `mypeople.ai/images/mp_features_*.png` stock images are dropped |
| 6 | One shared details popup filled from each tile's hidden `.ft_detail` block (popup text kept verbatim): picture panel + title + text + "Example Use Case" in a highlighted box, "NN / 17" counter, prev/next buttons and ←/→ keys, Esc / overlay close, focus trap, scroll lock. Whole tile is clickable (stretched details button) | Replaces 17 copies of the old popup, whose padding and layout were wrong |
| 7 | "& much much more!" is HTML text on a green tile (not part of the popup sequence) | It only existed inside `mp_features_18.png` |
| 8 | Logos: 14 logos downloaded from `public-cdn.hr.com/.../logout_home/images/logo/` to `pages/images/features/features_logo_*.png` (already web-size: ≤240px wide, 4.5–28 KB transparent PNGs), served from the new CDN with a local fallback. Original colours on white tiles (no white-silhouette filter); tiles lift on hover | User: the white filter turned filled logos (TikTok, Instagram) into blocks. White tiles keep black logos (Apple, Amazon) visible on slate |
| 9 | Closing green band holds only the existing "Book 30-Minute Discovery Call" button (white), on a connector line with rings | No new copy allowed |
| 10 | Contact modal moved inside the root; keeps this page's own form copy (subjects, "Thanks for being awesome!", "Close") | Embed rule. Form still only fakes success (same TODO as other pages) |
| 11 | Detail-button chevron drawn once as a CSS mask instead of 17 inline SVGs | Page size: 116 KB (HR Tech 98 KB, Other Communities 100 KB work live) |

**Copy flags for the writer (kept verbatim, not fixed):**
- Storefront **card** text repeats the LMS text ("Organize educational content and courses with a library of SCORM-compliant resources, including internal or third-party certification.") before "Offer exclusive products or services directly to members." The Storefront **popup** text is different and reads correctly. Probably a copy-paste error.
- CMS: "Effortlessly create, manage, and share rich, SEO-optimized content effortlessly" ("effortlessly" twice).
- Email use case: "direct to member's inboxes" (should probably be "members' inboxes").
- Site Designer card text ends with a shortened "Example Use Case: …" sentence inline; the popup has the full sentence. Kept both.
- CRM card title "CRM" vs popup title "Customer Relationship Management". Kept both.

**Brand-auditor (2026-10-15):**
- Embed format, scoping, units, tiers, Rule 4b, content fidelity and JS all pass.
- Fixed:
  - `#000` in the logo mask is now `black`.
  - Mobile hero title is now 38/44, per `myp-bold-sections`.
  - The contact form resets to a fresh form each time it opens.
  - The dialog's `aria-labelledby` now follows the success heading after a submit.
- Accepted:
  - Detail, prev/next and close buttons stay green / white-with-shadow (bold-section style) rather than the black-50 secondary icon button. This exception is approved for bold pages.
- Open (site-wide):
  - The marquee and logo strip loop forever with only hover-pause and reduced-motion handling, and no pause button (WCAG 2.2.2).
  - The same applies to the home, HR Tech and Other Communities marquees.
  - Fix this on all pages together.
- Resolved: the user uploaded the logos to a new server folder, `https://public-cdn.myp.community/images/client-logos/`; the page points there and all 14 return 200.

---

# Contact Us Page Redesign (2026-10-15)
**Page:** `tenants/myp-community/pages/contact-us.html` (root `#mp-contact-us-embed`, story template). All copy kept verbatim (script check: 26 text blocks + image alt).

| # | Decision | Why |
| :--- | :--- | :--- |
| 1 | Slate hero: "Contact Us" eyebrow, Inria display title ("Better Community?" on its own line in green-400), description in the Lead tier (Inter 600), existing "Book My Free Community Consultation" button. Right: `contact_consultation.jpg` in a 28px white-bordered frame | Same patterns as HR Tech / Other Communities; eyebrow is the nav label |
| 2 | Photo overlay drawn in code: one bézier connector with nodes above the four people's heads (SVG in image coordinates 500×670, `xMidYMid slice`), floating chat/heart chips, dot cluster, dashed ring, and a code-drawn calendar card (placeholder bars + time slots, no words or numbers) | `myp-image-style` §0; the photo is clean |
| 3 | The four perks moved from a small checklist into a green band below the hero: icon tile + Inter text, 4 columns → 2×2 (≤991) → stacked rows (≤576) | Section rhythm (slate → green); gives the perks weight without new copy |
| 4 | Contact modal moved inside the root; form copy unchanged (default subject still "Book Free Community Consultation"); focus trap, Esc, fresh form on reopen, errors flagged with `aria-invalid` / `aria-describedby` | Embed rule + accessibility. **Submitting still only shows the success message: the endpoint is a team decision** |
| 5 | `.btn-primary:focus` added to the brand focus colour (also on Features) | Brand-auditor: the story template forces green-800 on `:focus` |

Brand-auditor: all checks pass after the fixes above. Not done (optional): Enter-to-submit (the old `<form>` wrapper only blocked submission anyway).
