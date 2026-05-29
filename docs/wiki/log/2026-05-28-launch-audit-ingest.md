# 2026-05-28 — Launch audit ingest

**Operation:** Ingest
**Scope:** Source filing, curated-page refresh, plan promotion

Ingested the `raw/2026-05-28-launch-audit/` drop — a live site audit and launch readiness plan staged by Justin. The wiki was stale (dated 2026-05-17) and didn't reflect that all 8 service pages are live with real copy. This ingest reconciles the curated pages with ground truth and stands up the launch plan.

## Files added

- `sources/2026-05-28-live-site-audit.md` — source summary for the audit.
- `plans/2026-05-28-launch-readiness.md` — promoted launch plan (copied from raw, not moved).

## Files updated

- `sources/index.md` — added audit entry.
- `plans/index.md` — added launch plan entry.
- `overview.md` — replaced stale 2026-05-17 current-state and next-moves sections; bumped to 2026-05-28.
- `architecture/site-map.md` — updated status column to 2026-05-28; added all 13 live pages; added open-items section for 9th service and Woodward placeholder address.
- `architecture/services-overview.md` — marked all 8 pages as live with real copy (not placeholder); added 9th-service flag section.
- `architecture/locations.md` — added nav/link state section documenting that all location links resolve to Perry; added location-page architecture decision to open questions.

## Candidate decisions surfaced (not filed — Justin's call)

1. Location-page architecture (per-location vs. combined).
2. Funding/insurance copy posture (standing "no pricing" directive vs. live insurance claims).
3. "Outpatient Therapy" 9th service — ship or pull.
