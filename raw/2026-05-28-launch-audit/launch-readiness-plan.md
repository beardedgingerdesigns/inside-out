# Launch Readiness — June 5 Target

**Status:** proposed
**Date:** 2026-05-28 (drafted)
**Scope:** Everything required to take the Inside Out site from its current live-preview state to a public launch by 2026-06-05 — link wiring, content fact-confirmation, and a small build decision. Excludes post-launch fast-follow (photography, blog, staff directory).

## Premise

The site is a short distance from shippable, but not for the reason the wiki assumed. All eight service pages are live with real copy (see [../sources/2026-05-28-live-site-audit.md](../sources/2026-05-28-live-site-audit.md)). What remains is **broken link-wiring** and **unconfirmed facts on live pages** — and those gaps line up directly with the client's escalation: the state and the org's largest funder visited the site recently and couldn't find what they needed. A dead "Contact Us," location links that all dump onto Perry, and dead provider/referral links are the most probable causes. Fixing them is fast and high-leverage.

## Approach

Four phases, ordered so the no-dependency work ships first and the client-dependent work runs in parallel.

### Phase 0 — Wiring (no external input; do first)
A single Claude Code session against `site/`. None of this needs Justin or the client:

- Fill the four dead homepage service-grid `href`s (Community Support, Outpatient Substance Use, Mobile Crisis Response, CIT) — the pages already exist.
- Wire **Contact Us** and **Donate** sitewide (nav + footer). If no dedicated pages exist yet, decide destinations: Contact → a real contact page or a footer anchor with phone/email/address; Donate → the payment processor URL or a stub page.
- Wire the footer "For Providers" block: Partner Provider Hub → `/partner-providers`, Referral Forms → real destination, Contact Us, Donate.
- Normalize the "Outpatient Therapy" path so all services share one slug convention (see Open Questions on whether it ships at all).

### Phase 1 — Location pages (one small build decision, then execute)
Resolve the location-page architecture (see Open Questions), then:
- Point Woodward / Perry / Knoxville cards and nav at their correct destinations.
- Replace the Woodward placeholder address once the real one arrives (Phase 2 input).
- Give Knoxville a "coming soon" treatment with no dead link.

### Phase 2 — Fact confirmation (client-dependent; start in parallel with Phase 0)
Collect the must-confirm facts from Melinda (the open-questions list below doubles as the basis for the email she's waiting on). Then reconcile the live pages so every concrete claim is true:
- Woodward address.
- Sign-off (or correction) on the operational promises already live — Mobile Crisis "< 60 min," "plain clothes / unmarked vehicle," "24/7," coverage counties; and the insurance/cost claims across all service pages.
- Decide the funding/insurance copy posture (see Open Questions) and apply it consistently.

### Phase 3 — Pre-launch verification pass (after 0–2)
- Click every nav and footer link on every page; zero `#` destinations remain.
- Confirm the persistent 844-428-3878 emergency bar renders on every page.
- Spot-check each service page's concrete claims against Melinda's confirmations.
- Knoxville "coming soon" consistent everywhere; no claim that an unopened location currently offers a service.

## Open questions

These gate launch and are Justin's or the client's call — not Claude's.

**For Justin (decide; candidates to lock as decisions):**
1. **Location-page architecture** — clone `perry.html` into per-location pages (build Woodward, stub Knoxville) **or** build one combined `/locations` page all three cards point to? Affects Phase 1 effort.
2. **Funding / insurance copy posture** — the standing "no pricing/insurance copy" directive conflicts with insurance claims already live (e.g., Mobile Crisis "no insurance needed"). Pick one posture and apply sitewide.
3. **"Outpatient Therapy" (9th service)** — does it launch? If yes, add to nav + service catalog and fix its slug; if no, pull the homepage card. It also currently claims a Knoxville location that isn't open.

**For Melinda (confirm; this list is the spine of the email she's waiting on):**
4. **Woodward street address** (live placeholder right now).
5. **Mobile Crisis Response** operational claims: arrival-time commitment, plain-clothes/unmarked-vehicle, true 24/7, exact coverage counties.
6. **Insurance / cost** position per service — can the "free / no insurance needed" language stand, and where?
7. Any service-specific intake numbers, or is **844-428-3878** the single front door for all services?

(The fuller per-service open-questions live in each [../services/](../services/index.md) draft; items 4–7 are the launch-blocking subset.)

## Effort / cost estimate

- **Phase 0:** ~2–4 hrs, one Claude Code session. No dependencies.
- **Phase 1:** ~2–3 hrs if combined `/locations` page; ~3–5 hrs if per-location pages cloned from Perry.
- **Phase 2:** Claude-side reconciliation ~2 hrs once Melinda answers; **critical-path bottleneck is her turnaround, not the work.**
- **Phase 3:** ~1–2 hrs.
- **Realistic path to June 5:** achievable if Melinda's confirmations land by ~June 2. Phases 0–1 can ship immediately regardless; Phase 2 is the only true dependency.

## Cross-references

- [../sources/2026-05-28-live-site-audit.md](../sources/2026-05-28-live-site-audit.md) — the ground-truth audit this plan acts on.
- [../architecture/site-map.md](../architecture/site-map.md) — page inventory and nav order.
- [../architecture/locations.md](../architecture/locations.md) — location facts and open address questions.
- [../architecture/services-overview.md](../architecture/services-overview.md) — service catalog and the 9th-service flag.
- [../services/index.md](../services/index.md) — per-service drafts holding the full open-questions lists.
