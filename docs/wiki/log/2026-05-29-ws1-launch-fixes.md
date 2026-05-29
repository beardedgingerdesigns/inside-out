# 2026-05-29 — execution | WS-1 no-input launch fixes shipped

**Operation:** code execution (site/) + plan status update
**Scope:** site/*.html (16 pages), site/shared.css, site/shared.js, plans/2026-05-29-launch-remediation.md

Executed WS-1 of the [launch-remediation plan](../plans/2026-05-29-launch-remediation.md) — the fixes needing no client/CD input — from the [CD review](../research/2026-05-29-launch-cd-review.md). No client-gated content touched.

## Fixes applied & verified

- **B1** — added `id="referral"` to the referral section (`partner-providers.html`), fixing the hero "Make a Referral" CTA + ~16 footer "Referral Forms" links that previously landed at page top.
- **B9** — replaced the dead `href="#"` "CIT Training Info" footer link on `cit-program.html` with the standard "Referral Forms" → `partner-providers.html#referral`.
- **M1 / DR-01** — removed 988 (and the "or") from `contact.html`'s emergency bar; 844-428-3878 is now the sole crisis number sitewide (`tel:988` count = 0).
- **M3 / EM-13** — reframed the "Coping Strategy Exploration" card → "Tools & Resources" on both crisis-stabilization pages; softened "coping strategies" wording on the adult page. *(Conservative reframe — open to Justin's preferred wording.)*
- **M5 / WIRE-28** — fixed the mobile-menu "Locations" link (was `perry.html`, losing Woodward/Knoxville) → `index.html#locations` on the 12 affected pages.
- **M6** — added a unique `<meta name="description">` to all 16 pages (was missing sitewide).
- **M7** — `aria-expanded`/`aria-controls` on the mobile toggle (all 16 pages) + JS now toggles `aria-expanded`; added an `sr-only` h2 to fix the h1→h3 skip on the Provider Hub; added a `@media (prefers-reduced-motion: reduce)` block + an IntersectionObserver fallback so content isn't stuck hidden.
- **M8** — fixed the dead `/services` link on `who-we-are.html` → `index.html#services`.

## Verification

All 16 pages serve HTTP 200 on `localhost:3001`; grep + over-HTTP checks confirm each change; the only remaining `href="#"` are the 5 "Access Referral Form" buttons (WS-2, gated on real form URLs). MINOR polish (amber legacy names, dual teal base, logo size, focus-visible on text links) deferred.

## Still gated (not in this pass)

WS-2 (form URLs + response times), WS-3 (county list — D5), WS-4 (Outpatient Therapy build — D1 ruled "keep"; Stevi/illustrations/insurance — D2/D3/D4), WS-5 (Woodward address, leadership names, FAQ answers, Indeed hookup, Transitional Living staffing, Stripe link).
