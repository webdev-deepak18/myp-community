---
name: svk-brand-tokens
description: >-
  Use this skill whenever creating, updating, styling or reviewing pages for the SVK & Associates
  tenant (tenants/svk-associates/). Provides SVK's tokens, typography roles, palette ratios, voice,
  approved copy and the svk_ component classes. Never use it for myp-community pages, and never use
  myp-* skills for SVK pages.
---

# SVK & Associates Brand Tokens Skill

Tenant: `tenants/svk-associates/`. Read [TENANT.md](../../../tenants/svk-associates/TENANT.md) first, then follow the platform skill `cms-page-embed` for embed mechanics.

## 1. Sources of Truth
- [brand/design-system.md](../../../tenants/svk-associates/brand/design-system.md): the guide transcribed (colours, fonts, logo, voice, approved copy, components).
- [brand/tokens.css](../../../tenants/svk-associates/brand/tokens.css): copy its `:root` block verbatim into every page.
- The PDF in `brand/` wins if anything disagrees.
- Reference page: [pages/home.html](../../../tenants/svk-associates/pages/home.html).

## 2. Non-Negotiables
1. **Root:** `<div id="svk-<page>-embed" class="svk-<page>-embed">`; every selector starts with `#svk-<page>-embed`; classes use the `svk_` prefix.
2. **Colours:** only `--svk-*` tokens, or `rgba()` of their RGB. Keep the 70 / 20 / 10 balance: Cream + Dark Blue dominate, Dusty Blue supports, Copper/Taupe are accents (rules, highlights, hover states, small badges).
3. **Fonts:** Roboto (600/700) for headlines, titles, buttons and navigation; Nunito (400/600) for body, subheadings, leads and forms; Petit Formal Script only for signature-style accents (a name tag, a small label like "Our Why"). Never script for body copy, headlines or CTAs.
4. **Headings beat the host theme:** set `font-family: var(--svk-font-heading) !important` on scoped `h1–h4`, and `var(--svk-font-body) !important` on `p`.
5. **Buttons:** `.svk_btn_primary` (Dark Blue → Copper hover) on light backgrounds, `.svk_btn_light` (Cream → Copper hover) on dark ones; 6px radius; Roboto 600.
6. **Contrast:** Copper and Dusty Blue text only at large or semibold sizes (see design-system.md §1). Taupe never carries text.
7. **Voice:** strategic, objective, practical, direct. No clichés, buzzwords or unsubstantiated claims. Use copy verbatim from `source/` or the guide's approved text; never write new marketing copy.
8. **Imagery:** the client's own greyscale conceptual photos and portraits. Don't use the MyP "photo + vector network" style.

## 3. Section Rhythm (from the home page)
Hero (Dark Blue + photo overlay) → Dusty Blue marquee → Cream editorial split → Dusty-tint band → Dark Blue statement band → Cream pull quote → Dusty-tint band → Dark Blue closing/CTA. Never place two identical backgrounds next to each other.

## 4. Checklist Before Handing Over
- [ ] `:root` matches `brand/tokens.css`; no stray hex values outside it.
- [ ] No MyP tokens (`--color-mp-*`), fonts (Inria Serif, Inter) or classes (`mp_`).
- [ ] Width tiers 1200 / 1320 / 1440 with 24 / 28 / 32px padding; px units only.
- [ ] Preview with `platform/tools/preview/build-preview.sh`; `scrollWidth` equals the viewport at 390px.
- [ ] Every string traced to `source/client-home.html` or the brand guide.
