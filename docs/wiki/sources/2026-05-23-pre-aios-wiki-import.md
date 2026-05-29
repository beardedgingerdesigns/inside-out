# Source: Pre-AIOS Wiki Import

- **Source path:** [../raw/external/wiki-pre-aios-2026-05-23/](../raw/external/wiki-pre-aios-2026-05-23/) — verbatim snapshot taken 2026-05-23. The original wiki at `<project-root>/wiki/` is left in place for Justin to remove when convenient.
- **Date imported:** 2026-05-23.
- **Original format:** llm-wiki pattern (Karpathy) at project root with sibling `raw/` folder. Already largely AIOS-compatible (had `SCHEMA.md`, `log.md`, `decisions/`, `sources/`, `overview.md`, `index.md`) but at the wrong path (`wiki/` instead of `docs/wiki/`) and using a slightly different schema (sequential `NNNN-<slug>.md` decision numbering, single `log.md` file rather than `log/<date>-<slug>.md` files, no `plans/`/`architecture/`/`strategy/`/`research/` sections).
- **File count:** 16 markdown files (4 brand, 4 services drafts, 1 source, plus overview/index/log/SCHEMA/site-map/locations/services-overview).

## TL;DR

The Inside Out project had a working LLM-Wiki-pattern knowledge base since 2026-05-17, bootstrapped from the 2026-04-24 project brief. It was reshaped on 2026-05-23 into the AIOS canonical layout so claude-os AIOS could discover it via `detectWiki()` and so the schema matches other BGD projects (Iowa Everywhere, Wild Rose). All curated content survived the reshape; the conversion was structural, not content-rewriting.

## Key facts surfaced

- Project is a website redesign for **Inside Out Wellness & Advocacy**, an Iowa mental-health nonprofit.
- 8 services, 3 locations (Woodward, Perry, Knoxville opening Spring 2026), persistent 844-428-3878 crisis line.
- Dual-audience site (people in crisis + partner providers).
- Brand direction: warm teal/sage/amber, humanist serif + clean sans, never default Tailwind blue.
- 9 HTML pages exist as of 2026-05-23 — 4 newly built (community-support-program, outpatient-substance-use, mobile-crisis-response, cit-program) plus the 4 pre-existing plus index.
- Wave-1 service drafts (4) were filed 2026-05-22 with persona research + section-by-section copy.

For the full content synthesis, see [overview.md](../overview.md).

## Inventory: original file → AIOS destination

| Original (under `wiki/`) | AIOS destination | Notes |
| --- | --- | --- |
| `SCHEMA.md` | (snapshot only) [../raw/external/wiki-pre-aios-2026-05-23/SCHEMA.md](../raw/external/wiki-pre-aios-2026-05-23/SCHEMA.md) | Replaced by [../WIKI-CLAUDE.md](../WIKI-CLAUDE.md) which adapts Iowa Everywhere's canonical schema. |
| `index.md` | (snapshot only) | Rewritten as [../index.md](../index.md) catalog-of-catalogs. |
| `log.md` | [../log/2026-05-17-pre-aios-wiki-history.md](../log/2026-05-17-pre-aios-wiki-history.md) | Single-file content archived as one history file; future log entries are per-event. |
| `overview.md` | [../overview.md](../overview.md) | Verbatim content; link depths updated. |
| `site-map.md` | [../architecture/site-map.md](../architecture/site-map.md) | Promoted into `architecture/` per AIOS file-authority map. |
| `locations.md` | [../architecture/locations.md](../architecture/locations.md) | Promoted into `architecture/`. |
| `services-overview.md` | [../architecture/services-overview.md](../architecture/services-overview.md) | Promoted into `architecture/`. |
| `brand/voice.md` | [../brand/voice.md](../brand/voice.md) | `brand/` kept as project-specific section. |
| `brand/palette.md` | [../brand/palette.md](../brand/palette.md) | Same. |
| `brand/typography.md` | [../brand/typography.md](../brand/typography.md) | Same. |
| `brand/assets-inventory.md` | [../brand/assets-inventory.md](../brand/assets-inventory.md) | Same. |
| `services/cit-program.md` | [../services/cit-program.md](../services/cit-program.md) | `services/` kept as project-specific section. |
| `services/community-support-program.md` | [../services/community-support-program.md](../services/community-support-program.md) | Same. |
| `services/mobile-crisis-response.md` | [../services/mobile-crisis-response.md](../services/mobile-crisis-response.md) | Same. |
| `services/outpatient-substance-use.md` | [../services/outpatient-substance-use.md](../services/outpatient-substance-use.md) | Same. |
| `sources/2026-04-24-project-brief.md` | [2026-04-24-project-brief.md](2026-04-24-project-brief.md) | Verbatim content; wikilinks converted to markdown links. |
| `decisions/.gitkeep` | (n/a) | Replaced by `decisions/{active,deferred,implemented,superseded}/` subfolder structure with new [../decisions/index.md](../decisions/index.md). |
| `pages/.gitkeep` | [../pages/.gitkeep](../pages/) | Kept as empty project-specific section. |
| Project-root `raw/README.md` | [../raw/README.md](../raw/README.md) | Verbatim content; wiki-path references updated to `docs/wiki/`. |
| Project-root `raw/{brand,copy,photos,reference}/` | (left in place at project root) | Folders are still untracked, empty `.gitkeep` placeholders. AIOS-canonical `raw/` lives at [../raw/](../raw/) and is wired into the new layout. |

## Feeds into

- [../overview.md](../overview.md) — already derived from the 2026-04-24 project brief; this import doesn't change content, only structure.
- [../WIKI-CLAUDE.md](../WIKI-CLAUDE.md) — codifies the new schema; references this source page for the conversion record.
- [../log/2026-05-23-wiki-converted-from-project-root.md](../log/2026-05-23-wiki-converted-from-project-root.md) — the conversion log entry.

## Contradictions / uncertainties

None. The content is identical pre- and post-conversion — only file paths, decisions-folder structure, and the schema doc changed.

## Open follow-ups

- The original `wiki/` and `raw/` folders at project root are left in place pending Justin's call on whether to remove them.
- Whether `brand/` and `services/` should remain as project-specific top-level sections in the AIOS layout, or whether they belong inside `architecture/` and `plans/` respectively. Current decision: leave them as-is — they were load-bearing in the pre-AIOS wiki and renaming them would invalidate links inside the Wave-1 service drafts.
- Whether `pages/` should be removed (currently empty placeholder) or kept for future per-page deep dives. Current decision: keep it; the file-authority map describes its intent.
