# Launch Remediation — June 5 Target (defect-driven)

**Status:** in-progress — **WS-1 + WS-3 + decisions D1–D5 shipped 2026-05-29** (Stevi removed, insurance copy stripped, illustrations kept, county list set to 13). Also done 2026-05-29: Open Positions → Indeed link-out (B8), Who We Are staff populated from the live site (B5), Woodward street address applied + ZIP 50276 confirmed (B4), placeholder FAQs removed from Woodward/Perry (B7). Outpatient Therapy page **built** 2026-05-29 (D1 — live with safe interim framing; final copy gated on client answers). Remaining: WS-2 form URLs + response times (D6), Mobile Crisis operational claims (D6), WS-5 client facts (Transitional Living staffing; confirm Who We Are exec/leadership); plus final Outpatient Therapy copy answers.
**Date:** 2026-05-29 (drafted)
**Scope:** Take the build from its reviewed state to public launch by 2026-06-05 by clearing the 9 blockers and the major defects found in the [CD review](../research/2026-05-29-launch-cd-review.md). Operationalizes the framework in [2026-05-28-launch-readiness.md](2026-05-28-launch-readiness.md) with concrete, evidence-cited tasks. Excludes post-launch fast-follow (real photography, blog, full staff directory).

## Premise

The CD review confirmed the build is structurally strong (palette, cards, per-location pages, most wiring all PASS) but has **9 launch blockers** — almost all in the provider/institutional path that triggered the client's escalation. The work splits cleanly into **no-input fixes we can ship immediately on approval** and **fixes gated on a client/CD answer (D1–D6)**. The critical path is the client answers, not the engineering.

## Approach

Five workstreams. WS-1 has no dependencies and should ship first. WS-4 (decisions) and WS-5 (client facts) run in parallel and gate the rest.

### WS-1 — No-input fixes ✅ SHIPPED 2026-05-29 (no client/CD input)

All items below applied and verified (all 16 pages return HTTP 200; `#referral` anchor resolves; 988 gone; meta + aria-expanded on all pages; reduced-motion query added). See [log/2026-05-29-ws1-launch-fixes.md](../log/2026-05-29-ws1-launch-fixes.md).

| # | Fix | Evidence | From |
|---|---|---|---|
| 1 | Add `id="referral"` to the referral section so the hero CTA + ~17 footer "Referral Forms" links resolve | `partner-providers.html:168`; links e.g. `index.html:211,571` | B1 |
| 2 | Fix the dead `cit-program.html` footer link (`href="#"` "CIT Training Info") + restore its standard "Referral Forms" footer entry | `cit-program.html:435` | B9 |
| 3 | Remove 988 from `contact.html` emergency bar | `contact.html:120` | M1/DR-01 |
| 4 | Reframe "Coping Strategy Exploration" → "resources" on both crisis pages | `crisis-stabilization-children.html:292`, `crisis-stabilization-adults.html:290` | M3/EM-13 |
| 5 | Nav/footer parity pass across all 16 files: fix mobile "Locations" → real per-location links (currently → perry on 11 pages); normalize footer Quick Links | e.g. `community-support-program.html:95` | M5/WIRE-28 |
| 6 | Add `<meta name="description">` to all 16 pages | all pages | M6 |
| 7 | A11y: add `aria-expanded`/`aria-controls` to the mobile toggle; fix heading skip (h1→h3) on Provider Hub; add `@media (prefers-reduced-motion)` + ensure `.reveal` content is visible if JS fails | `partner-providers.html:184+`, `shared.css:363`, `shared.js` | M7 |
| 8 | Fix dead `/services` link on Who We Are | `who-we-are.html:335` | M8 |
| 9 | MINOR polish: rename/retire `.btn-amber`, unify the two teal base colors, right-size the open-positions logo, unify footer phone labels, add `:focus-visible` to nav/text links, mobile tap-target ≥44px | various | MINOR |

### WS-2 — Provider Hub wiring (gated on D6 + form destinations)

- Wire the 5 "Access Referral Form" buttons (`partner-providers.html:198,220,237,271,288`) to real form URLs, or render a clearly-flagged "form coming soon." (B2)
- Replace `[X] business hours response` badges with confirmed per-service values, differentiated per DR-09. (B3)

### WS-3 — Mobile Crisis coverage (gated on D5)

