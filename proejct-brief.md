You are helping redesign the website for Inside Out Wellness & Advocacy (insideoutiowa.com), an Iowa-based mental health services nonprofit. I need you to build a complete visual design system and homepage prototype in a single HTML file.

## Organization Overview
Inside Out provides mental health crisis services to Iowans including crisis stabilization (adults and children), mobile crisis response, peer support, transitional living, outpatient substance use, community support programs, and a CIT co-responder program. They serve two distinct audiences: (1) people in crisis or their family members seeking help, and (2) partner providers (doctors, schools, ERs) who need to quickly find and submit referral forms.

## New Site Architecture
Top-level navigation (in order):
- Services (dropdown)
- Locations (dropdown)
- Who We Are
- Blog (replacing old Resources)
- Contact Us
- Open Positions
- Donate (button, styled differently)
- Partner Providers (NEW — hub for referral forms, key tab for professional users)

Services dropdown will include:
- Crisis Stabilization – Adults
- Crisis Stabilization – Children (ages 5–17)
- Transitional Living
- Peer Support Services
- Community Support Program
- Outpatient Substance Use Services
- Mobile Crisis Response
- CIT Program

## Design Direction
Build a warm, trustworthy, and modern design that feels calm and approachable — not clinical or sterile. This is a mental health org, so the aesthetic should feel human and grounding. Avoid generic healthcare blues and cold whites.

### Color Palette
Draw inspiration from Inside Out's existing logo colors (teal/green tones) but modernize. Suggest:
- Primary: A warm teal (#2D7D7B or similar)
- Secondary: A soft sage green
- Accent: Warm amber or golden tone for CTAs
- Neutrals: Warm off-white background (#FAF8F5), dark charcoal text (not pure black)
- Emergency/crisis CTA: A distinct but not alarming warm coral or deep teal

### Typography
- Headings: A humanist serif or rounded sans-serif that feels warm and approachable (suggest using Google Fonts — something like "DM Serif Display" for headlines, "Inter" or "DM Sans" for body)
- Body: Clean, highly readable, 16–18px base
- Avoid anything that reads as corporate or cold

### Layout Principles
- Generous whitespace
- Soft rounded corners on cards and buttons
- Subtle texture or gradient backgrounds (not flat, not loud)
- Mobile-first responsive design
- Prominent persistent emergency crisis line banner at the top: "Mental health crisis? Call 844-428-3878"
- The Partner Providers nav item should be visually distinct (e.g. subtle highlight or different styling) so providers can immediately spot it

## Homepage Sections to Build

1. **Sticky top emergency bar** — warm background, crisis line number prominent, "Call 988" secondary
2. **Navigation** — full responsive nav with all items above; Donate styled as a button; Partner Providers visually distinguished
3. **Hero section** — headline "Your Journey. Our Support." with a warm subheadline about who they serve; two CTAs: "Find Services" and "I'm a Provider" (routes to Partner Providers); placeholder for a warm lifestyle photo
4. **Services overview** — card grid showing all 8 services with icon, short description, and "Learn More" link; cards should be soft, rounded, inviting
5. **Dual audience split section** — visually distinct two-column section: left side for "For Individuals & Families" (warm, empathetic tone, softer colors), right side for "For Partner Providers" (professional, efficient tone, link to Provider Hub)
6. **Locations section** — three location cards: Woodward, Perry, Knoxville (note: Knoxville opening Spring 2026 — show "Coming Soon: Spring 2026" badge); each card shows location name, key services offered, address placeholder
7. **Who We Are teaser** — mission/values preview with 2–3 of the org values (Empowerment, Integrity, Belonging) displayed as elegant cards or icons; link to full Who We Are page
8. **Footer** — logo, all nav links, contact info (phones, email, address), LGBTQ+ ally badge placeholder, copyright

## Specific Design Components to Nail
- **Emergency bar**: Always visible, not dismissable, warm but not alarming
- **Partner Providers nav item**: Make it visually pop so a provider scanning the nav finds it instantly — consider a subtle background pill or underline treatment
- **Service cards**: Use soft icons (can be emoji placeholders or simple SVG shapes), rounded cards with a hover state
- **"Coming Soon" badge** on Knoxville: Styled as a soft amber/gold badge overlay on the location card
- **CTA buttons**: Two styles — primary (filled, warm teal) and secondary (outlined); rounded, not pill-shaped

## Technical Requirements
- Single self-contained HTML file with embedded CSS and minimal vanilla JS
- Use Google Fonts (import in <head>)
- Fully responsive (mobile, tablet, desktop breakpoints)
- Smooth scroll behavior
- Hover transitions on cards and buttons (subtle, 200ms)
- No external JS libraries/frameworks
- Placeholder images should use a soft gradient placeholder div with appropriate aspect ratio, not broken img tags
- All phone numbers should be tel: links

## Placeholder Content
Use the real org details where known:
- Emergency line: 844-428-3878
- Woodward phone: 515-642-4125
- Admin phone: 515-642-7070
- Email: info@insideoutiowa.org
- Address: 410 12th St., Perry, IA 50220
- Knoxville: Coming Spring 2026

## What I'll Provide Later
- Updated mission statement and values copy
- Staff directory updates
- Real photography (buildings, common areas)
- Service-specific referral form details

Build the full homepage prototype now. Focus on getting the visual design system right — typography scale, color application, spacing, and component feel. This will serve as the design foundation for all subsequent pages.