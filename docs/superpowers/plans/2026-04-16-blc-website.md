# BLC Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full BLC (Behave Like Compiler) website — a Next.js 14 marketing site for an engineering career training org — with 12 homepage sections plus 5 inner pages.

**Architecture:** Next.js 14 App Router with Tailwind CSS for layout, CSS custom properties for design tokens, and Framer Motion for scroll-triggered animations. All content lives in `lib/constants.ts` as typed data — components are purely presentational and receive props.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, `lottie-react`, Phosphor Icons (`@phosphor-icons/react`), JetBrains Mono (Google Fonts), Formspree.

> **⚠️ TEMP DATA REMINDER:** Stats (500+ students, 85% placement rate, etc.), testimonials, partner logos, and program descriptions use placeholder values. When the founder provides real data, update `lib/constants.ts` — all sections pull from there. Do NOT hardcode content in components.

---

## File Map

```
blc/
├── app/
│   ├── layout.tsx                  # Root layout: font, metadata, globals import
│   ├── page.tsx                    # Homepage: imports all 12 section components
│   ├── globals.css                 # CSS custom properties + Tailwind base
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   ├── for-colleges/page.tsx
│   ├── for-corporates/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Nav.tsx                 # Sticky nav, hamburger on mobile, dropdown Programs
│   │   └── Footer.tsx              # 4-column footer, dark navy
│   ├── sections/
│   │   ├── Hero.tsx                # Full-viewport hero, load sequence
│   │   ├── SocialProofBar.tsx      # Grayscale logo strip
│   │   ├── ImpactNumbers.tsx       # 4-stat animated counter grid
│   │   ├── WhatIsBLC.tsx           # Brand story, pull quote
│   │   ├── Programs.tsx            # 2x3 program card grid
│   │   ├── BLCFrameworks.tsx       # Loop Model SVG + 4-Year Skill Tree
│   │   ├── ForColleges.tsx         # Dark blue full-bleed section
│   │   ├── ForCorporates.tsx       # Light section, mirror layout
│   │   ├── Testimonials.tsx        # Horizontal carousel
│   │   ├── PartnerColleges.tsx     # Infinite marquee strip
│   │   ├── CTABanner.tsx           # Deep navy CTA
│   └── ui/
│       ├── Button.tsx              # Primary, Accent, Ghost variants
│       ├── Chip.tsx                # Eyebrow label pill
│       ├── ProgramCard.tsx         # Card with Lottie icon slot
│       ├── StatCard.tsx            # Animated counter card
│       ├── TestimonialCard.tsx     # Quote + avatar card
│       └── AnimatedCounter.tsx     # requestAnimationFrame counter
├── lib/
│   ├── animations.ts               # Framer Motion variants (fadeUp, stagger, etc.)
│   ├── constants.ts                # ALL content: programs, stats, testimonials, navLinks
│   └── hooks/
│       └── useReducedMotion.ts     # prefers-reduced-motion hook
└── public/
    └── logos/                      # Partner/company logos (SVG/PNG)
```

---

## Task 1: Project Initialization

**Files:**
- Create: `package.json`, `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json` (via CLI)
- Create: `app/globals.css`
- Create: `app/layout.tsx`

- [ ] **Step 1: Scaffold Next.js project**

```bash
cd /home/nullsec/Desktop/blc
npx create-next-app@latest . --typescript --tailwind --app --src-dir=no --import-alias="@/*" --use-npm
```
When prompted, accept all defaults.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion @phosphor-icons/react lottie-react
npm install --save-dev @types/node
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```
Expected: Server running at `http://localhost:3000`, no errors in terminal.

- [ ] **Step 4: Write `app/globals.css`** — replace the entire file:

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #1E328B;
  --color-primary-light: #8BB9F7;
  --color-accent: #FEBB39;
  --color-bg: #FFFFFF;
  --color-bg-subtle: #F7F7F7;
  --color-bg-navy: #0D1B5E;
  --color-text-primary: #0A0F2E;
  --color-text-muted: #6B7494;
  --color-border: #E8ECF4;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'JetBrains Mono', monospace;
  color: var(--color-text-primary);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 5: Write `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Behave Like Compiler — Engineering Career Training | Bangalore',
  description: 'BLC bridges academic learning and real-world industry with hands-on training, placement support, and career strategy for engineering students.',
  openGraph: {
    title: 'Behave Like Compiler — Engineering Career Training | Bangalore',
    description: 'BLC bridges academic learning and real-world industry with hands-on training, placement support, and career strategy for engineering students.',
    url: 'https://blcompiler.com',
    siteName: 'Behave Like Compiler',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 6: Update `tailwind.config.ts`** — add font and color extensions:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#1E328B',
        'primary-light': '#8BB9F7',
        accent: '#FEBB39',
        navy: '#0D1B5E',
        'text-primary': '#0A0F2E',
        'text-muted': '#6B7494',
        border: '#E8ECF4',
        'bg-subtle': '#F7F7F7',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 7: Commit**

```bash
git init
git add .
git commit -m "feat: initialize Next.js 14 project with Tailwind, Framer Motion, design tokens"
```

---

## Task 2: Content Constants & Animation Variants

**Files:**
- Create: `lib/constants.ts`
- Create: `lib/animations.ts`
- Create: `lib/hooks/useReducedMotion.ts`

- [ ] **Step 1: Create `lib/constants.ts`**

```ts
// ⚠️ TEMP DATA — replace with verified content from founder before launch

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'For Colleges', href: '/for-colleges' },
  { label: 'For Corporates', href: '/for-corporates' },
  { label: 'Contact', href: '/contact' },
]

