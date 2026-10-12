---
name: ai-task-routing
description: >-
  Use at the START of every request in the 000-myp-community workspace to decide whether
  Claude should do the task or hand it to Gemini 3.1 Pro (also available in this
  Antigravity workspace) to save tokens. Covers the routing table, the handoff brief format,
  and how to split a large task between the two agents.
---

# AI Task Routing: Claude ⇄ Gemini 3.1 Pro (Antigravity)

This workspace runs in **Antigravity**, where two agents are available:
- **Claude** (Claude Code / Antigravity Claude agent)
- **Gemini 3.1 Pro** (Antigravity's native agent, which also has native image generation and an in-IDE browser agent)

Neither agent can call the other directly. The **user** routes work. So each agent's job is to
**tell the user, in one line, when a task (or part of it) is better handled by the other agent**
and to supply a ready-to-paste handoff brief.

---

## 1. Routing Check (run mentally before starting any request)

| Task type | Best owner | Why |
| :--- | :--- | :--- |
| Generating or editing **images** (heroes, illustrations, banners) | **Gemini** | Native image model, so no paid Figma credits. Use the prompts in the `myp-image-style` skill. |
| **Visual QA in a browser**: screenshots at 375/768/1280/1440px, clicking through the live CMS | **Gemini** | Antigravity browser agent is built in |
| **Bulk mechanical edits** across many pages (sync the `:root` token block, rename a class everywhere, swap a URL) | **Gemini** | Cheap, low-judgement, pattern-driven |
| Extracting text from **PDFs / screenshots** of the old site into copy docs | **Gemini** | Strong multimodal reading |
| First-draft of a **simple page** that clones an existing page's pattern | **Gemini** | Pattern exists already; Claude reviews afterwards |
| **New page architecture**, new interactive components, hero sequences, modal/form logic | **Claude** | Multi-constraint design + vanilla JS correctness |
| **Brand / CMS compliance audits** and code review | **Claude** | Use `.claude/agents/myp-brand-auditor.md` |
| **Planning**, decision logs, writing or updating skills and rules | **Claude** | Keeps reasoning consistent across sessions |
| Debugging CMS layout drift, specificity wars, JS bugs | **Claude** | Needs careful root-cause analysis |
| Anything touching **content fidelity** (exact copy from source) | Either agent, but **Claude must verify** | Zero-hallucination rule |

**Rule of thumb:** high-volume, low-judgement, or visual-generation work goes to Gemini.
Multi-constraint design, logic or review goes to Claude.

When a request mixes both, do the Claude part and hand off the rest:
> "I've built the section. The image generation is a better fit for Gemini; here's the brief: `docs/handoffs/<file>.md`."

If the user explicitly asks Claude to do something on the Gemini list, just do it.

---

## 2. Handoff Brief Format

Save briefs to `docs/handoffs/YYYY-MM-DD-<short-task>.md`:

```markdown
# Handoff: <task>
**From:** Claude → **To:** Gemini 3.1 Pro   **Date:** YYYY-MM-DD

## Goal
One or two sentences.

## Files
- Read: <paths>
- Write: <paths>

## Constraints (must follow)
- AGENTS.md rules 1–9 (CMS embed format, brand tokens, px units, scoping, content fidelity)
- Skills: myp-brand-tokens, cms-page-embed, <others>

## Steps
1. …

## Acceptance checklist
- [ ] …

## Return
What to report back (file paths, screenshots, open questions).
```

---

## 3. After a Handoff Comes Back

Claude reviews Gemini's output with the `myp-brand-auditor` agent checklist before it is
considered done (raw hex outside `:root`, `rem` units, unscoped selectors, invented copy).
