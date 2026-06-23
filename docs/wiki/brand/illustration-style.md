# Illustration Style Guide

**Status:** active
**Date:** 2026-06-23
**Scope:** Art direction for all hero/header illustrations across service pages

## Style

Flat vector illustration, modern corporate wellness aesthetic. Warm and approachable — not clinical, not childish. The kind of illustration you'd see on a thoughtful healthcare startup's marketing site.

## Characters

- Simplified human figures with minimal facial details: small dot eyes, simple curved smiles, basic nose shapes
- Slightly elongated proportions
- Warm medium skin tones, varied for diversity
- Hair: simple solid shapes in black, dark brown, or gray/silver
- Clothing: solid colors only, NO patterns — teal, mustard/golden yellow, sage green, navy/charcoal

## Color Palette

Must match the site brand palette:

| Role | Color | Usage |
|------|-------|-------|
| Primary | Teal `#005970` | Shirts, accents, couch upholstery |
| Secondary | Sage green `#A9C27F` | Clothing, plant leaves, accents |
| Warm accent | Mustard/golden yellow | Clothing, pot accents, table surfaces |
| Dark | Navy/charcoal | Pants, hair |
| Background | Clean white | Always white, no gradients |

## Props & Setting

- Indoor scenes: couch/sofa (light teal-tinted), low wooden coffee table, coffee mugs
- Potted houseplants with simple stylized leaves
- Framed rectangular artwork on walls (abstract shapes in teal/sage tones)
- Outdoor scenes (community support): stylized trees, benches, simple path
- NO text, logos, watermarks, or borders in the illustration

## Dimensions

- Target: ~1150–1170px wide × 896px tall (roughly 5:4 aspect ratio)
- Used inside amorphous blob clip-paths in the hero section of each service page

## Generation Details

- **Model:** Gemini `nano-banana-pro-preview` via direct API
- **API endpoint:** `generativelanguage.googleapis.com/v1beta/models/nano-banana-pro-preview:generateContent`
- **Config:** `responseModalities: ["IMAGE", "TEXT"]`
- **Reference images:** Include `brand_assets/homepage.png` and `brand_assets/crisis-child.png` as `inlineData` parts alongside the text prompt to lock style consistency
- **API key:** `GEMINI_API_KEY` in project `.env`

## Prompt Template

When generating new illustrations, use this prompt structure:

```
You are generating a flat vector illustration for a mental health nonprofit website.
Match the EXACT style of the two reference images provided. Key style rules:
- Flat vector illustration, modern corporate wellness aesthetic
- Simplified human figures: minimal facial details (small dot eyes, simple curved smiles, basic nose shapes), slightly elongated proportions
- Color palette MUST match: teal (#005970) for shirts/accents, sage green (#A9C27F), warm mustard/golden yellow for clothing, navy/charcoal for pants
- Warm medium skin tones, varied for diversity
- Hair: simple solid shapes in black, dark brown, or gray/silver
- Clothing: solid colors only, NO patterns
- Props: potted houseplants with simple stylized leaves, framed rectangular artwork on walls
- Background: clean white, no gradients, no borders
- Mood: warm, approachable, therapeutic, supportive
- NO text, NO logos, NO watermarks, NO borders

Scene: [DESCRIBE THE SPECIFIC SCENE HERE]
Generate this as a flat vector illustration matching the exact style of the reference images.
```

## Differentiation Rules

Each illustration must be visually distinct. Avoid "two people on a couch" for every page. Levers to differentiate:

- **Number of people:** 1, 2, 3, or 4
- **Furniture:** couch vs. chairs in a circle vs. round table vs. standing
- **Setting:** indoor living room vs. doorway/arrival vs. outdoor path vs. apartment
- **Dynamic:** therapist/client vs. peers-as-equals vs. group vs. solo independence
- **Emotional register:** crisis urgency (tissues, glass of water) vs. relaxed ongoing therapy vs. casual peer chat

## Current Inventory

| Page | File | Scene |
|------|------|-------|
| Homepage | `homepage.png` | Three adults on a couch, one placing a supportive hand on another's shoulder |
| Crisis Stabilization — Children | `crisis-child.png` | Therapist with teddy bear sitting across from parent holding a child |
| Crisis Stabilization — Adults | `crisis-adults.png` | Person in distress flanked by two supportive staff, tissues and water glass |
| Outpatient Therapy | `outpatient-therapy.png` | Therapist with notepad in chair across from client on couch |
| Outpatient Substance Use | `outpatient-substance.png` | Four people in a small group circle of chairs |
| Peer Support | `peer-support.png` | Two equals at a round cafe table with coffee mugs |
| Mobile Crisis Response | `mobile-crisis.png` | Crisis worker arriving at someone's front door |
| Transitional Living | `transitional-living.png` | Person in their own apartment with support worker checking in |
| Community Support | `community-support.png` | Worker and individual walking side by side outdoors |
| CIT Program | `cit-program.png` | Law enforcement and mental health professional collaborating around a seated individual |
| Open Positions / Careers | `open-positions.png` | Three colleagues standing together as a welcoming team |

## Cross-references

- [palette.md](palette.md)
- [assets-inventory.md](assets-inventory.md)
- [Site map](../architecture/site-map.md)
