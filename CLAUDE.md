# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BLC (Behave Like Compiler) — a ground-up website revamp for an engineering career training organization based in Bangalore. The full product spec lives in `prd.md`. Three distinct personas: engineering students, colleges/institutions, and corporate clients.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS custom properties |
| Animation | Framer Motion + CSS transitions |
| Lottie | `lottie-react` or `@lottiefiles/react-lottie-player` |
| Fonts | JetBrains Mono (Google Fonts) |
| Icons | Phosphor Icons (`phosphor-react`) |
| Forms | Formspree or EmailJS |
| Hosting | Vercel |

## Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## Architecture

**App Router structure** (Next.js 14):
- `app/` — route segments; homepage is `app/page.tsx`
- `app/programs/`, `app/about/`, `app/for-colleges/`, `app/for-corporates/`, `app/contact/` — inner pages
- `components/sections/` — one component per homepage section (Hero, SocialProofBar, ImpactNumbers, etc.)
- `components/ui/` — reusable primitives (Button, Card, Chip, TestimonialCard)
- `lib/` — animation variants, counter logic, constants

**CSS custom properties** defined globally (not Tailwind config) for the design token system — use these, not hardcoded hex values:

```css
--color-primary: #1E328B
--color-primary-light: #8BB9F7
--color-accent: #FEBB39        /* CTAs and stat highlights ONLY — max 2-3 per page */
--color-bg: #FFFFFF
--color-bg-subtle: #F7F7F7
--color-bg-navy: #0D1B5E       /* Reserved for footer and final CTA banner */
--color-text-primary: #0A0F2E
--color-text-muted: #6B7494
--color-border: #E8ECF4
```

## Homepage Section Order

12 sections in scroll order: Hero → SocialProofBar → ImpactNumbers → WhatIsBLC → Programs → BLCFrameworks → ForColleges → ForCorporates → Testimonials → PartnerColleges → CTABanner → Footer

Section backgrounds alternate `#FFFFFF` → `#F7F7F7` → `#FFFFFF`. ForColleges uses `#1E328B` (dark), CTABanner and Footer use navy/near-black.

## Animation Rules

- All scroll-triggered animations: `opacity: 0→1` + `translateY(24px→0)`, `600ms ease-out`, `80ms` sibling stagger
- Hero load sequence defined in `prd.md §4.5` — starts at 0ms (nav) through 900ms (floating visual)
- Animated counters in ImpactNumbers: count from 0 on scroll entry, `1800ms ease-out`, `requestAnimationFrame`
- Floating elements: `±8px translateY` over `4s ease-in-out`, infinite, offset start times
- **Only** animate `opacity` and `transform` — never `width`, `height`, `margin`, or `padding`
- Always respect `prefers-reduced-motion` — disable non-essential animations

## Typography

All text uses **JetBrains Mono** exclusively (Google Fonts). No other typeface.
- H1/display: 700 weight
- H2/H3: 500 weight
- Body: 400 weight
- Labels/buttons/eyebrow chips: 500 weight, uppercase

Rule: max 3 type sizes visible simultaneously per section. Never center-align body paragraphs.

## Key Component Specs

**Program Cards** — 6 total (Aptitude, Technical, Soft Skills, Verbal Communication, FireStarter Workshops, PrepSprint). Each: Lottie icon (48px), title, 2-line description, hover reveals "Learn More →". Hover state: `translateY(-6px)` + shadow + left border `4px solid #1E328B`.

**Testimonial Carousel** — horizontal scroll, 3 cards visible desktop, drag-scroll mobile, arrow controls desktop, auto-advance 5s with pause on hover.

**Partner logos** — displayed grayscale, full color on hover (`300ms ease`).

**Lottie files** — max 150KB each, only load when in viewport (use Intersection Observer).

## Performance Targets

- Lighthouse > 90 all metrics
- LCP < 2.5s mobile (4G)
- CLS < 0.1
- Images: `.webp`, lazy-loaded, explicit `width`/`height`

## SEO

- Meta title: `"Behave Like Compiler — Engineering Career Training | Bangalore"`
- Structured data: `Organization`, `Course`, `LocalBusiness` schema
- Semantic HTML: proper heading hierarchy, `<main>`, `<section>`, `<article>`, `<nav>`

## Content Constants

- Tagline (exact, never paraphrase): `"Have Patience and Behave Like Compiler"`
- Phone: `+91 8722077934`
- Stats (confirm actuals with founder before hardcoding): 500+ students, 15+ companies, 10+ colleges, 85% placement rate
- Partner companies: IBM, Capgemini, Accenture, Wipro, Hexaware, Intel
- Partner colleges: Amrita, CMR, Canara, Alvas
