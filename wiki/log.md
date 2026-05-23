# Wiki Log

Append-only chronological record of meaningful events. See [SCHEMA.md](SCHEMA.md) for format.

Format: `## [YYYY-MM-DD] type | short title` where `type` is one of `ingest`, `decision`, `query`, `lint`, `edit`.

Grep last entries: `grep "^## \[" wiki/log.md | tail -10`

---

## [2026-05-23] edit | Wave 1 HTML pages built and Services dropdown wired across the site
- Built 4 new HTML pages from the canonical [crisis-stabilization-adults.html](../crisis-stabilization-adults.html) template:
  - [community-support-program.html](../community-support-program.html) — 455 lines.
  - [outpatient-substance-use.html](../outpatient-substance-use.html) — 455 lines.
  - [mobile-crisis-response.html](../mobile-crisis-response.html) — 459 lines, with "Admissions" → "What happens when you call" and "What to expect during your stay" → "What it looks like when we get there" renames; "Eligibility & Coverage" combined section naming Des Moines metro counties.
  - [cit-program.html](../cit-program.html) — 468 lines, with provider callout bar audience-flipped from "Referring a client?" to "Are you a law enforcement agency or county partner?"; "Admissions" → "How CIT works in your community"; coverage section names Clive/Urbandale/Waukee/West Des Moines.
- All 4 pages drop the canonical template's "What to bring" packing checklist (irrelevant for these service types).
- All 4 pages drop "Stay" / "facility" language and adapt the stats row to per-service descriptors + placeholders Justin needs to confirm.
- Services dropdown wired across all 13 nav-bearing HTML files. Previously dead `#` (or `#services` on the homepage) placeholder links now resolve to the 4 new pages.
- [services-overview.md](services-overview.md) flipped: all 8 services now have ✅ HTML pages. The 4 existing pages (Crisis Stab Adults/Children, Transitional Living, Peer Support) still carry the prototype's placeholder copy, deferred for Wave 2.
- **Skipped:** automated screenshot QA. Puppeteer is not installed in this macOS environment; [CLAUDE.md](../CLAUDE.md) screenshot paths reference a Windows install. Static HTML sanity checks pass (line counts ~455-468 vs canonical 471; titles, hero H1s, active dropdown link highlighting all confirmed via grep). Manual visual review by Justin at http://localhost:3001/ recommended before publishing.

## [2026-05-22] edit | Wave 1 drafts updated with Justin's review directives
- Justin's 5 directives applied across all 4 drafts (frontmatter `status_notes:` records the per-file changes):
  1. **No location-specific copy** — left geography general except where coverage was requested.
  2. **Des Moines metro as placeholder coverage** — applied to Mobile Crisis (Polk/Dallas/Warren/Madison + neighboring), CIT (Clive/Urbandale/Waukee/West Des Moines confirmed; broader HICS partner-agency list deferred), and CSP (stats Card 3 swapped to "Des Moines metro / Polk, Dallas, and surrounding counties").
  3. **Placeholder stats filled** — Mobile Crisis row filled (60-min response / 24/7 / Free); CIT stats kept with HICS-sourced placeholders pending Inside Out-attributed figures; CSP stats Card 3 swapped to geography; Outpatient SUD stats Card 3 swapped from "Sliding-scale" to "Free evaluation."
  4. **No telehealth, no pricing content** — Outpatient SUD: every telehealth mention removed (stats / What you can expect Card 4 / What we ask of you Card 1 / Admissions Step 2 + 3); pricing/sliding-scale claims removed throughout; "no insurance" softened to "you don't need to have insurance figured out before you reach out." CSP: Medicaid line removed from body and eligibility.
  5. **844-428-3878 as primary routing** — confirmed across all 4 drafts; no per-service intake numbers added.
- Also applied the Generalization-check broadenings the Outpatient SUD agent had documented at the bottom of its draft but hadn't pulled into the actual section copy. Now applied inline.

