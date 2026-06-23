# Locations

Inside Out operates three locations. Knoxville opens Spring 2026 — show "Coming Soon: Spring 2026" badge.

## Woodward
- **Address:** 706 Cedar Ave., Woodward, IA 50276 (confirmed 2026-05-29).
- **Phone:** 515-642-4125.
- **Services:** Crisis Stabilization – **Adults only**. (Melinda confirmed 2026-06-19: "we only have Adults in Woodward.")
- **Referral fax:** 515-334-4086 (per adult crisis referral form).
- **Asset:** [`brand_assets/woodward_da6b77bbe1caaa67421435478352144d.webp`](../../../site/brand_assets/woodward_da6b77bbe1caaa67421435478352144d.webp).

## Perry
- **Address:** 410 12th St., Perry, IA 50220.
- **Phone:** 515-642-7070 — this is the number for **all Perry services**, not just Admin (Melinda confirmed 2026-06-19).
- **Services:** Crisis Stabilization – **Children (ages 5–17)**, Peer Support Services, and likely other non-Woodward services. (Melinda confirmed 2026-06-19: "have Kids in Perry" + "The 7070 number is also the number for all of our services in Perry.")
- **Referral fax (children's crisis):** 515-666-4340 (per children's crisis referral form).
- **Asset:** [`brand_assets/PerryLocation_da6b77bbe1caaa67421435478352144d.webp`](../../../site/brand_assets/PerryLocation_da6b77bbe1caaa67421435478352144d.webp).
- **Page exists:** [perry.html](../../../site/perry.html). The most fleshed-out single-location page on the site so far; template for Woodward and Knoxville.

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

- ~~Is the Woodward address available?~~ **Resolved:** 706 Cedar Ave., Woodward, IA 50276 (confirmed 2026-05-29).
- ~~Is `515-642-7070` Perry-specific or the org admin line for all sites?~~ **Resolved:** It's the number for all Perry services (Melinda 2026-06-19).
- What services will Knoxville offer at launch?
- ~~Location-page architecture decision~~ **Resolved:** per-location pages (see [decision](../decisions/active/2026-05-28-per-location-pages.md)).
- Which services besides Children's Crisis are at Perry? (Peer Support form uses the Perry 7070 number — confirm full list with Melinda.)
- Where should Transitional Living application forms be submitted? (Not specified on the form.)

## Source

[project brief](../sources/2026-04-24-project-brief.md) §"Placeholder Content" + §"Homepage Sections to Build" (location card spec).
