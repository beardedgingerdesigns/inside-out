# Site Map

Every HTML page in the project, what it is, status, and audience.

## Top-level nav order (from brief)

1. Services (dropdown — see [services-overview.md](services-overview.md))
2. Locations (dropdown — see [locations.md](locations.md))
3. Who We Are
4. Blog (replaces old "Resources")
5. Contact Us
6. Open Positions
7. Donate (button, distinct styling)
8. Partner Providers (NEW — visually distinguished tab)

## Pages built

| File | Audience | Status (2026-05-28) |
|---|---|---|
| [index.html](../../../site/index.html) | Both | All service-grid links wired. Outpatient Therapy card **restored** (2026-05-29); services grid changed 4-col → **3-col (3×3, 9 cards)**. |
| [who-we-are.html](../../../site/who-we-are.html) | Individuals/families | Live, linked from nav |
| [perry.html](../../../site/perry.html) | Both — location detail | Live, Perry-specific location page. |
| [woodward.html](../../../site/woodward.html) | Both — location detail | New. Cloned from Perry template. |
| [knoxville.html](../../../site/knoxville.html) | Both — location detail | New. "Coming soon" stub — no dead links. |
| [contact.html](../../../site/contact.html) | Both | New. Crisis callout, phone/email/provider cards, location strip. |
| [open-positions.html](../../../site/open-positions.html) | Job seekers | Live, linked from nav |
| [partner-providers.html](../../../site/partner-providers.html) | Partner providers | Live. 5 "Access Referral Form" buttons still `#` (awaiting real form URLs from client). |
| [crisis-stabilization-adults.html](../../../site/crisis-stabilization-adults.html) | Both | Live, real copy |
| [crisis-stabilization-children.html](../../../site/crisis-stabilization-children.html) | Both | Live, real copy |
| [peer-support-services.html](../../../site/peer-support-services.html) | Both | Live, real copy |
| [transitional-living.html](../../../site/transitional-living.html) | Both | Live, real copy |
| [community-support-program.html](../../../site/community-support-program.html) | Both | Live, real copy. Homepage grid now links to it. |
| [outpatient-substance-use.html](../../../site/outpatient-substance-use.html) | Both | Live, real copy. Homepage grid now links to it. |
| [outpatient-therapy.html](../../../site/outpatient-therapy.html) | Both | **New 2026-05-29.** Built from wiki draft; in nav dropdown (all pages) + homepage card. Interim copy on unconfirmed specifics (intake path, ages, telehealth, location, wait time) pending client answers. |
| [mobile-crisis-response.html](../../../site/mobile-crisis-response.html) | Both | Live, real copy. Homepage grid now links to it. Unverified operational claims. |
| [cit-program.html](../../../site/cit-program.html) | Both | Live, real copy. Homepage grid now links to it. 1 "CIT Training Info" footer link still `#`. |

## Pages not yet built

- `blog.html` (or `blog/` directory) — replaces old Resources. Post-launch fast-follow.

## Remaining `href="#"` (6 total) + broken anchors

- 5x "Access Referral Form" buttons on `partner-providers.html` — awaiting real form URLs from Melinda.
- 1x "CIT Training Info" footer link on `cit-program.html` — destination TBD.
- **Broken-anchor class (found by the 2026-05-29 CD review, not the audit):** the "Make a Referral" hero CTA + ~16 footer "Referral Forms" links point to `partner-providers.html#referral`, but that page has **no `id="referral"`** — they land at page top. Fix: add the id to the referral section. See [research/2026-05-29-launch-cd-review.md](../research/2026-05-29-launch-cd-review.md) for the full findings (16 pages, 9 blockers).

## Open items (from [2026-05-28 audit](../../sources/2026-05-28-live-site-audit.md))

- ✅ **Resolved 2026-05-29** — Outpatient Therapy now ships as a full service: built at root-level `outpatient-therapy.html`, in the nav dropdown sitewide, and a homepage card. The old `/services/outpatient-therapy` path inconsistency is gone.
- ✅ **Resolved 2026-05-29** — Woodward address fixed to **706 Cedar Ave., Woodward, IA 50276** (was `1234 Main St` placeholder).

## Shared infrastructure

- [shared.css](../../../site/shared.css) — common styles imported across pages.
- [shared.js](../../../site/shared.js) — common JS (nav, emergency bar, etc. — verify).
- [serve.mjs](../../../serve.mjs) — local dev server, serves `site/` on port 3001 (default).
- [screenshot.mjs](../../../screenshot.mjs) — Puppeteer-based screenshot helper, writes to `temporary screenshots/`.

## When to promote to a dedicated page

Per [WIKI-CLAUDE.md](../WIKI-CLAUDE.md): once a website page accumulates substantive wiki-side context (audience research, content brief, decisions tied to it), promote it to `pages/<slug>.md` and replace the row above with a link.