## [2026-05-22] edit | Wave 1 services research complete — 4 drafts filed
- Dispatched 4 in-persona research agents in parallel for the 4 unpopulated services (broken-nav gap).
- Each agent: chose a persona, researched 3–5 Iowa/Midwest peers + 1–2 outside-Iowa benchmarks, drafted per-section copy mapped to the 11-section template from [crisis-stabilization-adults.html](../crisis-stabilization-adults.html), and ran a self-Generalization-check.
- Coordinator persona-leakage scan: all 4 drafts pass. No condition-specific, scenario-specific, or persona-specific framing in body copy. (Outpatient SUD has 3 employment-centric near-misses with corrected final lines documented at the end of its Generalization check — build phase must use the corrections, not the original draft lines.)
- Drafts filed under [services/](services/): community-support-program, outpatient-substance-use, mobile-crisis-response, cit-program. Per-agent detail entries follow this summary.
- [services-overview.md](services-overview.md) updated with new 📝/✅/❌ tri-state legend; the 4 Wave-1 services link to their wiki drafts.
- Phase B (HTML build) and Wave 2 (the 4 existing services) are deferred per the approved plan. Justin reviews drafts on his own timeline before kicking off next steps.

## [2026-05-22] edit | Drafted Outpatient Substance Use Services page content
- Researched 3 Iowa peers (Community & Family Resources [formerly Prelude], UnityPoint Health – Eyerly Ball, Iowa HHS Addiction & SUD portal) + 2 outside-Iowa benchmarks (Caron Treatment Centers, Hazelden Betty Ford).
- Filed full research + section-by-section draft at [services/outpatient-substance-use.md](services/outpatient-substance-use.md).
- Persona-as-lens applied: 38-year-old searching at 2am, scared of losing job to a 30-day inpatient stay. Generalization audit confirms body copy doesn't focal-point alcohol, employment status, or any persona-specific scenario; three near-miss employment-centric lines flagged with broadened rewrites.
- Hero promise locked in: "Treatment that works around your life." 844-428-3878 retained as the primary CTA per the project's org-wide crisis-line convention (Outpatient SUD sits alongside, not inside, that line per the brief — but the line remains the entry point).
- Key adaptations from the crisis-stabilization template: stats row reframed from inpatient-stay duration to access-time + schedule flexibility + uninsured pathways (and marked optional); "What we ask of you" expanded to a 3-card grid because outpatient compliance earns the weight; "What to bring" packing list dropped (irrelevant); Eligibility section *included* (template-optional) because the persona's biggest worry is being told they don't qualify or are too sick / not sick enough.
- Anti-shame guardrails enforced: no "destructive cycle," no "rock bottom," no "first step" cliché, no forcing the reader to self-classify as "high functioning."
- 11 open questions surfaced for Justin: location coverage (Woodward/Perry/Knoxville), telehealth availability, realistic wait time, sliding-scale + payment mix, MAT availability, OWI evaluations, co-occurring mental-health integration, adolescent SUD scope, clinician bios, group schedule publishing, and whether outpatient SUD has a dedicated intake number distinct from 844-428-3878.

## [2026-05-22] edit | Drafted CIT Program service page content
- Researched Inside Out's own existing CIT page (insideoutiowa.com/services/crisis-intervention-training-program) + Heart of Iowa Community Services CIT Co-Responder Program (HICS, the actual funding partner) + Cedar Rapids PD CIT + Foundation 2 (Linn) + Denver STAR + NAMI Iowa coverage + Polk County / Broadlawns MCRT + NAMI National CIT framing.
- Filed full research + section-by-section draft at [services/cit-program.md](services/cit-program.md).
- Persona-as-lens applied: parent at 2am with adult child living with bipolar, scared to call 911. Body copy generalized so the page serves anyone whose situation could involve a 911 mental-health encounter, not only the persona's scenario. Generalization check confirms.
- Hero promise locked in: "A different kind of response when mental health and 911 meet." Acknowledges fear of bad police outcomes in tone without finger-pointing — keeps the door open for partner agencies reading the same page.
- Key adaptations from the crisis-stabilization template: "Admissions" → "How to access CIT" (3 steps tracking 911 call → dispatch routing → on-scene response); "What you can expect during your stay" → "What it looks like when CIT arrives" (4 encounter-framed cards); Coverage/eligibility section included (template-optional) because honest jurisdiction limits are load-bearing — Clive, Urbandale, Waukee, West Des Moines confirmed from existing Inside Out site; hero sub flagged as intentionally longer than other service pages because CIT requires more demystification.
- Provider callout bar copy needs an audience flip: from "Referring a client?" to "Are you a law enforcement agency, ER, or county partner?" — flagged for the implementer in the per-service-template-variations section.
- Stats row drafted with HICS-attributed figures (370+ officers trained, 2,486+ calls, 98% jail diversion) but marked "Justin to confirm what's appropriate to publish on Inside Out's own page."
- 9 open questions surfaced for Justin: stats publication policy, hours of co-responder coverage, jurisdiction list precision (CIT-clinician-paired vs CIT-officer-trained), dispatch protocol (ask for CIT by name vs auto-route), CIT-vs-Mobile-Crisis decision tree, what to tell callers in unsupported counties, naming partner agencies on the page, provider callout copy confirmation, staff names on the page.

