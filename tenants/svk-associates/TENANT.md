# Tenant: SVK & Associates (svkassociates.com)

A client of the MyPeople platform: executive coaching, GTM advisory and fractional leadership for founders and CEOs.
Platform rules in the root `AGENTS.md` apply; this file adds the SVK brand. **Never use MyP tokens, fonts, classes or imagery here.**

| Item | Value |
| :--- | :--- |
| Live site | https://svkassociates.com/ (current WordPress/Avada site; the platform pages will replace it) |
| Root-ID prefix | `#svk-<page>-embed` (e.g. `#svk-home-embed`); class prefix `svk_` |
| Brand source | [brand/SVK Brand Guide - 2026-06-30.pdf](brand/SVK%20Brand%20Guide%20-%202026-06-30.pdf), transcribed in [brand/design-system.md](brand/design-system.md); tokens in [brand/tokens.css](brand/tokens.css) |
| Skills | `svk-brand-tokens` (+ platform `cms-page-embed`). The `myp-*` skills do NOT apply. |
| Fonts (the SVK CMS template must load them) | Roboto 600/700, Nunito 400/600, Petit Formal Script 400. See [preview-head.html](preview-head.html). |
| CMS template | Logged-out home: `pages/templates/svk-logout-home-template.html` (working copy of `source/templates/logout_home_2023.html`). It loads the SVK fonts and holds the site header (`#svk-header-embed`: nav from the Sept 2026 "Recommended New Structure" PDF, submenu items are `#` placeholders) and footer (`#svk-footer-embed`, matches the current site). `$designAttribute:*`, `$desc_long`, the login button's `new-login`/`data-*` attributes and the menu script must stay untouched. Size ~56 KB; keep under ~60 KB (`wc -c`). Pages assume no header/footer inside the embed, and the hero height assumes a header of about 120px. |
| Logos (CDN, 400px) | Blue (light backgrounds): `https://public-cdn.svk.myp.community/images/svk-associates-logo-blue-transparent-400px.jpg`<br>White (dark backgrounds): `https://public-cdn.svk.myp.community/images/svk-associates-logo-white-transparent-400px.jpg`<br>Served as `image/jpeg`, so despite the name they may not be truly transparent; check on non-matching backgrounds. |
| Images | Hotlinked from the client's current site (`svkassociates.com/wp-content/uploads/...`, `susanvanklink.com/wp-content/uploads/...`). Move them to a CDN before the old site is retired. |
| Old site reference | [source/client-home.html](source/client-home.html) (saved home page: exact copy, image URLs, Mailchimp form) |

## Pages

| Page | File | Status |
| :--- | :--- | :--- |
| Home | [pages/home.html](pages/home.html) | Built 2026-10-14, previewed at 1440 and 390px; not yet deployed |
| Sample Webcast | [pages/sample-webcast.html](pages/sample-webcast.html) | Built 2026-10-27; landing page with purchase flow & filler |
| Growth Workshops Registration | [pages/growth-register.html](pages/growth-register.html) | Built 2026-10-29; checkout page for visitors from the Lovable microsite ([source/lovable-registration-page.html](source/lovable-registration-page.html)). 4 products; product IDs (`PRODUCT_ID_*`) and prices (US$1,500 placeholder) still to fill in |

Old-site navigation (pages still to build): About `/about/`, Services `/services/` (Executive Coaching, Go To Market (GTM) Advisory, Revenue Flywheel, Fractional Leadership), Get Started `/get-started/`, Book Now `/book-now/`, Our Team `/our-team/`, Resources `/resources/`, Contact `/contact/`.

## Integrations
- **Newsletter:** Mailchimp form on the home page posts to `https://emotionatwork.us11.list-manage.com/subscribe/post?u=d5087f44ef875442cb22e27fa&id=5a11fb6fce&f_id=003e94e0f0` (fields `EMAIL`*, `FNAME`*, `LNAME`, interest group `group[34909][1|2|4|8]`, honeypot `b_d5087f44ef875442cb22e27fa_5a11fb6fce`).
- **Social:** X `https://twitter.com/svanklink`, LinkedIn `https://www.linkedin.com/company/susanvanklink-com/about/`.

## Content Notes
- Copy comes from `source/client-home.html` and the brand guide's approved text (`brand/design-system.md` §5), both verbatim.
- Some testimonials name other team members ("Lisa", "John"), and one has the typo "sprit". They're kept verbatim; confirm with the client before changing.
