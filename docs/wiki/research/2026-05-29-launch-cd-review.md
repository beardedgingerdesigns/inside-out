# FINDINGS — Creative-Director Launch Review

**Reviewer:** local Claude Code session (4 parallel read-only agents over all 16 pages + `shared.css`/`shared.js`)
**Date:** 2026-05-29
**Build reviewed:** working tree on `main` (HEAD `d39e266`), with the uncommitted move of the site into `site/`. No code was changed in this pass.
**Pages reviewed:** all 16 — index, who-we-are, contact, perry, woodward, knoxville, partner-providers, open-positions, community-support-program, cit-program, outpatient-substance-use, transitional-living, mobile-crisis-response, crisis-stabilization-adults, crisis-stabilization-children, peer-support-services.
**Run against:** the kit at [`raw/design-review-2026-05-28/`](../../../raw/design-review-2026-05-28/) — see [sources/2026-05-28-design-review-kit.md](../sources/2026-05-28-design-review-kit.md).

---

## 1. Summary verdict

The build is **structurally strong but not launch-ready.** Prior sessions did real, creditable work — the palette decision, dynamic card treatment, per-location pages, the Woodward photo fix, and most link wiring all landed and are confirmed. But there are **9 launch blockers**, almost all in the path the client's institutional visitors (state, funders, ER/school referrers) actually walk: the "Make a Referral" CTA and every footer "Referral Forms" link point to an anchor that **doesn't exist**; the Provider Hub's referral buttons are dead `#` stubs with `[X] business hours` placeholder response times; a fake "1234 Main St" Woodward address and "John/Jane Doe" leadership names are public; and the Mobile Crisis coverage counties are **both wrong and self-contradictory** across two pages. None of the blockers are hard fixes — most are no-input wiring/content swaps — but they cannot ship as-is.

Counts (≈): **7 PASS · 4 PARTIAL · 11 FAIL · 5 DECISION**

---

## 2. Checklist results

