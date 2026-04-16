# BLC Website — Development Journal

> This file is updated after every major development milestone. It exists so any new session can pick up exactly where the last one left off — no context-guessing needed.

---

## How to Resume a Session

1. Read `JOURNAL.md` (this file) — current status is always at the top under **Current State**
2. Read `docs/superpowers/plans/2026-04-16-blc-website.md` — check which tasks are `[x]` done vs `[ ]` not started
3. Run `npm run dev` and verify the site loads before touching code
4. Continue with the next unchecked task in the plan

---

## Current State

**Status:** ✅ Session 4 complete — next/font migration, expanded OG/Twitter metadata, Playwright visual audit, GitHub push. Repo live at https://github.com/NullSecurity07/blc-website. Ready for Vercel deploy.

**Last completed task:** Session 4 — performance + SEO metadata + GitHub push

**Next action:** Import repo into Vercel → connect blcompiler.com → fill in real content from founder → create og-image.png.

**Blocking items (content — not dev blockers):**
- Real placement stats → update `lib/constants.ts` STATS array
- Real testimonials (min 4) → update `lib/constants.ts` TESTIMONIALS array
- Partner logos (SVG) → replace placeholder divs in SocialProofBar, ForCorporates, ForColleges, PartnerColleges
- Founder photo → replace placeholder in WhatIsBLC and `/about` page
- Lottie files → replace placeholder Hero terminal visual in `components/sections/Hero.tsx` (terminal works as intentional placeholder until Lottie is ready)
- Formspree ID → replace `YOUR_FORMSPREE_ID` in `app/contact/page.tsx`
- Verified email + full address → update `lib/constants.ts` CONTACT object
- Real social media URLs → update `components/layout/Footer.tsx` (currently `href="#"`)

**To deploy:**
1. Push repo to GitHub (create remote repo first)
2. Connect to Vercel — zero config needed, auto-detects Next.js
3. Set domain to blcompiler.com

---

## Session Log

### Session 4 — 2026-04-16

**What was done:**
- Migrated font loading from CSS `@import url(...)` to `next/font/google` — `JetBrains_Mono` with `variable: '--font-jetbrains-mono'`, applied to `<html>` tag. Removed render-blocking Google Fonts network request. Updated `tailwind.config.ts` to use `var(--font-jetbrains-mono)` and `globals.css` body to use `var(--font-jetbrains-mono)`.
- Expanded metadata in `app/layout.tsx`: added `metadataBase`, `alternates.canonical`, `keywords[]`, full `openGraph.images` with dimensions, and `twitter` card (`summary_large_image`) — all referencing `/og-image.png` placeholder.
- Playwright visual audit: homepage desktop (full page), mobile 375×812 (full page), /programs page, /not-found 404 page. All sections render correctly, font migration caused zero regressions.
- Fixed git history: initial commit had included `.next/` build artifacts before `.gitignore` was added. Created clean orphan branch (`clean-master`), committed all 47 source files (no build artifacts), pushed to GitHub.
- Created GitHub repo: `NullSecurity07/blc-website` — public, connected to local master via push.

**Decisions made:**
- Used orphan branch approach to clean history rather than `git filter-repo` (not installed) or `filter-branch` (deprecated) — clean slate for a new repo is correct here, JOURNAL.md preserves session context
- `next/font/google` generates CSS variable at build time, self-hosts font files — zero third-party font requests at runtime, LCP improvement for Core Web Vitals

**Files modified:**
- `app/globals.css` — removed @import, updated font-family to var(--font-jetbrains-mono)
- `app/layout.tsx` — JetBrains_Mono import, variable applied to <html>, expanded metadata
- `tailwind.config.ts` — font mono uses CSS variable
- `JOURNAL.md` — this update

**Playwright screenshots generated:**
- `session4-homepage-fullpage.png` — homepage desktop full-page
- `session4-mobile-fullpage.png` — homepage at 375px full-page
- `session4-programs-fullpage.png` — /programs page desktop
- `session4-404.png` — custom 404 page viewport

