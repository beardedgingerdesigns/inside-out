# FINDINGS — Design Review (TEMPLATE → fill in and save as FINDINGS.md)

**Reviewer:** [local Claude Code session]
**Date:** [date]
**Build reviewed:** [git commit hash / branch] — record this so the review is pinned to a specific build.
**Pages reviewed:** [list every page file you opened]

---

## 1. Summary verdict

[2–4 sentences, blunt. Is this launch-ready? What are the worst problems? How many blockers? No softening.]

Counts: __ BLOCKER · __ MAJOR · __ MINOR · __ DECISION

---

## 2. Checklist results

Paste the completed table from `02-QA-CHECKLIST.md` with every Status (`PASS`/`FAIL`/`PARTIAL`/`DECISION`/`UNVERIFIED`) and Evidence filled. Any `FAIL`/`PARTIAL` must also appear as a numbered defect in §3. Report the status tally (e.g., "18 PASS · 3 FAIL · 2 PARTIAL · 3 DECISION · 2 UNVERIFIED").

---

## 3. Defects (prioritized)

Group by severity, worst first. One entry per defect.

### BLOCKERS
> Cannot launch. Dead/broken links, public-facing placeholder content, a crisis-service claim that may be false, missing core page.

**B1 — [short title]**
- **Location:** `file:line` (or selector)
- **Evidence:** `[quote the offending markup/text]`
- **Violates:** [checklist ID / source decision]
- **Why it matters:** [client/credibility/accuracy impact — concrete]
- **Recommended fix:** [specific change]

### MAJOR
> Documented decision not honored, or a visible quality failure.

**M1 — …** [same fields]

### MINOR
> Polish.

**N1 — …** [same fields]

### DECISION (needs human CD or client)
> Do not resolve these yourself. State the question.

**D1 — [e.g., Stevi contact on provider hub]**
- **Location:** `file:line`
- **The conflict:** [what the build does vs. what the source says]
- **Question for the CD/client:** [the exact decision needed]

(Known DECISION items to address explicitly: EM-15 Stevi contact, DR-02 illustrations, CA-18 insurance language. Add any others you surface.)

---

## 4. Confirmed complete

What's genuinely solid, with evidence (`file:line`). This is a real part of the review, not a footnote — accurate credit for finished work is what lets the human CD focus their attention on the actual gaps. List each confirmed decision and where you verified it.

---

## 5. Remediation plan (proposed, not executed)

Ordered list of fixes you recommend, grouped: (a) no-input wiring/code fixes you can do immediately on approval, (b) fixes blocked on a client/CD answer. **Do not execute any of this** until the human CD reviews these findings and authorizes the work.
