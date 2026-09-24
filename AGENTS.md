# Project Rules: 000-myp-community

## 1. Story / WYSIWYG Embed Format (NO Outer Document Tags)
- **Zero Full-Document Boilerplate**: Because pages are deployed via CMS Story Editors / WYSIWYG containers, NEVER include:
  - `<!DOCTYPE html>`
  - `<html>` or `</html>`
  - `<head>` or `</head>`
  - `<meta>` tags
  - `<title>` tags
  - `<body>` or `</body>` tags
- **Required Single-File Embed Structure**: Every HTML file in `pages/` MUST follow this exact top-to-bottom order:
  1. **Google Fonts `<link>` Tags**:
     ```html
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:wght@700&family=Inter:wght@600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
     ```
  2. **Scoped `<style>` Block**: Embedded `:root` token variables from `00-branding/tokens.css` and all scoped CSS rules prefixed with `#mp-[page-name]-embed`.
  3. **Root Container `<div>`**: `<div id="mp-[page-name]-embed" class="mp-[page-name]-embed">` wrapping ALL HTML elements (content, overlays, modals).
  4. **Vanilla `<script>` Block**: Self-contained Vanilla JS (zero external libraries, zero jQuery).

---

## 2. Mandatory Branding Requirement for ALL HTML Pages
- **Strict Brand Design System**: EVERY page or component MUST strictly implement the official brand design system defined in [00-branding/design-system.md](file:///e:/HR/000-myp-community/00-branding/design-system.md) and [00-branding/tokens.css](file:///e:/HR/000-myp-community/00-branding/tokens.css).
- **Zero Legacy Styling**: Under no circumstance should legacy website colors (e.g., `#2B323C`, random hexes), legacy fonts (e.g., Poppins, Quicksand, Open Sans), or external CSS frameworks (TailwindCSS, Bootstrap) be used.
- **Zero Token Invention**: All colors, font families, font weights, font sizes, line heights, border radii, and spacing MUST originate from `00-branding/tokens.css`. Never invent arbitrary hex codes or margins.

---

## 3. Typography Rules
- **Hero 1, H1, H2 (Page Titles)**: `Inria Serif` (Bold 700) -> `var(--font-family-heading-1)`
  - Class: `.mp_com_title`, `h2.mp_com_title > span` (accent color `var(--color-mp-green-700)`)
- **Hero 2, H3, H4 (Section Taglines, Card Titles, Dialog Titles)**: `Inter` (Semi Bold 600) -> `var(--font-family-heading-2)`
  - Classes: `.mp_features_tagline`, `.ft_info > h4`, `.mpFeaturesDetails_box h4`, `#mpSplashForm > h4`
- **H5, H6, Body, Paragraphs, Forms, Buttons**: `Roboto` (Regular 400 / Medium 500 / Bold 700) -> `var(--font-family-body)`
  - Classes: `p`, `.btn-primary`, `.btn-secondary`, `.features_details_button`, `label`, `input`, `select`, `textarea`, `span.error`

---

## 4. Color Palette Enforcement
- **Page Canvas Background**: `#FFFCF8` (`var(--color-page-bg)`).
- **Primary CTA & Active Elements**: `var(--color-mp-green-700)` (`#018624`).
  - Hover: `var(--color-mp-green-800)` (`#00651B`).
  - Focus / Active: `var(--color-mp-green-default)` (`#02A82D`).
- **Surface & Cards Tint**: `var(--color-mp-green-50)` (`#F2FBF5`) with border `var(--color-mp-green-200)` (`#CBEED5`).
- **Footer & Secondary Background**: `var(--color-mp-blue-50)` (`#F5F7F8`), `var(--color-mp-blue-800)` (`#22404B`), `var(--color-mp-blue-900)` (`#162B32`).
- **Secondary Buttons & Icon Buttons**: `var(--color-black-50)` (`#F2F2F2`) with hover `var(--color-black-100)` (`#E4E4E4`).
- **Borders & Controls**: `var(--color-border)` (`#CCCCCC`), focus `var(--color-edit-border)` (`#5099EC`), errors `var(--color-error-text)` (`#E13838`).

---

## 5. Standard Component Class Architecture
- **Page Title & Banner**: `.mp_container`, `h2.mp_com_title`, `.mp_post`
- **CTA Button**: `.mp_community_btn`, `.btn-primary` (with inline SVG arrow)
- **Section Tagline / Subtitle**: `.mp_features_tagline` (Inter 32px / 40px Semi Bold 600)
- **Feature Cards**: `.ft_card_wrapper`, `.ft_card`, `.ft_card_img`, `.ft_info`, `.features_details_button`
- **Modals & Overlays**: `.mp-features-modal-overlay`, `.mp-features-modal-wrapper`, `.mp_splash_modal`, `.mps_close`, `.mpFeaturesDetails_box`, `body.mp-freeze-scroll`
- **Form Controls**: `.mp_ipbox`, `.hrip.mw50`, `.hrip.mw100`, `span.error`
- **Social Proof**: `.mp_comm_wrapper`, `.mp_logobox`
- **CMS Master Story Template**: `.mp-story-template-root`, `.mp-story-toolbar-wrap`, `.mp-story-content-wrap`

---

## 6. CMS Isolation & Scoping Standards
- **Root Container**: Every page must encapsulate all content inside `#mp-[page-name]-embed`.
- **Selector Scoping**: All CSS rules must be prefixed with `#mp-[page-name]-embed` to prevent CMS theme bleeding.
- **Pixel-Anchored Units**: All font sizes, line heights, paddings, and radii must use explicit `px` units (never `rem`) to protect against CMS host root font-size scaling.

---

## 7. Wide-Screen Layout Standards (Max-Width Capped at 1440px)
- **Container Max-Width Ceiling**: All desktop containers (`.mp_container`) must be capped at a maximum width of `1440px`.
- **Progressive Container Scaling**:
  - Base / Laptop: `max-width: 1200px; padding: 0 24px;`
  - `@media screen and (min-width: 1200px)`: `max-width: 1320px; padding: 0 28px;`
  - `@media screen and (min-width: 1440px)` (Maximum Ceiling): `max-width: 1440px; padding: 0 32px;`
- **Dynamic Typography & Card Scaling**: Headings, body text, hero banners, buttons, and card padding must scale gracefully across these tiers and remain balanced at the 1440px max-width ceiling.

---

## 8. Skill Activation
Whenever building, modifying, or auditing pages:
1. Activate `myp-brand-tokens` for exact CSS classes, tokens, and UI component structures.
2. Activate `cms-page-embed` for CMS isolation, reset patterns, vanilla modal handling, and wide-screen responsiveness.
