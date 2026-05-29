# 2026-05-29 — client fact applied | Woodward street address (B4)

**Operation:** code execution (site/)
**Scope:** site/index.html, site/contact.html, site/woodward.html

Justin confirmed the Woodward facility address: **706 Cedar Ave., Woodward, Iowa**. Applied sitewide, clearing blocker **B4** (the fake `1234 Main St, Woodward, IA` placeholder).

- Format matched the established Perry pattern (`410 12th St., Perry, IA 50220`). ZIP **50276** — initially assumed, **confirmed correct by Justin 2026-05-29**.
- **7 spots** updated via verified Python `.replace()` pass (per-replacement count asserts):
  - `index.html:469` — Woodward location card (was the `1234 Main St` placeholder).
  - `contact.html:225` — Woodward contact card (was bare `Woodward, IA`).
  - `woodward.html` — contact span (511), map-placeholder label (541), footer span (594), "Where is the Woodward location?" FAQ answer (484), and **3 Google Maps "Get Directions" links** (150, 297, 530) now `?q=706+Cedar+Ave+Woodward+IA+50276`.
- Left intentionally untouched: section heading "Woodward, Iowa", hero copy, `open-positions.html` job-location label, nav links, meta description. Footers on `index.html`/`contact.html` show the **Perry** org address by design — not changed.
- Verified: HTTP 200 on all three pages; zero `1234 Main`; zero bare `?q=Woodward+IA` links remain.

## Status

- Fully confirmed — ZIP **50276** verified by Justin 2026-05-29. No open items.
