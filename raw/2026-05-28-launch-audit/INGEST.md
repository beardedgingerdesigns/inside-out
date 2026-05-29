# INGEST — 2026-05-28 Launch Audit Drop

**Drop type:** External source + proposed plan, staged for promotion.
**Date staged:** 2026-05-28
**Staged by:** Justin (via Claude review of the live Netlify preview + this wiki).
**Source of record:** `live-site-audit-2026-05-28.md` (in this folder).

Read this first. It is the operating instruction for the Claude Code session that promotes this drop into the curated wiki. Follow [WIKI-CLAUDE.md](../../WIKI-CLAUDE.md) → "Wiki operations → Ingest" while you work. This is **one ingest event** — it gets **exactly one** new `log/` file.

---

## Why this drop exists

The curated wiki is **stale relative to the live site.** [overview.md](../../overview.md) is dated 2026-05-17 and still claims half the service pages don't exist, that there's no locations page, and that there's only one git commit. The live preview (https://astounding-torrone-ff5b5e.netlify.app/) shows **all eight service pages built with real, persona-grounded copy.** The project is no longer in "build the pages" phase — it's in "wire the links, confirm the facts, ship" phase, with a **June 5, 2026 target** and active client pressure (the state and the org's largest funder hit the site and couldn't find what they needed — see the plan).

This drop does two jobs:
1. **Get the wiki up to speed** — reconcile the curated pages with live reality.
2. **Stand up the launch plan** — promote the punch list into a tracked `plans/` entry with the client-confirmable facts captured as open questions.

---

## Actions to perform (in order)

### 1. File the source summary
Create `sources/2026-05-28-live-site-audit.md` — a per-source summary page pointing at this raw drop (`raw/2026-05-28-launch-audit/live-site-audit-2026-05-28.md`). Follow the existing pattern in [sources/](../../sources/index.md). Add a one-line entry to `sources/index.md`.

### 2. Refresh the stale curated pages
The audit file is the authority for current site state. Update:

- **[overview.md](../../overview.md)** — replace the "Current state (2026-05-17)" and "Next likely moves" sections. New current state: all 8 service pages live with real copy; `perry.html` is the only built location page; launch blockers are link-wiring + unverified facts, not missing pages. Bump "Last updated" to 2026-05-28.
- **[architecture/site-map.md](../../architecture/site-map.md)** — update the status column. All service pages are live; reconcile the "untracked / never committed" notes on `peer-support-services.html` and `transitional-living.html` against the fact that they now render finished copy.
- **[architecture/services-overview.md](../../architecture/services-overview.md)** — mark all eight HTML pages as shipped (not placeholder). **Flag the ninth service**: the homepage grid references an "Outpatient Therapy" card at `/services/outpatient-therapy` — a slug outside the canonical 8 and on a different path prefix. Record it as an open item (verify it exists / decide if it launches).
- **[architecture/locations.md](../../architecture/locations.md)** — record that the live nav and homepage location cards currently all link to `/perry` (Woodward and Knoxville have no destination), and that the Woodward card shows a placeholder address (`1234 Main St`). Keep the real-address question open.

Edits to these `architecture/*` and `overview.md` pages are framing/site-state updates, **not** decision changes — edit in place per ground rule #2.

### 3. Promote the plan
**Copy** (do not move — raw is immutable) `launch-readiness-plan.md` from this folder to `plans/2026-05-28-launch-readiness.md`. It is already in the `plans/` template shape. On promotion:
- Verify cross-reference link depths resolve from `plans/` (they were authored as `../section/file.md`, correct for a one-level-deep section).
- Add a one-line entry to `plans/index.md`.

### 4. Candidate decisions — DO NOT auto-file
Two items in the plan are decision-shaped but are **Justin's call to lock**. Do **not** create `decisions/active/*` files unprompted. Surface them to Justin and only file if he confirms:
- **Location-page architecture** — clone `perry.html` into per-location pages (Woodward, Knoxville stub) vs. build one combined `/locations` page. (Plan → Open Questions.)
- **Funding / insurance copy posture** — the standing "no pricing/insurance copy" directive vs. the insurance claims already live on service pages. (Plan → Open Questions.)

If Justin confirms either, file it under `decisions/active/2026-05-28-<slug>.md` using the decision template, move nothing, and add it to `decisions/index.md`.

### 5. Log the event
Append **one** file: `log/2026-05-28-launch-audit-ingest.md`. Summarize: source filed, curated pages refreshed, plan promoted, and (if any) decisions filed. List every file added/updated.

### 6. Cross-references
Ensure the new source page and the promoted plan each link to ≥1 sibling and are linked from their section `index.md`. Markdown links only — no `[[wikilinks]]`.

---

## What NOT to do

- **Do not modify any file in this `raw/` folder.** It is the immutable source record.
- **Do not touch HTML/CSS/JS.** The site code lives in `site/`; this ingest only updates wiki knowledge and stands up the plan. The actual code fixes are tracked as work *inside* the plan and executed in a separate Claude Code session.
- **Do not file decisions without Justin's confirmation** (see step 4).
- **Do not split this into multiple log entries** (ground rule #6).
