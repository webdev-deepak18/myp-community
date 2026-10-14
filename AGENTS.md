# Project Rules: MyPeople Platform (multi-tenant)

This repo holds the website pages for every **tenant** (client site) running on the MyPeople platform.
All tenants share the same CMS, embed format and build rules (the **platform** layer). Each tenant has its own brand, content, pages and URLs.

```
AGENTS.md, README.md        platform rules (this file)
platform/                   shared tooling + docs (preview/capture tools, CMS lessons)
tenants/<tenant>/           one folder per client site
  TENANT.md                 READ FIRST: brand, fonts, root-ID prefix, skills, URLs, CDN
  brand/  pages/  docs/ ... tenant-owned files
.agents/skills/             canonical skills (platform skills + tenant-prefixed skills)
.claude/                    Claude Code wrappers + agents
```

| Tenant | Folder | Root-ID prefix | Brand skill |
| :--- | :--- | :--- | :--- |
| MyPeople Community (myp.community) | `tenants/myp-community/` | `#mp-<page>-embed` | `myp-brand-tokens` |
| SVK & Associates (svkassociates.com) | `tenants/svk-associates/` | `#svk-<page>-embed` | `svk-brand-tokens` |

---

## 0. Identify the Tenant First (non-negotiable)
- Work out the tenant from the file path (`tenants/<tenant>/...`) or the user's request. If it's unclear, ask.
- Read `tenants/<tenant>/TENANT.md` before building anything. It names the brand files, fonts, prefix and tenant skills to use.
- **Never mix tenants**: no MyP tokens, fonts, classes, imagery or copy on an SVK page, and vice versa. A skill whose name starts with a tenant prefix (`myp-`, `svk-`) applies **only** to that tenant.
- New session? Read the tenant's `docs/session-handoff.md` if it has one.

---

## 1. Embed Format (NO Outer Document Tags)
- Pages are deployed via CMS Story Editors / WYSIWYG containers, so NEVER include `<!DOCTYPE html>`, `<html>`, `<head>`, `<meta>`, `<title>` or `<body>`.
- Every page in `tenants/<tenant>/pages/` MUST follow this order:
  1. **Scoped `<style>` block**: the tenant's `:root` tokens (from its `brand/tokens.css`) and all rules prefixed with the root ID. Google Fonts `<link>` tags are loaded by the tenant's CMS template, not by the page.
  2. **One root `<div id="<prefix>-<page>-embed" class="<prefix>-<page>-embed">`** wrapping ALL markup (content, overlays, modals, fixed bars).
  3. **One vanilla `<script>` block**: no libraries, no jQuery.

## 2. Brand Comes From the Tenant
- Every colour, font family, weight, size, line height, radius and spacing comes from the tenant's `brand/tokens.css` (or `rgba()` of a token's RGB). Never invent hex codes.
- No CSS frameworks (Tailwind, Bootstrap) and no legacy styling from the tenant's old site unless its brand guide keeps it.
- Typography roles, CTA colours and component classes are defined per tenant in `TENANT.md` and its brand skill.

## 3. CMS Isolation & Scoping
- Every selector starts with the root ID (except `:root`, `@keyframes` and a body scroll-lock class).
- Explicit `px` for font sizes, line heights, padding, margins and radii (never `rem`).
- Defensive local reset inside the root; neutralise host clearfix pseudo-elements on flex/grid containers.

## 4. Wide-Screen Layout (max 1440px)
- Container: base `max-width: 1200px; padding: 0 24px` → `@media (min-width: 1200px)` `1320px / 28px` → `@media (min-width: 1440px)` `1440px / 32px`.
- Headings, body, buttons and card padding scale across these tiers and stay balanced at 1440px.

## 5. Strict Content Fidelity (Zero Invention)
- Never invent text, claims, statistics, testimonials or cards. Use the exact copy from the user's prompt, screenshots, the tenant's brand guide or its old-site source files.
- If a section only has a heading and paragraph, render only those. No filler items.
- Keep source copy verbatim (including the client's own typos); flag doubtful copy to the user instead of fixing it silently.

## 6. Skills
Canonical skills live in `.agents/skills/`; Claude Code discovers them through thin wrappers in `.claude/skills/`. Edit only the canonical files.

| Skill | Scope | Use for |
| :--- | :--- | :--- |
| `ai-task-routing` | platform | Start of every request: Claude vs Gemini |
| `cms-page-embed` | platform | Embed format, isolation, reset, vanilla modals, width tiers |
| `myp-brand-tokens`, `myp-bold-sections`, `myp-image-style` | myp-community only | MyP tokens/classes, bold section patterns, image style |
| `svk-brand-tokens` | svk-associates only | SVK tokens, type roles, palette ratios, components |

## 7. Two-Agent Workspace (Antigravity: Claude + Gemini 3.1 Pro)
- Neither agent can call the other; the user routes work.
- At the start of every request, check `.agents/skills/ai-task-routing/SKILL.md`. If part of the task suits the other agent better (Gemini: image generation, browser visual QA, bulk mechanical edits, PDF/screenshot extraction; Claude: architecture, interactive JS, audits, planning, skills), say so in one line and write a handoff brief to `tenants/<tenant>/docs/handoffs/`.
- Work handed back from either agent is audited with `.claude/agents/brand-auditor.md` before it counts as done.

## 8. Images
- Each tenant's `TENANT.md` defines its image style, local folder and CDN base. Reference images CDN-first with a local `onerror` fallback, and upload to the CDN before publishing.

## 9. Preview & QA
- `platform/tools/preview/build-preview.sh <page.html> <out.html>` wraps a page with its tenant's fonts (read from `tenants/<tenant>/preview-head.html`) and a fake CMS header.
- `platform/tools/preview/cdp-capture.mjs` captures real-time screenshots in headless Chrome. Check `scrollWidth` equals the viewport at 390px.

## 10. Adding a New Tenant
1. Create `tenants/<tenant>/` with `TENANT.md`, `preview-head.html`, `brand/` (guide + `tokens.css` + `design-system.md`), `pages/`, `docs/`, and `source/` for old-site references.
2. Pick a short root-ID prefix and add the tenant to the table at the top of this file.
3. Add a `<prefix>-brand-tokens` skill in `.agents/skills/` plus its `.claude/skills/` wrapper.
