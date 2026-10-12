# Session Handoff: Logged-out Home (read this first)

**Last updated:** 2026-10-12. **Next task:** fix live glitches on the redesigned logged-out home page.

## Where things stand
- `pages/home-logged-out.html` was fully redesigned (modern, big, bold) and is **live** at https://www.myp.community/en?t=/Default/spl_login (template: `pages/templates/myp-community-logout-home-template.html`).
- Every decision and its reason: `docs/home-redesign-decisions.md`. Treat these as settled unless the user reopens one.
- Reusable patterns, the display type tier and motion rules: `.agents/skills/myp-bold-sections/SKILL.md`.
- Image style and pipeline: `.agents/skills/myp-image-style/SKILL.md`. Images live at `https://public-cdn.myp.community/images/home/` with local fallbacks in `pages/images/home/`.
- Claude/Gemini division of work: `.agents/skills/ai-task-routing/SKILL.md` (Gemini suits live-site browser QA and screenshots).
- Compliance audit: `.claude/agents/myp-brand-auditor.md`.

## Page anatomy (`#mp-home-embed`)
| # | Section class | What it is |
| :--- | :--- | :--- |
| 1 | `.mp_hero` (`#mpHero`) | 4 question scenes + final scene stacked in one grid cell; clip-path circle reveals; word-rise; "Yes." stamp; Pause/Skip/Replay; plays once per session (`sessionStorage` key `mpHomeHeroPlayed`); final scene is `is-on` in markup (no-JS / reduced-motion fallback). Min height `max(640px, min(calc(100vh - 78px), 900px))` |
| 2 | `.mp_marquee` | Green band; JS appends 3 clones; animates `translateX(-25%)` |
| 3 | `.mp_welcome` | Text + photo with vector accents (ring, dots, floating icon badge) |
| 4 | `.mp_better` | 4 numbered editorial columns on green-50 |
| 5 | `.mp_arch` | Full-bleed slate band with dot grid, statement + checklist |
| 6 | `.mp_types` | Two colour panels (green / slate) with images, links to community-type pages |
| 7 | `.mp_quote` | Serif pull quote on green-50 |
| 8 | `.mp_diff` | 3 icon cards |
| 9 | `.mp_build` | Green closing block: UI image, 3-step timeline, CTA |
| — | `.mp-home-modal-*` | Contact modal (inside root). **Form still doesn't submit anywhere** (TODO in the script) |
| — | `.mp_scroll_bar` | Fixed progress bar (inside root) |

## Things that are likely sources of live glitches (check these first)
1. **CMS host CSS bleeding in**: global `p`, `h1–h4`, `button`, `ul/li`, `figure`, `blockquote` rules, or Bootstrap from the template (`bootstrap.css` is loaded by the logout template). Our reset only zeroes margin/padding; host `line-height`, `font-size !important`, `li::before` bullets, `button` styles or `figure`/`blockquote` margins can still win.
2. **WYSIWYG sanitizing**: the editor may strip `<script>`, the `onerror` attributes, `hidden`, `inert`, `data-*` or inline `style`, or rewrite `<button>`/`<figure>`/`<blockquote>`. If JS is stripped the page falls back to the final hero scene and the reveal classes never hide content (by design).
3. **Header height ≠ 78px**: the hero's min-height assumes a 78px CMS header.
4. **Ancestor `transform`/`overflow`/`z-index` from the CMS wrapper** can break `position: fixed` (modal, scroll bar) or clip the hero.
5. **Font loading**: Inria Serif was added to the logout template's Google Fonts link; confirm it shipped live.
6. **`overflow-x: clip`** on the root and `clip-path` scenes on older Safari.
7. **Duplicate IDs/handlers** if the embed is pasted twice or the template also defines `mpModalOverlay` / `mpSplashModal`.

## How to reproduce locally
```bash
tools/preview/build-preview.sh pages/home-logged-out.html "$SCRATCH/preview.html"
node tools/preview/cdp-capture.mjs "file:///$SCRATCH/preview.html" "$SCRATCH/shots" 1440 900 3200 23000
node tools/preview/cdp-capture.mjs "file:///$SCRATCH/preview.html" "$SCRATCH/shots" 390 844 3200 23000
```
The capture script prints which scene is on, whether it's done, and `scrollWidth` (must equal the viewport width).
Chrome is at `C:/Program Files/Google/Chrome/Application/chrome.exe`; Node 22 is available; there's no Python or ImageMagick (use PowerShell `System.Drawing` for image work).

## Rules that still apply
AGENTS.md sections 1–12: embed format (style → root div → script, no document tags), brand tokens only, px units, `#mp-home-embed` scoping, 1200/1320/1440 container tiers, zero copy invention, Claude/Gemini routing.
