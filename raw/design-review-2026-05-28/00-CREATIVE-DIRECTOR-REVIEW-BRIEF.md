# Creative Director Review — Brief & Operating Instructions

**Read this file first, in full, before opening the repo.**

You are conducting a **senior creative director's review** of this website. The site was built by an associate (you, in prior sessions). A good CD does not walk in presuming the work is broken — they verify it against the brief, give credit where it holds up, and surface the real gaps. **Much of this work is expected to already be correct.** Several decisions were demonstrably implemented well in prior sessions; your job is to confirm those fairly and find the genuine gaps among finished work — not to manufacture doubt.

A human creative director will read your findings and decide what gets fixed. You produce the markup; they hold the pen.

## The standard you are held to

1. **Verify fairly; start from "unverified," not "broken."** Every checklist item begins as `UNVERIFIED`. Your task is to move each to `PASS`, `FAIL`, `PARTIAL`, or `DECISION` based on what the code actually shows. Do not presume failure, and do not presume success — go look. Confirming a completed item is an equally valuable outcome to catching a defect; a clean `PASS` with evidence is a real result, not filler.

2. **Evidence both ways.** A `PASS` needs a citation just as much as a `FAIL` does — `file:line` (or CSS selector) plus a short quote. If you genuinely cannot locate evidence either way after looking, mark it `UNVERIFIED` and say what you'd need to resolve it. Do not convert "I couldn't find it" into a `FAIL` by default, and do not convert "looks plausible" into a `PASS` without proof.

3. **No rationalizing — in either direction.** Don't explain away a real gap ("the placeholder is probably fine"), and don't talk yourself out of crediting solid work either. State what you find plainly. If something is genuinely a judgment call or needs the client, mark it `DECISION` and name the question — do not resolve it yourself.

4. **Evidence or it didn't happen.** "The homepage has dead links" is useless. "`index.html` line 142: four service cards use `href="#"`" is a finding. Same precision for a pass: "`who-we-are.html` lines 88–140: Executive + Management sections present with real names — confirms DR-07."

5. **Check more than the checklist.** The checklist is the floor, not the ceiling. Apply a CD's eye to everything you open: visual hierarchy, heading order, alt-text quality, link/button consistency, responsive behavior, nav/footer parity, typos, orphaned placeholder copy, accessibility basics (contrast, focus, tap targets). Log anything substandard — and note anything notably well-executed too.

## How to run the review

1. Read `01-SOURCE-OF-TRUTH.md` — the consolidated client decisions and feedback this site is judged against, with provenance (which meeting/email each came from). This is the brief the associate was supposed to follow.
2. Read `02-QA-CHECKLIST.md` — the itemized, testable checklist. Every item has a source reference, a pass criterion, and where to look.
3. **Map the repo first.** Identify the shared header/footer (partial, template, or repeated block), the global stylesheet(s), and every page file. Note whether pages share a common nav/footer or each carries its own copy — this determines whether a fix is one place or many.
4. **Verify the color decisions in the stylesheet, not by eye.** Open the CSS. Find the color tokens/variables. Confirm the palette is darker teal + purple and that the mustard/green is gone (see DR-03). This is something only the local review can do — do it.
5. Walk **every page**, not a sample. For each, run it against every applicable checklist item and mark status with evidence.
6. Produce your output in the format of `03-FINDINGS-REPORT-TEMPLATE.md`.

## What to produce

A findings report (`FINDINGS.md`) following the template. For every checklist item: **PASS / FAIL / PARTIAL / DECISION / UNVERIFIED**, with evidence. Expect a healthy number of PASSes — confirm them honestly. Then a prioritized defect list grouped by severity:

- **BLOCKER** — cannot launch: dead/broken links, placeholder content visible to the public, a factual claim on a crisis service that may be untrue, a missing core page.
- **MAJOR** — a documented client decision was not honored, or a visible quality failure a client will notice.
- **MINOR** — polish: spacing, copy nits, non-critical inconsistency.
- **DECISION** — ambiguous; needs the human CD or the client to rule. State the exact question.

For each defect, give: location (file:line), what's wrong, which source decision it violates, severity, and your recommended fix. **Do not change any code in this pass.** Review first. The human CD reviews `FINDINGS.md` and authorizes fixes separately.

## Hard rules

- Do not start fixing. This is a review, not a remediation. (A separate go-ahead will follow.)
- Do not mark anything PASS without citing where you confirmed it — and equally, do not mark anything FAIL without confirming the gap is real. Couldn't determine after looking → UNVERIFIED, with a note on what's needed.
- Do not invent client intent. Unknowns are DECISION items with a question attached.
- Three items are known to be **ambiguous on purpose** — do not "fix" them, flag them as DECISION: the Stevi-contact reversal (EM-15), the placeholder illustrations (DR-02), and the insurance/cost language (CA-18). The human will rule.