| ID | Status | Evidence (`file:line`) | Note |
|---|---|---|---|
| DR-01 | **FAIL** | `contact.html:120` `<a href="tel:988">988</a>` in the emergency bar | 988 reintroduced on one page; Melinda was emphatic it stays off. Other "988" hits are SVG path data, not phone refs. Trivial fix. |
| DR-02 | **DECISION** | `index.html:244` `homepage.png` alt "Illustration of three people…"; `crisis-stabilization-children.html:182` `crisis-child.png` alt "Illustration of a family…" | Illustrative imagery shipped on ≥2 pages. Buildings use real photos. Q: accepted interim or replace before launch? |
| DR-03 | **PASS** | `shared.css:7` `--color-primary:#0D6E6E` (teal), `:13` `--color-accent:#6B3FA0` (purple), `:12` comment "replaces former mustard/amber" | Darker teal + purple confirmed in CSS; no mustard/green tokens. Caveat: legacy `.btn-amber` name + Tailwind `text-amber-*` chrome still render literal amber (MINOR). |
| DR-04 | **PARTIAL** | Primary nav `index.html:133` "Partner Providers" ✓; header secondary CTA is **Donate** (`index.html:136`), not "Make a Referral" — that appears only as a homepage hero button (`index.html:212`) | "I'm a provider" is gone. If the decision meant the *header* CTA specifically, it's unmet. |
| DR-05 | **FAIL / DECISION** | Services grid `index.html:24–112` = **8** cards; no `outpatient-therapy.html` exists | Source-of-truth says Outpatient Therapy should be present (10th service, 5×5). Filed wiki decision says remove it. **Direct conflict — D1 below.** |
| DR-06 | **PASS** | `perry.html:535-536` admin + crisis line only, no named person; confirming comment `perry.html:284`; woodward/knoxville same | No per-building primary contact; admin phone retained. Matches exactly. |
| DR-07 | **PARTIAL→FAIL** | Structure ✓ (`who-we-are.html:277` Executive, `:307` Management) but names are placeholders `:285,:297,:315,:327` "John/Jane Doe"; service pages list no named providers | Two-section structure correct; real names + per-service provider listings not done. |
| DR-08 | **PASS** | Hub copy `partner-providers.html:148,361`; Mobile Crisis exception explicit `:312` "do not submit a form", `:327` "Call … for Dispatch"; no `<form>`/storage in markup | Mechanics correct; form routing is stubbed (`href="#"`) — see WIRE-27. |
| DR-09 | **FAIL** | Uniform `[X] business hours response` badge `partner-providers.html:199,221,238,255,272,289`; only real value is Mobile Crisis `< 60 min` (`mobile-crisis-response.html:224`) | Response times not differentiated. Also: source says Transitional Living "not staffed weekends" but site says "24/7 on-site" (`transitional-living.html:225,237`) — see M9. |
| EM-11 | **FAIL** | One global palette; all 8 service pages ship identical Tailwind config; no `--service-*` accent or per-page hex | The "all-teal feel" is not broken up per service. Tokens for it (`coral`) exist but are unused. |
| EM-12 | **PASS** | `shared.css:441-451` `.expect-card` layered dual tinted shadow + `translateY(-3px)` hover; same in `partner-providers.html:46-47` | Genuinely dynamic, not flat. Meets brand guardrails. |
| EM-13 | **FAIL (partial)** | "Coping Strategy Exploration" heading survives: `crisis-stabilization-children.html:292`, `crisis-stabilization-adults.html:290` | Reframed to "resources" on peer-support & community-support, but NOT on the two crisis pages. |
| EM-14 | **PASS** | `woodward.html:166` loads `woodward_…webp`; `perry.html:164` loads `PerryLocation_…webp` | Correct distinct photos; the Perry-photo bug is fixed. |
| EM-15 | **DECISION** | Stevi is the **primary** hub contact in 7 spots: `partner-providers.html:153-154,234,251,268,285,392,394` | April note said REMOVE her direct contact; build does the opposite. **D2 below.** |
| EM-16 | **FAIL** | `open-positions.html` = hardcoded 4-role list (`:199,216,233,250`) with 4 empty embed stubs (`:212` "Indeed embed goes here"); no `indeed.com` href anywhere | Anti-pattern the email warned against. Stubs at least visibly labeled. |
| OP-17 | **FAIL** | Same as EM-16; no CIS-anchor + Indeed-link-out model, no "always up" language | Indeed hookup is pending (owned by Kristen) — must be a flagged placeholder, currently a visible stub. |
| CA-18 | **DECISION** | "You don't need insurance" `crisis-stabilization-adults.html:227`, `crisis-stabilization-children.html:229`; "Free / no cost, no insurance" `mobile-crisis-response.html:217,232-233`; +outpatient `:216,232,363,377` | Filed `no-pricing-copy` decision says strip these; on crisis pages they double as access reassurance. **D4 below.** |
| CA-19 | **FAIL → now sourced** | MCR page `mobile-crisis-response.html:138` "Polk, Dallas, Warren, Madison + neighboring"; Provider Hub `partner-providers.html:319` lists 9 counties, `:320` claims "13 counties" | Both wrong. **Polk belongs to Broadlawns (911), not Inside Out.** The BHDS map ([source](../sources/2026-05-29-mobile-crisis-coverage-map.md)) resolves coverage; exact list is **D5**. |
| CA-20 | **DECISION** | Arrival "< 60 min" (`mobile-crisis-response.html:224`); follow-up "within 24 hours" (`:286`); CIT "within a week" (`cit-program.html:286`); "We answer every call, any time of day" (`community-support-program.html:385`) | Concrete operational promises stated as fact, unconfirmed. **D6 below.** |
| WIRE-21 | **PASS** | Desktop nav `index.html:121-123`; homepage cards `:459,474,489` → woodward/perry/knoxville | Per-location targets resolve on desktop. (Mobile menu regresses — WIRE-28.) |
| WIRE-22 | **PASS** | `index.html:332,344,356,368` all 8 service cards → real pages; no `href="#"` | Slugs consistent. No Outpatient Therapy card (ties to D1). |
| WIRE-23 | **PARTIAL** | Donate→Stripe `index.html:136,157,573`; Contact→`contact.html` `:129,153,572` (sitewide) | Wired. Verify the Stripe link is the production payment link, not a test slug (M10). |
| WIRE-24 | **PARTIAL** | Footer For-Providers/Quick-Links wired, BUT "Referral Forms" → `partner-providers.html#referral` (`index.html:571`) is a **broken anchor**; `cit-program.html:435` `href="#"` "CIT Training Info" | See B1, B9. |
| WIRE-25 | **FAIL** | Hero CTA `index.html:211-212` → `partner-providers.html#referral`; that page has **no `id="referral"`** | Lands at page top, not the referral section. B1. |
| WIRE-26 | **FAIL** | `index.html:468` `1234 Main St, Woodward, IA` live on homepage; woodward.html shows only "Woodward, IA", no street | B4. |
| WIRE-27 | **FAIL** | 5 "Access Referral Form" buttons `href="#"` (`partner-providers.html:198,220,237,271,288`); `[X]` response-time placeholders | B2, B3. |
| WIRE-28 | **FAIL** | Header/footer hand-copied into 16 files; mobile "Locations" → `perry.html` on 11 pages (e.g. `community-support-program.html:95`); footer Quick Links drift | No shared template; every nav/footer fix is 16-file. M5. |

