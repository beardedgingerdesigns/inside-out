# 2026-05-29 — ingest + execution | Who We Are staff populated from the live site (B5)

**Operation:** ingest (external source) + code execution (site/)
**Scope:** sources/, sources/index, site/who-we-are.html

Fetched the org's live Who We Are page (insideoutiowa.com/who-we-are) and used its "Our Staff" roster to replace the John/Jane Doe placeholders on the redesign's Who We Are page — clearing blocker **B5**.

- Source page: [sources/2026-05-29-live-site-who-we-are-staff.md](../sources/2026-05-29-live-site-who-we-are-staff.md) (roster + provenance + conflicts).
- `who-we-are.html`: replaced the placeholder Executive Team + Management Team split with a single **"Our Team"** grid of 5 real staff — Ashley Tarver (Crisis Manager), Christina Guerrero (Billing Manager), Tony Rothmeyer (Peer Support Services), William Spencer (LMHC), Jayde Achenbach (CADC). Initials avatars retained until headshots arrive.
- Verified: HTTP 200; zero "John/Jane Doe"; all 5 names render.

## Deviation + open questions flagged

- Structure now matches the live site (one "Our Team" grid), **not** DR-07's Executive + Management split — the live site names no executive. Confirm with Melinda whether Melinda Dennis / leadership should appear, and whether Scott Allen (replaced Juliana Keubler, Mar 2026) should be added (and with what title).
- DR-07 also envisioned program providers on their service pages; clinicians now appear on Who We Are per Justin's instruction to use the live page.
