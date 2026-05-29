# Locations

Inside Out operates three locations. Knoxville opens Spring 2026 — show "Coming Soon: Spring 2026" badge.

## Woodward
- **Address:** TBD (not in brief).
- **Phone:** 515-642-4125.
- **Services known to be offered here:** Crisis Stabilization (adults).
- **Asset:** [`brand_assets/woodward_da6b77bbe1caaa67421435478352144d.webp`](../../../site/brand_assets/woodward_da6b77bbe1caaa67421435478352144d.webp).

## Perry
- **Address:** 410 12th St., Perry, IA 50220.
- **Phone:** Admin line 515-642-7070 (verify whether this is Perry-specific or org-wide).
- **Services known to be offered here:** Crisis Stabilization (children — see `crisis-child.png` and the dedicated [perry.html](../../../site/perry.html)).
- **Asset:** [`brand_assets/PerryLocation_da6b77bbe1caaa67421435478352144d.webp`](../../../site/brand_assets/PerryLocation_da6b77bbe1caaa67421435478352144d.webp).
- **Page exists:** [perry.html](../../../site/perry.html). The most fleshed-out single-location page on the site so far; could become the template for Woodward and Knoxville.

## Knoxville
- **Status:** Opening Spring 2026. Show "Coming Soon" badge on homepage location card.
- **Address:** TBD.
- **Phone:** TBD.
- **Services:** TBD.
- **Asset:** none yet.

## Org-wide contact

- **Emergency / crisis line:** 844-428-3878 (must appear in the persistent top bar on every page).
- **Email:** info@insideoutiowa.org.
- **988:** per DR-01 (Melinda emphatic), 988 must **not** appear on public pages — 844-428-3878 is the prominent line. Still present on [contact.html](../../../site/contact.html):120 (flagged for removal in the [remediation plan](../plans/2026-05-29-launch-remediation.md)).
- **Mobile Crisis coverage:** Inside Out serves **13 south-central counties** (yellow on the [BHDS map](../sources/2026-05-29-mobile-crisis-coverage-map.md)): Adair, Adams, Audubon, Clarke, Dallas, Decatur, Guthrie, Lucas, Marion, Ringgold, Taylor, Union, Wayne. Does **not** include Polk (Broadlawns/911). Confirmed 2026-05-29 — see [decision](../decisions/active/2026-05-29-mobile-crisis-coverage.md).

## Nav / link state (2026-05-29)

Per-location pages now exist ([woodward.html](../../../site/woodward.html), [knoxville.html](../../../site/knoxville.html)) cloned from Perry. **Desktop** nav and homepage location cards resolve per-location correctly (`index.html:121-123,459,474,489`). Two issues remain (see [research/2026-05-29-launch-cd-review.md](../research/2026-05-29-launch-cd-review.md)): the **mobile-menu** "Locations" link still points to `perry.html` on 11 pages, and the Woodward homepage card still shows the placeholder address `1234 Main St, Woodward, IA` (`index.html:468`) — a launch blocker. Knoxville shows "Coming Soon" consistently. The location-page architecture decision is settled: per-location pages, see [decisions/active/2026-05-28-per-location-pages.md](../decisions/active/2026-05-28-per-location-pages.md).

## Open questions

- Is the Woodward address available? (Live placeholder is `1234 Main St` — launch blocker.)
- Is `515-642-7070` Perry-specific or the org admin line for all sites?
- What services will Knoxville offer at launch?
- **Location-page architecture decision** (Justin): per-location pages cloned from Perry, or one combined `/locations` page?

## Source

[project brief](../sources/2026-04-24-project-brief.md) §"Placeholder Content" + §"Homepage Sections to Build" (location card spec).
