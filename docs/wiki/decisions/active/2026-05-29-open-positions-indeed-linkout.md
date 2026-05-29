# Open Positions: Link Out to Indeed (No Embed)

**Status:** active
**Date:** 2026-05-29
**Scope:** open-positions.html

## Decision

Open Positions links out to Inside Out's Indeed company page — **no embedded application forms on the site.** The page gives a concise overview of the open role (Crisis Intervention Specialist, currently hiring at Woodward and Perry) and a single "View openings & apply on Indeed" button. Indeed stays the single source of truth for current openings, so the site never goes stale. Resolves EM-16 / OP-17 / blocker B8.

**Indeed jobs URL:** https://www.indeed.com/cmp/Inside-Out-Wellness-and-Advocacy/jobs?clearPrefilter=1

## Rationale

Per Melinda (April 9 Indeed email) and the April 20 recap: openings "come and go so fast," and she does not want hand-maintained listings that go stale or embedded forms. Justin confirmed 2026-05-29 to **link out only — no embed** — and provided the company jobs URL with two live listings (one Woodward, one Perry).

## Implementation notes

- Removed the 4 hardcoded position cards and the 4 empty Indeed embed stubs.
- One position overview (Crisis Intervention Specialist) + location tags (Woodward, Perry) + an Indeed link-out (opens in a new tab, `rel="noopener"`).
- "How to apply" steps reworded for the link-out flow (no in-page application button).
- The overview describes the role's purpose only — **no invented pay/requirements** (those live on each Indeed listing). Both real openings are listed (confirmed from the live Indeed page 2026-05-29): **Perry — Days, Full-Time** (supporting children & adolescents) and **Woodward — Overnight, Full-Time**. Pay ($18/hr at time of writing) is intentionally left to Indeed so the page can't go stale.

## Cross-references

- [research/2026-05-29-launch-cd-review.md](../../research/2026-05-29-launch-cd-review.md) — EM-16 / OP-17 / B8.
- [sources/2026-05-28-design-review-kit.md](../../sources/2026-05-28-design-review-kit.md) — the OP-17 / EM-16 source-of-truth.
- [plans/2026-05-29-launch-remediation.md](../../plans/2026-05-29-launch-remediation.md) — WS-5.

## Do not relitigate without

The org changing how jobs are surfaced (e.g., a new applicant-tracking system), or the Indeed company-page URL changing.
