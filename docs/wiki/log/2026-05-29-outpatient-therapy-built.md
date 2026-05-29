# 2026-05-29 — code execution | Outpatient Therapy page built (D1)

**Operation:** code execution (site/) + wiki reconciliation
**Scope:** site/outpatient-therapy.html (new), all 16 other site/*.html (nav), site/index.html (homepage grid), docs/wiki (overview, architecture, services draft, plan, decision)

Built the **Outpatient Therapy** service page per the [keep-&-build decision (D1)](../decisions/active/2026-05-29-keep-outpatient-therapy.md), fulfilling the [v1 wiki draft](../services/outpatient-therapy.md). Justin said "go ahead and build" before the client copy answers landed, so the page ships with **safe interim framing** and the unconfirmed specifics flagged.

## What was built

- **`site/outpatient-therapy.html`** (new, ~42 KB) — cloned the design system from the sibling `outpatient-substance-use.html` (head/tailwind config, nav, emergency bar, footer, hand-drawn accents, `.img-placeholder` hero blob). Content from the draft's outline: hero ("You don't have to be in crisis to deserve a place to talk"), provider callout, "Regular, real conversation," the **"Reasons people come that aren't a crisis"** band (replaces the crisis-template stats row), 4 "what therapy looks like" cards, "What the first visit is like," "Who it's for," and a 3-step "How to get started" + CTA.
- **Nav:** "Outpatient Therapy" added to the desktop **Services dropdown on all 16 other pages** (inserted before "Outpatient Substance Use Services"; `px-4` desktop-dropdown anchor only, not footer/mobile). New page marks itself active.
- **Homepage:** Outpatient Therapy **card restored**; services grid changed **4-col → 3-col** for a clean **3×3** (9 cards, no orphan).

## Safe interim framing (because the copy answers aren't in yet)

Per the draft's research + the no-pricing rule, the page deliberately does NOT assert anything unverified:
- **No telehealth claim**, **no named location**, **no wait-time promise**, **no group/family/couples or named-modality claims**.
- **Intake:** does NOT front the crisis line. Primary CTA "Request an appointment" (scrolls to steps) + "Call our office" → **515-642-7070** (admin line) and `info@insideoutiowa.org`. Crisis line **844-428-3878** kept as a small subordinate band.
- **Ages:** written for adults (the documented persona).

These map 1:1 to the [draft's open questions](../services/outpatient-therapy.md#open-questions-for-justin--melinda), which Justin is emailing to Melinda. Answers swap straight into the live page.

## Verified

- All **17 pages → HTTP 200**. New page serves every section (title, hero, reasons band, first-visit, `#get-started`, office tel ×4, crisis line ×3).
- Dropdown shows **9 services** on every page (therapy before substance-use). Homepage = **9 service-cards**, grid `lg:grid-cols-3`.
- New page: 0 `[confirm]`, 0 `[Placeholder]`, 0 telehealth refs.
- **Visual QA** (Chrome headless — puppeteer absent on this Mac): new page + homepage 3×3 grid render correctly and on-brand.

## Open (final-copy, not blocking the page existing)

The 8 client questions (intake path, ages, telehealth, locations, session types, approaches, wait time, substance-use coordination). Confirm whether the **515-642-7070** admin line is the right "call to schedule" number.
