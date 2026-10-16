# Tenant: MyPeople Community (myp.community)

The platform's own marketing site. Platform rules in the root `AGENTS.md` apply; this file adds the MyP brand.

| Item | Value |
| :--- | :--- |
| Live site | https://www.myp.community/en/ (all story URLs: [page-urls.md](page-urls.md)) |
| Root-ID prefix | `#mp-<page>-embed` (e.g. `#mp-home-embed`) |
| Brand source | [brand/design-system.md](brand/design-system.md), [brand/design-system.pdf](brand/design-system.pdf), [brand/tokens.css](brand/tokens.css) |
| Skills | `myp-brand-tokens`, `myp-bold-sections`, `myp-image-style` (+ platform `cms-page-embed`) |
| CMS templates | `pages/templates/00_Myp-Community-Pages.html` (story pages), `pages/templates/myp-community-logout-home-template.html` (logged-out home). Keep templates under ~60 KB (`wc -c`): the CMS silently truncates around 64 KB. |
| Fonts (loaded by the templates) | Inria Serif 700, Inter 500/600/700, Roboto 400/500/700 |
| Images | **One folder only:** `pages/images/<page>/` (`home/`, `hr-tech-b2b/`, `contact-us/`, `other-communities/`, `features/`), for local work only. On the server every file sits flat in one folder: `https://public-cdn.myp.community/images/<file>` (filenames carry a page prefix, so they stay unique). Exception: client/partner logos go in `https://public-cdn.myp.community/images/client-logos/<file>`. Each image is stored once, in the folder of the page that owns it; other pages link to that URL. Web-size: longest side ≤ 1400px, JPEG, ≤ 220 KB. Style: clean real-people photos + vector accents drawn in code (`myp-image-style`). |
| Status / next steps | [docs/session-handoff.md](docs/session-handoff.md), decision log [docs/home-redesign-decisions.md](docs/home-redesign-decisions.md) |
| Old site | `archive/` (HTML, CSS, CMS theme, screenshots), concepts in `research/` |

## Typography
- **Hero 1, H1, H2 (page titles)**: Inria Serif 700, `var(--font-family-heading-1)`. Classes `.mp_com_title`, `h2.mp_com_title > span` (accent `var(--color-mp-green-700)`).
- **Hero 2, H3, H4 (taglines, card and dialog titles)**: Inter 600, `var(--font-family-heading-2)`. Classes `.mp_features_tagline`, `.ft_info > h4`, `.mpFeaturesDetails_box h4`, `#mpSplashForm > h4`.
- **H5, H6, body, forms, buttons**: Roboto 400/500/700, `var(--font-family-body)`.

## Colour
- Page canvas `#FFFCF8` (`--color-page-bg`).
- Primary CTA `--color-mp-green-700` (`#018624`), hover `--color-mp-green-800`, focus/active `--color-mp-green-default`.
- Cards: `--color-mp-green-50` with border `--color-mp-green-200`.
- Footer / secondary: `--color-mp-blue-50`, `--color-mp-blue-800`, `--color-mp-blue-900`.
- Secondary and icon buttons: `--color-black-50`, hover `--color-black-100`.
- Controls: border `--color-border`, focus `--color-edit-border`, error `--color-error-text`.
- Buttons and inputs use a 12px radius.

## Component Classes
- Title / banner: `.mp_container`, `h2.mp_com_title`, `.mp_post`
- CTA: `.mp_community_btn`, `.btn-primary` (inline SVG arrow)
- Tagline: `.mp_features_tagline` (Inter 32/40 600)
- Feature cards: `.ft_card_wrapper`, `.ft_card`, `.ft_card_img`, `.ft_info`, `.features_details_button`
- Modals: `.mp-features-modal-overlay`, `.mp-features-modal-wrapper`, `.mp_splash_modal`, `.mps_close`, `.mpFeaturesDetails_box`, `body.mp-freeze-scroll`
- Forms: `.mp_ipbox`, `.hrip.mw50`, `.hrip.mw100`, `span.error`
- Social proof: `.mp_comm_wrapper`, `.mp_logobox`
- CMS story template: `.mp-story-template-root`, `.mp-story-toolbar-wrap`, `.mp-story-content-wrap`

## Prohibited
- Legacy colours (`#2B323C`, random hexes), legacy fonts (Poppins, Quicksand, Open Sans, Arial).

## Known CMS Issues
- **Story template forces typography with `!important`** (`p` colour black, fonts and letter-spacing on h1–h4 children, Roboto on `p *`). Every story embed needs `!important` on color / letter-spacing / font-family plus the inheritance shield: `cms-page-embed` Rule 4b. Preview with `build-preview.sh … story`.
- Top-level CMS navigation may not work across embed views; open story URLs directly from [page-urls.md](page-urls.md) to validate.
