# Project Rules: 000-myp-community

## Technology & Styling Stack
- **Core**: All web pages and UI components must be built using **pure HTML5 and Vanilla CSS**.
- **No Foreign Frameworks**: Do not use TailwindCSS, Bootstrap, or other CSS frameworks unless explicitly instructed by the user.
- **Design Token Source**: Always reference and import [00-branding/tokens.css](file:///e:/HR/000-myp-community/00-branding/tokens.css) and follow [00-branding/design-system.md](file:///e:/HR/000-myp-community/00-branding/design-system.md).

---

## Brand Consistency & Token Enforcement
1. **Strict Token Adherence (Zero Invention)**:
   - Never invent arbitrary hex color codes, spacing units, or border radii.
   - Use CSS custom properties for all colors, dimensions, and typography scales (e.g., `var(--color-mp-green-700)`, `var(--color-page-bg)`, `var(--radius-button)`).
2. **Page Background**:
   - The default page canvas background is **`#FFFCF8`** (`var(--color-page-bg)`).
3. **Typography Rules**:
   - **Hero 1, H1, H2**: `Inria Serif` (Bold 700)
   - **Hero 2, H3, H4**: `Inter` (Semi Bold 600)
   - **H5, H6, Body, Paragraphs, Forms**: `Roboto` (Regular 400 / Medium 500)
4. **Interactive States**:
   - Buttons, Inputs, Accordions, and Tabs must implement explicit `default`, `hover`, `focus`, and `disabled` states as specified in `00-branding/design-system.md`.
5. **Skill Activation**:
   - Consult the `myp-brand-tokens` skill for copy-paste markup and class patterns whenever building UI elements.
