# Mandatory Brand Identity & UI Rules (multi-tenant)

This repo serves several tenants (client sites) on the MyPeople platform. **Brand rules are per tenant.**

## Non-Negotiable Directives
1. **Identify the tenant first** from the file path (`tenants/<tenant>/...`) or the request, and read `tenants/<tenant>/TENANT.md`. Ask if it's unclear.
2. **Source of truth** is that tenant's `brand/design-system.md` and `brand/tokens.css`:
   - myp-community: `tenants/myp-community/brand/` (Inria Serif / Inter / Roboto, MP green + blue, `#mp-<page>-embed`)
   - svk-associates: `tenants/svk-associates/brand/` (Roboto / Nunito / Petit Formal Script, Dark Blue + Cream + Copper, `#svk-<page>-embed`)
3. **Never mix tenants**: no tokens, fonts, classes, imagery or copy from one tenant on another tenant's page. `myp-*` skills apply only to myp-community; `svk-*` skills only to svk-associates.
4. **Every new HTML page** (any tenant):
   - Defines the tenant's `:root` variables verbatim from its `brand/tokens.css`.
   - Scopes all styles under `#<prefix>-<page>-embed` with explicit `px` units.
   - Caps desktop width at 1440px (1200 → 1320 at 1200px+ → 1440 at 1440px+).
   - Leaves font loading to the tenant's CMS template.
5. **Prohibited on every tenant**:
   - CSS frameworks (TailwindCSS, Bootstrap), jQuery or any external script dependency.
   - Invented hex codes, font weights or copy.
   - Legacy styling from a tenant's old site unless its current brand guide keeps it.
