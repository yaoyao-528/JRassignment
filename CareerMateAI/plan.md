# CareerMate AI Landing Page Plan

## Goals
- Clearly communicate CareerMate AI’s mission and product value to students/early-career professionals.
- Drive conversions to sign-up/demo while capturing leads via contact form.
- Showcase credibility through features, testimonials, and tech stack.

## Page Sections & Purpose
1. **Header & Navigation**
   - Layout: sticky top bar with logo lockup on left, nav links (Features, Demo, Tech, Testimonials, Contact, PRD) center/right, CTAs (`Sign In` ghost button, `Start for Free` solid button) rightmost.
   - Interaction: smooth-scroll to anchored sections, highlight active link on scroll (future enhancement).
2. **Hero**
   - Content: headline “Your AI Career Practice Partner”, subcopy describing resume + mock interview + habit coach loop, micro-proof (e.g., “Trusted by 2,000+ students”).
   - Visual: abstract AI icon or hero illustration; optional floating stat badges (ATS score + confidence %).
   - CTAs: primary button `Start for Free`, secondary `Watch Demo` with play icon; add blur gradient background.
3. **Problem Statement**
   - Structure: left column enumerating 3 pains with check icons, right column “solution card” summarizing CareerMate AI benefits and rocket illustration.
   - Copy specifics: “Resumes ignored by ATS”, “Unsure what interviewers expect”, “No roadmap for career growth”.
4. **Feature Grid**
   - 4 cards (2x2 grid desktop, stacked mobile) each with SVG icon, H3, supporting paragraph + bullet.
   - Additional detail: add micro-links (“See sample feedback”) or badges (“New”) for emphasis.
5. **Demo / How It Works**
   - Timeline cards for Step 1–3 with numbers and connectors.
   - Adjacent chat mockup: include assistant message + user reply; consider animated typing indicator (CSS).
   - CTA button linking to actual demo video/section anchor.
6. **Technology Highlight**
   - Row of badges (AI, security, analytics, automation) with short captions.
   - Copy block: “Built with GPT-4, Claude, custom ML pipelines, and secure AWS infrastructure.”
7. **Testimonials**
   - Grid of at least 2 testimonial cards with SVG portraits, quote, author, affiliation; include star rating icons if desired.
   - Add slider controls for future expansion.
8. **Contact Form**
   - Two-column layout: left info (email, address, value proposition), right form.
   - Validation states: required markers, inline error messaging (hooked to `script.js` later).
   - Privacy note + checkbox for terms.
9. **CTA Banner**
   - Bold gradient card with headline “Ready to level up your career?” + short copy + CTA button.
   - Add supporting text “No credit card required, cancel anytime.”
10. **Footer**
    - Columns: logo + description, quick links, product links, social icons.
    - Include © notice and JR Academy mention.
11. **Back to Top Button**
    - Floating circular button bottom-right; show after user scrolls 400px; smooth scroll effect on click.

## Visual / Interaction Notes
- Palette: deep navy background (#0b0c10), electric blue accents (#667EEA/#4285F4), white text, occasional warm accent for contrast.
- Typography: `Inter` / `Space Grotesk` pairing; hero sizes 48–56px desktop, 32px mobile.
- Responsive behavior: shift grid → single column at ≤768px, adjust padding to 24px; ensure hero illustration stacks below text on small screens.
- Micro-interactions: button hover color shifts, card elevation on hover, chat bubble fade-in via CSS animation, “back to top” fade/slide transitions.
- Performance: inline SVGs, compressed hero illustration, avoid heavy JS; load fonts via `preconnect`.
- Accessibility: maintain 4.5:1 contrast, provide aria labels for nav/CTAs, ensure form inputs tied to labels.

## Next Steps
1. Validate section narrative with stakeholders (product, marketing) and finalize copy blocks.
2. Create mobile + desktop wireframes reflecting this plan; review visual direction.
3. Implement responsive layout + components in `index.html` / `styles.css`, ensuring semantic structure.
4. Add interactivity: form validation in `script.js`, smooth-scroll for nav + back-to-top, optional demo modal.
5. Integrate analytics hooks (data attributes for CTA, form submission tracking) before launch.
6. QA across browsers/devices; gather feedback and iterate on CTA positioning + testimonial content.
