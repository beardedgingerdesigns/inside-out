# WIKI-CLAUDE.md — Inside Out Wellness Knowledge Wiki Schema

Claude Code session guidance for the project knowledge wiki at [docs/wiki/](.). Read this before creating or editing any file under `docs/wiki/`.

This wiki's primary subject is **the Inside Out Wellness & Advocacy website redesign** — insideoutiowa.com, an Iowa-based mental health nonprofit's marketing/services site. Scope: brand system, services catalog, page-by-page intent, locations, decisions, plans, sources fed in by Justin, and the curated knowledge that makes the site copy and design coherent across pages.

Instantiates the LLM-Wiki pattern (Karpathy's pattern). Converted into AIOS canonical layout on 2026-05-23 from a sibling-shaped llm-wiki that lived at the project root under `wiki/` (see [conversion log](log/2026-05-23-wiki-converted-from-project-root.md) and [import source summary](sources/2026-05-23-pre-aios-wiki-import.md)). The original `wiki/` and `raw/` directories at project root are left in place for Justin to remove when convenient; the verbatim pre-conversion snapshot lives at [raw/external/wiki-pre-aios-2026-05-23/](raw/external/wiki-pre-aios-2026-05-23/).

Customer engagement / sales / pitch coordination lives elsewhere (claude-os memory + Gmail). This wiki holds **content, design, and product** context for the website itself.

## Working Memory Protocol

**At the start of every session that touches site content, copy, brand, services, or strategy:**

1. Read [overview.md](overview.md) — current synthesis of the project.
2. Tail the log: `ls docs/wiki/log/ | sort -r | head -10` — last 10 events.
3. Read [decisions/index.md](decisions/index.md) — what's currently locked, deferred, or superseded.
4. If the session touches a specific topic (a service, a location, brand voice/palette/type), drill into the matching `docs/wiki/services/<slug>.md`, `architecture/locations.md`, or `brand/<slug>.md` file before recommending changes.

Cross-project Bearded Ginger Designs context (capacity, billing, partner work) lives in claude-os auto-memory + `/Users/justinlobaito/repos/claude-os/decisions/log.md`. The wiki itself is the canonical store for project-internal knowledge.

## Wiki operations

Three operations govern how content moves in and out.

### Ingest

Adding new content — a locked decision, a new source (brand guide, copy deck, photography), a new plan or draft service page, a raw document Justin dropped into `raw/`. Every ingest must:

1. **Write/update the content file** per the file-authority map below.
2. **Update the relevant section's `index.md`** with a one-line entry pointing at the new page. (Section indexes are per-section to avoid co-touching shared files.)
3. **Append a new file to `log/YYYY-MM-DD-<slug>.md`** with date, operation type, scope, and 1–3 sentences of context.
4. **Add at least one cross-reference** from the new page to ≥1 sibling, and ensure the new page is linked from its section's `index.md`. Markdown links only — wikilinks `[[label]]` don't render on GitHub.
5. **For external sources** (PDFs, brand guides, photo dumps, reference articles): file under `raw/<subfolder>/` and reference from the wiki page that consumes them.

### Query

Using the wiki to answer a question — typically during copywriting, design decisions, or service-page drafting. Read [decisions/index.md](decisions/index.md) and the relevant section's `index.md` first to find candidate pages, then drill into them.

When a synthesis is library-worthy (cross-section, would inform multiple future sessions, not redundant with existing content), file it. Most queries don't produce a library-worthy artifact — only file when it's clearly valuable.

### Lint

Periodic health-check. Looks for:

- **Orphans** — pages no other page links to.
- **Index gaps** — pages on disk but not in their section's `index.md`, or in `index.md` but missing on disk.
- **Stale claims** — `decisions/active/*.md` whose preconditions have changed; `architecture/*.md` whose site-state references no longer match the actual HTML pages.
- **Contradictions** — pages claiming conflicting facts (especially after a new source is ingested).
- **Missing cross-references** — pages that should link based on content overlap but don't.
- **`raw/` orphans** — source material no wiki page references.
- **Lifecycle drift in `decisions/`** — `active/` decisions whose triggers fired but never moved to `superseded/`; `deferred/` decisions whose work has shipped but never moved to `implemented/`; `plans/` items that have hardened into locked decisions but stayed in `plans/`.

## Architectural ground rules

These are inviolable. If a requested change would break one of these, stop and raise it rather than silently working around it.

1. **Markdown only.** Wiki content is prose markdown. The actual website code (HTML/CSS/JS) lives in `site/` and at `../../site/*.html`. The wiki references code files; it does not duplicate them.
2. **`decisions/active/` is immutable for substantive changes.** To revise a locked decision in a way that changes scope, technical content, or "do not relitigate" trigger semantics, move the existing file to `decisions/superseded/` (preserving its filename) and write a new file in `active/` that references it. Edit-in-place is permitted only for typos, cross-ref updates, or framing clarifications that don't change scope or technical content.
3. **`log/` is append-only.** One file per ingest event. Never reorganize, never edit retroactively. The single archive file [log/2026-05-17-pre-aios-wiki-history.md](log/2026-05-17-pre-aios-wiki-history.md) is a one-time snapshot of the pre-conversion `wiki/log.md`; treat it as historical and write all new entries as separate dated files.
4. **No client/customer-engagement content.** Specific meeting prep, contract talk tracks, and grant-pitch language live in claude-os memory + Gmail, not here. This wiki is for product/design/content context only.
5. **No operational runbooks.** Deployment steps, hosting changes, and CI scripts live in their own files (TBD as they emerge) — the wiki may *reference* them; it does not replace them.
6. **One ingest = one log entry.** Each commit that adds/moves wiki content appends exactly one file to `log/`. Multi-section ingests get one log entry summarizing all affected sections.
7. **Raw is immutable.** Never modify files in `raw/`. They are the source-of-truth record.

## File-authority map

Each path is authoritative for a specific class of fact.

| Path | Authoritative for |
| --- | --- |
| `decisions/active/<date>-<slug>.md` | A single locked decision: scope, rationale, "do not relitigate without" trigger |
| `decisions/deferred/<date>-<slug>.md` | A planned change deliberately deferred (with reason + revisit trigger) |
| `decisions/implemented/<date>-<slug>.md` | A formerly-deferred plan that has shipped; preserved with the original date and an `Implemented:` line |
| `decisions/superseded/<date>-<slug>.md` | A formerly-active decision replaced by a later one (preserves history) |
| `plans/<date>-<slug>.md` | Proposed feature, page, or content direction *before* it becomes a locked decision |
| `architecture/<slug>.md` | "How the site is laid out today" — site map, locations, services catalog, shared infrastructure |
| `brand/<slug>.md` | Brand system: voice, palette, typography, asset inventory. Project-specific section (not in the AIOS canonical, but load-bearing for this project). |
| `services/<slug>.md` | Per-service deep page: persona research, copy draft, open questions. Promoted from `architecture/services-overview.md` once content grows past ~5 lines. |
| `pages/<slug>.md` | Per-website-page deep dive (audience research, content brief, decisions). Promoted from `architecture/site-map.md` when content grows. Empty for now. |
| `research/<date>-<slug>.md` | Investigations: competitor scans, peer comparisons, reference research not tied to a specific service draft |
| `strategy/<slug>.md` | Audience strategy, dual-audience handling, partner-provider positioning. Product-strategy, not customer-engagement. |
| `raw/<subfolder>/<file>` | Immutable source materials (brand guides, copy decks, reference articles, photos) |
| `raw/external/<folder>/` | Verbatim snapshots of pre-existing wikis/docs that were imported into this one |
| `raw/aios/<file>` | Drops from claude-os AIOS that need promotion into the wiki |
| `raw/aios-snapshot/<file>` | Periodic snapshots of claude-os project memory |
| `sources/<date>-<slug>.md` | Per-source summary page — one per raw doc ingested |
| `<section>/index.md` | Per-section catalog: every page in that section with a one-line description |
| `index.md` (top-level) | Catalog of catalogs: links to each section's `index.md` plus the loose top-level pages |
| `log/<date>-<slug>.md` | One ingest event |

## Decision page template

Every file under `decisions/active/`, `decisions/deferred/`, `decisions/implemented/`, `decisions/superseded/` follows this shape:

```markdown
# <Title>

**Status:** active | deferred | implemented | superseded
**Date:** YYYY-MM-DD
**Scope:** <what work this decision governs>
**Supersedes:** <link to prior decision, if any>
**Superseded by:** <link to replacement, when status=superseded>

## Decision

<1–3 sentence statement of what was chosen.>

## Rationale

<Why this choice over alternatives. Include trade-offs accepted.>

## Cross-references

- <links to architecture/strategy/brand/services pages this decision relates to>

## Do not relitigate without

<The trigger condition that would justify revisiting.>
```

## Plan page template

Every file under `plans/` follows this shape:

```markdown
# <Title>

**Status:** proposed | in-progress | hardened-to-decision | abandoned
**Date:** YYYY-MM-DD (drafted)
**Scope:** <what this plan would build or change>

## Premise

<The opportunity or constraint that motivates this plan.>

## Approach

<What we'd actually do — copy direction, page layout, content production, etc.>

## Open questions

<What's unresolved — Justin's call, missing content, scheduling, etc.>

## Effort / cost estimate

<Rough sizing in hours or sessions.>

## Cross-references

- <links to related plans, architecture, brand, services>
```

## Cross-reference conventions

- **Markdown links only.** Wikilinks `[[label]]` are NOT used here (they don't render on GitHub).
- **Repo-relative paths** from the linking file: `[palette](../brand/palette.md)`, not absolute paths.
- **Every new page links to ≥1 sibling** and is linked from its section's `index.md`.
- **`raw/` references** from wiki pages should use a `Sources:` section near the top so future audits can find them quickly.
- **Project-root references** (HTML pages, `serve.mjs`, `brand_assets/`) go up three levels from a section file and through `site/`: `../../../site/index.html`. Loose top-level wiki pages (e.g. `overview.md`) go up two: `../../site/index.html`. References to non-site project-root files (`CLAUDE.md`) still go up without `site/`: `../../../CLAUDE.md` or `../../CLAUDE.md`.

## When this wiki does NOT apply

If a requested change would be a better fit elsewhere, push back rather than silently filing it here.

| Subject | Goes to |
| --- | --- |
| Cross-project BGD context (capacity, billing, etc.) | claude-os memory + `decisions/log.md` |
| Meeting prep / customer-engagement strategy | claude-os memory + Gmail |
| The LLM-Wiki pattern itself (the abstract idea) | The pattern spec elsewhere in BGD's docs — not an instance here |
| Step-by-step deployment / hosting runbooks | Their own runbook files (TBD); wiki references them, doesn't replace |
| HTML/CSS/JS source code | The project-root HTML files themselves; wiki references files, doesn't duplicate |
