# QA Checklist

Every item is a testable assertion. Each starts as **`UNVERIFIED`**. Go to the code and move it to **`PASS` / `FAIL` / `PARTIAL` / `DECISION`** based on what you actually find. Fill **Evidence** with `file:line` (or CSS selector) + a short quote — required for a PASS as much as a FAIL. If you cannot determine status after genuinely looking, leave it **`UNVERIFIED`** and note what's needed to resolve it; do not default it to FAIL.

> Expect many items to PASS — prior sessions implemented a good deal of this correctly. Confirming completed work is a real result, not filler. A prior remote QA was run against a **stale deploy** and is not reliable for the current build — do not copy old results either way. Re-verify everything against the code in this repo.

## Design Review decisions (April 2)

| ID | Assertion | Where to check | Pass criterion | Status | Evidence |
|---|---|---|---|---|---|
| DR-01 | 988 does not appear on public pages | All page files; search `988` | No `988` on homepage/front-facing pages; 844-428-3878 is the crisis contact | UNVERIFIED | |
| DR-02 | No "hands/hearts" illustration shipped as final | Hero/section images, `alt` text, asset filenames | Real photography, or illustration explicitly flagged as interim → **DECISION** | UNVERIFIED | |
| DR-03 | Palette is darker teal + purple; no mustard/green | Global stylesheet color tokens/variables | Confirm teal+purple values present; mustard/green removed | UNVERIFIED | |
| DR-04 | Secondary CTA reads "Make a Referral"; primary nav still "Partner Providers" | Header partial/template | Both true | UNVERIFIED | |
| DR-05 | Outpatient Therapy present as a service | Services grid + nav | Present and consistent with the other 9 | UNVERIFIED | |
| DR-06 | Location pages have no per-building "primary contact person"; admin phone kept | Location page(s) | Contact-person block removed; phone retained | UNVERIFIED | |
| DR-07 | Who We Are = Executive + Management sections; providers live on service pages; real names | `who-we-are` page + service pages | Structure correct; no "John/Jane Doe" placeholders | UNVERIFIED | |
| DR-08 | Provider Hub: per-service intake form (transactional email, no stored data); Mobile Crisis = call-not-form | Provider hub page | Forms route correctly; Mobile Crisis is dispatch-by-phone | UNVERIFIED | |
| DR-09 | Per-service response times stated (crisis 60 min; Transitional Living not staffed weekends) | Provider hub per-service blocks | Real values, differentiated by service | UNVERIFIED | |

## Email recap action items (April 20)

| ID | Assertion | Where to check | Pass criterion | Status | Evidence |
|---|---|---|---|---|---|
| EM-11 | Per-service accent colors break up the teal | Service page styles / per-service classes | Distinct accents present | UNVERIFIED | |
| EM-12 | Card/box treatment is dynamic, not flat | Card components/styles | Visibly improved treatment | UNVERIFIED | |
| EM-13 | "Coping strategies" reframed toward "resources" | Search `coping` across pages | Language reframed where the note applied | UNVERIFIED | |
| EM-14 | Woodward page shows a Woodward photo, not Perry's | Woodward page image `src`/`alt` | Correct photo | UNVERIFIED | |
| EM-15 | Stevi's direct contact handling on partner pages | Provider hub + service pages | **DECISION** — current build makes Stevi primary contact; flag the conflict, do not silently change | UNVERIFIED | |
| EM-16 | Open Positions: CIS always-on + link out to Indeed | `open-positions` page | Matches the refined model (not hardcoded multi-role with empty embeds) | UNVERIFIED | |

## Open Positions model (April 9)

| ID | Assertion | Where to check | Pass criterion | Status | Evidence |
|---|---|---|---|---|---|
| OP-17 | No stale hardcoded role lists; anchor role + Indeed link; placeholders flagged | `open-positions` page | Model correct; any unfinished Indeed hookup clearly flagged as pending, not a silent stub | UNVERIFIED | |

## Content accuracy / liability

| ID | Assertion | Where to check | Pass criterion | Status | Evidence |
|---|---|---|---|---|---|
| CA-18 | No "you don't need insurance" on crisis pages unless confirmed | Crisis pages; search `insurance` | **DECISION** — flag every instance; do not assert unconfirmed | UNVERIFIED | |
| CA-19 | Mobile Crisis claims confirmed; county list consistent across pages | Mobile Crisis page + Provider Hub | One reconciled, confirmed county list; claims flagged if unconfirmed | UNVERIFIED | |
| CA-20 | No unconfirmed promise (times/coverage/cost/hours) stated as fact | All pages | Unconfirmed facts are flagged placeholders | UNVERIFIED | |

## Wiring (launch-blocking)

| ID | Assertion | Where to check | Pass criterion | Status | Evidence |
|---|---|---|---|---|---|
| WIRE-21 | Location links resolve per-location (not all `/perry`) | Header + homepage location cards | Correct targets; Woodward/Knoxville handled | UNVERIFIED | |
| WIRE-22 | All service "Learn More" links resolve; Outpatient Therapy slug normalized | Homepage grid | No `href="#"`; consistent slugs | UNVERIFIED | |
| WIRE-23 | Contact Us + Donate wired sitewide | Header + footer, all pages | Real destinations | UNVERIFIED | |
| WIRE-24 | Footer For-Providers + Quick-Links wired | Footer, all pages | All resolve | UNVERIFIED | |
| WIRE-25 | "Make a Referral" CTA wired | Homepage hero | Real destination | UNVERIFIED | |
| WIRE-26 | Woodward real street address | Homepage card + Woodward page | No "1234 Main St" placeholder | UNVERIFIED | |
| WIRE-27 | Provider Hub referral forms wired + response times filled | Provider hub | No `href="#"` forms; no "[X]" placeholders (or flagged pending) | UNVERIFIED | |
| WIRE-28 | Nav/footer identical + correct on every page | Every page | Parity confirmed | UNVERIFIED | |

## Reviewer's own findings (beyond the checklist)

Log anything a CD would catch that isn't above: heading-order/skipped levels, weak or missing `alt` text, inconsistent buttons, contrast/focus/tap-target issues, responsive breakage, typos, orphaned placeholder copy, inconsistent spacing or type scale, SEO/meta gaps. Add rows as needed.

| ID | Finding | Location | Severity | Recommended fix |
|---|---|---|---|---|
| EXTRA-01 | | | | |
