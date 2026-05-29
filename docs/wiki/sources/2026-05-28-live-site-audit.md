# Live Site Audit — 2026-05-28

**Type:** Source summary
**Date ingested:** 2026-05-28
**Raw location:** [`raw/2026-05-28-launch-audit/live-site-audit-2026-05-28.md`](../../raw/2026-05-28-launch-audit/live-site-audit-2026-05-28.md)

## What it is

A full audit of the live Netlify preview conducted 2026-05-28, cross-checked against the curated wiki and Wave 2 service drafts. Establishes ground truth for site state ahead of a June 5, 2026 launch target.

## Key findings

1. **All 8 service pages are live with real copy** — the wiki was stale, still claiming half were unbuilt or placeholder.
2. **Four homepage service-grid links are dead (`#`)** — Community Support, Outpatient Substance Use, Mobile Crisis Response, CIT. The pages exist; the grid template `href`s were never filled.
3. **Contact Us and Donate are dead (`#`) sitewide** — nav and footer. Highest-impact gap for institutional visitors (state, funders).
4. **All location links resolve to `/perry`** — Woodward and Knoxville have no real destination.
5. **Footer "For Providers" links are dead** — Partner Provider Hub page exists but isn't linked.
6. **A 9th service ("Outpatient Therapy")** appears on the homepage grid at `/services/outpatient-therapy` — unverified, not in nav or wiki catalog, uses a different path prefix.
7. **Woodward address is a placeholder** (`1234 Main St`).
8. **Unverified operational claims are live** — Mobile Crisis Response asserts "< 60 min," "plain clothes, unmarked vehicle," "24/7," specific coverage counties, "free / no insurance needed." All flagged "confirm before publish" in the wiki draft.
9. **Knoxville consistency issues** — different "coming soon" phrasing across pages; Outpatient Therapy card claims Knoxville availability despite location not being open.

## Consumed by

- [plans/2026-05-28-launch-readiness.md](../plans/2026-05-28-launch-readiness.md) — the launch plan built on this audit.
- [overview.md](../overview.md) — current-state section refreshed from this audit.
- [architecture/site-map.md](../architecture/site-map.md), [architecture/services-overview.md](../architecture/services-overview.md), [architecture/locations.md](../architecture/locations.md) — status columns reconciled.

## Cross-references

- [sources/2026-04-24-project-brief.md](2026-04-24-project-brief.md) — original brief this audit measures against.
- [services/index.md](../services/index.md) — per-service drafts with the open questions the audit flags.