---

## 3. Defects (prioritized)

### BLOCKERS — cannot launch

**B1 — "Make a Referral" + all footer "Referral Forms" links are a broken anchor**
- **Location:** `index.html:211` (hero), 16 footers e.g. `index.html:571`, `woodward.html:578`, `perry.html:592` → `partner-providers.html#referral`. Target `partner-providers.html` has no `id="referral"` (only `mobile-toggle`, `mobile-menu`).
- **Why it matters:** The single highest-traffic provider path silently lands at page top. For institutional referrers this reads as "broken."
- **Fix:** add `id="referral"` to the referral `<section>` at `partner-providers.html:168`. One line; fixes ~17 links at once.

**B2 — Provider Hub referral buttons are dead `#`**
- **Location:** `partner-providers.html:198,220,237,271,288` `<a href="#">Access Referral Form</a>`.
- **Why it matters:** DR-08's whole mechanic (per-service intake form → transactional email) is non-functional. The provider audience can't act.
- **Fix:** wire to real form URLs (or a clearly-flagged "form coming soon" if backend pending). Blocked on D2/form destinations.

**B3 — Placeholder response times live in the Provider Hub**
- **Location:** `partner-providers.html:199,221,238,255,272,289` `[X] business hours response`; prose `:366`.
- **Fix:** fill confirmed per-service values (DR-09) or flag as pending. Blocked on D6.

**B4 — Fake Woodward address on the homepage**
- **Location:** `index.html:468` `1234 Main St, Woodward, IA`.
- **Fix:** real street address (client input) or remove the line until confirmed.

**B5 — Placeholder leadership names public**
- **Location:** `who-we-are.html:285,297,315,327` "John Doe"/"Jane Doe" with "JD" avatars; author TODO `:258`.
- **Fix:** real names/titles (client input) or hide the team cards until confirmed.

**B6 — Mobile Crisis coverage counties wrong AND self-contradictory**
- **Location:** `mobile-crisis-response.html:138` ("Polk, Dallas, Warren, Madison + neighboring") vs `partner-providers.html:319-320` (9 counties listed, "13 counties" claimed). Only "Dallas" overlaps; **Polk belongs to Broadlawns (911)**.
- **Why it matters:** crisis-service accuracy — a caller could read one list, believe they're covered, and be wrong. Real-world harm, not cosmetic.
- **Fix:** replace both with one client-confirmed list derived from the BHDS map (yellow = Inside Out). Now unblocked by the [coverage-map source](../sources/2026-05-29-mobile-crisis-coverage-map.md); exact list pending D5.

