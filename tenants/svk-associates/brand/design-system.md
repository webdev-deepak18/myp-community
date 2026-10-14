# SVK & Associates Design System

Source of truth: [SVK Brand Guide - 2026-06-30.pdf](SVK%20Brand%20Guide%20-%202026-06-30.pdf). This file transcribes it for agents; tokens live in [tokens.css](tokens.css).
Anything marked *(platform)* is not in the guide. It was set while building on the MyPeople platform and should stay consistent across SVK pages.

---

## 1. Colour

| Role | Name | HEX | RGB | Token |
| :--- | :--- | :--- | :--- | :--- |
| Primary | Dark Blue | `#274B64` | 39/75/100 | `--svk-dark-blue` |
| Primary | Cream | `#FFFDF9` | 255/253/249 | `--svk-cream` |
| Neutral | Soft Gray | `#B9C0C6` | 185/192/198 | `--svk-soft-gray` |
| Neutral | Charcoal | `#474242` | 71/66/66 | `--svk-charcoal` |
| Neutral | Dusty Blue | `#9DB2BF` | 157/178/191 | `--svk-dusty-blue` |
| Accent | Warm Copper | `#AD713E` | 173/113/62 | `--svk-copper` |
| Accent | Warm Taupe | `#9B8B81` | 155/139/129 | `--svk-taupe` |

**Usage ratio (guide):** 70% Cream + Dark Blue, 20% Dusty Blue, 10% Warm Copper + Warm Taupe. Accents support the brand rather than dominate it.

**Contrast notes (platform):**
- Body text: Charcoal or Dark Blue on Cream; Cream on Dark Blue.
- Dusty Blue on Dark Blue is about 4.2:1, so use it for large or bold text only.
- Copper on Cream is about 4:1, so use it for headings, labels and links at 15px+ semibold, not small body copy.
- Taupe is decorative only (fails contrast as text).
- Errors: the guide has no error colour; use Warm Copper with a text message *(platform)*.

## 2. Typography

| Role | Font | Weights | Token | Used for (guide) |
| :--- | :--- | :--- | :--- | :--- |
| Primary heading | Roboto | Bold 700, SemiBold 600 | `--svk-font-heading` | Headlines, titles, navigation, key marketing messages |
| Secondary | Nunito | Regular 400, SemiBold 600 | `--svk-font-body` | Body copy, subheadings, presentations, marketing, digital content |
| Signature accent | Petit Formal Script | 400 | `--svk-font-script` | Signature elements, quotes, decorative accents, special highlights. **Never** body copy or primary messaging. |

**Type scale used on the home page (platform, px):**

| Role | ≤576 | ≤991 | base | 1200+ | 1440+ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hero H1 (Roboto 700) | 36/42 | 48/54 | 60/66 | 68/74 | 76/82 |
| Section H2 `.svk_h2` (Roboto 700) | 30/38 | 38/46 | 44/52 | 50/58 | 56/64 |
| Statement (Roboto 700) | 32/40 | 44/52 | 52/60 | 58/66 | 64/72 |
| Lead `.svk_lead` (Nunito 600) | 18/27 | 20/30 | 21/31 | 22/32 | 24/34 |
| Body `.svk_body` (Nunito 400) | 16/27 | 17/29 | 17/29 | 17/29 | 18/30 |

## 3. Logo

- **Primary:** Dark Blue logo on a transparent background. Use it whenever possible (websites, partner platforms, presentations, marketing, digital).
- **Reverse:** Cream logo on transparent, for dark backgrounds, photo overlays and brand-coloured backgrounds.
- **Submark:** the SVK submark, for profile images, avatars, favicons, app icons and small formats. The white submark has no line.
- Never alter logo colours, proportions, spacing or orientation.
- Current site logo files: `https://svkassociates.com/wp-content/uploads/2025/02/SVK-270.png` (2x), `SVK-135t.png`, `SVK-64.png`, `SVK-128.png`.

## 4. Brand Voice

Clarity, confidence and credibility: the voice of experienced operators who know what it takes to scale companies.

| We are | We are not |
| :--- | :--- |
| Strategic, Objective, Practical, Insightful, Credible, Direct, Experienced | Corporate, Academic, Buzzword-heavy, Promotional, Overly casual, Theoretical |

| Use | Avoid |
| :--- | :--- |
| Clear language, evidence-based thinking, practical insights, direct recommendations, founder-centric messaging | Generic consulting language, excessive jargon, motivational clichés, unsubstantiated claims, trend-driven language |

## 5. Approved Copy (verbatim from the guide)

**Short description (50 words):** SVK & Associates helps founders and CEOs understand what actually builds enduring growth--and then execute it. Through proprietary growth frameworks, structured diagnosis, embedded execution support, and a curated founder community, we help companies identify growth constraints, build scalable operating systems, and navigate critical scaling transitions.

**Medium description (100 words):** SVK & Associates helps founders and CEOs navigate the scaling transitions that stall, break, or limit company growth. Using our proprietary Enduring Growth System, we help leadership teams identify growth constraints, prioritize the right actions, and build companies that scale predictably rather than accidentally. Through structured diagnosis, growth roadmaps, embedded execution support, fractional leadership, and a curated founder community, we provide the clarity, accountability, and operational discipline leaders need to build enduring companies.

**Our Why:** We believe that the world is a better place when newly-founded companies thrive and survive.
**Our Mission:** We help founders and CEOs cross the scaling chasms that break most growing companies.
**Our Vision:** We are creating a world where more founders and CEOs have the support, guidance, and community they need to successfully cross the scaling chasms and build enduring companies.

**Enduring Growth System:** Resolve Chasm Risks · Build the Revenue Flywheel · Compound Customer Capital.
**We help founders understand:** What to do · In what order · Based on their stage of growth · With accountability and measurable outcomes.

**Who we serve:** founders and CEOs of early-stage and growth-stage companies, particularly venture-backed organizations navigating critical scaling transitions. Common challenges: stalled growth, founder dependency, customer acquisition challenges, scaling complexity, leadership evolution requirements, go-to-market inefficiencies.

**Core capabilities:** Objective Growth System; Structured Diagnosis & Growth Roadmaps; Embedded Execution & Fractional Leadership; Curated Founder & CEO Community. Full paragraphs are in the PDF ("Core Capabilities").

**Contact for branding questions:** Susan Van Klink, Founder & CEO.

## 6. Components (platform, from `pages/home.html`)

- **Buttons:** `.svk_btn` + `.svk_btn_primary` (Dark Blue / Cream, hover Copper), `.svk_btn_light` (Cream / Dark Blue for dark backgrounds, hover Copper), `.svk_btn_lg`. Roboto 600, 6px radius. Uppercase labels only where the source copy is uppercase.
- **Text link:** `.svk_link` (Roboto 600, Copper with an arrow; Dusty Blue on dark).
- **Section helpers:** `.svk_container`, `.svk_section`, `.svk_rule` (56×4 copper bar), `.svk_h2`, `.svk_hl` (copper highlight), `.svk_lead`, `.svk_body`.
- **Section backgrounds (rhythm):** Cream → Dusty tint band (`--svk-dusty-tint` + `--svk-dusty-line` borders) → Dark Blue (optional Dusty dot grid). Never two identical backgrounds in a row.
- **Imagery:** the client's own black-and-white conceptual photography and portraits; keep it greyscale on cards, with Dark Blue overlays on heroes.
