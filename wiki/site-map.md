# Site Map

Every HTML page in the project, what it is, status, and audience.

## Top-level nav order (from brief)

1. Services (dropdown — see [services-overview.md](services-overview.md))
2. Locations (dropdown — see [locations.md](locations.md))
3. Who We Are
4. Blog (replaces old "Resources")
5. Contact Us
6. Open Positions
7. Donate (button, distinct styling)
8. Partner Providers (NEW — visually distinguished tab)

## Pages built

| File | Audience | Status (2026-05-17) |
|---|---|---|
| [index.html](../index.html) | Both | Tracked, modified since last commit |
| [who-we-are.html](../who-we-are.html) | Individuals/families | Tracked, modified |
| [perry.html](../perry.html) | Both — location detail | Tracked, modified. Most-developed single-location template. |
| [open-positions.html](../open-positions.html) | Job seekers | Tracked, modified |
| [partner-providers.html](../partner-providers.html) | Partner providers | Tracked, modified. Most recently touched file overall. |
| [crisis-stabilization-adults.html](../crisis-stabilization-adults.html) | Both | Tracked, modified |
| [crisis-stabilization-children.html](../crisis-stabilization-children.html) | Both | Tracked, modified |
| [peer-support-services.html](../peer-support-services.html) | Both | **Untracked** — new page, never committed |
| [transitional-living.html](../transitional-living.html) | Both | **Untracked** — new page, never committed |

## Pages not yet built

Per the brief, these top-nav items / service pages do not yet exist:

- `blog.html` (or `blog/` directory) — replaces old Resources.
- `contact.html` (or similar) — currently no dedicated contact page; contact info lives in the footer.
- `donate.html` — currently no dedicated donate page; the brief specifies Donate as a styled button, which may link out to a payment processor or to a dedicated page.
- `locations.html` (or per-location pages for Woodward and Knoxville) — only `perry.html` exists.
- Service pages for: Community Support Program, Outpatient Substance Use, Mobile Crisis Response, CIT Program.

## Shared infrastructure

- [shared.css](../shared.css) — common styles imported across pages.
- [shared.js](../shared.js) — common JS (nav, emergency bar, etc. — verify).
- [serve.mjs](../serve.mjs) — local dev server, port 3001 (default).
- [screenshot.mjs](../screenshot.mjs) — Puppeteer-based screenshot helper, writes to `temporary screenshots/`.

## When to promote to a dedicated page

Per [SCHEMA.md](SCHEMA.md): once a website page accumulates substantive wiki-side context (audience research, content brief, decisions tied to it), promote it to `pages/<slug>.md` and replace the row above with a link.
