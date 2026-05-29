# Project Overview

**Last updated:** 2026-05-17

## What this is

A complete website redesign for **Inside Out Wellness & Advocacy** (insideoutiowa.com), an Iowa-based mental health services nonprofit. Currently a single-developer prototype phase: static HTML, inline styles, served locally via [serve.mjs](../serve.mjs).

## Who it's for

Two distinct audiences, both must be served well by the homepage:

1. **People in crisis or their families** — need warmth, clarity, and an immediate path to help.
2. **Partner providers** (doctors, schools, ERs) — need a fast route to referral forms. Treated as a first-class nav item (the "Partner Providers" tab), visually distinguished.

## What the site has to do

- Make the **844-428-3878** crisis line visible and reachable from every page (persistent emergency bar).
- Catalog 8 services across 3 locations.
- Give providers a one-click path to referral forms.
- Communicate values without sounding clinical or corporate.

## Aesthetic direction

Warm, trustworthy, modern. Calm and grounding, not sterile. See [brand/palette.md](brand/palette.md), [brand/typography.md](brand/typography.md), [brand/voice.md](brand/voice.md) for the specifics.

Anti-patterns explicitly called out in the brief and in [CLAUDE.md](../CLAUDE.md): generic healthcare blues, cold whites, default Tailwind palette, flat `shadow-md`, `transition-all`, sterile/corporate fonts.

## Current state (2026-05-17)

- 9 HTML pages exist; 7 are tracked, 2 (`peer-support-services.html`, `transitional-living.html`) are new and untracked. See [site-map.md](site-map.md) for per-page status.
- All 8 service pages from the brief are not yet built — only crisis-stabilization (adults + children), peer-support, and transitional-living exist so far.
- Locations page does not exist as a standalone — locations are surfaced on the homepage and on [perry.html](../perry.html).
- Only 1 git commit on the project (`0d01c1b` — initial prototype). All recent work is uncommitted on `main`.

## Next likely moves

- Build the missing service pages: community-support-program, outpatient-substance-use, mobile-crisis-response, cit-program.
- Build a locations page or expand `perry.html` into a template for Woodward + Knoxville.
- Wire up referral forms behind `partner-providers.html`.
- Commit current work to clean up the working tree.

## What hasn't arrived yet

Per the brief, Justin will eventually provide: updated mission/values copy, staff directory, real photography (buildings, common areas), service-specific referral form details. Drop these into [raw/](../raw/) when they land and ingest per [SCHEMA.md](SCHEMA.md).

## Source of truth

This overview is derived from [sources/2026-04-24-project-brief.md](sources/2026-04-24-project-brief.md) and direct inspection of the codebase as of the "last updated" date above.
