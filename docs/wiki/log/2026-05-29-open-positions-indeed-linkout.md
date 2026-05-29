# 2026-05-29 — decision + execution | Open Positions rebuilt to link out to Indeed

**Operation:** decision + code execution (site/) + plan update
**Scope:** decisions/active, decisions/index, plans/2026-05-29-launch-remediation.md, site/open-positions.html

Justin ruled on the Open Positions model (resolving EM-16 / OP-17 / blocker B8): **link out to Indeed, no embedded forms**, and provided the company jobs URL (two live listings — Woodward + Perry).

- Filed [decisions/active/2026-05-29-open-positions-indeed-linkout.md](../decisions/active/2026-05-29-open-positions-indeed-linkout.md).
- Rebuilt `open-positions.html`: removed the 4 hardcoded position cards + 4 empty Indeed embed stubs and the HR-embed instructions; replaced with a single Crisis Intervention Specialist overview (location tags Woodward + Perry) and a "View openings & apply on Indeed" button → the company jobs URL (new tab). Reworded the "How to apply" steps for the link-out flow. No invented pay/requirements — those stay on Indeed; exact per-location titles deferred to Indeed.
- Verified: HTTP 200; Indeed link present; zero embed stubs; zero hardcoded "Position N" cards.

This was the Indeed-hookup item under WS-5 — now closed.

## Confirmed from the live Indeed page (screenshot, 2026-05-29)

The two openings are **Crisis Intervention Specialist — Days, Full-Time (Perry, IA — children/adolescents)** and **Crisis Intervention Specialist — Overnight, Full-Time (Woodward, IA)**. Both are now listed on the page with location + shift; pay ($18/hr) and full descriptions stay on Indeed.
