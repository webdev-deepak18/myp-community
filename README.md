# MyPeople Platform: Tenant Websites

Website pages for every tenant (client site) on the MyPeople platform, built as pure HTML5 + vanilla CSS/JS embeds for the platform CMS (story editor / WYSIWYG).

## Structure
- `AGENTS.md`: platform rules (embed format, scoping, px units, 1440px width tiers, content fidelity, agent routing) and the tenant table. **Start here.**
- `platform/`: shared tooling (`tools/preview/` local preview + headless Chrome capture) and platform docs.
- `tenants/<tenant>/`: one folder per client site, each with:
  - `TENANT.md`: brand summary, root-ID prefix, fonts, skills, URLs, CDN. **Read before touching the tenant.**
  - `brand/`: brand guide, `design-system.md`, `tokens.css`
  - `pages/`: CMS embed pages (MyP also keeps `templates/`, `images/`, `css/` here)
  - `docs/`: decision logs, session handoffs, Gemini handoff briefs (`docs/handoffs/`)
  - `source/` or `archive/`: the old site's HTML and assets (copy reference)
  - `preview-head.html`: fonts and host CSS used by the preview tool
- `.agents/skills/`: canonical agent skills. Platform: `cms-page-embed`, `ai-task-routing`. Tenant-scoped: `myp-*`, `svk-*`.
- `.claude/`: Claude Code skill wrappers and the `brand-auditor` agent.

## Tenants
| Tenant | Folder | Site |
| :--- | :--- | :--- |
| MyPeople Community | `tenants/myp-community/` | https://www.myp.community/ |
| SVK & Associates | `tenants/svk-associates/` | https://svkassociates.com/ |

Adding a tenant: see `AGENTS.md` §10.