- Replace the county lists on **both** the Mobile Crisis page (`mobile-crisis-response.html:138`) and the Provider Hub (`partner-providers.html:319-320`) with one client-confirmed list from the [BHDS map](../sources/2026-05-29-mobile-crisis-coverage-map.md) (yellow = Inside Out). Remove "Polk" (it's Broadlawns/911). (B6)
- Optional: add the small Iowa coverage-map graphic the service page requested.
- Confirm/flag the operational claims: "< 60 min," "plain clothes/unmarked," "24/7," "follow-up within 24 hours." (D6/CA-20)

### WS-4 — Decisions (Justin / CD — gates dependent work)

- ✅ **D1 DONE 2026-05-29** — Outpatient Therapy kept & **built** (`outpatient-therapy.html`, nav dropdown sitewide, homepage 3×3 card), with safe interim framing pending the client copy answers. See [log](../log/2026-05-29-outpatient-therapy-built.md). Final copy gated on Melinda's answers (Justin emailing).
- **D2** Stevi contact: strip from partner pages, or keep her as the hub POC? (affects 7 spots)
- **D3** Illustrations (`homepage.png`, `crisis-child.png`): accept as interim or replace before launch?
- **D4** Insurance/cost language on crisis pages: strip per `no-pricing-copy`, or keep access-reassurance framing with sign-off?

### WS-5 — Client facts (Melinda — critical path)

- **D5** Final Mobile Crisis county list (confirm against the yellow map).
- ✅ **Done 2026-05-29** — Woodward street address **706 Cedar Ave., Woodward, IA 50276** applied across index/contact/woodward (7 spots incl. 3 map links); `1234 Main St` placeholder killed (B4). ZIP 50276 confirmed by Justin 2026-05-29. See [log/2026-05-29-woodward-address.md](../log/2026-05-29-woodward-address.md).
- ✅ **Done 2026-05-29** — Who We Are staff populated from the live site (5 real people); John/Jane Doe removed, B5 cleared. Open: confirm whether an Executive Director / leadership (Melinda Dennis) and Scott Allen should appear (live site names no exec — DR-07 deviation). See [source](../sources/2026-05-29-live-site-who-we-are-staff.md).
- ✅ **Done 2026-05-29** — Placeholder FAQ items removed from Woodward (1) + Perry (3) per Justin's "remove the placeholder FAQs" call; B7 cleared. See [log/2026-05-29-faq-placeholders-removed.md](../log/2026-05-29-faq-placeholders-removed.md). Re-add with real copy if Melinda later confirms the policies.
- ✅ **Done 2026-05-29** — Open Positions rebuilt to link out to the Indeed company page (no embed); two real openings listed (Perry — Days; Woodward — Overnight). B8 cleared. See [decision](../decisions/active/2026-05-29-open-positions-indeed-linkout.md).
- Transitional Living staffing: is it 24/7 or not staffed weekends? (M9 — reconcile copy)
- ✅ **Done 2026-05-29** — Justin confirmed `buy.stripe.com/3csfZBdKVcDk6Gc000` is the production Donate link (M10). See [log/2026-05-29-stripe-link-confirmed.md](../log/2026-05-29-stripe-link-confirmed.md).

## Open questions

The DECISION items D1–D6 above are the gating questions. Everything in WS-1 can proceed today without them.

## Effort / cost estimate

- **WS-1:** ~3–5 hrs, one Claude Code session. No dependencies — **ship first.**
- **WS-2:** ~1–2 hrs once form destinations + response times land.
- **WS-3:** ~1 hr once D5 confirmed (+1–2 hrs if adding the map graphic).
- **WS-4/WS-5:** Claude-side work is small; the **bottleneck is Melinda/Justin turnaround.** D1 (keep/remove Outpatient Therapy) is the largest swing — a "keep" adds a new service page.
- **Realistic June 5:** achievable if D1–D6 + client facts land by ~June 2. WS-1 ships immediately regardless and clears most of the visible breakage.

## Cross-references

- [research/2026-05-29-launch-cd-review.md](../research/2026-05-29-launch-cd-review.md) — the findings this plan executes.
- [2026-05-28-launch-readiness.md](2026-05-28-launch-readiness.md) — the phase framework this refines.
- [sources/2026-05-29-mobile-crisis-coverage-map.md](../sources/2026-05-29-mobile-crisis-coverage-map.md) — WS-3 source.
- [decisions/active/2026-05-28-remove-outpatient-therapy-card.md](../decisions/active/2026-05-28-remove-outpatient-therapy-card.md) — the decision D1 contests.
