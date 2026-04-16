# BLC Website Revamp — Product Requirements Document
**Behave Like Compiler (BLC)**
**Version:** 1.0 | **Date:** April 2026 | **Prepared for:** Vishal Vanaki, Founder & Career Strategist

---

## 1. Project Overview

### 1.1 Background
The current blcompiler.com is a basic template-style website with a heavy illustration-filled hero, flat layout, no visual hierarchy, no motion, and no differentiated trust signals. It does not reflect the quality of BLC's programs, the credibility of its partnerships (IBM, Accenture, Wipro, Intel), or the ambition of its mission.

This document defines the full requirements, design language, information architecture, and implementation guidelines for a complete ground-up revamp of the BLC website.

### 1.2 Objective
Build a modern, light, minimal, and animated website that:
- Immediately impresses and builds trust on first load
- Serves three distinct audience paths — students, colleges, and corporates — through smart navigation
- Converts visitors into leads (enrollments, inquiry calls, partnership requests)
- Authentically represents the BLC brand at the level of its corporate partners

### 1.3 Success Metrics
| Metric | Target |
|--------|--------|
| Average session duration | > 2.5 minutes |
| Bounce rate | < 45% |
| CTA click-through rate | > 8% |
| Mobile load time (LCP) | < 2.5 seconds |
| Inquiry form submissions | +60% vs current site |

---

## 2. Target Audience & User Journeys

Three distinct personas visit this website. Each needs a different path.

### Persona 1 — The Engineering Student
**Who:** BE/BTech student, 2nd–4th year, from Bangalore or nearby. Anxious about placements. Looking for real skill-building, not theory.

**Journey:** Impress → Understand what BLC offers → See proof (placements, testimonials) → Explore programs → Enroll / Inquire

**Key questions they're asking:**
- Will this actually get me a job?
- What exactly will I learn?
- Who has placed from here?
- How much does it cost?

---

### Persona 2 — The College / Institution
**Who:** Training & Placement Officer or HOD at an engineering college. Wants structured, proven programs for their students.

**Journey:** Land → Understand BLC's model → See institutional partners → Review frameworks → Request a partnership proposal

**Key questions they're asking:**
- Is this organization credible?
- Do they have a framework, not just ad hoc classes?
- Which colleges have worked with them?
- How do I get them to my campus?

---

### Persona 3 — The Corporate Client
**Who:** L&D Manager or HR at a tech company. Needs workforce upskilling.

**Journey:** Discover BLC → See corporate offerings → See brand credibility (IBM, Accenture partnerships) → Contact for a custom quote

**Key questions they're asking:**
- Can they customize programs for our team?
- Are they credible enough for an enterprise?
- What's the process?

---

## 3. Information Architecture

### 3.1 Navigation Structure
The top navigation adapts to serve all three personas with clear segmentation.

```
Logo | Home | Programs ▾ | About | For Colleges | For Corporates | Contact
                |
                ├── Aptitude Training
                ├── Technical Training
                ├── Soft Skills & Communication
                ├── FireStarter Workshops
                └── PrepSprint (Mock Interviews)
```

### 3.2 Homepage Section Flow (Single Page Scroll)

| # | Section | Purpose | Primary Audience |
|---|---------|---------|-----------------|
| 1 | **Hero** | Hook, tagline, immediate brand impression | All |
| 2 | **Social Proof Bar** | Logos of IBM, Capgemini, Accenture, Wipro, Hexaware, Intel | All |
| 3 | **Impact Numbers** | Animated stat counters — students placed, companies, colleges | All |
| 4 | **What is BLC?** | Brand story, Vishal's mission, short video or quote | Students, Colleges |
| 5 | **Programs** | Card grid of all 5 core offerings with hover details | Students |
| 6 | **BLC Frameworks** | Visual explainer of Loop Model + 4-Year Skill Tree | Students, Colleges |
| 7 | **For Colleges** | Dedicated pitch panel, what BLC does on campus, CTA | Colleges |
| 8 | **For Corporates** | Dedicated pitch panel, custom training pitch, CTA | Corporates |
| 9 | **Testimonials** | Student and college testimonials with photo/video | All |
| 10 | **Partner Colleges** | Scrolling logo strip — Amrita, CMR, Canara, Alvas | Colleges |
| 11 | **CTA Banner** | Final conversion push — "Start your journey" | All |
| 12 | **Footer** | Contact, socials, address, quick links | All |

