# Project Overview

**Last updated:** 2026-05-29

## What this is

A complete website redesign for **Inside Out Wellness & Advocacy** (insideoutiowa.com), an Iowa-based mental health services nonprofit. Currently a single-developer prototype phase: static HTML, inline styles, served locally via [serve.mjs](../../site/serve.mjs).

## Who it's for

Two distinct audiences, both must be served well by the homepage:

1. **People in crisis or their families** — need warmth, clarity, and an immediate path to help.
2. **Partner providers** (doctors, schools, ERs) — need a fast route to referral forms. Treated as a first-class nav item (the "Partner Providers" tab), visually distinguished.

## What the site has to do

- Make the **844-428-3878** crisis line visible and reachable from every page (persistent emergency bar).
- Catalog 9 services across 3 locations.
- Give providers a one-click path to referral forms.
- Communicate values without sounding clinical or corporate.

## Aesthetic direction

Warm, trustworthy, modern. Calm and grounding, not sterile. See [brand/palette.md](brand/palette.md), [brand/typography.md](brand/typography.md), [brand/voice.md](brand/voice.md) for the specifics.

Anti-patterns explicitly called out in the brief and in [CLAUDE.md](../../CLAUDE.md): generic healthcare blues, cold whites, default Tailwind palette, flat `shadow-md`, `transition-all`, sterile/corporate fonts.

## Current state (2026-05-29)

All 9 service pages are live with real, persona-grounded copy (Outpatient Therapy built 2026-05-29 — interim framing pending client copy answers). **17 HTML pages** now in `site/`, deployed to a Netlify preview at **https://astounding-torrone-ff5b5e.netlify.app** (the link Justin shares with the client). The site is in **"clear the blockers, confirm the facts, ship"** phase with a **June 5, 2026 launch target.** A full creative-director review was run 2026-05-29 against the [review kit](sources/2026-05-28-design-review-kit.md); ground truth now lives in [research/2026-05-29-launch-cd-review.md](research/2026-05-29-launch-cd-review.md).

- **Pages built (17):** homepage, who-we-are, contact, perry/woodward/knoxville (locations), open-positions, partner-providers, + all 9 service pages (incl. the new Outpatient Therapy). See [architecture/site-map.md](architecture/site-map.md).
- **Location pages:** per-location pages shipped (Woodward + Knoxville cloned from Perry); desktop nav/cards resolve per-location. The [`per-location-pages`](decisions/active/2026-05-28-per-location-pages.md) decision is effectively implemented. (Mobile-menu "Locations" still regresses to Perry on 11 pages — a fix in the remediation plan.)
- **Launch blockers — mostly cleared (as of 2026-05-29):** ✅ `#referral` anchor, CIT footer link, 988 removal, county lists (13 counties), John/Jane Doe → real staff, Indeed link-out, **Woodward address (706 Cedar Ave., 50276)**, **placeholder FAQs removed**, **Outpatient Therapy built**. ⏳ Still open: Provider Hub form URLs + `[X]` response times (gated on client).
- **Unverified facts still live:** Mobile Crisis operational promises (`<60 min`, plain-clothes/unmarked, 24/7, 24-hr follow-up) and Transitional Living staffing ("24/7" vs. not-staffed-weekends) — to be confirmed with Melinda. Insurance/cost copy already stripped; Woodward address fixed; Stripe link confirmed production.
- **Client pressure:** the state and the org's largest funder recently visited the site and couldn't find what they needed — the CD review confirms the likely causes were in the provider/referral path.

## Next moves

WS-1, WS-3, and decisions D1–D5 are shipped; today's pass also cleared the Woodward address, placeholder FAQs, Stripe verify, the Outpatient Therapy build, and the illustration-direction call (D3). Per the [launch remediation plan](plans/2026-05-29-launch-remediation.md), what's left is gated on a **client review meeting with Melinda (~1pm 2026-05-29)** — see [log/2026-05-29-client-review-meeting.md](log/2026-05-29-client-review-meeting.md):

1. **Provider Hub (WS-2):** real referral-form URLs + confirmed per-service response times.
2. **Mobile Crisis claims (D6):** confirm/flag `<60 min`, plain-clothes/unmarked, 24/7, 24-hr follow-up.
3. **Outpatient Therapy final copy:** answers to the 8 questions (intake path, ages, telehealth, locations, session types, approaches, wait time, substance-use coordination) swap into the live page.
4. **Transitional Living staffing (M9):** 24/7 vs. not-staffed-weekends.
5. **Who We Are leadership:** whether to name an ED (Melinda Dennis) / Scott Allen + title.
6. **Illustrations:** Justin placing homepage-style header graphics across pages (D3).

## What hasn't arrived yet

Per the brief, Justin will eventually provide: updated mission/values copy, staff directory, real photography (buildings, common areas), service-specific referral form details. Drop these into [raw/](raw/) when they land and ingest per [WIKI-CLAUDE.md](WIKI-CLAUDE.md).

## Source of truth

This overview is derived from [sources/2026-04-24-project-brief.md](sources/2026-04-24-project-brief.md) and direct inspection of the codebase as of the "last updated" date above.
