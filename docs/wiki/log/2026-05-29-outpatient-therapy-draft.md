# 2026-05-29 — ingest | Outpatient Therapy service draft (v1)

**Operation:** ingest (content production)
**Scope:** services/outpatient-therapy.md (new), services/index.md, architecture/services-overview.md

Drafted the wiki service page for **Outpatient Therapy**, fulfilling the [keep-&-build decision](../decisions/active/2026-05-29-keep-outpatient-therapy.md) (D1). Written to the same persona-grounded structure as the other service drafts.

- New draft: [services/outpatient-therapy.md](../services/outpatient-therapy.md) — persona, positioning/differentiation (vs. Outpatient Substance Use, Community Support, Peer Support, Crisis Stabilization), tone notes, full content outline (hero → what it is → what to expect → who it's for → how to start), per-service template variations, and a 9-item open-questions list for Justin/Melinda.
- Differentiated cleanly from **Outpatient Substance Use** (substance-specific) — this is the general mental-health, non-crisis, scheduled-talk-therapy tier.
- Respects [no-pricing-copy](../decisions/active/2026-05-28-no-pricing-copy.md); makes **no telehealth claim** (telehealth was removed from the substance-use page — flagged for confirmation); states no unconfirmed specifics — all unknowns marked `[confirm: …]`.
- Updated [services/index.md](../services/index.md) (Wave 3) and [architecture/services-overview.md](../architecture/services-overview.md) (added catalog row + short description; resolved the old "9th service flag" section).

## Not done (gates the HTML build)

Peer-benchmarking against Iowa outpatient-therapy providers (optional, offered). Justin/Melinda answers to the draft's open questions: ages, session formats, in-person vs. telehealth, locations, intake number (crisis line vs. dedicated), specialties to name, typical wait, coordination with substance-use, and the final grid count (9 vs. 10 / 5×5). Once answered, build `outpatient-therapy.html`, add the nav entry, and restore the homepage grid card.
