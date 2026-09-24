---
name: myp-brand-tokens
description: >-
  Use this skill whenever creating, updating, styling, or inspecting raw HTML and CSS pages,
  components, layouts, or design tokens for the 000-myp-community project. Enforces strict
  compliance with 00-branding/design-system.md, tokens.css, and production pages.
---

# 000-myp-community Brand Guidelines & Token Skill

This skill provides the exact specifications, CSS variable tokens, and semantic HTML markup standards for all web pages and components in the **000-myp-community** codebase.

**MANDATORY RULE**: Every new HTML file created anywhere in this repository MUST strictly follow the design system defined in [00-branding/design-system.md](file:///e:/HR/000-myp-community/00-branding/design-system.md) and [00-branding/tokens.css](file:///e:/HR/000-myp-community/00-branding/tokens.css).

---

## 1. Core Rule: Zero Token Invention
- **Never hardcode ad-hoc hex codes or random padding/radii.**
- Always reference CSS custom properties defined in [00-branding/tokens.css](file:///e:/HR/000-myp-community/00-branding/tokens.css).
- Always include the official Google Fonts import:
  `Inria Serif` (700 Bold), `Inter` (600 Semi Bold), and `Roboto` (400 Regular, 500 Medium, 700 Bold).
- The page canvas background is always `#FFFCF8` (`var(--color-page-bg)`).

---

## 2. Typography Token Reference

| Scale Token | Font Family | Size | Weight | Line Height | Letter Spacing | CSS Property / Utility |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero 1** | Inria Serif | 56px | 700 (Bold) | 64px | -0.25px | `font-family: var(--font-family-heading-1); font-size: 56px;` |
| **Hero 2** | Inter | 48px | 600 (Semi Bold) | 56px | -0.25px | `font-family: var(--font-family-heading-2); font-size: 48px;` |
| **H1** | Inria Serif | 40px | 700 (Bold) | 48px | -0.25px | `font-family: var(--font-family-heading-1); font-size: 40px;` |
| **H2 / Page Title** | Inria Serif | 36px | 700 (Bold) | 44px | -0.25px | `font-family: var(--font-family-heading-1); font-size: 36px;` |
| **H3 / Section Tagline** | Inter | 32px | 600 (Semi Bold) | 40px | 0px | `font-family: var(--font-family-heading-2); font-size: 32px;` |
| **H4 / Card Title** | Inter | 28px / 20px | 600 (Semi Bold) | 36px / 28px | 0px | `font-family: var(--font-family-heading-2); font-size: 28px;` |
| **H5** | Roboto | 24px | 500 (Medium) | 32px | 0px | `font-family: var(--font-family-body); font-size: 24px;` |
| **H6** | Roboto | 20px | 500 (Medium) | 38px | 0px | `font-family: var(--font-family-body); font-size: 20px;` |
| **Body Text** | Roboto | 14px | 400 (Regular) | 22px | 0px | `font-family: var(--font-family-body); font-size: 14px;` |
| **Body Large** | Roboto | 16px | 500 (Medium) | 24px | 0px | `font-family: var(--font-family-body); font-size: 16px;` |
| **Body Small** | Roboto | 13px | 400 (Regular) | 20px | 0px | `font-family: var(--font-family-body); font-size: 13px;` |
| **Body Extra Small / Errors** | Roboto | 12px | 400 (Regular) | 16px | 0px | `font-family: var(--font-family-body); font-size: 12px;` |
| **Paragraph Large** | Roboto | 18px | 400 (Regular) | 32px | 0px | `font-family: var(--font-family-body); font-size: 18px;` |
| **Paragraph Medium** | Roboto | 16px | 400 (Regular) | 28px | 0px | `font-family: var(--font-family-body); font-size: 16px;` |
| **Paragraph Small** | Roboto | 14px | 400 (Regular) | 24px | 0px | `font-family: var(--font-family-body); font-size: 14px;` |
| **Form Label** | Roboto | 14px | 500 (Medium) | 24px | 0px | `font-family: var(--font-family-body); font-size: 14px;` |
| **Form Label Large** | Roboto | 20px | 400 (Regular) | 28px | 0px | `font-family: var(--font-family-body); font-size: 20px;` |

---

## 3. Color Token Mapping

- **Canvas / Page Background**: `var(--color-page-bg)` (`#FFFCF8`)
- **Default Text**: `var(--color-black-default)` (`#000000`)
- **Interactive Link**: `var(--color-text-link)` (`#02588E`)
- **Neutral Border**: `var(--color-border)` (`#CCCCCC`)
- **Primary 1 (MP-Green Scale)**:
  - 50: `#F2FBF5` (Card background surface)
  - 100: `#E5F6E9` (Success background)
  - 200: `#CBEED5` (Card border)
  - 300: `#98DCAB` (Card hover border)
  - 400: `#66CB81`
  - 500: `#34B957`
  - Default: `#02A82D` (Primary button `:focus` / active state)
  - 700: `#018624` (Primary button standard background, active nav link, title highlighted `span`, checkbox accent)
  - 800: `#00651B` (Primary button `:hover` state)
  - 900: `#004213`
- **Primary 2 (MP-Blue Scale)**:
  - 50: `#F5F7F8` (Footer & secondary background)
  - 200: `#D7E1E3` (Footer links / muted slate border)
  - 300: `#AFC4CB` (Footer sublinks / secondary accent)
  - Default: `#396B7E` (Footer icons)
  - 700: `#2D5564` (Footer dividers)
  - 800: `#22404B` (Footer mid background)
  - 900: `#162B32` (Footer main dark background)
- **Semantic Palettes**:
  - Success: BG `var(--color-success-bg)` (`#E5F6E9`), Border `var(--color-success-border)` (`#28C841`), Text `var(--color-success-text)` (`#018624`)
  - Error: BG `var(--color-error-bg)` (`#FFE3E3`), Border `var(--color-error-border)` (`#E06764`), Text `var(--color-error-text)` (`#E13838`)
  - Alert: BG `var(--color-alert-bg)` (`#FFF4E5`), Border `var(--color-alert-border)` (`#FCBE67`), Text `var(--color-alert-text)` (`#FB9302`)
  - Edit: BG `var(--color-edit-bg)` (`#E8F2FD`), Border `var(--color-edit-border)` (`#5099EC`), Text `var(--color-edit-text)` (`#1E66BA`)
- **Black / Neutral Scale**:
  - 50: `#F2F2F2` (Secondary buttons, modal close backgrounds, detail icon button backgrounds)
  - 100: `#E4E4E4` (Secondary button hover, subtle divider borders)
  - 200: `#CCCCCC` (Disabled buttons, input borders)
  - 300: `#999999` (Placeholder text)
  - 400: `#666666` (Sub-labels, secondary metadata)
  - 500: `#333333` (Card body text, icons)
  - Default: `#000000` (High-contrast headings, main text)

---

## 4. Standard Component Markup & Class Architecture

### A. Title & Banner Header
```html
<div class="mp_container">
  <h2 class="mp_com_title"><span>MyPeople</span> Features</h2>
  <div class="mp_post">
    <img src="https://mypeople.ai/images/mp_features_banner.png" alt="Features Overview">
  </div>
</div>
```

### B. Primary CTA Button
```html
<!-- Primary Button (Medium 50px, Pad 20px 24px, Radius 12px) -->
<div class="mp_community_btn">
  <button type="button" class="btn-primary" data-open-contact="">
    <span>Book 30-Minute Discovery Call</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 14.857 12.828" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 12.5h12.857m-5-5 5 5-5 5" transform="translate(-3 -6.086)" />
    </svg>
  </button>
</div>
```

### C. Section Tagline / Subtitle
```html
<h3 class="mp_features_tagline">One Platform. Every Capability Your Community Needs.</h3>
```

### D. Feature / Content Card Grid
```html
<div class="mp_container">
  <div class="ft_card_wrapper">
    <div class="ft_card">
      <div class="ft_card_img">
        <img src="https://mypeople.ai/images/mp_features_01.png" alt="Site Designer" loading="lazy">
      </div>
      <div class="ft_info">
        <h4>Site Designer</h4>
        <p>From the comfort of a browser, create the community site of your dreams...</p>
        <button type="button" class="features_details_button" data-modal="mpModal01" aria-label="View details">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
```

### E. Form Input Grid & Field Controls
```html
<div class="mp_ipbox">
  <div class="hrip mw50">
    <label for="firstName">First Name</label>
    <input type="text" name="firstName" id="firstName" placeholder="First Name">
    <span class="error" id="errFirstName">Please enter valid first name</span>
  </div>
  <div class="hrip mw100">
    <label for="subject">Subject</label>
    <select name="subject" id="subject">
      <option value="" selected disabled>Choose a subject</option>
      <option value="Discovery">Discovery Call</option>
    </select>
  </div>
</div>
```

### F. Modal Overlays & Detail Dialog
```html
<div class="mp-features-modal-overlay" id="mpModalOverlay"></div>
<div class="mp-features-modal-wrapper" id="mpSplashModal">
  <div class="mp_splash_modal">
    <div class="mps_close" data-close-modal="" aria-label="Close modal">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
        <path d="M27.523,9.523l-2-2-8,8-8-8-2,2,8,8-8,8,2,2,8-8,8,8,2-2-8-8Z" transform="translate(-7.523 -7.523)"/>
      </svg>
    </div>
    <!-- Modal content / form / details box -->
  </div>
</div>
```

### G. Social Proof & Logo Showcase
```html
<div class="mp_comm_wrapper">
  <div class="mp_container">
    <h2 class="mp_com_title"><span>Trusted by</span> Leading Communities</h2>
    <div class="mp_comm_box">
      <div class="mp_logobox">
        <img src="https://mypeople.ai/images/logo1.png" alt="Partner Logo" loading="lazy">
      </div>
    </div>
  </div>
</div>
```

---

## 5. Pre-Commit Brand Audit Checklist
Before submitting any new or modified HTML file:
1. **Google Fonts Linked**: Verify `Inria Serif`, `Inter`, and `Roboto` are imported.
2. **Zero Inventions**: Run a regex search for raw hex codes outside `:root`. Verify no `#2B323C` or legacy colors exist.
3. **Canvas Background**: Verify the page canvas is `#FFFCF8`.
4. **CTA Buttons**: Verify primary buttons use `var(--color-mp-green-700)` with `12px` border-radius.
5. **Headings**: Verify H1/H2 use `var(--font-family-heading-1)` (Inria Serif) and H3/H4 use `var(--font-family-heading-2)` (Inter).
6. **Scoping**: Verify all elements are enclosed within `#mp-[page-name]-embed`.
7. **Container Width & Font Scaling**: Verify container width is capped at `1440px` (`max-width: 1200px` scaling to `1320px` at 1200px+ and `1440px` at 1440px+) with proportionally balanced typography.