**Current state after this session:**
- Repo live: https://github.com/NullSecurity07/blc-website
- Build clean, font self-hosted, full OG+Twitter metadata, JSON-LD schema in place
- Ready for Vercel deploy — import repo, auto-detects Next.js, zero config needed
- Content placeholders remain (logos, testimonials, stats, founder photo)

**Next action:**
1. Vercel deploy: go to vercel.com → Import → NullSecurity07/blc-website → Deploy
2. Set custom domain: blcompiler.com → Add domain in Vercel project settings
3. Create Formspree account → replace `YOUR_FORMSPREE_ID` in `app/contact/page.tsx`
4. Replace placeholder content in `lib/constants.ts` once founder provides real data
5. Upload `/public/og-image.png` (1200×630) for Twitter/OG card previews

**Open questions / blockers:**
- Client content still pending (logos, testimonials, stats, photos, real email, address)
- Formspree endpoint ID needed
- og-image.png needs to be created and placed in /public

---

### Session 3 — 2026-04-16

**What was done:**
- Upgraded Hero section: replaced emoji placeholder with branded animated terminal window (`TerminalBody` component inline in `Hero.tsx`). Shows `blc --compile student.ts` → staggered compilation lines → "Build successful. Offer received." with blinking cursor. On-brand and intentional even without Lottie.
- Upgraded BLC Loop Model: replaced linear circle row with `LoopDiagram` SVG component — 4 nodes at 12/3/6/9 positions with dashed circular track and arrowhead indicators. Communicates "loop" accurately.
- Added WhatsApp floating CTA: `components/ui/WhatsAppButton.tsx` — fixed bottom-right, green #25D366, springs in at 2s delay, expands label on hover. Links to `wa.me/918722077934`. Added to root layout.
- Added 404 page: `app/not-found.tsx` — compiler-themed terminal showing ERROR, with "A good compiler never guesses" copy. Back to home CTA.
- Added JSON-LD schema: Organization + LocalBusiness + EducationalOrganization + Course ItemList in `app/layout.tsx` via `<script type="application/ld+json">`.
- Fixed `.gitignore`: added `*.png` and `.playwright-mcp/` to exclude screenshots.
- Build verified: 10 routes, TypeScript clean, zero warnings.

**Decisions made:**
- Terminal animation uses Framer Motion with `delay: heroSequence.visual.delay + line.delay` — ties into existing timing system, no new CSS keyframes needed
- LoopDiagram uses SVG `<circle>` for dashed track + CSS absolute positioning for nodes (not SVG `<text>`) — easier to style with Tailwind and handles responsive sizing better
- WhatsApp button springs in at 2s delay so it doesn't distract from the hero load sequence
- JSON-LD added directly to `<head>` in RootLayout (not via metadata API) — correct approach for `@graph` multi-type schemas

**Files created:**
- `components/ui/WhatsAppButton.tsx`
- `app/not-found.tsx`

**Files modified:**
- `components/sections/Hero.tsx` — terminal visual
- `components/sections/BLCFrameworks.tsx` — circular loop diagram
- `app/layout.tsx` — WhatsApp button + JSON-LD schema
- `.gitignore` — exclude screenshots
- `JOURNAL.md` — this update

**Current state after this session:**
- Full production-ready site, build clean, schema in place
- Hero has on-brand placeholder (terminal) that can optionally stay even after Lottie arrives
- WhatsApp button visible on all pages

**Next action:**
- Push to GitHub → create remote repo, push master branch
- Connect Vercel → import GitHub repo → auto-deploy
- Replace placeholder content once founder provides assets

**Open questions / blockers:**
- Client content still pending (logos, testimonials, stats, photos)
- Formspree endpoint ID needed before contact form goes live

---

### Session 2 — 2026-04-16

