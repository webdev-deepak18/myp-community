# Logged-out Home Redesign: Decision Log

**Page:** `tenants/myp-community/pages/home-logged-out.html` (live: https://www.myp.community/en?t=/Default/spl_login)
**Started:** 2026-10-12. **Status:** v1 is **LIVE** (published by the user on 2026-10-12). Images are on `https://public-cdn.myp.community/images/home/`. The user has reported live "glitches" that are not yet itemised; fixing them is the next session's task (see `tenants/myp-community/docs/session-handoff.md`).

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
- [x] Images uploaded to `https://public-cdn.myp.community/images/home/` (verified 200, 2026-10-12).
- [ ] **Contact form doesn't submit anywhere**; it only shows the success state. Needs the real lead endpoint (TODO in the script).
- [ ] Confirm the live CMS header height (assumed 78px for the hero min-height).
- [ ] Writer to confirm or adjust hero copy and the dropped "LOVE and TRUST" line.
- [ ] Apply `myp-bold-sections` patterns to Features / Community Types / Getting Started pages.
