# Per-Location Pages

**Status:** active
**Date:** 2026-05-28
**Scope:** Location-page architecture for all three sites (Woodward, Perry, Knoxville)

## Decision

Build per-location pages cloned from `perry.html` rather than a single combined `/locations` page. Each location gets its own page at a root-level slug (`/perry`, `/woodward`, `/knoxville`). Knoxville gets a "coming soon" stub with no dead links.

## Rationale

Each location has distinct services, addresses, and community context. Per-location pages give room for location-specific content and match the existing `perry.html` template. A combined page would compress three different stories into one and limit future growth.

## Cross-references

- [plans/2026-05-28-launch-readiness.md](../../plans/2026-05-28-launch-readiness.md) — Phase 1 executes this decision.
- [architecture/locations.md](../../architecture/locations.md) — location facts and open address questions.
- [architecture/site-map.md](../../architecture/site-map.md) — page inventory.

## Do not relitigate without

A discovery that the three locations are so similar in services and audience that separate pages create maintenance burden with no content differentiation.
