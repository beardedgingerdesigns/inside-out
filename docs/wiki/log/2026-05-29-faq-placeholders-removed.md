# 2026-05-29 — client decision applied | Placeholder FAQ items removed (B7)

**Operation:** code execution (site/)
**Scope:** site/woodward.html, site/perry.html

Per Justin's instruction — "remove all FAQs that are placeholder, only the ones listed as placeholder" — removed every FAQ accordion item whose answer was a `[Placeholder — confirm … with client]` stub, rather than waiting on the missing answers. Clears blocker **B7**.

- **4 full `faq-item` blocks removed** (question + comment + placeholder answer), via a Python regex pass that matched each accordion block and deleted only those containing `[Placeholder`:
  - `woodward.html` — "Can family members visit during a stay?" (8 → 7 FAQ items).
  - `perry.html` — "Can parents visit during the stay?", "Will my child fall behind in school?", "Do I need a referral for outpatient services?" (9 → 6 FAQ items).
- Non-placeholder FAQs (with real answers) were left untouched.
- Verified: zero `[Placeholder` sitewide; orphaned `<!-- Confirm … with Melinda -->` comments removed with their blocks; HTTP 200 on both pages.

## Note

These questions were removed, not answered. If Melinda later confirms the visitation / school-coordination / outpatient-referral policies, the FAQs can be re-added with real copy. The substantive answers are still useful content — flagged as fast-follow, not launch-blocking.