**What was done:**
- Used Magic MCP (`21st_magic_component_inspiration`) to gather UI patterns from premium component libraries
- Enhanced `ProgramCard.tsx` — spring hover lift, animated left border (scaleY), icon in rounded square bg, "Learn More" slides up from below, top-right radial glow
- Enhanced `TestimonialCard.tsx` — yellow accent bar fades in on hover, decorative `"` quote mark at 35% opacity, horizontal divider between quote and author
- Refactored `StatCard.tsx` — self-contained (removed AnimatedCounter dependency), uses Framer Motion `useInView` + RAF ease-out cubic, radial glow on dark variant, `aria-live="polite"`, `tabular-nums`
- Full Playwright visual testing: homepage full-page, /programs, /contact
- Mobile viewport testing (375×812): all 12 sections stack correctly, hamburger nav opens/closes
- Desktop Programs dropdown hover tested — AnimatePresence dropdown renders all 6 program links

**Decisions made:**
- Magic MCP builder returned serialized objects; used inspiration results as patterns and wrote components manually
- Playwright `fullPage: true` is the reliable approach — viewport shots get blocked by Framer Motion scroll listeners
- Dev server ran on port 3001 (3000 in use)

**Files modified:**
- `components/ui/ProgramCard.tsx` — enhanced
- `components/ui/TestimonialCard.tsx` — enhanced
- `components/ui/StatCard.tsx` — enhanced (self-contained, removed AnimatedCounter dependency)
- `JOURNAL.md` — this update

**Screenshots generated:**
- `after-magic-fullpage.png` — homepage full-page desktop
- `page-programs.png` — /programs page
- `page-contact.png` — /contact page
- `mobile-home-viewport.png` — homepage at 375px
- `mobile-home-fullpage.png` — full-page mobile
- `mobile-nav-open.png` — hamburger menu open
- `mobile-for-colleges.png` — /for-colleges after nav click
- `desktop-nav-programs-dropdown.png` — Programs dropdown on hover

**Current state after this session:**
- All UI enhanced, all Playwright tests pass, zero regressions

**Next action:**
- Replace placeholder content in `lib/constants.ts` (stats, testimonials, contact)
- Add real partner logos SVG
- Set Formspree ID in `app/contact/page.tsx`
- Push to GitHub → connect Vercel → set domain blcompiler.com

**Open questions / blockers:**
- Real content (stats, testimonials, logos, founder photo) still needed from client

---

### Session 1 — 2026-04-16

**What was done:**
- Created `prd.md`, `CLAUDE.md`, `JOURNAL.md`, full implementation plan
- Scaffolded Next.js 14 manually (create-next-app blocked by existing files)
- Built all 11 plan tasks — complete site: 12 homepage sections + 5 inner pages
- Full production build passing: 10 routes, all TypeScript clean
- Git repo initialized with `.gitignore` (node_modules, .next excluded)

**Key decisions / issues resolved:**
- Font: JetBrains Mono only
- `next.config.ts` → must be `.mjs` in Next.js 14.2 (`.ts` not supported)
- All content in `lib/constants.ts` — never hardcoded in components
- Formspree for contact form (replace `YOUR_FORMSPREE_ID` before launch)

**Files created (source only):**
- `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js`, `.eslintrc.json`, `.gitignore`
- `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `app/sitemap.ts`
- `app/about/page.tsx`, `app/programs/page.tsx`, `app/for-colleges/page.tsx`, `app/for-corporates/page.tsx`, `app/contact/page.tsx`
- `lib/constants.ts`, `lib/animations.ts`, `lib/hooks/useReducedMotion.ts`
- `components/ui/`: Button, Chip, AnimatedCounter, StatCard, TestimonialCard, ProgramCard
- `components/layout/`: Nav, Footer
- `components/sections/`: Hero, SocialProofBar, ImpactNumbers, WhatIsBLC, Programs, BLCFrameworks, ForColleges, ForCorporates, Testimonials, PartnerColleges, CTABanner
- `public/robots.txt`

---

<!-- TEMPLATE for future sessions — copy this block when logging -->
<!--
### Session N — YYYY-MM-DD

**What was done:**
- 

**Decisions made:**
- 

**Files created/modified:**
- 

**Current state after this session:**
- 

**Next action:**
- 

**Open questions / blockers:**
- 
-->
