# [2026-05-23] edit | Converted existing wiki from project-root `wiki/` to AIOS canonical `docs/wiki/`

- **Source:** `<project-root>/wiki/` (LLM-Wiki pattern, ~16 markdown files) + `<project-root>/raw/` (immutable source folder, currently empty placeholders).
- **Staged at:** [../raw/external/wiki-pre-aios-2026-05-23/](../raw/external/wiki-pre-aios-2026-05-23/) and [../raw/external/raw-pre-aios-2026-05-23/](../raw/external/raw-pre-aios-2026-05-23/) — verbatim snapshots, never modified.
- **Source summary:** [../sources/2026-05-23-pre-aios-wiki-import.md](../sources/2026-05-23-pre-aios-wiki-import.md).
- **Promoted:**
  - 1 wiki schema → replaced by [../WIKI-CLAUDE.md](../WIKI-CLAUDE.md) (adapted from Iowa Everywhere's canonical).
  - 3 catalog pages → [../architecture/{site-map,locations,services-overview}.md](../architecture/).
  - 4 brand pages → [../brand/{voice,palette,typography,assets-inventory}.md](../brand/).
  - 4 service drafts → [../services/](../services/).
  - 1 source page → [../sources/2026-04-24-project-brief.md](../sources/2026-04-24-project-brief.md).
  - 1 overview → [../overview.md](../overview.md).
  - 1 log.md archive → [2026-05-17-pre-aios-wiki-history.md](2026-05-17-pre-aios-wiki-history.md).
- **Created (new AIOS pieces):** [../WIKI-CLAUDE.md](../WIKI-CLAUDE.md), [../index.md](../index.md) (rewritten), per-section [`index.md`](../) files for architecture/brand/services/pages/decisions/plans/research/strategy/sources, decisions subfolders `active/deferred/implemented/superseded`, `raw/external/`, `raw/aios/`, `raw/aios-snapshot/`.
- **Link fixes applied:** project-root references rewritten to add one or two more `../` levels per their new depth. All `[[wikilinks]]` converted to repo-relative markdown links per AIOS convention. References to `SCHEMA.md` rewritten to point at `WIKI-CLAUDE.md`.
- **Project CLAUDE.md:** merged — existing frontend-design rules preserved, AIOS conventions appended.
- **Original `wiki/` and `raw/` directories:** left in place at project root per the convert-wiki skill ("does not delete the original wiki location"). Justin can remove them when convenient — content is fully preserved both verbatim under `docs/wiki/raw/external/` and curated under `docs/wiki/`.
- **clients.yaml:** `docs_paths` for `inside-out-website` updated from `/Users/justinlobaito/repos/inside-out/wiki` to `/Users/justinlobaito/repos/inside-out/docs` so AIOS `detectWiki()` resolves via `docs/wiki/WIKI-CLAUDE.md`.
- **claude-os decisions log:** appended a one-line entry recording this conversion.
