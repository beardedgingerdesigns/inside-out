# Keep & Build Outpatient Therapy Service

**Status:** active
**Date:** 2026-05-29
**Scope:** Homepage service grid + service catalog + nav — the Outpatient Therapy service
**Supersedes:** [../superseded/2026-05-28-remove-outpatient-therapy-card.md](../superseded/2026-05-28-remove-outpatient-therapy-card.md)

## Decision

Outpatient Therapy is a legitimate Inside Out service and will be present on the site for launch. Build the service page, restore its homepage service-grid card, add it to the nav/service catalog, and normalize its slug to match the canonical service convention. Per the source-of-truth (April 2 design review, DR-05) it rounds the services grid out to a 10-service / 5×5 layout.

## Rationale

The 2026-05-28 removal was filed because the service looked unverified — non-standard slug, absent from nav/catalog, and claiming Knoxville availability while that location isn't open. The newly-ingested creative-director source-of-truth (DR-05, see [sources/2026-05-28-design-review-kit.md](../../sources/2026-05-28-design-review-kit.md)) documents it as a deliberate, legitimate service from the April 2 client review, and Justin confirmed on 2026-05-29 to keep and build it. The removal decision's "do not relitigate without" trigger has fired, so it is superseded rather than edited.

## Build status — DONE 2026-05-29

Page built and wired ([log](../../log/2026-05-29-outpatient-therapy-built.md)). Resolution of the open items:

- ✅ **Copy/content** — wiki draft produced ([outpatient-therapy](../../services/outpatient-therapy.md), persona + peer research) and the HTML page built from it, with **safe interim framing** on the unconfirmed specifics (pending Melinda's answers, which Justin is emailing).
- ✅ **Slug** — built at canonical `outpatient-therapy.html` (root-level).
- ✅ **Knoxville claim** — page makes **no** location claim; Knoxville stays "Coming Soon" in nav only.
- ✅ **Catalog count** — launch grid is **9 services**, shown **3×3** (the "10 / 5×5" framing is set aside). Updated [architecture/services-overview.md](../../architecture/services-overview.md).

Still open (final copy, not blocking): the 8 client questions in the draft's open-questions section.

## Cross-references

- [../superseded/2026-05-28-remove-outpatient-therapy-card.md](../superseded/2026-05-28-remove-outpatient-therapy-card.md) — the decision this supersedes.
- [sources/2026-05-28-design-review-kit.md](../../sources/2026-05-28-design-review-kit.md) — DR-05 source-of-truth.
- [plans/2026-05-29-launch-remediation.md](../../plans/2026-05-29-launch-remediation.md) — WS-4; the build folds into launch scope.
- [architecture/services-overview.md](../../architecture/services-overview.md) — service catalog to update.

## Do not relitigate without

Client reversing direction on offering Outpatient Therapy, or a scope cut that drops it from the June 5 launch.
