# CLAUDE.md — Inside Out Website project guide

This repo is for **insideoutiowa.com** — a website redesign for Inside Out Wellness & Advocacy, an Iowa-based mental-health nonprofit. The wiki at `docs/wiki/` is the canonical store for project-internal knowledge (brand system, services catalog, sources, decisions). The codebase is static HTML/CSS/JS in `site/` served locally via `serve.mjs`.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Read this first

**Before doing anything that touches site content, copy, brand, services, or strategy:**

1. Read [docs/wiki/WIKI-CLAUDE.md](docs/wiki/WIKI-CLAUDE.md) — the agent-facing schema for this project's LLM-maintained wiki. It governs how decisions, plans, sources, and brand pages are filed.
2. Read [docs/wiki/overview.md](docs/wiki/overview.md) — current synthesis of the project.
3. Tail the wiki log: `ls docs/wiki/log/ | sort -r | head -10` — gives the last 10 events so you know recent state.
4. If the work touches a specific topic (a service, a location, the brand system, a website page), drill into the matching `docs/wiki/services/*.md`, `architecture/locations.md`, or `brand/*.md` file before recommending changes.

The wiki at `docs/wiki/` is the canonical store for project-internal knowledge. The codebase (`site/*.html`, `site/shared.css`, `site/shared.js`, `site/brand_assets/`) is the canonical store for code. Don't duplicate one in the other.

## Operating rules for this project

**When Justin makes a meaningful decision** (color, copy direction, scope cut, voice direction, etc.):
- File it as `docs/wiki/decisions/active/YYYY-MM-DD-<slug>.md` using the template in [WIKI-CLAUDE.md](docs/wiki/WIKI-CLAUDE.md) → "Decision page template."
- Update [docs/wiki/decisions/index.md](docs/wiki/decisions/index.md) to point at the new file.
- Append a `docs/wiki/log/YYYY-MM-DD-<slug>.md` entry.
- Don't ask permission — just do it, then mention it.

**When Justin drops a file into `docs/wiki/raw/`** (brand guide, copy deck, photography, reference article):
- Treat it as an ingest request unless he says otherwise.
- Read it, write a summary to `docs/wiki/sources/YYYY-MM-DD-<slug>.md`, propose updates to existing wiki pages, walk them with Justin, then apply.
- Update the relevant section's `index.md` and append a `docs/wiki/log/YYYY-MM-DD-<slug>.md` entry.
- Never modify files in `docs/wiki/raw/` — they are immutable.

**When proposing new copy direction, page layout, or content production for a service/page:**
- File it under `docs/wiki/plans/` first using the "Plan page template" in [WIKI-CLAUDE.md](docs/wiki/WIKI-CLAUDE.md).
- Plans harden into decisions when Justin commits; they migrate to `decisions/active/` at that point.

**When the codebase doesn't match a wiki claim:**
- Trust the code, fix the wiki. Architecture pages (especially [docs/wiki/architecture/site-map.md](docs/wiki/architecture/site-map.md)) describe **what exists today**, not aspirations.

> Note: a pre-AIOS llm-wiki used to live at `<project-root>/wiki/` + `<project-root>/raw/`. It was reshaped into `docs/wiki/` on 2026-05-23 (see [docs/wiki/log/2026-05-23-wiki-converted-from-project-root.md](docs/wiki/log/2026-05-23-wiki-converted-from-project-root.md)). The old `wiki/` and `raw/` directories at project root are kept temporarily; **always use `docs/wiki/`** as the canonical wiki. The old locations can be removed when Justin says so.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the `site/` directory at `http://localhost:3001`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing


## Brand Assets
- Always check the `site/brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
