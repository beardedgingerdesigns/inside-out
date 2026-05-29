# 2026-05-29 — ingest + review | Design-review kit, CD review findings, Mobile Crisis coverage map

**Operation:** ingest (×2 sources) + review (CD findings) + reconciliation
**Scope:** sources, research, plans, overview, architecture (site-map, locations), services (mobile-crisis-response), section indexes

## What happened

Justin dropped two things into `raw/`: a **creative-director review kit** (`raw/design-review-2026-05-28/`, 4 files) and the **authoritative Mobile Crisis coverage map** (`raw/Mobile Crisis Response Map 7.25.25_0 (5) (1).pdf`). Ingested both and ran the review the kit asked for.

- **Ran the CD review** against the actual code (4 parallel read-only agents, all 16 pages + `shared.css`/`shared.js`). Verified ~28 checklist items with `file:line` evidence. Result: ~7 PASS / 4 PARTIAL / 11 FAIL / 5 DECISION, **9 launch blockers**. Filed as [research/2026-05-29-launch-cd-review.md](../research/2026-05-29-launch-cd-review.md).
- **Ingested the review kit** → [sources/2026-05-28-design-review-kit.md](../sources/2026-05-28-design-review-kit.md). Surfaced 3 conflicts vs. the wiki: Outpatient Therapy keep-vs-remove (DR-05 vs filed decision), Stevi contact (build does the opposite of EM-15), insurance copy on crisis pages (CA-18 vs `no-pricing-copy`).
- **Ingested the coverage map** → [sources/2026-05-29-mobile-crisis-coverage-map.md](../sources/2026-05-29-mobile-crisis-coverage-map.md). Melinda's instruction: map shading is authoritative (Inside Out = yellow), PDF text table is not. Resolves CA-19; the live "Polk, Dallas, Warren, Madison" list was wrong (Polk = Broadlawns/911). Exact final list still pending her confirmation (D5).
- **Wrote the wrap-up plan** → [plans/2026-05-29-launch-remediation.md](../plans/2026-05-29-launch-remediation.md): 5 workstreams, no-input fixes first, decisions + client facts gate the rest.
- **Reconciled stale wiki against code** (trust code, fix wiki): `overview.md` (was 13 pages / "only perry exists" → now 16 pages, per-location pages shipped, CD review is ground truth); `architecture/locations.md` (nav now resolves per-location on desktop; 988 + coverage notes); `architecture/site-map.md` (added the broken-anchor finding); `services/mobile-crisis-response.md` (retired the placeholder county list, pointed at the map).

## Decisions needing Justin/Melinda (D1–D6)

D1 Outpatient Therapy keep/remove · D2 Stevi contact · D3 illustrations · D4 insurance copy on crisis pages · D5 exact Mobile Crisis county list · D6 Mobile Crisis operational claims. None resolved in code; the filed `remove-outpatient-therapy-card` decision stands until D1 is ruled.

## Cross-references

- [research/2026-05-29-launch-cd-review.md](../research/2026-05-29-launch-cd-review.md)
- [plans/2026-05-29-launch-remediation.md](../plans/2026-05-29-launch-remediation.md)
- [sources/2026-05-28-design-review-kit.md](../sources/2026-05-28-design-review-kit.md) · [sources/2026-05-29-mobile-crisis-coverage-map.md](../sources/2026-05-29-mobile-crisis-coverage-map.md)
