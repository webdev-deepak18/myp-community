# SVK Session Handoff

Last updated: 2026-10-30. Read this first in a new session, after `TENANT.md`.

## Current task: Growth Workshops registration / checkout page

**File:** [pages/growth-register.html](../pages/growth-register.html) (root `#svk-growth-register-embed`, ~27 KB)
**Source:** [source/lovable-registration-page.html](../source/lovable-registration-page.html) (saved HTML of SVK's Lovable microsite, "Get Your Growth On"; the live preview link needs a Lovable login, so it can't be fetched)

### Brief (from Oliver Davies / stakeholder)
- SVK's December workshops are marketed on a Lovable microsite (from John). Visitors click through, via a short simple URL, to **our MyPeople page, which acts only as the checkout**. Keep content minimal and get them straight to purchase.
- Products: **Growth Diagnostic Workshop (Dec 8)**, **Growth Marketing Workshop (Dec 10)**, **both workshops (discounted combination)**, **90-Day Growth Foundation Coaching QuickStart** (the coaching package).
- Price: **US$1,500 placeholder** for all, to be updated later.
- Registration happens in the CMS pop-up opened by the `quick-login-m1 scoPage` button classes: name, email, title, company, mobile, optional LinkedIn, password, Stripe, a note that slides/materials stay in their profile, and the two consent checkboxes (contact + terms). Account creation and payment happen in one step. This is CMS-side, not page code.
- Logged-out visitors see only this page: hide the top nav and dropdowns, remove HR.com leftovers (credit modules, HRCI/SHRM codes). **Never mention recordings** (sessions aren't recorded). Also CMS/template-side.

### Stakeholder feedback round 1 (John & Lisa, applied 2026-10-30)
- The page is only the registration/checkout point; the Lovable microsite carries the marketing. **Hero removed** (script line, H1 "Know what to do next…", intro, hero image).
- Page now opens on the options section, renamed **"Register Now"** (H1) with the same subtext, then three buttons: **Register for Workshops** (scrolls to `#svk-workshops`), **Register for Coaching** (scrolls to `#svk-coaching`), and secondary outline **Explore workshops & coaching**, which has **no link for now** (the Lovable link `https://spark-workshop-founder-coaching.lovable.app/` does not work). Add `href` + `target="_blank" rel="noopener"` when SVK send a working public URL.
- Card buttons changed from "Reserve" to **"Purchase"**: "Purchase the diagnostic workshop", "Purchase the marketing workshop", "Purchase both workshops", "Purchase your spot" (coaching). They still use the basket URLs and load the cart.
- **Cards slimmed to title, date, price and Purchase button** (descriptions, format lines, bullet lists and the combo card's two sub-panels removed; the Lovable site has the details). The coaching card has no date, so it keeps "90 days · Six private sessions · With Susan Van Klink". On mobile (<600px) the card buttons drop their arrow so the labels fit on one line.
- **Round 2 (user):** icon and title share one row in each card; each card has a one-sentence description (verbatim Lovable sentences; the marketing one is the second sentence of its Lovable description). The bundle sentence "Assess your foundation on December 8, then build your demand plan on December 10." is **ours**, built from the Lovable format lines, so confirm it with SVK.
- **Round 3 (user):** "Get Your Growth On" eyebrow removed again, so "Register Now" is the first thing visitors read. Workshop cards show price and Purchase button side by side (they wrap to stacked when the card is narrow); the wide bundle and coaching cards keep price above button, centred.
- Logo swap and the three-tab nav (Registrations / Events / Community) are CMS-side and handled by the user. Pricing and Stripe are still pending from SVK.

### What was built first (superseded where noted above)
- Short hero: "Get Your / Growth On" script line, H1 "Know what to do next. And in what order." (second sentence in copper), the intro, an "Explore workshops & coaching" button that smooth-scrolls to the options, and the hero image `https://public-cdn.svk.myp.community/remoteimages/website-images/svk/hero-growth.jpg` (hidden under 900px).
- **The top bar (logo + "Reserve your spot") was removed at the user's request**, because the CMS template/site provides the logo.
- "Choose where to start" section (dusty-tint background) with 4 cards: Diagnostic (dusty-blue button), Marketing (copper button), Combined (dark-blue wide card, cream button, "Attend both" badge), Coaching (wide card, dark-blue button).
- Buttons use the user's purchase code: `class="svk_btn … quick-login-m1 scoPage"`, `href="/en?t=/merchant/basket.update&ParentID=0&vars=ID&productID=ID&basket.fill=1&linkTo=product.show"` plus `data-feathr-click-track="true" data-feathr-link-aids="6127cfab0dc20e810ab012ed"`.
- Pill-shaped buttons (to match Lovable; the SVK brand rule says 6px, so check with the user if questioned).
- Previewed at 1440 and 390px; scrollWidth OK.

### Open items
1. **Product IDs:** the stakeholder is creating them. Replace `PRODUCT_ID_DIAGNOSTIC`, `PRODUCT_ID_MARKETING`, `PRODUCT_ID_COMBINED` and `PRODUCT_ID_COACHING`, each twice in its href (`vars=` and `productID=`).
2. **Real prices:** all show `US$ 1,500` (plus `data-svk-price="1500"` on each card). The combined discount is unknown.
3. **Coaching price conflict:** Lovable says "Enrol by November 30 for US$5,000. Regular price US$5,500." That line is deliberately left out until the price is confirmed.
4. **Copy written by us (confirm with the client):** combined card title "Growth Diagnostic + Growth Marketing Workshops", badge "Attend both", the "Purchase …" button labels and "Register for Workshops / Coaching" (the last two from Lisa's feedback). Everything else is verbatim Lovable copy.
5. **Copy oddities to flag (not fixed):** British "Enrol" next to US spelling; the meta description "Independent December 8 and 10, 2026 growth workshops".
6. **CMS setup (not page code):** short URL, hidden nav for logged-out visitors, pop-up fields/consents/materials note, removing HR.com items.
7. Not yet run: `brand-auditor` agent, story-mode preview (`build-preview.sh … story`).

### Not built (and not needed unless asked)
The Lovable sub-pages: `/growth-diagnostic-workshop`, `/growth-marketing-workshop`, `/coaching-quickstart`, `/reserve-my-spot`, and Lovable's closing dark CTA band and footer.
