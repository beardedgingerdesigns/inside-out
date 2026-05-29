# raw/

Drop documents here for the wiki to ingest. **The LLM reads from this folder but never modifies its contents** — these are the immutable source of truth.

## Folders

- `brand/` — brand guides, logo files, color references, any document Justin or the org has produced about how Inside Out should present itself.
- `copy/` — finalized or draft copy. Mission statements, values, service descriptions, taglines, page content.
- `reference/` — outside material: competitor sites saved as markdown, articles, PDFs, inspiration, research.
- `photos/` — photography that isn't yet placed in `brand_assets/` (which is the active, in-design photo library).

## How to ingest

1. Drop the file in the appropriate subfolder.
2. Tell Claude: "ingest `raw/<path>`" (or similar).
3. Claude will:
   - Read the file end-to-end.
   - Draft a summary page at `wiki/sources/YYYY-MM-DD-<slug>.md`.
   - Propose updates to existing wiki pages.
   - Walk those updates with you, apply them, update the index, append to the log.

## File-format tips

- **Markdown / text:** ideal — Claude can read directly.
- **PDF:** Claude can read up to 20 pages per request. Big PDFs may need page-range hints.
- **Images:** Claude can view them. For images with text, mention what you're trying to extract.
- **Web articles:** save with Obsidian Web Clipper (or similar) as `.md`. Drop the markdown file here.
- **Audio / video transcripts:** transcribe first, then drop the transcript.

## Out of scope for this folder

- Anything that belongs in the live site (logos, hero photos in use) — those stay in `brand_assets/`.
- LLM-generated content — those go in `wiki/`.
- The CLAUDE.md, SCHEMA.md, or any operating instructions — those are project-level, not sources.