## [2026-05-22] edit | Drafted Community Support Program service page content
- Researched 5 Iowa peers (Foundation 2, CommUnity Crisis Services, Eyerly Ball/UnityPoint, NAMI Iowa, Iowa HHS TCM/Habilitation policy) + 2 outside-Iowa benchmarks (Thresholds Chicago, Pathways to Housing First).
- Filed full research + section-by-section draft at [services/community-support-program.md](services/community-support-program.md).
- Persona-as-lens applied: exhausted parent of an adult son with schizophrenia, calling at 2am. Body copy generalized so it serves every Iowan needing CSP, not just the persona's scenario. Generalization check confirms.
- Hero promise locked in: "Steady support, where life actually happens." 844-428-3878 retained as primary CTA per project rules.
- Key adaptations from the crisis-stabilization template: stats row reframed from short-stay duration to long-term/in-home/adult-ages; "What we ask of you" reframed from on-site participation to honest-and-self-directed participation; "What to bring" packing list dropped (irrelevant for community-based service); Eligibility section *included* (template-optional) because "I assumed I wouldn't qualify" is the #1 unspoken reason people don't call.
- 10 open questions surfaced for Justin: location coverage, geographic radius, Medicaid-vs-sliding-scale funding, honest stats for the row, visit frequency, staffing titles, formal eligibility criteria, family-involvement model, service-specific phone number, crossover with adjacent services.

## [2026-05-22] edit | Drafted Mobile Crisis Response service page content
- Researched 5 Iowa peers (Foundation 2, CommUnity, Eyerly Ball, CICS, Polk County) + 2 national benchmarks (CAHOOTS Eugene, Denver STAR) + Iowa HHS framework.
- Filed full research + section-by-section draft at [services/mobile-crisis-response.md](services/mobile-crisis-response.md).
- Key adaptations from the crisis-stabilization template: "Admissions" → "What happens when you call"; "What to expect during your stay" → "What it looks like when we get there"; "What to bring" removed; stats row flagged N/A pending Justin's confirmation of response time and county count.
- Hero promise locked in: "When you can't get to help, help can come to you." 844-428-3878 as the single activation number.
- Persona-as-lens audit performed (rural spouse calling at 11pm); generalization check confirms copy serves self-callers, families, schools, ERs, and providers — not only the persona's scenario.
- 10 open questions surfaced for Justin: coverage counties, response-time commitment, team composition, hours, plain-clothes/unmarked-vehicle confirmation, out-of-area handoff, CIT differentiator, voluntary-program framing, cost, follow-up timing.
- Added a `## Partner-provider perspective` section to seed the provider callout bar copy in the build phase.

## [2026-05-17] edit | Wiki bootstrapped
- Adopted Karpathy LLM Wiki pattern.
- Created `wiki/` and `raw/` folder structure with [SCHEMA.md](SCHEMA.md) defining conventions.
- Seeded `overview.md`, `index.md`, `site-map.md`, `locations.md`, `services-overview.md`, and `brand/` pages from the existing project brief.
- Filed the existing `proejct-brief.md` as the first source: [sources/2026-04-24-project-brief.md](sources/2026-04-24-project-brief.md).

## [2026-04-24] ingest | Project brief from Justin
- Original brief established: Inside Out Wellness & Advocacy (Iowa nonprofit), warm/modern aesthetic, dual audience (people in crisis + partner providers), 8 services, 3 locations (Knoxville opening Spring 2026).
- Brand direction: teal/sage/amber, humanist serif + clean sans, generous whitespace, no clinical blues.
- Persistent emergency bar required: "Mental health crisis? Call 844-428-3878".
- Backdated entry — source is dated to its original delivery, not today.
- Summary: [sources/2026-04-24-project-brief.md](sources/2026-04-24-project-brief.md).
