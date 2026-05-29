# Source — Creative-Director Review Kit (2026-05-28)

**Source path:** [`raw/design-review-2026-05-28/`](../../../raw/design-review-2026-05-28/) (4 files)
**Ingested:** 2026-05-29
**Type:** Review brief + consolidated source-of-truth + QA checklist + findings template

## TL;DR

A four-part kit Justin dropped to drive a senior-creative-director review of the live build before the June 5 launch. It consolidates every client decision the site is judged against — with provenance — into a testable checklist, and instructs the local session to verify the build and produce a findings report (review-only, no code changes). The review was run; results live at [research/2026-05-29-launch-cd-review.md](../research/2026-05-29-launch-cd-review.md).

## The four files

- `00-CREATIVE-DIRECTOR-REVIEW-BRIEF.md` — operating instructions: verify fairly (start from UNVERIFIED, not "broken"), evidence both ways with `file:line`, don't fix in this pass, flag ambiguous items as DECISION.
- `01-SOURCE-OF-TRUTH.md` — the consolidated client decisions/feedback with provenance (see below).
- `02-QA-CHECKLIST.md` — ~28 testable assertions (DR/EM/OP/CA/WIRE) with where-to-check and pass criteria.
- `03-FINDINGS-REPORT-TEMPLATE.md` — the output format (summary verdict, checklist table, defects by severity, confirmed-complete, remediation plan).

## Provenance of the source-of-truth

Four real sources feed the brief:
- **April 2, 2026 Design Review** (Melinda Dennis + Stevi Bundy, Gemini meeting notes) → the DR-01…DR-09 items.
- **April 20, 2026 review-recap email** (Justin → Melinda) → the EM-11…EM-16 action items.
- **April 9, 2026 "Indeed" email** (Melinda + Kristen McKillip, HR) → OP-17 (Open Positions model).
- **Content-accuracy flags** (wiki + transcript) → CA-18…CA-20.
- **Live-site audit** → WIRE-21…WIRE-28 (launch-blocking wiring).

> Stakes context from the kit: the state and the org's largest funder recently visited the site and couldn't find what they needed. Institutional visitors are a primary audience; broken links, placeholders, and unverifiable claims cost credibility and funding.

## Key client decisions captured (new or sharper than the wiki had)

- **DR-01** Remove 988 from public pages — Melinda emphatic. 844-428-3878 is the prominent line.
- **DR-02** No "hands/hearts" illustration as final (tied to a prior failed funder, Heart of Iowa). Real/stock photography.
- **DR-03** Palette: darker teal + purple; drop mustard/green; cream background OK. *(Already a wiki decision; confirmed.)*
- **DR-04** Secondary header CTA = "Make a Referral" (Stevi's note, for ER nurses); primary nav stays "Partner Providers."
- **DR-06** Location pages drop per-building primary contact; keep admin phone only. *(Matches wiki decision.)*
- **DR-07** Who We Are = Executive + Management sections; program providers listed on their own service pages; real names.
- **DR-08** Provider Hub: per-service intake form → transactional email, no client data stored; Mobile Crisis = call for dispatch, no form.
- **DR-09** Response times differ by service (crisis ≤ 60 min; Transitional Living not staffed weekends).
- **EM-11** Per-service accent colors. **EM-12** more dynamic card treatment. **EM-13** "coping strategies" → "resources." **EM-14** fix Woodward's wrong (Perry) photo. **EM-15** remove Stevi's direct contact from partner pages.
- **OP-17 / EM-16** Open Positions: CIS always-on anchor + link out to Indeed; no stale hardcoded lists. Indeed hookup pending (Kristen).
- **CA-18/19/20** No insurance/cost claims on crisis pages unless confirmed; Mobile Crisis claims + county list must be confirmed and reconciled; no operational promise stated as fact unless confirmed.

## Conflicts surfaced against the existing wiki

1. **Outpatient Therapy (DR-05).** The kit says it is a legitimate service that should be present (the 10th, rounding the grid to 5×5). The filed decision [`2026-05-28-remove-outpatient-therapy-card`](../decisions/active/2026-05-28-remove-outpatient-therapy-card.md) says remove it and don't ship for June 5. **Direct contradiction** — flagged as DECISION D1 for Justin; the filed decision stands until he rules.
2. **Stevi contact (EM-15).** The kit says remove Stevi's direct contact from partner pages; the build makes her the primary hub contact (7 touchpoints). Flagged DECISION D2.
3. **Insurance/cost on crisis pages (CA-18).** The kit wants client confirmation; the filed [`no-pricing-copy`](../decisions/active/2026-05-28-no-pricing-copy.md) decision says strip it. On crisis pages it doubles as access reassurance. Flagged DECISION D4.

## What this feeds

- [research/2026-05-29-launch-cd-review.md](../research/2026-05-29-launch-cd-review.md) — the FINDINGS report produced by running the kit.
- [plans/2026-05-29-launch-remediation.md](../plans/2026-05-29-launch-remediation.md) — the sequenced fix plan.
- DECISION items D1–D6 need Justin/Melinda before the dependent fixes can land.

## Cross-references

- [sources/2026-05-28-live-site-audit.md](2026-05-28-live-site-audit.md) — earlier ground-truth audit; the kit's WIRE items build on it.
- [decisions/index.md](../decisions/index.md) — the four filed launch decisions the kit confirms/contradicts.