**B7 — FAQ placeholder answers live**
- **Location:** `woodward.html:480,485`; `perry.html:468,477,490,499` `[Placeholder — confirm…]`.
- **Fix:** fill or remove the FAQ rows.

**B8 — Empty Indeed embed stubs public**
- **Location:** `open-positions.html` 4 placeholder divs e.g. `:212` "Indeed embed goes here".
- **Fix:** rebuild to OP-17 model (CIS anchor + Indeed link-out) or render a single clean "Apply on Indeed" link. Blocked on Kristen's Indeed hookup.

**B9 — Dead footer link**
- **Location:** `cit-program.html:435` `href="#"` "CIT Training Info" (only footer missing the standard "Referral Forms" link).
- **Fix:** real destination or restore the standard footer block.

### MAJOR — decision not honored / visible quality failure

- **M1 — 988 on contact.html** (`:120`) — DR-01. Trivial, high-priority.
- **M2 — No per-service accent colors** (EM-11) — all 8 service pages identical.
- **M3 — "Coping Strategy Exploration" still on both crisis pages** (`crisis-stabilization-children.html:292`, `crisis-stabilization-adults.html:290`) — EM-13.
- **M4 — "Make a Referral" not the header secondary CTA** (DR-04) — needs interpretation (D-adjacent).
- **M5 — Nav/footer parity** (WIRE-28) — mobile "Locations" → perry on 11 pages; footer Quick Links drift; no shared template (every fix ×16).
- **M6 — Meta description missing on all 16 pages** — SEO/social-share. Titles are present/unique (good).
- **M7 — Accessibility:** heading skip h1→h3 `partner-providers.html:184+`; `aria-expanded`/`aria-controls` missing on mobile toggle sitewide; no `@media (prefers-reduced-motion)` and `.reveal{opacity:0}` depends on JS to become visible (content invisible if the IntersectionObserver fails).
- **M8 — Dead internal link** `who-we-are.html:335` → `/services` (no such page).
- **M9 — Transitional Living "24/7 on-site"** (`transitional-living.html:225,237`) contradicts source-of-truth "not staffed on weekends" — confirm with client.
- **M10 — Verify Stripe Donate link** `https://buy.stripe.com/3csfZBdKVcDk6Gc000` (in ~63 places) is the production payment link, not a sandbox/test slug.

### MINOR — polish

- Legacy `.btn-amber` class name + Tailwind `text-amber-*`/`bg-amber-*` chrome render literal amber even though the brand token is purple (`shared.css:338-360`, `index.html:133,136`).
- Two "teal" base colors coexist: `#0D6E6E` (shared.css var) vs `#005970` (per-page Tailwind config) — subtle inconsistency in the primary color.
- Oversized nav logo on `open-positions.html:39` (`h-48` ≈ 192px).
- Footer phone label inconsistency: "Perry Admin" (`perry.html:604`, `knoxville.html:279`) vs "Admin" elsewhere.
- Mobile toggle tap target `p-2` likely < 44×44px.
- `.nav-link` and in-body text links lack `:focus-visible` (buttons have it).
- Footer logo could use `alt=""` (decorative duplicate of the linked header logo).
- `<title>` entity inconsistency (`&mdash;`/`&amp;` vs `—`/`&`).

### DECISION — needs human CD / client (do not resolve in code)