---

## 4. Design System & Visual Language

### 4.1 Design Philosophy
> **"Confident Minimalism"** — White space is the hero. Every element earns its place. Motion guides attention, not distracts it.

The design takes BLC's existing brand colors and elevates them through restraint, sharp typography, and purposeful animation — the aesthetic of a premium edtech brand, not a local coaching center.

---

### 4.2 Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1E328B` | Headlines, nav, buttons, section accents |
| `--color-primary-light` | `#8BB9F7` | Hover states, card tints, gradient fills |
| `--color-accent` | `#FEBB39` | CTAs, highlight chips, badges, animated counters |
| `--color-bg` | `#FFFFFF` | Primary background |
| `--color-bg-subtle` | `#F7F7F7` | Alternating section backgrounds |
| `--color-bg-navy` | `#0D1B5E` | Dark sections (footer, CTA banner) |
| `--color-text-primary` | `#0A0F2E` | Body copy, near-black |
| `--color-text-muted` | `#6B7494` | Captions, labels, subtext |
| `--color-border` | `#E8ECF4` | Card borders, dividers |

**Color Rules:**
- Sections alternate: `#FFFFFF` → `#F7F7F7` → `#FFFFFF` — never two dark sections in a row except footer
- `--color-accent` (#FEBB39) used **only** on CTAs and stat highlights — max 2–3 instances per page
- `--color-bg-navy` reserved for full-bleed dark sections (footer, final CTA strip)

---

### 4.3 Typography

**Display Font:** `Clash Display` or `Cabinet Grotesk` — geometric, confident, modern. Used for hero headline and section titles.

**Body Font:** `DM Sans` — highly legible, warm, approachable. Used for paragraphs, labels, nav.

**Fallback stack:** `system-ui, -apple-system, sans-serif`

Display / H1: JetBrains Mono 700 — headlines, hero text
H2 / H3: JetBrains Mono 500 — section titles, card headings
Body: JetBrains Mono 400 — paragraphs, descriptions
Labels / eyebrows: JetBrains Mono 500 — uppercase micro labels
Buttons: JetBrains Mono 500 — CTAs and nav links

**Typography Rules:**
- Max 3 type sizes visible simultaneously in any single section
- Never center-align body paragraphs — center only short headlines or stat labels
- Letter-spacing: `–0.02em` on large display text; `0` on body

---

### 4.4 Spacing & Layout

- **Grid:** 12-column, max content width `1200px`, `24px` gutters
- **Section padding:** `120px` top/bottom on desktop; `72px` on tablet; `48px` on mobile
- **Component padding:** Cards: `32px`; Buttons: `16px 32px`; Chips: `8px 16px`
- **Border radius:** Buttons `8px`; Cards `16px`; Images `20px`; Floating elements `24px`

---

### 4.5 Animation & Motion System

> **Motion Philosophy:** Animate to reveal, not to decorate. Every animation has a function — to guide attention, signal state change, or communicate depth.

#### Scroll Animations (Intersection Observer)
All non-hero content animates in on scroll using `opacity: 0 → 1` + `translateY(24px → 0)` with `ease-out` easing over `600ms`. Stagger delay: `80ms` between sibling elements.

#### Page Load Sequence (Hero)
```
0ms    → Nav fades in (opacity 0→1, 400ms)
200ms  → Hero headline word-by-word reveal (stagger 60ms per word)
500ms  → Subtext fade-up
700ms  → CTA button scale-in (scale 0.9→1 + opacity)
900ms  → Floating visual / illustration enters from right
```

#### Hover States
- **Buttons:** `translateY(-2px)` + subtle box-shadow depth increase, `200ms ease`
- **Cards:** `translateY(-6px)` + shadow lift + border color shift to `--color-primary-light`, `250ms ease`
- **Nav links:** Underline slide-in from left, `200ms ease`
- **Partner logos:** Grayscale → full color on hover, `300ms ease`

#### Animated Counters (Impact Numbers Section)
Stats count up from 0 when scrolled into view using a `requestAnimationFrame` easing function. Numbers render in `--color-accent` (#FEBB39). Duration: `1800ms` with `ease-out` curve.

#### Floating Elements (Hero / Feature Sections)
Subtle `translateY` oscillation on decorative elements: `±8px` over `4s` with `ease-in-out`, infinite loop. Offset start times so elements move independently.

#### Lottie Animations
Use Lottie JSON animations (Lottiefiles.com) for:
- Hero visual (engineer/code themed, branded in BLC blue)
- Section icons (aptitude, technical, soft skills — each gets a small looping Lottie)
- Empty states and loading indicators

**No `transform` animations on layout-affecting properties.** All animations use `opacity`, `transform` (translate/scale/rotate) only — never `width`, `height`, `margin`, or `padding` — to maintain 60fps.

---

### 4.6 Component Library

#### Primary Button
```
Background: #1E328B
Text: #FFFFFF, DM Sans 16px 600
Padding: 16px 32px
Border-radius: 8px
Hover: translateY(-2px), deeper shadow
Active: translateY(0), shadow reduced
```

#### Accent CTA Button
```
Background: #FEBB39
Text: #0A0F2E, DM Sans 16px 700
Same padding/radius as primary
Use only for hero CTA and final CTA banner
```

#### Ghost Button
```
Border: 2px solid #1E328B
Text: #1E328B
Background: transparent
Hover: Background fills to #1E328B, text to white
Transition: 250ms ease
```

#### Program Card
```
Background: #FFFFFF
Border: 1px solid #E8ECF4
Border-radius: 16px
Padding: 32px
Shadow: 0 2px 16px rgba(30,50,139,0.06)
Hover: translateY(-6px), shadow intensifies, left border 4px solid #1E328B
Contains: Lottie icon (48px), program title, 2-line description, "Learn More →" link
```

#### Stat Card
```
Background: #F7F7F7 or #1E328B (alternate)
Stat number: Clash Display 64px #FEBB39 (on dark) or #1E328B (on light)
Label: DM Sans 14px muted
Animated counter on scroll entry
```

#### Testimonial Card
```
Background: #FFFFFF
Quote mark: Large decorative #8BB9F7 opacity 30%
Avatar: 48px circle, border 2px solid #8BB9F7
Name + role: Bold + muted
Card hover: gentle lift
```

---

### 4.7 Iconography
- Use **Phosphor Icons** (phosphoricons.com) — clean, consistent, open source
- Icon size: 24px in body, 32px in feature lists, 48px in program cards
- Icon color: `#1E328B` default; `#FEBB39` for highlights; `#8BB9F7` for decorative/background use

---

### 4.8 Imagery Guidelines
- No generic stock photos with white backgrounds
- Authentic photography of students, workshops, training sessions preferred
- If stock is needed: use Unsplash "education" or "coding" — warm, real, collaborative
- All images: `border-radius: 20px`, subtle drop shadow
- Hero: Lottie animation preferred over static illustration
- Partner logos: displayed in grayscale, full color on hover

---

## 5. Section-by-Section Specifications

### Section 1 — Hero

**Layout:** Full-viewport, white background, left-text / right-visual split (60/40)

**Content:**
- Eyebrow chip: `"India's Premier Engineering Career Accelerator"` (pill, #1E328B bg, white text, small)
- Headline: `"Have Patience and`
  `Behave Like Compiler"` (Clash Display, 72px, two lines, #0A0F2E)
- Subtext: `"Bridging the gap between academic learning and real-world industry — through structured training, mentorship, and career strategy."` (DM Sans 18px, #6B7494)
- Primary CTA: `"Explore Programs"` → #programs (Accent Yellow button)
- Secondary CTA: `"Talk to Us"` → #contact (Ghost button)
- Right: Lottie animation (engineer/code/career theme, BLC blue palette)
- Background: Pure white with subtle diagonal grid lines (opacity 3%) for texture

**Animation:** Full page-load sequence as defined in 4.5

---

### Section 2 — Social Proof Bar

**Layout:** Full-width strip, `#F7F7F7` background, `64px` vertical padding

**Content:**
- Left label: `"Trusted by graduates hired at"` (DM Sans 13px, muted, uppercase)
- Logo strip: IBM | Capgemini | Accenture | Wipro | Hexaware | Intel
- Logos: Grayscale, 40px height, evenly spaced, fade-in on scroll

---

### Section 3 — Impact Numbers

**Layout:** 4-column stat grid, white background

**Stats to display:**
- `500+` Students Trained
- `15+` Partner Companies
- `10+` College Collaborations
- `85%` Placement Rate (or replace with real figures)

**Design:** Each stat in a card. Stat number in `#1E328B` (Clash Display 64px). Counter animation on scroll. Label in muted DM Sans 14px.

---

### Section 4 — What is BLC?

**Layout:** Two-column — left: text content; right: Vishal's photo or short video embed

**Content:**
- Section label: `"Our Story"` (chip/eyebrow)
- Headline: `"We don't teach. We transform."`
- Body: 3–4 sentences on BLC's philosophy, Vishal's vision, the gap they fill
- Highlighted quote block (pull quote): `"Have Patience and Behave Like Compiler"` in large italic Clash Display, accented with a `#FEBB39` left border
- CTA link: `"Meet the Founder →"`

---

### Section 5 — Programs

**Layout:** `#F7F7F7` background, 2×3 card grid (or 3×2 on wider screens)

**Section header:**
- Label: `"What We Teach"`
- Title: `"Programs Built for the Real World"`
- Subtext: `"Every module is designed with industry requirements at its core."`

**Program Cards (6 cards):**
1. Aptitude Training — `"Problem-solving and logical reasoning for competitive hiring"`
2. Technical Training — `"Coding, DSA, algorithms, domain-specific skills"`
3. Soft Skills Development — `"Communication, teamwork, leadership for career success"`
4. Verbal Communication — `"Confidence in interviews and professional environments"`
5. FireStarter Workshops — `"Practical, hands-on, real-world scenario workshops"`
6. PrepSprint (Mock Interviews) — `"Intensive mock interviews. Real feedback. Real preparation."`

Each card has: Lottie icon, title, description, hover reveal of "Learn More →"

---

### Section 6 — BLC Frameworks

**Layout:** White background, two sub-sections stacked

**Sub-section A — The BLC Loop Model**
- Headline: `"The BLC Loop Model"`
- Visual: Animated circular diagram — Learn → Apply → Practice → Evaluate → (loop)
- Built in SVG/CSS animation, BLC blue palette
- Short description paragraph

**Sub-section B — The 4-Year Skill Tree**
- Headline: `"A 4-Year Roadmap to Industry Readiness"`
- Visual: Horizontal timeline with 4 phases, each phase expanding on hover
  - Year 1: Foundation
  - Year 2: Growth
  - Year 3: Specialization
  - Year 4: Launch
- Each phase: icon, name, 2-line description, color-coded in BLC palette

---

### Section 7 — For Colleges

**Layout:** Full-bleed section, `#1E328B` background (dark section), two-column

**Content:**
- Eyebrow: `"Institutional Partnerships"` (white chip)
- Headline: `"Bring BLC to Your Campus"` (white, Clash Display)
- Body: 3 bullet points with Phosphor icons (white): structured curriculum, placement support, dedicated trainer, flexible scheduling
- CTA: `"Request a Campus Program"` (Accent Yellow button)
- Right: Floating card showing college logos (Amrita, CMR, Canara, Alvas) with "Partner College" badge

---

### Section 8 — For Corporates

**Layout:** `#F7F7F7` background, two-column (visual left, text right — mirror of Section 7)

**Content:**
- Eyebrow: `"Corporate Training"`
- Headline: `"Custom Training for Your Workforce"`
- Body: 3 bullets: needs assessment, custom curriculum, measurable outcomes
- CTA: `"Get a Custom Quote"` (Primary Blue button)
- Left: Small icon-grid showing IBM, Accenture, Wipro, Capgemini logos in cards

---

### Section 9 — Testimonials

**Layout:** White background, horizontal scroll carousel (3 cards visible on desktop)

**Content:** 3–6 testimonial cards from students and college T&P officers

**Card structure:** Quote, name, designation/college, photo avatar

**Interaction:** Drag-scroll on mobile, arrow controls on desktop, auto-advance every 5s with pause on hover

---

### Section 10 — Partner Colleges

**Layout:** `#F7F7F7` strip, infinite scrolling logo marquee (CSS animation)

**Content:** Logos of Alvas, Amrita, CMR, Canara + any others
**Effect:** Continuous left-scroll loop, `grayscale` filter, no hover interaction needed

---

### Section 11 — Final CTA Banner

**Layout:** Full-bleed, `#0D1B5E` (deep navy) background

**Content:**
- Headline: `"Your engineering career starts here."` (Clash Display, white, 52px)
- Subtext: `"Join hundreds of engineers who've transformed their careers with BLC."`
- CTA: `"Start Your Journey"` (Accent Yellow button, large)
- Secondary: `"Or call us: +91 8722077934"` (white link)

**Background:** Subtle animated particle/dot field in `#1E328B` over the dark navy

---

### Section 12 — Footer

**Layout:** `#0A0F2E` background, 4-column grid

**Columns:**
1. Logo + tagline + social icons (Instagram, YouTube, LinkedIn)
2. Quick links: Home, About, Programs, For Colleges, For Corporates, Contact
3. Programs: Aptitude, Technical, Soft Skills, Verbal, Workshops, PrepSprint
4. Contact: Address (Bangalore), Phone, Email, Google Maps link

**Bottom bar:** Copyright + "Designed & Developed by [Agency]"

---

## 6. Technical Requirements

### 6.1 Tech Stack (Recommended)
| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14 (App Router) | SSR/SSG for SEO, fast, React ecosystem |
| Styling | Tailwind CSS + CSS custom properties | Rapid build, consistent tokens |
| Animation | Framer Motion + CSS transitions | Smooth, performant, scroll-triggered |
| Lottie | `lottie-react` or `@lottiefiles/react-lottie-player` | JSON animations in brand colors |
| Fonts | Google Fonts (DM Sans) + Fontshare (Clash Display) | Free, fast CDN |
| Icons | Phosphor Icons (`phosphor-react`) | Consistent, open source |
| CMS | Sanity.io or Notion API (optional) | If testimonials/programs need to be editable |
| Hosting | Vercel | Zero-config, edge CDN, great for Next.js |
| Forms | Formspree or EmailJS | Simple, no backend needed |
| Analytics | Google Analytics 4 + Hotjar | Tracking + heatmaps |

### 6.2 Performance Requirements
- **Lighthouse score:** > 90 on all four metrics
- **LCP:** < 2.5s on mobile (4G)
- **CLS:** < 0.1
- **Images:** All served as `.webp`, lazy-loaded, with `width`/`height` declared
- **Lottie files:** Max 150KB per file; only load when in viewport
- **Fonts:** Preloaded with `<link rel="preload">`, `font-display: swap`

### 6.3 Responsive Breakpoints
| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 768px | Single column, stacked sections, hamburger nav |
| Tablet | 768px – 1024px | 2-column grids, scaled typography |
| Desktop | 1024px – 1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, centered |

### 6.4 SEO Requirements
- Semantic HTML throughout (`<main>`, `<section>`, `<article>`, `<nav>`, proper heading hierarchy)
- Meta title: `"Behave Like Compiler — Engineering Career Training | Bangalore"`
- Meta description: `"BLC bridges academic learning and real-world industry with hands-on training, placement support, and career strategy for engineering students."`
- OG image: 1200×630px branded card
- Structured data: `Organization`, `Course`, `LocalBusiness` schema
- Sitemap.xml + robots.txt

### 6.5 Accessibility
- WCAG 2.1 AA compliance
- All interactive elements keyboard-navigable
- Focus indicators visible
- ARIA labels on icon-only buttons
- Color contrast ratio: minimum 4.5:1 for body text, 3:1 for large text
- `prefers-reduced-motion` media query: disable all non-essential animations when set

---

## 7. Brand Voice Guidelines (For Copy Writers)

### Tone Principles
| Tone | What It Means | Example |
|------|---------------|---------|
| **Confident** | BLC knows what it's doing. No hedging. | "We build engineers who get hired." not "We try to help students." |
| **Direct** | Short sentences. No fluff. | "Learn. Apply. Get placed." |
| **Encouraging** | Students are nervous. Acknowledge it. | "The gap between college and career is real. We bridge it." |
| **Authoritative** | Back claims with numbers and names | "85% placement rate. Partners include IBM, Accenture, Wipro." |
| **Human** | This is Vishal's mission, not a corporation | "Every student who walks in is a career story waiting to be written." |

### Copy Rules
- Headlines: Sentence case only (not Title Case For Every Word)
- CTAs: Action verbs — "Start your journey", "Explore programs", "Talk to us"
- Avoid: "World-class", "Cutting-edge", "Holistic", "Leverage" — overused, meaningless
- Numbers: Always use numerals (`500 students`, not `five hundred students`)
- Tagline: Always use exactly as written — `"Have Patience and Behave Like Compiler"`

---

## 8. Deliverables Checklist

### Design Phase
- [ ] Design system file (Figma) — tokens, components, grid
- [ ] Wireframes — all 12 sections, 3 breakpoints
- [ ] High-fidelity mockups — all 12 sections, desktop + mobile
- [ ] Prototype — scrollable with animation preview
- [ ] Lottie animation files (sourced or commissioned)
- [ ] Final logo files in SVG, PNG (light + dark variants)

### Development Phase
- [ ] Next.js project setup with Tailwind + Framer Motion
- [ ] Design system implementation (CSS tokens, component library)
- [ ] Homepage — all 12 sections
- [ ] Inner pages: /programs, /about, /for-colleges, /for-corporates, /contact
- [ ] Contact/inquiry form with email notifications
- [ ] Mobile-responsive QA across iOS Safari, Android Chrome
- [ ] Performance audit (Lighthouse > 90)
- [ ] SEO implementation
- [ ] Analytics integration (GA4 + Hotjar)

### Content Phase
- [ ] Copywriting — all section headlines, body, CTAs
- [ ] Real testimonials collected (minimum 4)
- [ ] Real placement stats confirmed with founder
- [ ] Partner logo files (all corporate + college partners) in SVG/PNG
- [ ] Founder photo (professional, high-res)
- [ ] Program descriptions (detailed, per program)

---

## 9. Timeline (Suggested)

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Discovery & Content Gathering | Week 1 | Confirmed copy, stats, logos, photos |
| Design System + Wireframes | Week 2 | Figma wireframes, tokens |
| High-Fidelity Design | Weeks 3–4 | Full mockups, approved by founder |
| Development — Core Build | Weeks 5–7 | Homepage + inner pages |
| QA, Performance, SEO | Week 8 | Lighthouse pass, cross-browser |
| Content Final + Launch | Week 9 | Go live |

---

## 10. Open Questions (To Resolve Before Design Starts)

1. **Actual placement stats** — What are the verified numbers? (students trained, placement rate, companies)
2. **Courses with pricing** — Are program fees listed publicly or only after inquiry?
3. **Video content** — Does Vishal have a short intro video? Would significantly elevate the "About" section.
4. **Inner pages scope** — Are `/programs`, `/about`, `/for-colleges`, `/for-corporates`, `/contact` all in scope for this phase, or homepage-first?
5. **CMS requirement** — Does the team need to update testimonials, programs, or blog content without a developer?
6. **Domain / hosting access** — Who manages the current hosting? DNS changes needed?
7. **Logo source file** — SVG version of the gear+</> logo needed for clean web use.

---

*Document prepared in collaboration with the BLC founding team.*
*Next step: Resolve Open Questions (Section 10), then begin Design Phase.*

---
**BLC Website Revamp PRD v1.0 — Confidential**