export const PROGRAMS = [
  {
    id: 'aptitude',
    title: 'Aptitude Training',
    description: 'Problem-solving and logical reasoning for competitive hiring',
    icon: 'brain', // Phosphor icon name
  },
  {
    id: 'technical',
    title: 'Technical Training',
    description: 'Coding, DSA, algorithms, domain-specific skills',
    icon: 'code',
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills Development',
    description: 'Communication, teamwork, leadership for career success',
    icon: 'users',
  },
  {
    id: 'verbal',
    title: 'Verbal Communication',
    description: 'Confidence in interviews and professional environments',
    icon: 'microphone',
  },
  {
    id: 'firestarter',
    title: 'FireStarter Workshops',
    description: 'Practical, hands-on, real-world scenario workshops',
    icon: 'fire',
  },
  {
    id: 'prepsprint',
    title: 'PrepSprint',
    description: 'Intensive mock interviews. Real feedback. Real preparation.',
    icon: 'rocket',
  },
]

// ⚠️ TEMP — confirm real numbers with founder
export const STATS = [
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 15, suffix: '+', label: 'Partner Companies' },
  { value: 10, suffix: '+', label: 'College Collaborations' },
  { value: 85, suffix: '%', label: 'Placement Rate' },
]

// ⚠️ TEMP — collect real testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'BLC completely changed how I approached interviews. I went from zero callbacks to three offers in a month.',
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    company: 'Wipro',
    avatar: '/avatars/placeholder.jpg',
  },
  {
    id: 2,
    quote: 'The structured curriculum and mock interviews gave our students a real edge. Best campus program we've had.',
    name: 'Dr. Priya Nair',
    role: 'T&P Officer',
    company: 'Amrita Institute',
    avatar: '/avatars/placeholder.jpg',
  },
  {
    id: 3,
    quote: 'Vishal's approach is different — he doesn't just teach, he makes you think like an industry professional.',
    name: 'Karan Mehta',
    role: 'Backend Developer',
    company: 'Accenture',
    avatar: '/avatars/placeholder.jpg',
  },
]

export const COMPANY_LOGOS = [
  { name: 'IBM', src: '/logos/ibm.svg' },
  { name: 'Capgemini', src: '/logos/capgemini.svg' },
  { name: 'Accenture', src: '/logos/accenture.svg' },
  { name: 'Wipro', src: '/logos/wipro.svg' },
  { name: 'Hexaware', src: '/logos/hexaware.svg' },
  { name: 'Intel', src: '/logos/intel.svg' },
]

export const COLLEGE_LOGOS = [
  { name: 'Amrita', src: '/logos/amrita.svg' },
  { name: 'CMR', src: '/logos/cmr.svg' },
  { name: 'Canara', src: '/logos/canara.svg' },
  { name: 'Alvas', src: '/logos/alvas.svg' },
]

export const CONTACT = {
  phone: '+91 8722077934',
  email: 'info@blcompiler.com', // ⚠️ TEMP — confirm real email
  address: 'Bangalore, Karnataka, India', // ⚠️ TEMP — confirm full address
}

export const SKILL_TREE = [
  {
    year: 'Year 1',
    phase: 'Foundation',
    description: 'Core aptitude, logical reasoning, and communication basics',
    color: '#8BB9F7',
  },
  {
    year: 'Year 2',
    phase: 'Growth',
    description: 'Technical depth: DSA, domain skills, soft skills development',
    color: '#1E328B',
  },
  {
    year: 'Year 3',
    phase: 'Specialization',
    description: 'Industry-specific tracks, workshops, leadership training',
    color: '#FEBB39',
  },
  {
    year: 'Year 4',
    phase: 'Launch',
    description: 'Mock interviews, placement strategy, offer negotiation',
    color: '#0D1B5E',
  },
]
```

- [ ] **Step 2: Create `lib/animations.ts`**

```ts
import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Hero section — sequential delays
export const heroSequence = {
  nav: { delay: 0 },
  headline: { delay: 0.2 },
  subtext: { delay: 0.5 },
  cta: { delay: 0.7 },
  visual: { delay: 0.9 },
}

export const float: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}
```

- [ ] **Step 3: Create `lib/hooks/useReducedMotion.ts`**

```ts
'use client'
import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add lib/
git commit -m "feat: add content constants, animation variants, reduced-motion hook"
```

---

## Task 3: UI Primitives (Button, Chip, AnimatedCounter)

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/Chip.tsx`
- Create: `components/ui/AnimatedCounter.tsx`

- [ ] **Step 1: Create `components/ui/Button.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Variant = 'primary' | 'accent' | 'ghost'

interface ButtonProps {
  variant?: Variant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

const base = 'inline-flex items-center justify-center px-8 py-4 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20',
  accent: 'bg-accent text-text-primary font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30',
  ghost: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
}

export function Button({ variant = 'primary', href, onClick, children, className = '' }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Create `components/ui/Chip.tsx`**

```tsx
interface ChipProps {
  children: React.ReactNode
  light?: boolean // white text on primary bg vs primary text on light bg
}

