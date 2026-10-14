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

## 1. The House Style (derived from `tenants/myp-community/pages/images/*.jpg`)

There are three approved image families. Pick one per slot; do not mix within one image.

| Family | Look | Reference files | Typical use |
| :--- | :--- | :--- | :--- |
| **A. People Network Collage** | Real candid portrait photos inside circles, rounded rectangles and tall pills, linked by thin mint-green curved vector lines with small solid green dots. Flat background (white, cream `#FFFCF8`, or dark slate `#162B32`). | `community_hero_banner.jpg`, `associations_hero_banner.jpg`, `home/home_hero_collage.jpg` | Hero visuals, "community" moments |
| **B. Editorial Photo + Vector Overlay** | Natural window light, warm cream/oak interiors, plants, diverse people genuinely laughing or working together. Optional subtle overlay: thin mint lines (`#66CB81`) between people, small green dots (`#02A82D`), small white rounded cards with green icons (heart, chat, calendar, check). | `community_human_connection.jpg`, `community_data_advantage.jpg`, `home/home_welcome_connected.jpg`, `home/home_b2b_customers.jpg`, `home/home_public_media.jpg` | Section imagery, community-type cards |
| **C. Soft-Glass Product UI** | Isometric frosted white cards on cream `#FFFCF8`, brand-green accents, soft shadows, placeholder bars instead of real words. | `community_insights_home.jpg`, `home/home_platform_ui.jpg` | "Platform" / "build" / features moments |

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
> Premium editorial collage composition for an online community platform. {N} authentic, candid real photographs of diverse smiling people ({activities: on a laptop, on a video call with headphones, holding a phone and coffee, presenting, writing in a notebook}), natural window light, soft background blur. Each photo sits in its own frame: some perfect circles, some rounded rectangles with large soft corner radius, some tall pill shapes, varied sizes, loosely scattered with breathing room. Placed on a perfectly flat solid {background: deep dark slate-teal #162B32 | warm cream #FFFCF8 | white} background filling the canvas edge to edge. Thin smooth curved mint-green vector connector lines (#66CB81) with small solid green dots link the frames like a living network. A small cluster of three solid vivid green circles (#02A82D) as an accent. Subtle soft shadows. High-end brand illustration mixing photography with flat vector art, not generic stock. No text, no logos, no watermarks.

**B. Editorial Photo + Vector Overlay**
> Candid natural-light editorial photograph of {scene and people}, in a warm bright modern {location} with plants and light oak. Overlaid delicate flat vector graphics in premium brand-illustration style: thin mint-green curved connection lines (#66CB81) linking the people, small solid green dots (#02A82D), {two or three} small rounded white floating cards with simple green icons ({heart, chat bubble, calendar, megaphone, check}). Warm cream and off-white tones. Authentic, not posed stock photography. No readable text, no logos, no watermarks.

**C. Soft-Glass Product UI**
> Isometric 3D perspective view of floating soft-white frosted glass UI cards for an online community platform on a warm cream background (#FFFCF8) filling the canvas. Cards include {feed with round avatar photos, event card with speaker video thumbnail, course card with green progress ring, topic chips, member directory grid, small line chart}. Brand green accents (#018624, #02A82D), mint tints (#F2FBF5), thin light borders, soft shadows, generous spacing. Text only as abstract grey placeholder bars, no real words, no logos.

---

## 3. Generation Pipeline

1. **Prefer Gemini in Antigravity** for image generation (native image model, no extra credits). See the `ai-task-routing` skill. Hand over the filled prompt + target file name.
2. **Fallback: Figma MCP** `generate_image` with `model: gemini-3.1-flash-image` and the user's plan key (call `whoami` to get it). Each call costs Figma AI credits. Result URLs expire after 7 days, so download immediately.
3. Inspect every result visually before using it: no duplicated faces next to each other, no warped hands or garbled text, and the background matches the target section.
4. Convert to JPEG at quality ~84 (target < 250 KB). On this Windows machine, without Python or ImageMagick:
   ```powershell
   Add-Type -AssemblyName System.Drawing
   $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | ? { $_.MimeType -eq 'image/jpeg' }
   $p = New-Object System.Drawing.Imaging.EncoderParameters(1)
   $p.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]84)
   $img = [System.Drawing.Image]::FromFile($in); $img.Save($out, $codec, $p); $img.Dispose()
   ```
5. Save to `tenants/myp-community/pages/images/<page>/<page>_<slot>.jpg` (e.g. `tenants/myp-community/pages/images/home/home_hero_collage.jpg`).

## 4. Hosting & Markup Pattern

Images ship CDN-first with a local fallback, the same pattern as the other pages:
```html
<img src="https://public-cdn.myp.community/images/home/home_hero_collage.jpg"
     onerror="if(!this.dataset.retried){this.dataset.retried='1';this.src='images/home/home_hero_collage.jpg';}"
     alt="…" width="1024" height="1024" loading="lazy" decoding="async">
```
- CDN base for new images: `https://public-cdn.myp.community/images/<page>/<file>`, mirroring `tenants/myp-community/pages/images/<page>/`. Upload before publishing (older pages still use `https://public-cdn.hr.com/remoteimages/website-images/myp-community/`).
- Always set `width`/`height` (prevents layout shift) and meaningful `alt`. Use `loading="eager"` only for the hero.
- Blend dark-background images into dark sections with `mask-image: radial-gradient(...)` instead of hard edges.

## 5. Image Registry

| File | Family | Used in |
| :--- | :--- | :--- |
| `home/home_hero_collage.jpg` (1024×1024, slate bg) | A | Home hero, final scene |
| `home/home_welcome_connected.jpg` (1200×896) | B | Home welcome section |
| `home/home_b2b_customers.jpg` (1200×896) | B | Home community types: B2B panel |
| `home/home_public_media.jpg` (1200×896) | B | Home community types: Media/Govt/B2C panel |
| `home/home_platform_ui.jpg` (1264×848) | C | Home "Let's build" section |

Update this table whenever an image is added.
