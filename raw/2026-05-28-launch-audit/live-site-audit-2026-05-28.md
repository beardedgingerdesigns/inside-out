# Live Site Audit — 2026-05-28

**Type:** Source record (immutable).
**Method:** Direct inspection of the live Netlify preview (https://astounding-torrone-ff5b5e.netlify.app/) on 2026-05-28, cross-checked against the curated wiki and the Wave 2 service drafts.
**Purpose:** Establish ground truth for current site state ahead of a June 5, 2026 launch, and record every launch-blocking gap.

> Summarized by `sources/2026-05-28-live-site-audit.md` after ingest. Referenced by `plans/2026-05-28-launch-readiness.md`.

---

## Headline

The site is **further along than the curated wiki believes.** [overview.md](../../overview.md) (dated 2026-05-17) still describes a half-built site. In reality **all eight service pages are live and built with real, persona-grounded copy** that matches the Wave 1/Wave 2 drafts in [services/](../../services/). The remaining distance to launch is **link-wiring + fact-confirmation**, not page-building.

---

## Live page inventory (confirmed 2026-05-28)

| Page | Live? | Notes |
|---|---|---|
| `/` (homepage) | ✅ | Hero, services grid, locations, who-we-are blocks all present |
| `/who-we-are` | ✅ | Linked from nav |
| `/perry` | ✅ | Only built location page |
| `/open-positions` | ✅ | Linked from nav |
| `/partner-providers` | ✅ | Provider hub exists and is linked from nav |
| `/crisis-stabilization-adults` | ✅ | Real copy |
| `/crisis-stabilization-children` | ✅ | Real copy |
| `/transitional-living` | ✅ | Real copy (wiki still flags this as "untracked / never committed" — stale) |
| `/peer-support-services` | ✅ | Real copy (wiki still flags as "untracked" — stale) |
| `/community-support-program` | ✅ | Real copy; **homepage grid does not link to it** |
| `/outpatient-substance-use` | ✅ | Real copy; **homepage grid does not link to it** |
| `/mobile-crisis-response` | ✅ | Verified by full fetch — strong copy; **homepage grid does not link to it** |
| `/cit-program` | ✅ | Real copy; **homepage grid does not link to it** |
| `/services/outpatient-therapy` | ⚠️ unverified | A **9th** service card appears in the homepage grid, on a different path prefix than the canonical 8. Existence not confirmed. Not in nav or the wiki's service catalog. |

---

## P0 — Broken links (mechanical; sitewide via shared header/footer)

These are the most likely cause of the client complaint that the state and the largest funder "couldn't find what they needed."

1. **All location links resolve to `/perry`.** In both the top nav and the homepage location cards, Woodward / Perry / Knoxville all point to `/perry`. Woodward and Knoxville have no real destination. Only `perry.html` exists.
2. **Four homepage service cards are dead (`#`).** In the "How We Can Help" grid, Community Support Program, Outpatient Substance Use, Mobile Crisis Response, and CIT Program link to `#` — even though all four pages exist and the **top nav links to them correctly.** This is unfilled `href`s in the grid template.
3. **Contact Us and Donate are dead (`#`) everywhere** — nav and footer. For a crisis nonprofit, a dead "Contact Us" is the single highest-impact miss for an institutional visitor (state, funder).
4. **Footer "For Providers" links are dead (`#`):** Partner Provider Hub, Referral Forms, Contact Us, Donate. (The Partner Providers page itself exists — the footer just doesn't link it.) Footer "Quick Links" → Open Positions is also `#` though the nav version is real.
5. **Path-prefix inconsistency.** The "Outpatient Therapy" card uses `/services/outpatient-therapy` while all eight canonical services are root-level slugs. Decide the convention and make it consistent.

## P0 — Live content that is unverified (accuracy / liability risk)

6. **Woodward address is a placeholder:** the homepage location card shows `1234 Main St, Woodward, IA`. The wiki has the real Woodward address as TBD. This is exactly the kind of fact an institutional visitor checks.
7. **Service pages shipped with the drafts' *assumed* answers to their own open questions** — and several are concrete, checkable promises rather than soft marketing. On Mobile Crisis Response alone, the live page asserts: arrival **"< 60 min,"** **"plain clothes, unmarked vehicle,"** **"24/7,"** **"Free / no insurance needed,"** and a specific coverage list (**Polk, Dallas, Warren, Madison** + neighboring counties). Every one of these is flagged "confirm before publish" in [services/mobile-crisis-response.md](../../services/mobile-crisis-response.md). For a crisis service these are operational promises. Other service pages likely carry similar unconfirmed insurance/coverage/hours claims (the drafts flagged "you don't need insurance" lines for removal unless confirmed).

## P1 — Verify, ideally pre-launch (survivable as fast-follow)

8. The service drafts carry extensive open questions (coverage areas, hours, staffing titles, length of stay, funding posture). Most are copy-tightening, **except** the funding/insurance and coverage-area claims, because those are stated as fact on the live pages (see item 7). Pull the must-confirm subset into the plan's open questions.
9. **Knoxville consistency.** Homepage shows "Coming Spring 2026" / nav shows "Coming Soon" / location card shows "Opening Spring 2026" — close enough, but the "Outpatient Therapy" card claims it's "available at our Knoxville location," which contradicts Knoxville not being open yet.

## P2 — Fast-follow (must not block launch)

10. Real photography (residential/transitional pages especially want it), favicon/app icons, the Blog section (replaces old Resources), and the staff directory. None are launch-blocking.

---

## Stale claims in the curated wiki (to reconcile on ingest)

- **[overview.md](../../overview.md)** "Current state (2026-05-17)": claims only crisis-stabilization + peer-support + transitional-living exist, no locations page, one git commit. All outdated.
- **[architecture/site-map.md](../../architecture/site-map.md)**: status column dated 2026-05-17; marks `peer-support-services.html` and `transitional-living.html` as untracked/never committed.
- **[architecture/services-overview.md](../../architecture/services-overview.md)**: marks Wave 2 HTML as "placeholder copy." Live pages show finished copy — the Wave 2 HTML rewrites appear to have shipped since the wiki was last touched.

## Sources

- Live preview: https://astounding-torrone-ff5b5e.netlify.app/ (inspected 2026-05-28).
- [services/mobile-crisis-response.md](../../services/mobile-crisis-response.md) and sibling service drafts (open-questions sections).
- [architecture/locations.md](../../architecture/locations.md), [architecture/site-map.md](../../architecture/site-map.md), [architecture/services-overview.md](../../architecture/services-overview.md).
