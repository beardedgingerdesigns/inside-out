# Source of Truth — Client Decisions & Feedback

This is the brief the site is judged against. Every item traces to a real source: the **April 2, 2026 Design Review** (Melinda Dennis + Stevi Bundy, captured in the Gemini meeting notes), the **April 20, 2026 review-recap email** (Justin → Melinda), the **April 9, 2026 "Indeed" email** (Melinda + Kristen McKillip, HR), and content-accuracy flags from the project wiki. Provenance matters — if the work conflicts with one of these, the source wins unless the client has since changed direction.

> Client context that raises the stakes: the state and the organization's largest funder recently visited the site and could not find what they needed. Institutional visitors (state, funders, ER/school referrers) are a primary audience. Broken links, placeholder content, and unverifiable claims are not cosmetic here — they cost credibility and funding.

---

## A. April 2 Design Review decisions (Melinda + Stevi)

- **DR-01 — Remove 988 from public pages.** Melinda was emphatic ("we are not friends with 988"). The organization's own crisis line (844-428-3878) is the prominent emergency contact; 988 should not appear on the homepage or front-facing pages.
- **DR-02 — No "hands and hearts" illustrative imagery.** Melinda has a strong aversion tied to a prior failed funder (Heart of Iowa). Use real/stock photography. A placeholder illustration is only acceptable as an explicitly-flagged interim, never as shipped design. *(Ambiguous → DECISION: confirm whether current illustrations are an accepted interim or must be replaced before launch.)*
- **DR-03 — Palette: darker teal + purple; drop the mustard/green.** Cream background is acceptable. Verify in the stylesheet.
- **DR-04 — Secondary header CTA = "Make a Referral."** Changed from "I'm a provider" (Stevi's note — better for an ER nurse). The **primary nav item stays "Partner Providers."**
- **DR-05 — Outpatient Therapy is the 10th service.** Intentionally added to round the services grid to 5×5. It is legitimate and should be present. (Resolve any URL-path inconsistency — see WIRE-22.)
- **DR-06 — Location pages drop the per-building "primary contact person."** Keep only the location's admin phone number.
- **DR-07 — Who We Are team structure:** an Executive Team section and a Management section on that page; individual program providers are listed on **their own service pages** with location + contact, not on Who We Are. Real names/titles, not placeholders.
- **DR-08 — Provider Hub mechanics:** each service routes to an **intake form that fires a transactional email** to the right contact; **no client data is stored** on the site. Show **expected response times per service.** Mobile Crisis is the exception — it is **"call for dispatch, do not submit a form."**
- **DR-09 — Response-time content (Stevi):** crisis responds **within 60 minutes** of a referral; **Transitional Living is not staffed on weekends.** Response expectations therefore differ by service and must be stated per service, not uniformly.

## B. April 20 review-recap email (Justin's committed action items)

- **EM-11 — Per-service accent colors** to break up an all-teal feel.
- **EM-12 — More dynamic card/box treatment** (the review found the boxes flat/underwhelming).
- **EM-13 — Reframe "coping strategies" toward "resources"** — language about finding and connecting clients to resources.
- **EM-14 — Woodward page is showing the wrong photo** (a Perry photo). Fix it.
- **EM-15 — Remove Stevi's direct contact from the partner pages.** *(Ambiguous → DECISION: the current build appears to do the opposite and makes Stevi the primary hub contact. Do not silently "fix" either way — surface it and state the question: is Stevi intentionally the referral point of contact now, or should her direct contact come off per the April note?)*
- **EM-16 — Open Positions via Indeed:** keep the Crisis Intervention Specialist posting **always up**, and **link out to Indeed** for specialty roles (refined from the April 2 "embed everything" idea). Justin to set up the Indeed connection with Kristen.

## C. April 9 "Indeed" email (Melinda + Kristen, HR)

- **OP-17 — Always-on anchor role + link out; no stale hardcoded lists.** Melinda's stated concern is that openings "come and go so fast" — she does not want hand-maintained listings that go stale. Model: CIS always posted as the anchor, everything else via a link to the Inside Out Indeed page. Indeed account hookup (real embed code or company-page URL) is **pending** and owned by Kristen — until it lands, any embed/link is a flagged placeholder, not finished work.

## D. Content-accuracy & liability flags (wiki + transcript)

- **CA-18 — "You don't need insurance" must come off the CRISIS pages unless confirmed.** Crisis services are primarily Medicaid-funded; insurance/cost language belongs on outpatient pages only, if anywhere. *(Ambiguous → DECISION: confirm with client before stating any insurance/cost position as fact.)*
- **CA-19 — Mobile Crisis operational claims are unverified AND internally inconsistent.** Arrival time ("< 60 min"), "plain clothes / unmarked vehicle," "24/7," and the coverage-county list are all stated as fact but unconfirmed. Worse, the **county list differs between the public Mobile Crisis page and the Provider Hub** — these must reconcile to one client-confirmed list.
- **CA-20 — No concrete promise stated as fact unless confirmed.** Response times, coverage areas, cost/insurance, hours — if not client-confirmed, use a clearly-marked placeholder, never a confident assertion. This is a crisis-services site; a false promise is a real-world harm, not a typo.

## E. Launch-blocking wiring (from the live-site audit)

- **WIRE-21 — Location links** (nav + homepage cards) must resolve to the correct per-location destination. Today all three (Woodward, Perry, Knoxville) point to `/perry`. Woodward and Knoxville need real targets or a proper "coming soon" treatment with no misleading link.
- **WIRE-22 — Every service "Learn More" resolves.** Four homepage grid cards currently use `href="#"` (Community Support, Outpatient Substance Use, Mobile Crisis, CIT) although the pages exist. Also normalize the Outpatient Therapy URL so all services share one slug convention.
- **WIRE-23 — Contact Us + Donate wired sitewide** (nav and footer) to real destinations. Currently dead everywhere. For institutional visitors, a dead "Contact Us" is the single most damaging miss.
- **WIRE-24 — Footer "For Providers" + "Quick Links" wired:** Partner Provider Hub → the hub page, Referral Forms → real target, Contact Us, Donate, and Open Positions. (Note current footers are inconsistent page-to-page.)
- **WIRE-25 — "Make a Referral" CTA wired** (currently `#` on the homepage hero).
- **WIRE-26 — Woodward real street address.** Placeholder "1234 Main St, Woodward, IA" is live.
- **WIRE-27 — Provider Hub referral forms + response times.** Every "Access Referral Form" is currently `href="#"`, and every response time is a literal "[X] business hours" placeholder. Wire the forms (per DR-08) and fill confirmed values (per DR-09), or flag clearly as pending.
- **WIRE-28 — Nav/footer parity.** The shared header/footer must be identical and correct on every page. Today they diverge (e.g., the Partner Provider Hub footer link is correct on the hub page but `#` elsewhere).
