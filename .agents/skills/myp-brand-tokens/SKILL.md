---
name: myp-brand-tokens
description: >-
  Use this skill whenever creating, updating, styling, or inspecting raw HTML and CSS pages,
  components, layouts, or design tokens for the 000-myp-community project. Enforces strict
  compliance with 00-branding/design-system.md and tokens.css.
---

# 000-myp-community Brand Guidelines & Token Skill

This skill provides the exact specifications, CSS variable tokens, and semantic HTML markup standards for all web pages and components in the **000-myp-community** codebase.

All pages in this project are constructed using **pure HTML and Vanilla CSS** adhering 100% to [00-branding/design-system.md](file:///e:/HR/000-myp-community/00-branding/design-system.md).

---

## 1. Core Rule: Zero Token Invention
- **Never hardcode ad-hoc hex codes or random padding/radii.**
- Always reference CSS custom properties defined in [00-branding/tokens.css](file:///e:/HR/000-myp-community/00-branding/tokens.css).
- Always include the Google Fonts import:
  `Inria Serif` (700 Bold), `Inter` (600 Semi Bold), and `Roboto` (400 Regular, 500 Medium, 700 Bold).

---

## 2. Typography Token Reference

| Scale Token | Font Family | Size | Weight | Line Height | Letter Spacing | CSS Utility |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero 1** | Inria Serif | 56px | 700 (Bold) | 64px | -0.25px | `.font-hero-1` |
| **Hero 2** | Inter | 48px | 600 (Semi Bold) | 56px | -0.25px | `.font-hero-2` |
| **H1** | Inria Serif | 40px | 700 (Bold) | 48px | -0.25px | `.font-h1` |
| **H2** | Inria Serif | 36px | 700 (Bold) | 44px | -0.25px | `.font-h2` |
| **H3** | Inter | 32px | 600 (Semi Bold) | 40px | 0px | `.font-h3` |
| **H4** | Inter | 28px | 600 (Semi Bold) | 36px | 0px | `.font-h4` |
| **H5** | Roboto | 24px | 500 (Medium) | 32px | 0px | `.font-h5` |
| **H6** | Roboto | 20px | 500 (Medium) | 38px | 0px | `.font-h6` |
| **Body Text** | Roboto | 14px | 400 (Regular) | 22px | 0px | `.font-body-text` |
| **Body Large** | Roboto | 16px | 500 (Medium) | 24px | 0px | `.font-body-large` |
| **Body Small** | Roboto | 13px | 400 (Regular) | 20px | 0px | `.font-body-small` |
| **Body Extra Small** | Roboto | 12px | 400 (Regular) | 16px | 0px | `.font-body-extra-small` |
| **Paragraph Large** | Roboto | 18px | 400 (Regular) | 32px | 0px | `.font-paragraph-large` |
| **Paragraph Medium** | Roboto | 16px | 400 (Regular) | 28px | 0px | `.font-paragraph-medium` |
| **Paragraph Small** | Roboto | 14px | 400 (Regular) | 24px | 0px | `.font-paragraph-small` |
| **Form Label** | Roboto | 14px | 500 (Medium) | 24px | 0px | `.font-form-label` |
| **Form Label Large** | Roboto | 20px | 400 (Regular) | 28px | 0px | `.font-form-label-large` |

---

## 3. Color Token Mapping

- **Canvas / Page Background**: `var(--color-page-bg)` (`#FFFCF8`)
- **Text**: `var(--color-text)` (`#000000`)
- **Interactive Link**: `var(--color-text-link)` (`#02588E`)
- **Border**: `var(--color-border)` (`#CCCCCC`)
- **Primary Green Scale**: `var(--color-mp-green-50)` to `var(--color-mp-green-900)` (Brand Default: `#02A82D`, Button Primary: `#018624`)
- **Secondary Blue Scale**: `var(--color-mp-blue-50)` to `var(--color-mp-blue-900)` (Brand Default: `#396B7E`)
- **Semantic States**:
  - Success: BG `var(--color-success-bg)` (`#E5F6E9`), Border `var(--color-success-border)` (`#28C841`), Text `var(--color-success-text)` (`#018624`)
  - Error: BG `var(--color-error-bg)` (`#FFE3E3`), Border `var(--color-error-border)` (`#E06764`), Text `var(--color-error-text)` (`#E13838`)
  - Alert: BG `var(--color-alert-bg)` (`#FFF4E5`), Border `var(--color-alert-border)` (`#FCBE67`), Text `var(--color-alert-text)` (`#FB9302`)
  - Edit / Info: BG `var(--color-edit-bg)` (`#E8F2FD`), Border `var(--color-edit-border)` (`#5099EC`), Text `var(--color-edit-text)` (`#1E66BA`)
- **Neutral Scale**: `var(--color-black-50)` (`#F2F2F2`) to `var(--color-black-default)` (`#000000`)

---

## 4. Standard HTML & CSS Patterns

### Button Component
```html
<!-- Primary Button (Large, Medium, Small) -->
<button class="btn btn-primary btn-large">
  <span>Button Label</span>
</button>

<!-- Secondary Button -->
<button class="btn btn-secondary btn-medium">
  <span>Button Label</span>
</button>

<!-- Bordered Button -->
<button class="btn btn-bordered btn-small">
  <span>Button Label</span>
</button>

<!-- Icon Button (Circular or Rounded-Square) -->
<button class="btn btn-primary btn-icon shape-circle btn-medium">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">...</svg>
</button>
```

### Form Input Component
```html
<div class="input-wrapper">
  <label class="input-label font-form-label">
    Field Label <span class="input-mandatory font-body-small">(Mandatory)</span>
  </label>
  <div class="input-field">
    <input type="text" placeholder="Placeholder text" />
  </div>
  <div style="display: flex; justify-content: space-between;">
    <span class="input-helper font-body-extra-small">Help text goes here...</span>
    <span class="input-helper font-body-extra-small">100/100</span>
  </div>
</div>
```

### Accordion Component
```html
<div class="accordion-item" onclick="this.classList.toggle('is-open')">
  <div style="display: flex; align-items: center; gap: 12px;">
    <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
      <!-- Left icon (16x16px) -->
    </div>
    <span class="font-form-label">Default State</span>
  </div>
  <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
    <!-- Right arrow indicator -->
  </div>
</div>
```

### Tags and Status Pills
```html
<!-- Neutral Tag -->
<div class="tag-badge tag-neutral">
  <span>Tag Name (Group_001)</span>
  <button style="border:none; background:none; cursor:pointer;">+</button>
</div>

<!-- Success Tag -->
<div class="tag-badge tag-success">
  <span>Active Status</span>
</div>
```

### Data Table
```html
<table class="data-table">
  <thead>
    <tr>
      <th>Table Header (TH)</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table Data (TD)</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
```