export function Chip({ children, light = false }: ChipProps) {
  return (
    <span
      className={`inline-block px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest ${
        light
          ? 'bg-white text-primary'
          : 'bg-primary text-white'
      }`}
    >
      {children}
    </span>
  )
}
```

- [ ] **Step 3: Create `components/ui/AnimatedCounter.tsx`**

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number // ms
}

export function AnimatedCounter({ target, suffix = '', duration = 1800 }: AnimatedCounterProps) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setValue(target)
      return
    }

    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [target, duration, reduced])

  return <span>{value}{suffix}</span>
}
```

- [ ] **Step 4: TypeScript check**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add components/ui/
git commit -m "feat: add Button, Chip, AnimatedCounter UI primitives"
```

---

## Task 4: Navigation

**Files:**
- Create: `components/layout/Nav.tsx`

- [ ] **Step 1: Create `components/layout/Nav.tsx`**

```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { NAV_LINKS, PROGRAMS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { fadeIn } from '@/lib/animations'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-primary tracking-tight">
          BLC
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}

          {/* Programs dropdown */}
          <div className="relative" onMouseEnter={() => setProgramsOpen(true)} onMouseLeave={() => setProgramsOpen(false)}>
            <button className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1">
              Programs
              <span className="text-xs">▾</span>
            </button>
            <AnimatePresence>
              {programsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-border shadow-lg py-2"
                >
                  {PROGRAMS.map((p) => (
                    <Link
                      key={p.id}
                      href={`/programs#${p.id}`}
                      className="block px-4 py-2.5 text-sm text-text-primary hover:bg-bg-subtle hover:text-primary transition-colors"
                    >
                      {p.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">Talk to Us</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-text-primary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-text-muted mb-2 uppercase tracking-wider">Programs</p>
                {PROGRAMS.map((p) => (
                  <Link
                    key={p.id}
                    href={`/programs#${p.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 text-sm text-text-primary hover:text-primary"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
              <Button href="/contact" variant="primary" className="mt-2">Talk to Us</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
```

- [ ] **Step 2: Add Nav to `app/layout.tsx`** — import and render above `{children}`:

```tsx
import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'Behave Like Compiler — Engineering Career Training | Bangalore',
  description: 'BLC bridges academic learning and real-world industry with hands-on training, placement support, and career strategy for engineering students.',
  openGraph: {
    title: 'Behave Like Compiler — Engineering Career Training | Bangalore',
    description: 'BLC bridges academic learning and real-world industry with hands-on training, placement support, and career strategy for engineering students.',
    url: 'https://blcompiler.com',
    siteName: 'Behave Like Compiler',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Verify in browser** — `npm run dev`, open `http://localhost:3000`. Nav should be transparent on top, darken on scroll, dropdown appears on hover, hamburger menu works on mobile viewport.

- [ ] **Step 4: Commit**

```bash
git add components/layout/Nav.tsx app/layout.tsx
git commit -m "feat: add responsive sticky nav with programs dropdown"
```

---

## Task 5: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/sections/Hero.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { heroSequence, float, fadeUp } from '@/lib/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,50,139,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,50,139,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center w-full">
        {/* Left: Text (3/5) */}
        <div className="lg:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: heroSequence.nav.delay, duration: 0.4 }}
          >
            <Chip>India's Premier Engineering Career Accelerator</Chip>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: heroSequence.headline.delay, duration: 0.6, ease: 'easeOut' }}
          >
            Have Patience and{' '}
            <span className="text-primary">Behave Like Compiler</span>
          </motion.h1>

          <motion.p
            className="text-lg text-text-muted max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: heroSequence.subtext.delay, duration: 0.5, ease: 'easeOut' }}
          >
            Bridging the gap between academic learning and real-world industry — through structured training, mentorship, and career strategy.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: heroSequence.cta.delay, duration: 0.4, ease: 'easeOut' }}
          >
            <Button href="#programs" variant="accent">Explore Programs</Button>
            <Button href="#contact" variant="ghost">Talk to Us</Button>
          </motion.div>
        </div>

        {/* Right: Visual placeholder (2/5) */}
        <motion.div
          className="lg:col-span-2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: heroSequence.visual.delay, duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            variants={float}
            animate="animate"
            className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary/10 to-primary-light/20 flex items-center justify-center border border-border"
          >
            {/* ⚠️ TEMP: Replace with Lottie animation file when available */}
            <span className="text-primary/40 text-sm text-center px-8">
              Lottie Animation<br />Placeholder
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `app/page.tsx`** — start with just Hero:

```tsx
import { Hero } from '@/components/sections/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser** — check headline renders, grid texture visible, buttons present, floating visual animates, staggered load sequence plays.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: Hero section with load sequence animation"
```

---

## Task 6: Social Proof Bar & Impact Numbers

**Files:**
- Create: `components/sections/SocialProofBar.tsx`
- Create: `components/sections/ImpactNumbers.tsx`
- Create: `components/ui/StatCard.tsx`

- [ ] **Step 1: Create `components/sections/SocialProofBar.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { COMPANY_LOGOS } from '@/lib/constants'
import { staggerContainer, fadeIn } from '@/lib/animations'

export function SocialProofBar() {
  return (
    <section className="bg-bg-subtle py-16">
      <div className="max-w-container mx-auto px-6">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-8 text-center">
          Trusted by graduates hired at
        </p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {COMPANY_LOGOS.map((logo) => (
            <motion.div
              key={logo.name}
              variants={fadeIn}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {/* ⚠️ TEMP: Replace img with actual SVG logos when available */}
              <div className="h-8 px-4 bg-text-muted/20 rounded flex items-center justify-center min-w-[80px]">
                <span className="text-xs font-bold text-text-muted">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `components/ui/StatCard.tsx`**

```tsx
'use client'
import { AnimatedCounter } from './AnimatedCounter'

interface StatCardProps {
  value: number
  suffix: string
  label: string
  dark?: boolean
}

export function StatCard({ value, suffix, label, dark = false }: StatCardProps) {
  return (
    <div className={`rounded-2xl p-8 text-center ${dark ? 'bg-primary text-white' : 'bg-bg-subtle'}`}>
      <div className={`text-6xl font-bold mb-2 ${dark ? 'text-accent' : 'text-primary'}`}>
        <AnimatedCounter target={value} suffix={suffix} />
      </div>
      <p className={`text-sm ${dark ? 'text-white/70' : 'text-text-muted'}`}>{label}</p>
    </div>
  )
}
```

- [ ] **Step 3: Create `components/sections/ImpactNumbers.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'
import { StatCard } from '@/components/ui/StatCard'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function ImpactNumbers() {
  return (
    <section className="bg-white py-32" id="impact">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                dark={i % 2 === 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Add both sections to `app/page.tsx`**

```tsx
import { Hero } from '@/components/sections/Hero'
import { SocialProofBar } from '@/components/sections/SocialProofBar'
import { ImpactNumbers } from '@/components/sections/ImpactNumbers'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ImpactNumbers />
    </main>
  )
}
```

- [ ] **Step 5: Verify in browser** — scroll down, logo strip appears, scroll to Impact Numbers, counters animate from 0.

- [ ] **Step 6: Commit**

```bash
git add components/sections/SocialProofBar.tsx components/sections/ImpactNumbers.tsx components/ui/StatCard.tsx app/page.tsx
git commit -m "feat: Social Proof Bar and animated Impact Numbers sections"
```

---

## Task 7: What is BLC, Programs, BLC Frameworks

**Files:**
- Create: `components/sections/WhatIsBLC.tsx`
- Create: `components/ui/ProgramCard.tsx`
- Create: `components/sections/Programs.tsx`
- Create: `components/sections/BLCFrameworks.tsx`

- [ ] **Step 1: Create `components/sections/WhatIsBLC.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { Chip } from '@/components/ui/Chip'
import { staggerContainer, fadeUp, slideFromRight } from '@/lib/animations'

export function WhatIsBLC() {
  return (
    <section className="bg-bg-subtle py-32" id="about">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Left: Text */}
          <div className="space-y-6">
            <motion.div variants={fadeUp}><Chip>Our Story</Chip></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-text-primary">
              We don't teach.<br />We transform.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-muted leading-relaxed">
              BLC was born from a simple observation: brilliant engineering graduates were failing interviews — not because they lacked intelligence, but because no one taught them to think the way industry expects.
            </motion.p>
            <motion.p variants={fadeUp} className="text-text-muted leading-relaxed">
              Vishal Vanaki built BLC to close that gap — with a methodology that mirrors how real software teams operate, how real interviews are conducted, and how real careers are built.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp}
              className="border-l-4 border-accent pl-6 py-2"
            >
              <p className="text-2xl font-bold italic text-text-primary">
                "Have Patience and Behave Like Compiler"
              </p>
            </motion.blockquote>

            <motion.a
              variants={fadeUp}
              href="/about"
              className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all gap-1"
            >
              Meet the Founder →
            </motion.a>
          </div>

          {/* Right: Photo/Video placeholder */}
          <motion.div variants={slideFromRight} className="flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 to-primary-light/10 border border-border flex items-center justify-center">
              {/* ⚠️ TEMP: Replace with Vishal's photo or video embed */}
              <span className="text-text-muted text-sm">Founder photo / video placeholder</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `components/ui/ProgramCard.tsx`**

```tsx
'use client'
import { ArrowRight, Brain, Code, Users, Microphone, Fire, Rocket } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const ICON_MAP: Record<string, React.ElementType> = {
  brain: Brain,
  code: Code,
  users: Users,
  microphone: Microphone,
  fire: Fire,
  rocket: Rocket,
}

interface ProgramCardProps {
  title: string
  description: string
  icon: string
  id: string
}

export function ProgramCard({ title, description, icon, id }: ProgramCardProps) {
  const Icon = ICON_MAP[icon] ?? Code

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-primary-light cursor-pointer relative overflow-hidden"
    >
      {/* Left border accent on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-250 origin-center rounded-l-2xl" />

      <div className="mb-4">
        <Icon size={48} className="text-primary" weight="duotone" />
      </div>
      <h3 className="text-lg font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed mb-4">{description}</p>
      <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
        Learn More <ArrowRight size={14} />
      </span>
    </motion.div>
  )
}
```

- [ ] **Step 3: Create `components/sections/Programs.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { PROGRAMS } from '@/lib/constants'
import { ProgramCard } from '@/components/ui/ProgramCard'
import { Chip } from '@/components/ui/Chip'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function Programs() {
  return (
    <section className="bg-bg-subtle py-32" id="programs">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="mb-4"><Chip>What We Teach</Chip></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Programs built for the real world
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-muted max-w-lg mx-auto">
            Every module is designed with industry requirements at its core.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PROGRAMS.map((program) => (
            <motion.div key={program.id} variants={fadeUp}>
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create `components/sections/BLCFrameworks.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { Chip } from '@/components/ui/Chip'
import { SKILL_TREE } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/animations'

const LOOP_STEPS = ['Learn', 'Apply', 'Practice', 'Evaluate']

export function BLCFrameworks() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-container mx-auto px-6 space-y-24">

        {/* Loop Model */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="mb-4"><Chip>Our Methodology</Chip></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-text-primary mb-12">
            The BLC Loop Model
          </motion.h2>

          {/* Circular loop visual */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-0 flex-wrap max-w-2xl mx-auto">
            {LOOP_STEPS.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {step}
                  </div>
                </div>
                {i < LOOP_STEPS.length - 1 && (
                  <div className="w-8 h-px bg-primary-light mx-2 relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-light text-xs">→</span>
                  </div>
                )}
              </div>
            ))}
            <div className="w-full text-center mt-4 text-text-muted text-sm">↺ Continuous loop</div>
          </motion.div>
        </motion.div>

        {/* 4-Year Skill Tree */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="text-center mb-12">
            <motion.div variants={fadeUp} className="mb-4"><Chip>Career Roadmap</Chip></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-text-primary">
              A 4-year roadmap to industry readiness
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {SKILL_TREE.map((phase) => (
              <motion.div
                key={phase.year}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 border border-border bg-bg-subtle group hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: phase.color }}
                >
                  {phase.year.split(' ')[1]}
                </div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{phase.year}</p>
                <h3 className="font-bold text-text-primary mb-2">{phase.phase}</h3>
                <p className="text-sm text-text-muted">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 5: Add all three to `app/page.tsx`**

```tsx
import { Hero } from '@/components/sections/Hero'
import { SocialProofBar } from '@/components/sections/SocialProofBar'
import { ImpactNumbers } from '@/components/sections/ImpactNumbers'
import { WhatIsBLC } from '@/components/sections/WhatIsBLC'
import { Programs } from '@/components/sections/Programs'
import { BLCFrameworks } from '@/components/sections/BLCFrameworks'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ImpactNumbers />
      <WhatIsBLC />
      <Programs />
      <BLCFrameworks />
    </main>
  )
}
```

- [ ] **Step 6: Verify in browser** — scroll through all sections, check hover states on program cards, loop model displays correctly.

- [ ] **Step 7: Commit**

```bash
git add components/sections/WhatIsBLC.tsx components/sections/Programs.tsx components/sections/BLCFrameworks.tsx components/ui/ProgramCard.tsx app/page.tsx
git commit -m "feat: WhatIsBLC, Programs card grid, BLC Frameworks sections"
```

---

## Task 8: For Colleges, For Corporates, Testimonials

**Files:**
- Create: `components/sections/ForColleges.tsx`
- Create: `components/sections/ForCorporates.tsx`
- Create: `components/ui/TestimonialCard.tsx`
- Create: `components/sections/Testimonials.tsx`

- [ ] **Step 1: Create `components/sections/ForColleges.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { COLLEGE_LOGOS } from '@/lib/constants'
import { staggerContainer, fadeUp, slideFromRight } from '@/lib/animations'

const BENEFITS = [
  'Structured curriculum aligned to placement season',
  'Dedicated BLC trainer on your campus',
  'Measurable placement outcomes tracked per batch',
  'Flexible scheduling around academic calendar',
]

export function ForColleges() {
  return (
    <section className="py-32" style={{ backgroundColor: 'var(--color-primary)' }} id="for-colleges">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Left: Text */}
          <div className="space-y-6">
            <motion.div variants={fadeUp}><Chip light>Institutional Partnerships</Chip></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-white">
              Bring BLC to your campus
            </motion.h2>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {BENEFITS.map((b) => (
                <motion.li key={b} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-0.5 shrink-0" weight="fill" />
                  <span className="text-white/80 text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Button href="/contact?type=college" variant="accent">Request a campus program</Button>
            </motion.div>
          </div>

          {/* Right: College logo cards */}
          <motion.div variants={slideFromRight} className="grid grid-cols-2 gap-4">
            {COLLEGE_LOGOS.map((logo) => (
              <div key={logo.name} className="bg-white/10 rounded-xl p-4 flex items-center justify-center border border-white/20 aspect-video">
                {/* ⚠️ TEMP: Replace with actual college logos */}
                <span className="text-white/60 text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `components/sections/ForCorporates.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { COMPANY_LOGOS } from '@/lib/constants'
import { staggerContainer, fadeUp, slideFromRight } from '@/lib/animations'

const BENEFITS = [
  'Needs assessment before program design',
  'Custom curriculum mapped to your team's skill gaps',
  'Measurable outcomes: pre/post assessments',
]

export function ForCorporates() {
  return (
    <section className="bg-bg-subtle py-32" id="for-corporates">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Left: Company logo grid */}
          <motion.div variants={slideFromRight} className="grid grid-cols-3 gap-4">
            {COMPANY_LOGOS.map((logo) => (
              <div key={logo.name} className="bg-white rounded-xl p-4 flex items-center justify-center border border-border aspect-video shadow-sm">
                {/* ⚠️ TEMP: Replace with actual company logos */}
                <span className="text-text-muted text-xs font-bold">{logo.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Right: Text */}
          <div className="space-y-6">
            <motion.div variants={fadeUp}><Chip>Corporate Training</Chip></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-text-primary">
              Custom training for your workforce
            </motion.h2>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {BENEFITS.map((b) => (
                <motion.li key={b} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" weight="fill" />
                  <span className="text-text-muted text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Button href="/contact?type=corporate" variant="primary">Get a custom quote</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create `components/ui/TestimonialCard.tsx`**

```tsx
interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
}

export function TestimonialCard({ quote, name, role, company, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow min-w-[320px] max-w-sm flex-shrink-0">
      {/* Decorative quote mark */}
      <div className="text-7xl leading-none text-primary-light/30 font-serif mb-2 -mt-4">"</div>
      <p className="text-text-primary text-sm leading-relaxed mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary-light/20 border-2 border-primary-light flex items-center justify-center flex-shrink-0">
          {/* ⚠️ TEMP: Replace with actual avatar image */}
          <span className="text-primary font-bold text-sm">{name[0]}</span>
        </div>
        <div>
          <p className="font-bold text-text-primary text-sm">{name}</p>
          <p className="text-xs text-text-muted">{role} · {company}</p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create `components/sections/Testimonials.tsx`**

```tsx
'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { TESTIMONIALS } from '@/lib/constants'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { Chip } from '@/components/ui/Chip'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    if (!scrollRef.current) return
    const card = scrollRef.current.children[activeIndex] as HTMLElement
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeIndex])

  const prev = () => setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)

  return (
    <section className="bg-white py-32" id="testimonials">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="mb-4"><Chip>What they say</Chip></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-text-primary">
            Real results. Real people.
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="snap-center">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-primary w-6' : 'bg-border'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Add all three sections to `app/page.tsx`**

```tsx
import { Hero } from '@/components/sections/Hero'
import { SocialProofBar } from '@/components/sections/SocialProofBar'
import { ImpactNumbers } from '@/components/sections/ImpactNumbers'
import { WhatIsBLC } from '@/components/sections/WhatIsBLC'
import { Programs } from '@/components/sections/Programs'
import { BLCFrameworks } from '@/components/sections/BLCFrameworks'
import { ForColleges } from '@/components/sections/ForColleges'
import { ForCorporates } from '@/components/sections/ForCorporates'
import { Testimonials } from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ImpactNumbers />
      <WhatIsBLC />
      <Programs />
      <BLCFrameworks />
      <ForColleges />
      <ForCorporates />
      <Testimonials />
    </main>
  )
}
```

- [ ] **Step 6: Verify in browser** — ForColleges dark section renders with white text, carousel auto-advances every 5s, pauses on hover, arrow controls work.

- [ ] **Step 7: Commit**

```bash
git add components/sections/ForColleges.tsx components/sections/ForCorporates.tsx components/sections/Testimonials.tsx components/ui/TestimonialCard.tsx app/page.tsx
git commit -m "feat: ForColleges, ForCorporates, Testimonials carousel sections"
```

---

## Task 9: Partner Colleges Marquee, CTA Banner, Footer

**Files:**
- Create: `components/sections/PartnerColleges.tsx`
- Create: `components/sections/CTABanner.tsx`
- Create: `components/layout/Footer.tsx`

- [ ] **Step 1: Create `components/sections/PartnerColleges.tsx`**

```tsx
'use client'
import { COLLEGE_LOGOS } from '@/lib/constants'

// Duplicate logos for seamless infinite loop
const DOUBLED = [...COLLEGE_LOGOS, ...COLLEGE_LOGOS]

export function PartnerColleges() {
  return (
    <section className="bg-bg-subtle py-16 overflow-hidden">
      <p className="text-xs text-text-muted uppercase tracking-widest text-center mb-8">Partner Colleges</p>
      <div className="relative flex">
        <div
          className="flex gap-12 animate-marquee"
          style={{ width: 'max-content' }}
        >
          {DOUBLED.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="h-10 px-6 bg-white rounded-lg border border-border flex items-center justify-center grayscale opacity-60 min-w-[120px]"
            >
              {/* ⚠️ TEMP: Replace with actual college logos */}
              <span className="text-xs font-bold text-text-muted">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

Add the marquee animation to `app/globals.css`:

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}
```

- [ ] **Step 2: Create `components/sections/CTABanner.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function CTABanner() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-navy)' }}
    >
      {/* Animated dot field background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(139,185,247,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-bold text-white"
          >
            Your engineering career starts here.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-lg mx-auto">
            Join hundreds of engineers who've transformed their careers with BLC.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button href="#programs" variant="accent">Start your journey</Button>
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Or call us: {CONTACT.phone}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create `components/layout/Footer.tsx`**

```tsx
import Link from 'next/link'
import { InstagramLogo, YoutubeLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { NAV_LINKS, PROGRAMS, CONTACT } from '@/lib/constants'

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0F2E' }} className="text-white/70 pt-16 pb-8">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <p className="font-bold text-white text-xl">BLC</p>
            <p className="text-sm leading-relaxed">
              Have Patience and Behave Like Compiler
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramLogo size={20} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors"><YoutubeLogo size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedinLogo size={20} /></a>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wider">Quick Links</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wider">Programs</p>
            <ul className="space-y-2">
              {PROGRAMS.map((p) => (
                <li key={p.id}>
                  <Link href={`/programs#${p.id}`} className="text-sm hover:text-white transition-colors">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wider">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-xs text-white/40 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Behave Like Compiler. All rights reserved.</p>
          <p>Designed & Developed by BLC Team</p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Add Footer to `app/layout.tsx`** and update `app/page.tsx`:

`app/layout.tsx` — add Footer import and render below `{children}`:
```tsx
import { Footer } from '@/components/layout/Footer'
// ... in return:
<body>
  <Nav />
  {children}
  <Footer />
</body>
```

`app/page.tsx` — add final three sections:
```tsx
// Add to imports:
import { PartnerColleges } from '@/components/sections/PartnerColleges'
import { CTABanner } from '@/components/sections/CTABanner'
// Add to JSX after Testimonials:
<PartnerColleges />
<CTABanner />
```

- [ ] **Step 5: Verify in browser** — marquee scrolls infinitely, CTA banner dot background visible, footer 4 columns.

- [ ] **Step 6: Commit**

```bash
git add components/sections/PartnerColleges.tsx components/sections/CTABanner.tsx components/layout/Footer.tsx app/layout.tsx app/page.tsx app/globals.css
git commit -m "feat: PartnerColleges marquee, CTA Banner, Footer — homepage complete"
```

---

## Task 10: Inner Pages (About, Programs, For Colleges, For Corporates, Contact)

**Files:**
- Create: `app/about/page.tsx`
- Create: `app/programs/page.tsx`
- Create: `app/for-colleges/page.tsx`
- Create: `app/for-corporates/page.tsx`
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create `app/about/page.tsx`**

```tsx
import { Chip } from '@/components/ui/Chip'

export default function About() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-2xl">
          <Chip>About BLC</Chip>
          <h1 className="text-5xl font-bold text-text-primary mt-6 mb-6">
            We don't teach. We transform.
          </h1>
          <p className="text-text-muted leading-relaxed mb-4">
            BLC (Behave Like Compiler) was founded by Vishal Vanaki with one mission: bridge the gap between what engineering colleges teach and what industry demands.
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            The name comes from a simple philosophy — a compiler doesn't guess, doesn't shortcuts, doesn't skip steps. It processes inputs systematically and produces reliable outputs. That's how we train engineers.
          </p>
          {/* ⚠️ TEMP: Add founder bio, photo, full story when content is ready */}
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Create `app/programs/page.tsx`**

```tsx
import { Chip } from '@/components/ui/Chip'
import { ProgramCard } from '@/components/ui/ProgramCard'
import { PROGRAMS } from '@/lib/constants'

export default function Programs() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <Chip>Programs</Chip>
          <h1 className="text-5xl font-bold text-text-primary mt-6 mb-4">
            Programs built for the real world
          </h1>
          <p className="text-text-muted max-w-lg mx-auto">
            Every module is designed with industry requirements at its core.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <div key={p.id} id={p.id}>
              <ProgramCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Create `app/for-colleges/page.tsx`**

```tsx
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from '@phosphor-icons/react/dist/ssr'

const BENEFITS = [
  'Structured curriculum aligned to placement season',
  'Dedicated BLC trainer on your campus',
  'Measurable placement outcomes tracked per batch',
  'Flexible scheduling around academic calendar',
]

export default function ForColleges() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6 max-w-2xl">
        <Chip>For Colleges</Chip>
        <h1 className="text-5xl font-bold text-text-primary mt-6 mb-6">
          Bring BLC to your campus
        </h1>
        <p className="text-text-muted leading-relaxed mb-8">
          BLC partners with engineering colleges across Karnataka to deliver structured, outcome-driven placement preparation programs.
        </p>
        <ul className="space-y-4 mb-10">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" weight="fill" />
              <span className="text-text-muted text-sm">{b}</span>
            </li>
          ))}
        </ul>
        <Button href="/contact?type=college" variant="primary">Request a campus program</Button>
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Create `app/for-corporates/page.tsx`**

```tsx
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from '@phosphor-icons/react/dist/ssr'

const BENEFITS = [
  'Needs assessment before program design',
  'Custom curriculum mapped to your team\'s skill gaps',
  'Measurable outcomes: pre/post assessments included',
]

export default function ForCorporates() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6 max-w-2xl">
        <Chip>For Corporates</Chip>
        <h1 className="text-5xl font-bold text-text-primary mt-6 mb-6">
          Custom training for your workforce
        </h1>
        <p className="text-text-muted leading-relaxed mb-8">
          BLC designs bespoke training programs for technology teams at IBM, Accenture, Wipro, and more — built around your specific skill gaps and business outcomes.
        </p>
        <ul className="space-y-4 mb-10">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" weight="fill" />
              <span className="text-text-muted text-sm">{b}</span>
            </li>
          ))}
        </ul>
        <Button href="/contact?type=corporate" variant="primary">Get a custom quote</Button>
      </div>
    </main>
  )
}
```

- [ ] **Step 5: Create `app/contact/page.tsx`** with Formspree form:

```tsx
'use client'
import { useState } from 'react'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'

// ⚠️ TEMP: Replace FORMSPREE_ID with real Formspree endpoint ID from formspree.io
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <Chip>Get in touch</Chip>
            <h1 className="text-5xl font-bold text-text-primary mt-6 mb-6">Let's talk</h1>
            <p className="text-text-muted leading-relaxed mb-8">
              Whether you're a student looking to enroll, a college seeking a partnership, or a corporate exploring custom training — we'd love to hear from you.
            </p>
            <div className="space-y-3 text-sm">
              <p><span className="font-medium text-text-primary">Phone:</span> <a href={`tel:${CONTACT.phone}`} className="text-primary">{CONTACT.phone}</a></p>
              <p><span className="font-medium text-text-primary">Email:</span> <a href={`mailto:${CONTACT.email}`} className="text-primary">{CONTACT.email}</a></p>
              <p><span className="font-medium text-text-primary">Location:</span> {CONTACT.address}</p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: 'name', label: 'Your name', type: 'text' },
              { name: 'email', label: 'Email address', type: 'email' },
              { name: 'phone', label: 'Phone number', type: 'tel' },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-sm font-medium text-text-primary mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">I am a</label>
              <select name="type" className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white">
                <option value="student">Student</option>
                <option value="college">College / Institution</option>
                <option value="corporate">Corporate / Organization</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button variant="primary" className="w-full">
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </Button>

            {status === 'success' && <p className="text-sm text-green-600 text-center">Message sent! We'll get back to you shortly.</p>}
            {status === 'error' && <p className="text-sm text-red-500 text-center">Something went wrong. Please try again or call us directly.</p>}
          </form>
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 6: Verify all pages load** — navigate to `/about`, `/programs`, `/for-colleges`, `/for-corporates`, `/contact`. No 404s.

- [ ] **Step 7: Commit**

```bash
git add app/about/ app/programs/ app/for-colleges/ app/for-corporates/ app/contact/
git commit -m "feat: all 5 inner pages (About, Programs, ForColleges, ForCorporates, Contact)"
```

---

## Task 11: Performance, SEO, Final Polish

**Files:**
- Modify: `next.config.ts`
- Modify: `app/layout.tsx`
- Create: `public/robots.txt`
- Create: `app/sitemap.ts`

- [ ] **Step 1: Run Lighthouse audit** (in Chrome DevTools → Lighthouse → Mobile)

Note scores for: Performance, Accessibility, Best Practices, SEO. Target: all > 90.

- [ ] **Step 2: Add image optimization config to `next.config.ts`**

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
  },
}

export default nextConfig
```

- [ ] **Step 3: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://blcompiler.com/sitemap.xml
```

- [ ] **Step 4: Create `app/sitemap.ts`**

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://blcompiler.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/programs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/for-colleges`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/for-corporates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
```

- [ ] **Step 5: Build and verify no errors**

```bash
npm run build
```
Expected: Build succeeds, all pages pre-rendered.

- [ ] **Step 6: Final commit**

```bash
git add next.config.ts public/robots.txt app/sitemap.ts
git commit -m "feat: performance config, sitemap, robots.txt — ready for content + launch"
```

---

## Self-Review Spec Coverage Check

| PRD Requirement | Task |
|---|---|
| Hero with load sequence | Task 5 |
| Social Proof Bar (company logos) | Task 6 |
| Animated stat counters | Task 6 |
| Brand story / WhatIsBLC | Task 7 |
| 6 program cards with hover | Task 7 |
| BLC Loop Model visual | Task 7 |
| 4-Year Skill Tree | Task 7 |
| ForColleges dark section | Task 8 |
| ForCorporates light section | Task 8 |
| Testimonials carousel (auto-advance + pause) | Task 8 |
| Partner colleges marquee | Task 9 |
| CTA Banner (navy, dot field) | Task 9 |
| 4-column footer | Task 9 |
| 5 inner pages | Task 10 |
| Contact form (Formspree) | Task 10 |
| JetBrains Mono exclusively | Task 1 |
| CSS custom property tokens | Task 1 |
| prefers-reduced-motion | Task 2 |
| Sitemap + robots.txt | Task 11 |
| Mobile responsive nav | Task 4 |

**Gap check:** Lottie files are placeholders (marked ⚠️ TEMP) — actual JSON animation files must be sourced from Lottiefiles.com. Real logos and photos are also pending founder delivery.
