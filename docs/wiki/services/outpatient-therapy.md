---
name: Outpatient Therapy
slug: outpatient-therapy
status: built
last_updated: 2026-05-29
status_notes: "v1 draft 2026-05-29 per the keep-&-build decision (D1); peer-research pass added same day (6 Iowa providers benchmarked + national best-practice). 10th service. Differentiated from Outpatient Substance Use. Respects no-pricing-copy (no cost/insurance language). NO telehealth claim (confirm before adding). Evidence-backed CTA decision: lead with 'request an appointment / call to schedule,' keep any crisis number subordinate — do NOT front the crisis line on a non-crisis page. HTML page BUILT 2026-05-29 ([log](../log/2026-05-29-outpatient-therapy-built.md)) with safe interim framing: NO telehealth claim, NO named location, NO wait-time promise, NO group/family/modality claims; primary CTA 'Request an appointment'/'Call our office' on the admin line 515-642-7070 (NOT the crisis line); crisis line kept subordinate. The [confirm: …] / open-question items below still gate FINAL copy — swap them in when Melinda answers."
persona: "I'm not in crisis. I've just been carrying something heavy for a long time, and I think I need to talk to someone — regularly, not just once."
sources:
  - ../sources/2026-04-24-project-brief.md
  - ../decisions/active/2026-05-29-keep-outpatient-therapy.md
  - https://lsiowa.org/therapy/
  - https://hillcrest-fs.org/services/community-mental-health-centers
  - https://www.broadlawns.org/clinics-and-services/mental-health/outpatient-services
  - https://www.verafrenchmhc.org/services-for-adults/outpatient-counseling-medication/
  - https://optimaelifeservices.com/our-services/behavioral-health/
  - https://www.psychologytoday.com/us/blog/self-made/202503/you-dont-need-to-be-in-crisis-to-start-therapy
  - https://www.worrywellcollective.com/post/you-don-t-have-to-be-in-crisis-to-go-to-therapy
  - https://screening.mhanational.org/content/how-does-therapy-work-what-expect/
  - https://growtherapy.com/therapy-basics/getting-therapy/preparing-for-first-therapy-session/
---

## Persona

I've been telling everyone I'm fine for about two years now. I'm not falling apart — I go to work, I take care of my kids, I answer my texts. But there's a low hum under everything: I'm tired in a way sleep doesn't fix, I snap at people I love, and I've started dreading mornings. It's not an emergency. No one is going to send me to a hospital, and honestly that's part of the problem — I don't feel sick *enough* to deserve help, so I keep waiting for it to get bad enough to count. What I actually want is simpler than a crisis line: someone to sit across from me, week after week, who is trained to help me untangle this. A regular appointment. A person who remembers my story. The sense that I'm slowly getting somewhere — not a one-time call, not a hospital bed, just steady, real conversation with someone who knows what they're doing.

## Positioning & differentiation

Outpatient Therapy is the service most people picture when they think "I should talk to someone" — ongoing, scheduled, one-on-one counseling with a licensed mental health professional. It is the calmest, most "everyday" service in the catalog, and the one most likely to be confused with its neighbors. The page has to draw the lines clearly:

- **vs. Crisis Stabilization & Mobile Crisis Response** — those are for *acute* crisis (residential stabilization; a team dispatched to an emergency). Outpatient Therapy is the opposite end: scheduled, non-emergency, ongoing. It is also the natural **step-down** for someone leaving crisis stabilization.
- **vs. Outpatient Substance Use** — substance-specific. Outpatient Therapy is general mental health: anxiety, depression, trauma, grief, stress, life transitions, relationships. A person can receive both. [confirm: do the two coordinate / cross-refer?]
- **vs. Community Support Program** — CSP is in-home wraparound support (often ongoing serious mental illness; daily-living and benefits help). Outpatient Therapy is clinical talk therapy in scheduled sessions.
- **vs. Peer Support** — peer support is lived-experience companionship (non-clinical). Outpatient Therapy is treatment by a licensed clinician.

One-line catalog description: *Ongoing, scheduled one-on-one counseling with a licensed therapist — for the anxiety, depression, grief, trauma, or weight that doesn't have to be a crisis to deserve care.*

## Research summary

