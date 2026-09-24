---
name: cms-page-embed
description: >-
  Use this skill whenever building, converting, or embedding standalone HTML/CSS pages into
  a CMS (Content Management System), WYSIWYG editor, or Storyblok/HubSpot/WordPress story container.
  Enforces strict CSS scoping, pixel-anchored typography, localized resets, zero-dependency vanilla JS,
  zero outer document boilerplate, and progressive wide-screen min-width responsive scaling capped at 1440px.
---

# CMS Page Embed & Isolation Skill

This skill defines the technical standards for constructing self-contained HTML/CSS embed files designed to be pasted directly into a CMS, story format, or WYSIWYG editor without styling conflicts, while **strictly adhering to the 000-myp-community official brand design system**.

---

## 1. Non-Negotiable Rule: Zero Outer Document Boilerplate
Because the output is pasted directly into a CMS story container or rich-text block, **NEVER output standard outer document wrappers**:
- **FORBIDDEN**: `<!DOCTYPE html>`, `<html>`, `</html>`, `<head>`, `</head>`, `<meta>`, `<title>`, `<body>`, `</body>`.
- **REQUIRED FILE ORDER**:
  1. Google Fonts `<link>` stylesheet
  2. Scoped `<style>` block containing `:root` brand tokens and `#mp-[page-name]-embed` prefixed styles
  3. Single container `<div id="mp-[page-name]-embed" class="mp-[page-name]-embed">` wrapping all markup (content, modals)
  4. Vanilla `<script>` block

---

## 2. The Core Problem: Why Sizing & Layout Drift in CMS

When raw HTML/CSS is embedded into a CMS:
1. **Root Font-Size Drift**: If the CSS uses `rem` units, it inherits the host CMS's `html { font-size: ... }`. If the CMS sets root font size to `10px` or `18px`, all `rem` values scale unpredictably.
2. **Inherited Line Heights & Margins**: CMS themes often set aggressive global rules like `p { margin-bottom: 2rem !important; line-height: 1.8; }` or `h2 { font-size: 2.5rem; }` that distort embedded cards and typography.
3. **Box Model Clashing**: CMS frameworks may reset `* { box-sizing: content-box }` or apply unexpected padding to headings and containers.
4. **Style Leaking**: Unscoped styles in the embed (`body`, `a`, `h1-h6`, `button`) can corrupt the host CMS navigation and layout.

---

## 3. Mandatory Architecture Rules

### Rule 1: Root Container Encapsulation
Every embedded page must wrap ALL elements (including modals) in a single root element:
```html
<div id="mp-[page-name]-embed" class="mp-[page-name]-embed">
  <!-- All page markup and modals live here -->
</div>
```

### Rule 2: Strict Selector Scoping
Every CSS selector in the embedded `<style>` block must begin with the root ID selector `#mp-[page-name]-embed`.
- **Correct**: `#mp-[page-name]-embed .ft_card`, `#mp-[page-name]-embed h2.mp_com_title`, `#mp-[page-name]-embed .mp_features_tagline`
- **Forbidden**: `body { ... }`, `h2 { ... }`, `.ft_card { ... }` (unscoped)

### Rule 3: Absolute Pixel Anchoring (No `rem` for Fonts/Padding)
Always use explicit `px` units for:
- `font-size` (e.g. `14px`, `15px`, `20px`, `22px`, `32px`, `36px`, `40px`)
- `line-height` (e.g. `22px`, `24px`, `28px`, `40px`, `44px`, `48px`)
- `padding` and `margin` (e.g. `12px 20px`, `40px auto`)
- `border-radius` (e.g. `12px`, `16px`, `18px`)

This guarantees that **14px renders as exactly 14px in any CMS environment**.

### Rule 4: Localized Defensive Reset (Using Official Brand Tokens)
At the top of the scoped CSS, supply a localized reset targeted exclusively inside `#mp-[page-name]-embed`:
```css
#mp-[page-name]-embed {
  font-family: var(--font-family-body);
  font-size: 14px;
  line-height: 22px;
  color: var(--color-black-default);
  background-color: var(--color-page-bg);
  text-align: left;
  width: 100%;
  position: relative;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  padding: 0;
}

#mp-[page-name]-embed *,
#mp-[page-name]-embed *::before,
#mp-[page-name]-embed *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#mp-[page-name]-embed img,
#mp-[page-name]-embed svg {
  vertical-align: middle;
}
```