- **D1 — Outpatient Therapy: keep or remove?** Source-of-truth DR-05 says present it (10th service, 5×5 grid); filed decision [`remove-outpatient-therapy-card`](../decisions/active/2026-05-28-remove-outpatient-therapy-card.md) says pull it and don't ship June 5. Currently absent. If "keep": build the page, fix the slug, resolve the Knoxville-availability claim. **Until ruled, the filed decision stands.**
- **D2 — Stevi's contact on partner pages.** Build makes her the primary hub contact (7 touchpoints); April-20 note said remove her direct contact. Which intent wins — strip to a generic/per-program contact, or keep Stevi as the referral POC?
- **D3 — Placeholder illustrations** (`homepage.png`, `crisis-child.png`). Accepted interim, or replace with real/stock photography before launch (Melinda's "no hands/hearts" aversion)?
- **D4 — Insurance/cost language on crisis pages.** `no-pricing-copy` decision says strip all insurance/cost copy; on crisis pages it doubles as access reassurance ("you don't need insurance to walk through our doors"). Strip entirely, or keep access-reassurance framing on crisis pages with client sign-off?
- **D5 — Exact Mobile Crisis county list.** Melinda says the BHDS map is accurate (yellow = Inside Out) but the PDF's text listing is not. Best read of the yellow block ≈ the 11-county table row (Adair, Audubon, Clarke, Dallas, Decatur, Guthrie, Lucas, Marion, Ringgold, Taylor, Wayne) **plus** Adams and Union (yellow on the map, absent from every table row), possibly Madison/Warren. Melinda to confirm the final set.
- **D6 — Mobile Crisis operational claims.** Confirm "< 60 min" arrival, "plain clothes / unmarked vehicle," true 24/7, and "follow-up within 24 hours" before they stand as fact.

---

## 4. Confirmed complete (credit where due)

- **Palette decision (DR-03)** — teal `#0D6E6E` + purple `#6B3FA0`, mustard/green gone (`shared.css:7,13`).
- **Location pages built** — `woodward.html` + `knoxville.html` cloned from Perry; the [`per-location-pages`](../decisions/active/2026-05-28-per-location-pages.md) decision is effectively implemented.
- **No per-building contact person (DR-06)** — admin phone + crisis line only (`perry.html:535-536`).
- **Provider Hub mechanics (DR-08)** — per-service intake framing, no on-site data storage, Mobile Crisis call-not-form exception explicit (`partner-providers.html:312,327`).
- **Dynamic card treatment (EM-12)** — layered tinted shadows + hover lift (`shared.css:441-451`).
- **Woodward photo (EM-14)** — correct distinct asset (`woodward.html:166`).
- **Location links resolve, desktop (WIRE-21)** + **all 8 service cards resolve (WIRE-22)**.
- **Contact/Donate wired sitewide (WIRE-23)**.
- **Custom palette + focus-visible on buttons + unique page titles** — no default Tailwind blue/indigo.

---

## 5. Remediation plan (proposed, not executed)

Full sequenced plan: [plans/2026-05-29-launch-remediation.md](../plans/2026-05-29-launch-remediation.md). In brief:

**(a) No-input fixes — can ship on approval, no client/CD answer needed:**
B1 (`id="referral"`), B9 (cit footer), M1 (988), M3 (coping→resources on crisis pages), M5 (nav/footer parity + mobile Locations), M6 (meta descriptions), M7 (a11y: aria-expanded, heading order, reduced-motion), M8 (/services dead link), plus MINOR polish.

**(b) Blocked on a client/CD answer:**
B2/B3 (form URLs + response times → D6), B4 (Woodward address), B5 (leadership names), B6/D5 (county list), B7 (FAQ answers), B8 (Indeed hookup), and decisions D1–D4.

**Do not execute** until the human CD reviews this and authorizes the work.

## Cross-references

- [sources/2026-05-28-design-review-kit.md](../sources/2026-05-28-design-review-kit.md) — the kit this review was run against.
- [sources/2026-05-29-mobile-crisis-coverage-map.md](../sources/2026-05-29-mobile-crisis-coverage-map.md) — authoritative coverage source for B6/D5.
- [plans/2026-05-29-launch-remediation.md](../plans/2026-05-29-launch-remediation.md) — the sequenced fix plan.
- [sources/2026-05-28-live-site-audit.md](../sources/2026-05-28-live-site-audit.md) — the earlier audit this supersedes/extends.
- [architecture/site-map.md](../architecture/site-map.md) — page inventory.
