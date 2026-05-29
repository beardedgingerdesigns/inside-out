# Source — Mobile Crisis Response Coverage Map (BHDS, 7.25.25)

**Source path:** [`raw/Mobile Crisis Response Map 7.25.25_0 (5) (1).pdf`](../../../raw/Mobile%20Crisis%20Response%20Map%207.25.25_0%20%285%29%20%281%29.pdf)
**Ingested:** 2026-05-29
**Provenance:** Iowa BHDS statewide Mobile Crisis Response provider map (footer "BHDS 7.25.25"), provided by Melinda.

## TL;DR

The authoritative state map of which mobile-crisis provider serves each Iowa county. **Inside Out Wellness & Advocacy is the pale-yellow region in south-central Iowa**, contact **844-428-3878**. This is the source the Mobile Crisis service page was explicitly waiting on (see [services/mobile-crisis-response.md](../services/mobile-crisis-response.md) line ~140 and its sources list). It resolves the county-list contradiction flagged as CA-19 / B6 in the [launch CD review](../research/2026-05-29-launch-cd-review.md).

## Melinda's instruction (decisive)

> **The map (the color shading) is accurate. The text listings on the PDF are NOT. Inside Out is the yellow counties.**

So: trust the **yellow shading**, not the PDF's bottom table. Where the table and the shading disagree, the shading wins.

## What the PDF's table says (per Melinda — NOT authoritative, recorded for cross-check)

Inside Out Wellness and Advocacy row → *Adair, Audubon, Clarke, Dallas, Decatur, Guthrie, Lucas, Marion, Ringgold, Taylor, Wayne* (11), contact 844-428-3878.

## Best read of the yellow shading (map = authoritative)

The yellow block is a contiguous south-central cluster. Confidently yellow: **Adair, Audubon, Clarke, Dallas, Decatur, Guthrie, Lucas, Marion, Ringgold, Taylor, Wayne** (the 11 above) **plus Adams and Union** — both read as yellow on the map and are **absent from every provider row in the table**, which is exactly the kind of listing gap Melinda warned about. **Madison and Warren** are ambiguous at map resolution (the table assigns them to Eyerly Ball / purple).

**Confirmed 2026-05-29 (D5).** Justin confirmed the map is authoritative; the served set is the **13 counties** — Adair, Adams, Audubon, Clarke, Dallas, Decatur, Guthrie, Lucas, Marion, Ringgold, Taylor, Union, Wayne (the 11 in the table plus Adams and Union). Applied to both the Mobile Crisis page and the Provider Hub. See [decisions/active/2026-05-29-mobile-crisis-coverage.md](../decisions/active/2026-05-29-mobile-crisis-coverage.md).

## Why this matters / what it corrects on the live site

- The Mobile Crisis page currently claims **"Polk, Dallas, Warren, Madison + neighboring"** (`mobile-crisis-response.html:138`). **Polk is wrong** — the map assigns Polk to **Broadlawns (911)**. Inside Out does not cover Polk.
- The Provider Hub lists a different 9-county set and claims "13 counties" (`partner-providers.html:319-320`). Also not the map's list.
- Both must be replaced with one client-confirmed list derived from this map, and the same list used on both pages. The service-page note even requested a small Iowa coverage-map graphic — this PDF can seed that visual.

## Other providers on the map (context for "outside our area" handoffs)

Broadlawns (Polk, 911); CommUnity (Iowa, Johnson); Southern Iowa MHC (Appanoose, Davis, Mahaska, Monroe, Wapello); Elevate; Eyerly Ball (Des Moines metro purple block); Foundation 2 (eastern Iowa); Heartland Family Service (SW Iowa); Plains Area MHC (NW Iowa); Seasons Center (far NW); Siouxland MHC (Woodbury). Useful if the page tells out-of-area callers where to turn.

## What this feeds

- [services/mobile-crisis-response.md](../services/mobile-crisis-response.md) — coverage section + status notes updated; placeholder county list retired.
- [research/2026-05-29-launch-cd-review.md](../research/2026-05-29-launch-cd-review.md) — resolves B6 / CA-19 (pending D5 confirmation).
- [plans/2026-05-29-launch-remediation.md](../plans/2026-05-29-launch-remediation.md) — county-list reconciliation task.

## Cross-references

- [architecture/locations.md](../architecture/locations.md) — org-wide contact + coverage context.
- [sources/2026-05-28-design-review-kit.md](2026-05-28-design-review-kit.md) — the CA-19 flag this source answers.
