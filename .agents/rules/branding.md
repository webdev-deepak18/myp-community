# Mandatory Brand Identity & UI Rules

All agents, workflows, and tools operating within the `000-myp-community` repository must strictly enforce the MyPeople Design System.

## Non-Negotiable Directives
1. **Source of Truth**: [00-branding/design-system.md](file:///e:/HR/000-myp-community/00-branding/design-system.md) and [00-branding/tokens.css](file:///e:/HR/000-myp-community/00-branding/tokens.css).
2. **Every New HTML Page**:
   - MUST import the official Google Fonts (`Inria Serif:700`, `Inter:600`, `Roboto:400,500,700`).
   - MUST define the official `:root` CSS variables verbatim from `00-branding/tokens.css`.
   - MUST set the canvas background to `#FFFCF8` (`var(--color-page-bg)`).
   - MUST use `Inria Serif` for main headings (H1, H2, `.mp_com_title`), `Inter` for section taglines/card headings (H3, H4, `.mp_features_tagline`, `.ft_info > h4`), and `Roboto` for body text, forms, and buttons.
   - MUST use `var(--color-mp-green-700)` (`#018624`) for primary CTA buttons (`.btn-primary`), active navigation states, and page title accent spans (`h2.mp_com_title > span`).
   - MUST use `12px` border radius on buttons and form inputs (`var(--radius-button)`, `var(--radius-input)`).
   - MUST scope all styles under `#mp-[page-name]-embed` using explicit `px` units to ensure zero CMS theme drift.
   - MUST cap desktop container width at `1440px` (`max-width: 1200px` scaling to `1320px` at 1200px+ and `1440px` at 1440px+) with balanced typography.
3. **Standard Component Classes**:
   - Page Title / Banner: `h2.mp_com_title`, `.mp_post`
   - Primary CTA: `.mp_community_btn`, `.btn-primary`
   - Section Tagline: `.mp_features_tagline` (Inter Semi Bold 600, 32px / 40px)
   - Feature Cards: `.ft_card_wrapper`, `.ft_card`, `.ft_card_img`, `.ft_info`, `.features_details_button`
   - Modals: `.mp-features-modal-overlay`, `.mp-features-modal-wrapper`, `.mp_splash_modal`, `.mpFeaturesDetails_box`, `body.mp-freeze-scroll`
   - CMS Story Template: `.mp-story-template-root`, `.mp-story-toolbar-wrap`, `.mp-story-content-wrap`
4. **Prohibited Patterns**:
   - NEVER use TailwindCSS, Bootstrap, or other CSS frameworks.
   - NEVER invent arbitrary hex codes or font weights.
   - NEVER use legacy fonts (Poppins, Quicksand, Open Sans, Arial).
   - NEVER use legacy dark gray text `#2B323C` (use `var(--color-black-default)` `#000000` or `var(--color-black-500)` `#333333`).
   - NEVER use jQuery or external script dependencies.
