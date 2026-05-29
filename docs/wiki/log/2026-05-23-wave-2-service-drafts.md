# 2026-05-23 — Wave 2 service drafts filed

**Operation:** Ingest (4 new service draft pages).

**Scope:** Filed wiki drafts for the four remaining services that previously had placeholder HTML but no research-backed copy direction: Crisis Stabilization Adults, Crisis Stabilization Children (ages 5–17), Transitional Living, and Peer Support Services. Same structural shape as the Wave 1 drafts filed 2026-05-22 — persona-led, peer-research-grounded, with section-by-section copy outlines and open questions for Justin.

## Files added

- [../services/crisis-stabilization-adults.md](../services/crisis-stabilization-adults.md) — voluntary short-term stabilization for adults. 8 peers reviewed (Foundation 2, CommUnity, Eyerly Ball, NAMI Iowa, Your Life Iowa/Iowa HHS, Iowa Admin Code 441—24.39, Connections Health Solutions, Crisis Now). Persona: 34-year-old adult one bad night from collapse, choosing voluntary stabilization over the ER.
- [../services/crisis-stabilization-children.md](../services/crisis-stabilization-children.md) — same model, ages 5–17. 7 peers reviewed (CommUnity / Healing Prairie Farm, Foundation 2 Youth Shelter, Orchard Place, Four Oaks, NAMI Kids/Teens, Iowa HHS Child Crisis Stabilization). Persona: parent at 11pm outside a 14-year-old's bedroom after a "I don't want to be here anymore" moment. Tanager Place and Boston Children's were Cloudflare/Incapsula-blocked and flagged for re-attempt before publish.
- [../services/transitional-living.md](../services/transitional-living.md) — longer-stay residential step-down. 7 peers reviewed (Foundation 2, CommUnity, Eyerly Ball, Optimae LifeServices, Iowa HHS, plus Gould Farm, Fountain House, Pathways Housing First). Persona: 31-year-old post-discharge, family couch burned through.
- [../services/peer-support-services.md](../services/peer-support-services.md) — 1:1 and group support from Iowa-certified peer specialists. 9 peers reviewed (CommUnity, Foundation 2, NAMI Iowa + NAMI Connection, Iowa HHS / Iowa Peer Workforce Collaborative, Optimae, plus Doors to Wellbeing, MHA, Fountain House, IAPS). Persona: someone mid-recovery who bounced off clinical therapy and wants to talk to someone who's been there.

## Files updated

- [../services/index.md](../services/index.md) — promoted Wave 2 from "deferred" to "drafts filed 2026-05-23."
- [../architecture/services-overview.md](../architecture/services-overview.md) — legend, table, and trailing note updated; all eight services now have wiki drafts (📝 status) even where the HTML still holds placeholder copy.

## Directives applied (carried over from 2026-05-22)

1. No pricing or insurance-specific copy. Funding/Medicaid posture left as open questions for Justin in each draft.
2. 844-428-3878 is the primary routing number on every page.
3. No diagnoses named. Copy uses "what you're going through," "what you're living with," "an ongoing mental health condition."
4. Clinical / healthcare-blue voice avoided; the Eyerly Ball treatment in each "What landed / what didn't" section continues to be used as the counter-example.

## What this unblocks

The four placeholder HTML pages (`crisis-stabilization-adults.html`, `crisis-stabilization-children.html`, `transitional-living.html`, `peer-support-services.html`) can now be rewritten against draft copy and persona-grounded research, the same way the four Wave 1 HTML pages were shipped in commit `d39e266`. Each draft's Open Questions section is the input list for Justin's next walk-through; nothing should ship to HTML until those are answered or explicitly accepted as placeholder.

## Not changed

- No HTML files touched.
- No decisions filed. The 2026-05-22 directives remain implicit in the drafts; if Justin wants them locked as decision records, file them under `decisions/active/` separately.
- No plans filed. These are research-and-copy drafts, not feature proposals.
