# Remove Outpatient Therapy Homepage Card

**Status:** superseded
**Date:** 2026-05-28
**Scope:** Homepage service grid — the 9th "Outpatient Therapy" card
**Superseded by:** [../active/2026-05-29-keep-outpatient-therapy.md](../active/2026-05-29-keep-outpatient-therapy.md)

> **Superseded 2026-05-29.** The "do not relitigate without" trigger fired: the ingested creative-director source-of-truth (DR-05) documents Outpatient Therapy as a deliberate, legitimate service from the April 2 client review, and Justin confirmed on 2026-05-29 to keep and build it. Preserved below for history.

## Decision

Remove the "Outpatient Therapy" card from the homepage service grid. Do not build or ship the `/services/outpatient-therapy` page for the June 5 launch. The canonical service catalog remains 8 services.

## Rationale

The card links to a path (`/services/outpatient-therapy`) that uses a different slug convention than the 8 canonical services, is not in the nav or wiki catalog, and claims Knoxville availability despite that location not being open. Shipping an unverified 9th service at launch adds risk with no clear upside. Can revisit post-launch if the org wants to add the service.

## Cross-references

- [plans/2026-05-28-launch-readiness.md](../../plans/2026-05-28-launch-readiness.md) — Phase 0 executes this removal.
- [architecture/services-overview.md](../../architecture/services-overview.md) — 9th-service flag section.
- [architecture/site-map.md](../../architecture/site-map.md) — open items.

## Do not relitigate without

Client confirming Outpatient Therapy is a real service they want listed, with correct location availability and a slug convention decision.