Benchmarked six Iowa providers' outpatient/counseling pages (Lutheran Services in Iowa, Hillcrest Family Services, Broadlawns, Vera French, Optimae, Eyerly Ball/UnityPoint) plus Foundation 2 as a cautionary contrast, and cross-referenced national best-practice on the "I'm not sick enough" barrier (Psychology Today, Worry Well Collective, Mental Health America, Grow Therapy). The pattern is consistent: **the pages that win the persona open with permission, not services; name feelings instead of diagnoses; define what a session actually is in plain words; and lead the call-to-action with scheduling, keeping any crisis number visually separate.** The pages that lose her open with an org chart ("staffed by Psychiatrists, Psychologists, ARNPs…"), pair everyday stress with high-acuity diagnoses (schizophrenia, bipolar) in one list, or bury scheduled therapy inside crisis/residential/substance lines so she concludes "this place isn't for someone like me."

The strongest single move, repeated across the best national sources, is to **name the false belief out loud and revoke it**: *"You don't have to wait until the wheels fall off… You don't have to prove your pain is bad enough"* ([Psychology Today](https://www.psychologytoday.com/us/blog/self-made/202503/you-dont-need-to-be-in-crisis-to-start-therapy)). For Inside Out, that line *is* the hero.

## What landed / what didn't

- **Lutheran Services in Iowa** (https://lsiowa.org/therapy/)
  - Landed: the headline **"It's ok to ask for help"** — the persona's exact permission slip. Bios name everyday concerns ("grief, relationship concerns, life transitions, self-esteem"), not diagnoses. CTA softener: **"Schedule an appointment today. Call … to get started."**
  - Didn't: credential salad in bios (tLMHC, NCC, LPHA); the reassuring copy is one paragraph before it becomes a long therapist roster.
- **Hillcrest Family Services** (https://hillcrest-fs.org/services/community-mental-health-centers)
  - Landed: best feelings-list of the set — **"support you through anxiety, depression, trauma, grief, and life transitions"**; continuity promise — **"long-term relationships that support your healing"**; choice — **"in-person or virtual… whatever works best for your life."**
  - Didn't: cold institutional title/breadcrumb; mixes "crisis intervention" into the same bullets, blurring the non-crisis message.
- **Broadlawns** (https://www.broadlawns.org/clinics-and-services/mental-health/outpatient-services)
  - Landed: cleanest plain definition of a session — **"one-on-one… helps you explore your thoughts, feelings, and behaviors in a confidential, supportive environment"**; personalization — **"tailor the approach to your unique situation."**
  - Didn't: condition list pairs life stress with **"bipolar disorder, PTSD, schizophrenia"** — makes the hesitant reader feel under-qualified; dense credential dumps.
- **Vera French** (https://www.verafrenchmhc.org/services-for-adults/outpatient-counseling-medication/)
  - Landed: low-friction **"Call anytime: (563) 383-1900"** pinned at top; relatable purpose — therapy helps you "move toward… improved functioning in their daily lives."
  - Didn't: opens with scale and an org chart ("thousands of patients… staffed by Psychiatrists, Psychologists, ARNPs"); says **"patients,"** not "you."
- **Optimae** (https://optimaelifeservices.com/our-services/behavioral-health/)
  - Landed: relationship-first values ("choice, respect, teamwork"); strengths-based framing ("create happier and healthier lives"); a demystified intake walk-through.
  - Didn't: calls clients **"customers"** (transactional); front-loads a modality menu (CBT/DBT/ACT/EMDR) and the "Intake Packet" paperwork.
- **Eyerly Ball / UnityPoint** (https://www.unitypoint.org/locations/unitypoint-health---eyerly-ball)
  - Landed: empowering, client-directed language ("person-centered planning and client-directed outcomes"); a human "behavioral health navigator" to help people who feel lost in the system.
  - Didn't: a *location* page where outpatient therapy drowns among residential care, RESTORE, OWI screenings, and acronyms (CCBHC, CARF); eligibility-worksheet + fee-form tone.
- **Foundation 2** (https://www.foundation2.org/services/therapy-support/) — *cautionary contrast*
  - Useful pattern: a section literally titled **"Are my feelings normal?"** validates before helping; crisis line offered as the *exception* ("For emergency needs, please reach out to our crisis line… It's free and confidential").
  - The trap to avoid: a page labeled "therapy/counseling" that actually reads as crisis/suicide-loss content — exactly what pushes a mildly-stressed reader away.

National best-practice (for the "not sick enough" reader): name the myth and the stereotype, then offer an inclusive "you might be doing fine and still benefit" checklist ([Psychology Today](https://www.psychologytoday.com/us/blog/self-made/202503/you-dont-need-to-be-in-crisis-to-start-therapy); [Worry Well](https://www.worrywellcollective.com/post/you-don-t-have-to-be-in-crisis-to-go-to-therapy)); reframe the first appointment as a no-pressure **"consultation,"** and reassure "you're not stuck with the first therapist you try" ([MHA](https://screening.mhanational.org/content/how-does-therapy-work-what-expect/)); and tell the reader exactly what a first session is like — roughly an hour, you set the pace, and sharing a hard feeling **doesn't automatically mean emergency services get called** ([Grow Therapy](https://growtherapy.com/therapy-basics/getting-therapy/preparing-for-first-therapy-session/)).

## Tone notes

- **Lower the "sick enough" bar in the first two sentences.** This reader's biggest barrier is believing they don't qualify because it isn't an emergency. Name it and dissolve it — that's the hero's whole job.
- Gentlest register of any service page. No urgency, no crisis framing, no countdown. Calm, steady, unhurried.
- Plain second person. "You don't need a diagnosis. You don't need to be in crisis. You just need to want to talk." Never "patients" or "customers."
- No clinical jargon. Name feelings, not diagnoses. Keep CBT/DBT/EMDR off this page (or push to a small secondary "how we work" note).
- Do **not** lead with a crisis number framed as a crisis line — the reader is explicitly *not* in crisis.

## Content outline

> Breadcrumb: **Services › Outpatient Therapy**. Slug: `outpatient-therapy.html` (root-level, matching the other nine — fixes the old `/services/outpatient-therapy` inconsistency).

### Hero
- **H1:** You don't have to be in crisis to deserve a place to talk.
- **Sub:** Outpatient therapy is ongoing, one-on-one counseling with a licensed mental health professional — for the anxiety, the low weeks, the grief, the trauma, or the weight you've been carrying. No diagnosis required. No crisis required. Just a regular appointment with someone who gets to know your story.
- **Primary CTA:** Request an appointment → [confirm intake destination] · **Secondary:** Call to schedule → [confirm number]
- **Quiet crisis band (subordinate, visually separate):** "Need help right now? If you're in a crisis, call **844-428-3878** — any hour, any day." *(Present but clearly not the primary path. No 988 per DR-01.)*

### What is Outpatient Therapy?
- **H2:** Regular, real conversation — on a schedule that fits your life.
- **P1:** You meet with the same licensed therapist on a regular schedule — usually weekly or every other week — and work through what's going on, over time. You are not admitted anywhere. You don't stay overnight. You come in [confirm: in person at our locations / format], talk, and leave with a little more room to breathe than you came in with.
- **P2:** People come for all kinds of reasons: anxiety that won't quiet down, a depression that's worn a groove, grief that didn't shrink on the timeline everyone promised, the aftermath of something hard, or just a season where life is heavier than usual. You do not need a diagnosis to start, and you do not need to be in crisis.
- **P3:** If you ever need more than a weekly conversation, you're already inside a connected system — Inside Out can step you up to crisis support, or work alongside other services, without you starting over with strangers.

### You might be doing "fine" and still benefit
*(Replaces a stats row — adapted from the Psychology Today / Worry Well checklists; lets a high-functioning reader self-identify without a label.)*
- **H2:** Reasons people come that aren't a crisis
- A short, plain list: *feeling overwhelmed but still functioning · saying yes when you mean no · dreading the mornings · grief that lingers · a big change (a move, a new baby, a breakup, a new job) · wanting to set better boundaries · just not feeling like yourself.* Caption: "If you saw yourself in any of these, that's reason enough."

### What you can expect
- **H2:** What therapy with us actually looks like
- **Cards (4):** *A therapist who knows your story* (same person each time) · *A pace you set* (no "sick enough" bar, no finish line we impose) · *A schedule that fits real life* ([confirm: days/evenings]) · *A team behind the room* (we can bring in crisis, peer, or resource support if you ever need more).

### What your first visit is like
*(Trust section — adapted from MHA + Grow Therapy; cuts first-appointment anxiety.)*
- **H2:** What the first visit is like
- Plain timeline: about an hour · a few forms to start · we talk about what brought you in and what you're hoping for · **you set the pace and share only what you're ready to.** Reassurance to include: telling your therapist you're overwhelmed *doesn't* automatically trigger an emergency response — they're trained to listen first. And you're not locked in to the first therapist; the goal is a good fit.

### Who it's for
- **H2:** Who outpatient therapy is for
- Adults [confirm: and youth/adolescents?] navigating anxiety, depression, grief, trauma, stress, life transitions, or strained relationships. Come for yourself, or reach out for someone you love. No referral, no diagnosis, no crisis required.

### How to get started
- **H2:** How to get started
- **Step 1 — Request an appointment.** [confirm: simple request form] or call [confirm intake number]. A real person helps you figure out the next step.
- **Step 2 — A short first conversation.** We learn what you're looking for and match you with a therapist who fits. Think of it as a no-pressure consultation. [confirm: typical time from first contact to first appointment — strong trust signal if we can state it.]
- **Step 3 — Your first session.** Scheduled at a [confirm: location] and time that works for you. The work begins at whatever pace feels right.
- *(No cost/insurance copy, per the [no-pricing-copy decision](../decisions/active/2026-05-28-no-pricing-copy.md). Route coverage questions to the first conversation.)*

## Per-service template variations

This service does NOT use the crisis/residential template. For the build:

- **No "Admissions," no "What to bring," no "your stay."** Replace with **"How to get started"** (request → short conversation → first session).
- **Stats row → replaced** with the "Reasons people come that aren't a crisis" band (above). None of the crisis stats fit, and we have no confirmed numbers.
- **CTA leads with scheduling, crisis line subordinate** (evidence-backed — see research). Do not front the crisis number.
- **Hero imagery:** warmest/quietest of the set — two people in conversation, a calm room. Real/stock photography (DR-02), no "hands & hearts" illustration as final.
- **Gentlest copy in the catalog.** Re-read every line against the "I'm not sick enough" reader before publishing.

## Open questions for Justin / Melinda

The page is **BUILT (2026-05-29)** with safe interim framing; these now gate the **final copy** (Justin emailing them to the client). Answers swap straight into the live page:

1. **Intake destination/number** — research strongly recommends a "request an appointment / call to schedule" path, NOT the crisis line, as the primary CTA. Is there a dedicated intake/scheduling number or request form? (If the only number is 844-428-3878, we'd reframe it as "call to schedule" and keep a separate crisis band.)
2. **Ages** — adults only, or children/adolescents too?
3. **Session formats** — individual only, or also family / couples / group?
4. **In person vs. telehealth** — in-person only (like the substance-use page), or is telehealth offered? (No telehealth claim until confirmed.)
5. **Locations** — Perry and/or Woodward now? Knoxville once it opens? (Don't advertise Knoxville until it's open.)
6. **Specialties/approaches to name** — trauma-informed, CBT, etc.? Happy to name what's real; otherwise we keep them off the page.
7. **Typical wait to first appointment** — a strong trust signal if we can state it honestly.
8. **Coordination with Outpatient Substance Use** — can a client receive both; is there referral/coordination?
9. **Grid + slug** — confirm `outpatient-therapy.html` (root-level) and the 10th-card / 5×5 grid placement (vs. a 9-service grid).

## Cross-references

- [outpatient-substance-use.md](outpatient-substance-use.md) — sibling outpatient service; this draft is written to not duplicate it.
- [community-support-program.md](community-support-program.md), [peer-support-services.md](peer-support-services.md) — adjacent ongoing-support services.
- [crisis-stabilization-adults.md](crisis-stabilization-adults.md) — Outpatient Therapy is the natural step-down from crisis stabilization.
- [decisions/active/2026-05-29-keep-outpatient-therapy.md](../decisions/active/2026-05-29-keep-outpatient-therapy.md) — the decision this draft fulfills.
- [architecture/services-overview.md](../architecture/services-overview.md) — service catalog.

## Sources

- [Project brief](../sources/2026-04-24-project-brief.md) — service catalog and audience framing.
- Iowa peer pages benchmarked 2026-05-29: [LSI](https://lsiowa.org/therapy/), [Hillcrest](https://hillcrest-fs.org/services/community-mental-health-centers), [Broadlawns](https://www.broadlawns.org/clinics-and-services/mental-health/outpatient-services), [Vera French](https://www.verafrenchmhc.org/services-for-adults/outpatient-counseling-medication/), [Optimae](https://optimaelifeservices.com/our-services/behavioral-health/), Eyerly Ball/UnityPoint, [Foundation 2 (contrast)](https://www.foundation2.org/services/therapy-support/).
- Best-practice / "not-sick-enough" framing: [Psychology Today](https://www.psychologytoday.com/us/blog/self-made/202503/you-dont-need-to-be-in-crisis-to-start-therapy), [Worry Well Collective](https://www.worrywellcollective.com/post/you-don-t-have-to-be-in-crisis-to-go-to-therapy), [Mental Health America — how therapy works](https://screening.mhanational.org/content/how-does-therapy-work-what-expect/), [Grow Therapy — your first session](https://growtherapy.com/therapy-basics/getting-therapy/preparing-for-first-therapy-session/).
