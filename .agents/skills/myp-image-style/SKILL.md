---
name: myp-image-style
description: >-
  Use this skill whenever a myp-community tenant page (tenants/myp-community/; not other tenants) needs a new image, illustration, banner or
  hero visual, or when reviewing whether an image fits the brand. Defines the MyPeople
  "photo + vector network" image style, ready-to-use generation prompts, the generation
  pipeline (Gemini in Antigravity or Figma AI), file naming, compression and CDN hosting.
---

# MyPeople Image Style & Generation Skill

MyPeople is a **community** platform. Every image must say "people connected to people".
Images must never look like generic stock photography.

---

## 0. Vectors Are Drawn in Code, Never Generated (rule since 2026-10-15)
Image models can't draw clean vector art: their "network lines" come out wobbly, uneven in width, tangled and randomly placed (see `home/home_b2b_customers.jpg`, `home/home_welcome_connected.jpg`). So:
- **Generate clean photography only**: no lines, dots, icon cards, rings or connectors baked into the image.
- **Draw every vector accent as inline SVG/CSS in the page**: cubic/quadratic bézier paths with `vector-effect: non-scaling-stroke` (constant 2.5px width), `--color-mp-green-400` strokes, `--color-mp-green-default` nodes with a white ring, dashed rings via CSS borders, white icon chips as HTML.
- **Overlay on a photo**: put an `<svg viewBox="0 0 {imgW} {imgH}" preserveAspectRatio="xMidYMid slice">` over an `<img>` with `object-fit: cover; object-position: center`. Both crop identically, so nodes placed in image pixel coordinates stay on the people at every breakpoint.
- **People-network collage (Family A)**: build it in HTML from portrait crops (circle / pill / rounded-rect frames, each an `<img>` scaled + translated inside an `overflow:hidden` frame) joined by an SVG connector layer. Reference: `.mp_net` in `tenants/myp-community/pages/HR Tech and B2B Customer Communities.html`.
- Connectors draw in on reveal (`pathLength="1"` + `stroke-dashoffset`); reduced motion shows them static.

## 1. The House Style (derived from `tenants/myp-community/pages/images/<page>/*.jpg`)

There are three approved image families. Pick one per slot; do not mix within one image.

| Family | Look | Reference files | Typical use |
| :--- | :--- | :--- | :--- |
| **A. People Network Collage** | Real candid portrait photos inside circles, rounded rectangles and tall pills, linked by thin mint-green curved vector lines with small solid green dots. Flat background (white, cream `#FFFCF8`, or dark slate `#162B32`). | `hr-tech-b2b/hrtech_hero_collage.jpg`, `other-communities/other_hero_collage.jpg`, `home/home_hero_people.jpg` | Hero visuals, "community" moments |
| **B. Editorial Photo + Vector Overlay** | Natural window light, warm cream/oak interiors, plants, diverse people genuinely laughing or working together. Vector overlay is added **in code** (section 0), never generated. | `hr-tech-b2b/hrtech_dedicated_home.jpg`, `hr-tech-b2b/hrtech_data_advantage.jpg`, `home/home_welcome_v2.jpg`, `home/home_b2b_v2.jpg`, `home/home_public_v2.jpg` | Section imagery, community-type cards |
| **C. Soft-Glass Product UI** | Isometric frosted white cards on cream `#FFFCF8`, brand-green accents, soft shadows, placeholder bars instead of real words. | `other-communities/other_insights_ui.jpg`, `home/home_platform_ui.jpg` | "Platform" / "build" / features moments |

### Always
- Diverse ages, ethnicities and genders; authentic expressions (laughing, talking, focused).
- Brand colours only as accents: MP-Green `#018624` / `#02A82D` / `#66CB81`, mint tint `#F2FBF5`, slate `#162B32`.
- Warm natural light; cream, oak, plants.

### Never
- Readable text, logos or watermarks inside the image (CMS copy lives in HTML).
- Neon, purple, blue-gradient "tech" looks, 3D cartoon people, handshake clichés, posed thumbs-up stock.
- Third-party brand marks on devices or clothing.