### Rule 5: Wide-Screen `min-width` Tiers (Capped at 1440px Max-Width)
The maximum container width for all desktop embeds is capped at **`1440px`**, scaling cleanly from laptops to large desktops:
```css
/* Base Desktop / Laptops */
#mp-[page-name]-embed .mp_container {
  width: 100%;
  max-width: 1200px;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;
  position: relative;
}

/* 1200px+: Medium-to-Large Desktop */
@media screen and (min-width: 1200px) {
  #mp-[page-name]-embed .mp_container {
    max-width: 1320px;
    padding-left: 28px;
    padding-right: 28px;
  }
  #mp-[page-name]-embed h2.mp_com_title {
    font-size: 38px;
    line-height: 46px;
  }
  #mp-[page-name]-embed .mp_features_tagline {
    font-size: 34px;
    line-height: 42px;
    margin-top: 48px;
  }
  #mp-[page-name]-embed .ft_card_wrapper {
    gap: 28px;
    margin-top: 40px;
  }
  #mp-[page-name]-embed .ft_info > h4 {
    font-size: 21px;
    line-height: 29px;
  }
  #mp-[page-name]-embed .ft_info > p {
    font-size: 15px;
    line-height: 24px;
  }
}

/* 1440px+: Maximum Desktop Ceiling */
@media screen and (min-width: 1440px) {
  #mp-[page-name]-embed .mp_container {
    max-width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
  #mp-[page-name]-embed h2.mp_com_title {
    font-size: 40px;
    line-height: 48px;
    margin: 44px auto 18px auto;
  }
  #mp-[page-name]-embed .mp_features_tagline {
    font-size: 36px;
    line-height: 44px;
    margin-top: 52px;
  }
  #mp-[page-name]-embed .ft_card_wrapper {
    gap: 30px;
    margin-top: 44px;
  }
  #mp-[page-name]-embed .ft_card {
    padding: 30px 30px 26px 30px;
    border-radius: 18px;
  }
  #mp-[page-name]-embed .ft_info > h4 {
    font-size: 22px;
    line-height: 30px;
  }
  #mp-[page-name]-embed .ft_info > p {
    font-size: 15px;
    line-height: 25px;
  }
  #mp-[page-name]-embed .btn-primary {
    height: 52px;
    padding: 20px 28px;
    font-size: 15px;
  }
}
```

### Rule 6: Zero-Dependency Vanilla JavaScript
- Never rely on external jQuery (`$` or `jQuery`) being present in the host CMS.
- Use `document.querySelectorAll` and scoped event delegation inside the root container.
- For modals, attach handlers to data attributes (`data-modal="modalId"`, `data-close-modal`) and manage `display: none` / `display: flex` cleanly.
- Body scroll locking (`body.mp-freeze-scroll`) must be safely toggled and cleaned up on close.

---

## 4. CMS Master Story Template Architecture
When embedding via a CMS master story template (such as `pages/templates/00_Myp-Community-Pages.html`):
1. **Neutralize CMS Host Bootstrap Constraints**:
   Host CMS page wrappers often place the story template inside `.ContentArea > .container` with Bootstrap's hardcoded `width: 1170px` (or `width: 970px`). The story template must explicitly reset these constraints:
   ```css
   .ContentArea,
   .ContentArea > .container,
   .ContentArea .container {
       width: 100% !important;
       max-width: 100% !important;
       padding-left: 0 !important;
       padding-right: 0 !important;
       margin-left: 0 !important;
       margin-right: 0 !important;
   }
   .ContentArea > .row,
   .ContentArea .row {
       margin-left: 0 !important;
       margin-right: 0 !important;
   }
   ```
2. **Eliminate Bootstrap Markup inside Templates**:
   Never wrap `$desc_long` in `<div class="row"><div class="container">...<div class="col-md-12">`.
   Use clean semantic wrappers:
   ```html
   <div class="mp-story-template-root">
       <div class="mp-story-toolbar-wrap">
           $designAttribute:story_edit_link $storyToolBar
       </div>
       <div class="mp-story-content-wrap">
           $desc_long
       </div>
   </div>
   $designAttribute:masterD_no_sidebar
   ```
