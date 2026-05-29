# Wiki Schema — Operating Manual

This file tells the LLM how the Inside Out project wiki is structured and how to maintain it. Based on Karpathy's [LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## What this wiki is

A persistent, compounding knowledge base for the Inside Out Wellness & Advocacy website project. It sits between Justin (the human) and the raw source documents — articles, briefs, copy decks, brand guides, photos, transcripts. The LLM **owns** the wiki layer; it reads raw sources, summarizes them, files them into the right pages, updates cross-references, and flags contradictions. Justin curates sources, asks questions, and makes the calls on disagreements.

## Layout

```
inside-out/
├── *.html, *.css, *.js, brand_assets/   ← website code (LLM only modifies on request)
├── raw/                                 ← source documents (immutable; LLM reads, never writes)
│   ├── brand/        brand guides, logos, color references
│   ├── copy/         finalized or draft copy, content briefs
│   ├── reference/    competitor sites, inspiration, articles, PDFs
│   └── photos/       photography assets not yet placed in brand_assets/
├── wiki/                                ← LLM-maintained knowledge base
│   ├── SCHEMA.md             this file
│   ├── index.md              catalog of every wiki page
│   ├── log.md                chronological append-only event log
│   ├── overview.md           current synthesis of the project
│   ├── site-map.md           website pages, status, what each one is for
│   ├── locations.md          Woodward, Perry, Knoxville
│   ├── services-overview.md  all 8 services with one-line summaries
│   ├── brand/                voice, palette, typography, asset inventory
│   ├── services/             one page per service when content is rich enough
│   ├── pages/                one page per website page when content is rich enough
│   ├── sources/              per-source summary pages (one per raw doc ingested)
│   └── decisions/            ADR-style design / scope / copy decisions
└── proejct-brief.md                     ← original brief (treat as a raw source)
```

## Conventions

- **Markdown only.** No frontmatter required, but use it when it helps (`---\ntags: [brand, color]\nstatus: draft\nsource_count: 2\n---`).
- **Wiki-style links.** Use `[[double brackets]]` to link between wiki pages (LLM resolves these to actual paths when rendering). Use standard markdown links for external URLs and for code/raw files: `[brief](../proejct-brief.md)`.
- **One topic per page.** If a page covers two distinct things, split it.
- **Promote when content grows.** Services and pages start as entries in `services-overview.md` / `site-map.md`. When a service or page accumulates real content (more than ~5 lines), promote it to its own file under `services/` or `pages/` and replace the original entry with a link.
- **Cite raw sources.** Every claim in the wiki that came from a source should reference that source: `(see [[sources/2026-04-24-project-brief]])`.
- **Dates are absolute.** Always `YYYY-MM-DD`. Never "yesterday" or "last week."

## The three workhorse files

### `index.md` — catalog
Organized by category (overview, brand, services, pages, locations, sources, decisions). Every wiki page gets a line: `- [[page-name]] — one-line summary`. The LLM reads this first when answering a question to find relevant pages.

### `log.md` — timeline
Append-only. Every meaningful event gets an entry with the format:
```
## [YYYY-MM-DD] type | short title
- bullet 1
- bullet 2
```
Where `type` is one of: `ingest` (new source processed), `decision` (a call was made and recorded), `query` (a substantive question was answered), `lint` (health-check pass), `edit` (notable wiki restructure).

Grep-friendly: `grep "^## \[" wiki/log.md | tail -10` shows the last 10 events.

### `overview.md` — current synthesis
The single best snapshot of the project right now. What it is, who it's for, where it stands, what's next. Updated whenever the synthesis shifts. Should be readable as a standalone briefing in under 2 minutes.

## Workflows

### Ingest a new source
1. Justin drops a file into `raw/<subfolder>/`.
2. Justin says: "ingest `raw/...`" (or similar).
3. LLM reads the source end-to-end.
4. LLM drafts a summary page at `wiki/sources/YYYY-MM-DD-<slug>.md` with: source path, one-paragraph TL;DR, key facts/claims, what it adds or contradicts, recommended wiki updates.
5. LLM walks the recommended wiki updates with Justin, then applies them.
6. LLM updates `index.md` (new source entry; any new pages created).
7. LLM appends to `log.md`: `## [date] ingest | <title>`.

### Record a decision
1. Justin makes a call (color choice, copy direction, scope cut, etc.) — or the LLM proposes one and Justin confirms.
2. LLM writes `wiki/decisions/NNNN-<slug>.md` with: context, options considered, decision, rationale, date, consequences/next steps.
3. LLM updates affected wiki pages to reflect the decision (e.g., `brand/palette.md` if a color was chosen).
4. LLM updates `index.md` and appends to `log.md`: `## [date] decision | <title>`.

Numbering: zero-padded, sequential. Next decision = look at highest existing `NNNN`, add 1.

### Answer a query
1. LLM reads `index.md` to identify relevant pages.
2. LLM reads those pages, synthesizes an answer, cites the wiki pages used.
3. If the answer is substantive enough to be reused (a comparison, a rationale, a new connection), LLM offers to file it as a wiki page — usually under `decisions/` or as a new topic page.
4. LLM appends to `log.md`: `## [date] query | <one-line question>` only when the query produced a wiki update.

### Lint pass
Run on request ("lint the wiki", "health check"). LLM checks for:
- Contradictions between pages (especially after a new ingest).
- Stale claims newer sources have superseded.
- Orphan pages (no inbound links).
- Concepts referenced repeatedly but lacking their own page.
- Missing entries in `index.md`.
- Decisions that haven't been applied to downstream pages.

Output: a short report + proposed fixes. Justin approves; LLM applies.

## What lives where — quick decision tree

- It's a brand/visual decision (color, type, voice) → `wiki/brand/<topic>.md` and possibly a `decisions/` entry.
- It's a service description → `services-overview.md` first; promote to `services/<slug>.md` when it grows.
- It's about a specific website page → `site-map.md` first; promote to `pages/<slug>.md` when it grows.
- It's a person, partner, or org → `wiki/people/<slug>.md` or `wiki/partners/<slug>.md` (create folder when first needed).
- It's a one-time call we made → `decisions/NNNN-<slug>.md`.
- It's chronological context for the project → just `log.md`.
- It's a doc Justin gave us → `sources/YYYY-MM-DD-<slug>.md`.

## Don'ts

- Don't write content into `index.md` or `log.md` beyond the formats above — they are navigation tools, not knowledge containers.
- Don't duplicate content across pages. If two pages need the same fact, one owns it and the other links via `[[ ]]`.
- Don't create empty placeholder pages. Pages only exist when there's something to put in them.
- Don't move or rewrite raw sources. They are read-only.
- Don't touch HTML/CSS/JS files as part of wiki maintenance unless Justin asks.
