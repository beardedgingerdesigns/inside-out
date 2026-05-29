# Donate Links to Stripe Checkout

**Status:** active
**Date:** 2026-05-28 (link confirmed production 2026-05-29)
**Scope:** All Donate buttons/links sitewide

## Decision

All "Donate" buttons and links across the site point to `https://buy.stripe.com/3csfZBdKVcDk6Gc000` and open in a new tab (`target="_blank" rel="noopener"`). No dedicated donate page on the site itself.

**2026-05-29:** Justin confirmed this is the **production** Stripe link (not a test slug) — clears the M10 verify. Live in 48 spots across all 16 pages.

## Rationale

Justin provided the Stripe checkout URL directly. External payment processor is the standard pattern for nonprofit donation flows — avoids building and maintaining a payment form.

## Cross-references

- [plans/2026-05-28-launch-readiness.md](../../plans/2026-05-28-launch-readiness.md) — Phase 0 wires these links.

## Do not relitigate without

A switch to a different payment processor or a requirement for a dedicated on-site donation page with custom branding.
