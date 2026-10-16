# Handoff: Clean photos for the logged-out home page
**From:** Claude → **To:** Gemini 3.1 Pro   **Date:** 2026-10-15

## Goal
Generate four **clean photographs** for `pages/home-logged-out.html` to replace images with AI-drawn lines, icon cards, a repeated face and Apple logos baked in. Claude draws every connector, node, ring and chip as SVG/HTML in code afterwards, so the photos must contain **no graphics at all**. The page text is final (v1) and does not change.

## Files
- Read: `.agents/skills/myp-image-style/SKILL.md` (sections 0–3), `tenants/myp-community/pages/images/hr-tech-b2b/hrtech_dedicated_home.jpg` (the standard to match: clean, warm, natural light)
- Write (new names so the CDN doesn't serve stale copies):
  - `tenants/myp-community/pages/images/home/home_hero_people.jpg`
  - `tenants/myp-community/pages/images/home/home_welcome_v2.jpg`
  - `tenants/myp-community/pages/images/home/home_b2b_v2.jpg`
  - `tenants/myp-community/pages/images/home/home_public_v2.jpg`

## Constraints (must follow)
- Clean photography only: **no lines, dots, connectors, rings, icon cards, speech bubbles, avatars or UI overlays**.
- **No logos anywhere**: laptops, phones, cups and clothing are plain and unbranded (the old images show an Apple logo).
- No readable text, no watermarks.
- Every person is a different person: **no repeated faces** within an image or across the four images.
- Diverse ages, ethnicities and genders; genuine expressions; warm natural window light; cream, light oak and plants. No neon, purple or blue "tech" gradients.
- Size: the exact pixel dimensions below, JPEG quality 76–82, **≤ 220 KB** each (resize/compress before saving; never commit the multi-MB original).

## Prompts (one per image)

### 1. Hero people sheet → `home_hero_people.jpg` (1024 × 1024)
Used as the source for the hero's people-network collage (Claude crops each portrait into circle, pill and rounded frames in HTML). It sits beside: "Do you want your members, customers and employees to feel connected?"
> A 3-column by 2-row grid of six separate, equal-size square portrait photographs on a perfectly flat solid deep slate-teal background (#162B32), with even 24px gaps between tiles. Each tile is a candid, natural-light, head-and-shoulders photo of a different smiling person, framed with the face centred and some space around the head: (1) a man in his 30s typing on a plain laptop at home, (2) a Black woman in her 40s on a video call with headphones, laughing, (3) a South Asian woman in her 20s holding a phone and a coffee cup, (4) an older white man in his 60s in a knit sweater, smiling warmly, (5) an East Asian man in his 30s presenting with an open hand gesture in a bright office, (6) a Latina woman in her 30s writing in a notebook. Warm bright interiors with plants and light oak behind each person, soft background blur. Every person is clearly a different individual. No lines, no dots, no connectors, no icons, no graphics of any kind. Unbranded devices. No text, no logos, no watermarks.

### 2. Welcome → `home_welcome_v2.jpg` (1200 × 896)
Section copy: "Welcome to the Better Way to Build a Community … bring your audience together into a community, driving more meaningful connections, higher engagement…"
> Candid natural-light editorial photograph of five diverse adults (mixed ages, genders and ethnicities) laughing and talking together around one shared light-oak table in a warm, bright modern community space with large windows, plants and a white brick wall. One person shows something on a plain unbranded laptop, another holds a phone, takeaway coffee cups and notebooks on the table. Everyone is engaged with each other, genuinely connected. Faces at roughly the same height across the middle of the frame, with calm, uncluttered space above their heads (soft window light and greenery) for code-drawn connectors. Clean photograph only: no overlaid lines, dots, icons, speech bubbles, cards or graphics. Warm cream and off-white tones. Authentic, not posed stock photography. No readable text, no logos (including on the laptop), no watermarks.

### 3. B2B customer community → `home_b2b_v2.jpg` (1200 × 896)
Panel copy: "B2B Software and HR Tech Customer Communities … If you want a thriving customer community, don't rely on a generic community platform."
> Candid natural-light editorial photograph of a smiling customer success manager in her 30s wearing a light headset, talking and gesturing warmly to customers on a video call on a plain unbranded laptop, seated at a light-oak desk in a bright modern software-company office with plants, a mug and a notebook. Shot from slightly to her side so the laptop screen is not visible. A couple of colleagues softly blurred in the background. She sits on the left half of the frame; the right third is calm, uncluttered office background (soft window light) for code-drawn connectors and avatars. Clean photograph only: no overlaid lines, dots, avatar circles, icons, check marks, cards or graphics. Warm cream and off-white tones. Authentic, not posed stock photography. No readable text, no logos (including on the laptop), no watermarks.

### 4. Media, government and B2C → `home_public_v2.jpg` (1200 × 896)
Panel copy: "Media, State/Local Govts and B2C Brands … an active online home that provides an elite experience to members…"
> Candid natural-light editorial photograph of local community members of all ages gathered around a wooden table in a bright, modern public library with tall windows, light-oak shelving full of books and plants: a young man in a denim jacket, a laughing older woman with grey hair, a father holding a toddler, and a man in a navy blazer, chatting warmly with coffee cups, a notebook and a plain tablet on the table. Faces across the middle of the frame with calm, uncluttered space above their heads (bookshelves and window light) for code-drawn connectors. Clean photograph only: no overlaid lines, rings, dots, icons, cards or graphics. Warm cream and oak tones. Authentic, not posed stock photography. No readable text, no logos, no watermarks.

## Steps
1. Generate each image from its prompt; regenerate any result that breaks a constraint.
2. Inspect each result: no graphics, no logos, no duplicated faces, no warped hands, no garbled text.
3. Resize to the exact size above, compress to ≤ 220 KB, save under the file name above.

## Acceptance checklist
- [ ] Four files at the paths and pixel sizes above, each ≤ 220 KB
- [ ] Zero lines, dots, rings, icons, bubbles or UI drawn in any photo
- [ ] Zero logos (laptops, phones, cups, clothing)
- [ ] Every face is a different person (hero sheet: six distinct people)
- [ ] Each photo has calm space where the prompt asks for it

## Return
The four file paths and their sizes (px and KB). Claude then adds the code-drawn overlays, rebuilds the hero as an HTML `.mp_net`, and audits.