---

## 2. Prompt Templates

Fill the `{…}` slots. Keep the closing sentence about text/logos.

**A. People Network Collage**
> Premium editorial collage composition for an online community platform. {N} authentic, candid real photographs of diverse smiling people ({activities: on a laptop, on a video call with headphones, holding a phone and coffee, presenting, writing in a notebook}), natural window light, soft background blur. Each photo sits in its own frame: some perfect circles, some rounded rectangles with large soft corner radius, some tall pill shapes, varied sizes, loosely scattered with breathing room. Placed on a perfectly flat solid {background: deep dark slate-teal #162B32 | warm cream #FFFCF8 | white} background filling the canvas edge to edge. No lines, no dots, no connectors, no icons, no graphics of any kind (vector accents are added in code). Subtle soft shadows. Not generic stock. No text, no logos, no watermarks.

**B. Editorial Photo + Vector Overlay**
> Candid natural-light editorial photograph of {scene and people}, in a warm bright modern {location} with plants and light oak. Clean photograph only: no overlaid lines, dots, icons, cards or graphics (vector accents are added in code). Leave calm space above the people's heads for code-drawn connectors. Warm cream and off-white tones. Authentic, not posed stock photography. No readable text, no logos, no watermarks.

**C. Soft-Glass Product UI**
> Isometric 3D perspective view of floating soft-white frosted glass UI cards for an online community platform on a warm cream background (#FFFCF8) filling the canvas. Cards include {feed with round avatar photos, event card with speaker video thumbnail, course card with green progress ring, topic chips, member directory grid, small line chart}. Brand green accents (#018624, #02A82D), mint tints (#F2FBF5), thin light borders, soft shadows, generous spacing. Text only as abstract grey placeholder bars, no real words, no logos.

---

## 3. Generation Pipeline

1. **Prefer Gemini in Antigravity** for image generation (native image model, no extra credits). See the `ai-task-routing` skill. Hand over the filled prompt + target file name.
2. **Fallback: Figma MCP** `generate_image` with `model: gemini-3.1-flash-image` and the user's plan key (call `whoami` to get it). Each call costs Figma AI credits. Result URLs expire after 7 days, so download immediately.
3. Inspect every result visually before using it: no duplicated faces next to each other, no warped hands or garbled text, and the background matches the target section.
4. Make it web-size: longest side ≤ 1400px (1024 for square collages), JPEG quality 76–82, **≤ 220 KB**. Never commit or upload multi-MB originals. On this Windows machine, without Python or ImageMagick:
   ```powershell
   Add-Type -AssemblyName System.Drawing
   $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | ? { $_.MimeType -eq 'image/jpeg' }
   $p = New-Object System.Drawing.Imaging.EncoderParameters(1)
   $p.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]84)
   $img = [System.Drawing.Image]::FromFile($in); $img.Save($out, $codec, $p); $img.Dispose()
   ```
5. Save to the **single** images folder: `tenants/myp-community/pages/images/<page>/<prefix>_<slot>.jpg` (e.g. `pages/images/home/home_hero_collage.jpg`). No second copy anywhere (no `tenants/myp-community/images/`, no flat files in `pages/images/`). An image used by two pages lives in the folder of the page that owns it; the other page links to it.

## 4. Hosting & Markup Pattern

Images ship CDN-first with a local fallback, the same pattern as the other pages:
```html
<img src="https://public-cdn.myp.community/images/home_hero_collage.jpg"
     onerror="if(!this.dataset.retried){this.dataset.retried='1';this.src='images/home/home_hero_collage.jpg';}"
     alt="…" width="1024" height="1024" loading="lazy" decoding="async">
```
- CDN: **one flat folder** `https://public-cdn.myp.community/images/<file>` (no page subfolders on the server). Locally the file lives in `tenants/myp-community/pages/images/<page>/`; the `onerror` fallback uses that local path. Filenames must be unique across all pages (`home_`, `hrtech_`, `contact_`, `other_`, `features_` prefixes). Upload the files to the flat `images/` folder before publishing. The old `public-cdn.hr.com/remoteimages/website-images/myp-community/` paths are retired.
- Always set `width`/`height` (prevents layout shift) and meaningful `alt`. Use `loading="eager"` only for the hero.
- Blend dark-background images into dark sections with `mask-image: radial-gradient(...)` instead of hard edges.

## 5. Image Registry

| File | Family | Used in |
| :--- | :--- | :--- |
| `home/home_hero_people.jpg` (1024×1024, 3×2 portrait sheet, clean) | A (source) | Home hero final scene: five portrait crops in `.mp_net` (crop maths assume 1024px; tiles x 48–337 / 369–655 / 687–976, y 218–497 / 527–806). Replaces `home_hero_collage.jpg` (retired 2026-10-16: baked lines, one face repeated 3×) |
| `home/home_welcome_v2.jpg` (1200×896) | B, clean | Home welcome + SVG overlay (5 nodes above the heads; coordinates assume 1200×896). Replaces `home_welcome_connected.jpg` (retired 2026-10-16) |
| `home/home_b2b_v2.jpg` (1200×896) | B, clean | Home B2B panel + SVG fan + 3 HTML avatars (face crops of `home_hero_people.jpg`; coordinates assume 1200×896, 16:10 crop). Replaces `home_b2b_customers.jpg` (retired 2026-10-16) |
| `home/home_public_v2.jpg` (1200×896) | B, clean | Home Media/Govt/B2C panel + SVG overlay (4 nodes above the adults; coordinates assume 1200×896, 16:10 crop). Replaces `home_public_media.jpg` (retired 2026-10-16) |
| `home/home_platform_ui.jpg` (1264×848) | C | HR Tech closing section only (home "Let's build" uses the code-drawn `.mp_ui` bento since 2026-10-15) |
| `hr-tech-b2b/hrtech_hero_collage.jpg` (1024×1024) | A (source) | HR Tech hero: five portrait crops in `.mp_net` (crop maths assume 1024px) |
| `hr-tech-b2b/hrtech_dedicated_home.jpg` (1376×768) | B, clean | HR Tech "dedicated home" + SVG overlay (coordinates assume 1376×768) |
| `hr-tech-b2b/hrtech_data_advantage.jpg`, `hr-tech-b2b/hrtech_early_adopter.jpg` (1376×768) | B, clean | HR Tech "Window" rows 2–3 |
| `contact-us/contact_consultation.jpg` (500×670) | B, clean | Contact Us hero (+ SVG connector overlay, coordinates assume 500×670); HR Tech "Window" row 1 |
| `other-communities/other_hero_collage.jpg` (1024×1024) | A (source) | Other Communities hero: five portrait crops in `.mp_net` + avatar face crops in the closing `.mp_ui` (crop maths assume 1024px) |
| `other-communities/other_insights_ui.jpg` (1200×896) | C | **Not used** (readable text, fake "92%"); replaced by the code-drawn `.mp_ui` bento |
| `features/features_logo_*.png` (14 files: google, tiktok, instagram, twitter, waltdisney, ibm, apple, adp, microsoft, youtube, nestle, adidas, amazon, cocacola; ≤240px wide transparent PNG, 4.5–28 KB) | Third-party logos (not a photo family) | Features logo strip (original colours on white tiles). Moved from `public-cdn.hr.com/.../logout_home/images/logo/`; server path `images/client-logos/` (the one exception to the flat folder) |
| `mp_features_banner-2.jpg` (1920×847, CMS `$public` path, not stored locally) | Product screens + people | Features hero banner (kept unchanged) |
| _no file_: Features feature pictures | Code-drawn SVG | 17 animated SVGs in `features.html` (`.ft_pic`); the old `mypeople.ai/images/mp_features_*.png` are retired |

**Home images all clean since 2026-10-16.** Retired home files (`home_hero_collage.jpg`, `home_welcome_connected.jpg`, `home_b2b_customers.jpg`, and `home_platform_ui.jpg` once HR Tech drops it) are kept only as the section-0 examples of bad AI vectors.

Update this table whenever an image is added.
