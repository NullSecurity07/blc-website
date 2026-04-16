'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { heroSequence, float } from '@/lib/animations'

const TERMINAL_LINES = [
  { text: '$ blc --compile student.ts', color: 'rgba(139,185,247,0.9)', delay: 0 },
  { text: '', color: '', delay: 0.15 },
  { text: '→ Aptitude training ............. ✓', color: 'rgba(255,255,255,0.55)', delay: 0.3 },
  { text: '→ Technical skills .............. ✓', color: 'rgba(255,255,255,0.55)', delay: 0.5 },
  { text: '→ Communication & soft skills ... ✓', color: 'rgba(255,255,255,0.55)', delay: 0.7 },
  { text: '→ Mock interviews ............... ✓', color: 'rgba(255,255,255,0.55)', delay: 0.9 },
  { text: '', color: '', delay: 1.0 },
  { text: '✓ Build successful.', color: '#4ade80', delay: 1.1 },
  { text: '  Offer received. 🎉', color: '#4ade80', delay: 1.25 },
]

function TerminalBody() {
  return (
    <div
      className="px-5 pt-4 pb-6 text-xs leading-6 space-y-0"
      style={{ backgroundColor: '#0A0F2E', fontFamily: 'inherit' }}
    >
      {TERMINAL_LINES.map((line, i) =>
        line.text === '' ? (
          <div key={i} className="h-3" />
        ) : (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: heroSequence.visual.delay + line.delay,
              duration: 0.25,
              ease: 'easeOut',
            }}
            style={{ color: line.color }}
          >
            {line.text}
          </motion.div>
        )
      )}

      {/* Blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{ delay: heroSequence.visual.delay + 1.4, duration: 0.1 }}
        className="inline-block"
      >
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
          style={{ color: 'rgba(139,185,247,0.8)' }}
        >
          ▋
        </motion.span>
      </motion.span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Subtle diagonal grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,50,139,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,50,139,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center w-full">
        {/* Left: Text (3/5) */}
        <div className="lg:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: heroSequence.nav.delay, duration: 0.4 }}
          >
            <Chip>India&apos;s Premier Engineering Career Accelerator</Chip>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: heroSequence.headline.delay,
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            Have Patience and{' '}
            <span className="text-primary">Behave Like Compiler</span>
          </motion.h1>

          <motion.p
            className="text-lg text-text-muted max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: heroSequence.subtext.delay,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            Bridging the gap between academic learning and real-world industry
            — through structured training, mentorship, and career strategy.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: heroSequence.cta.delay,
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            <Button href="#programs" variant="accent">
              Explore Programs
            </Button>
            <Button href="/contact" variant="ghost">
              Talk to Us
            </Button>
          </motion.div>
        </div>

        {/* Right: Animated compiler terminal (2/5) */}
        <motion.div
          className="lg:col-span-2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: heroSequence.visual.delay,
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <motion.div
            variants={float}
            animate="animate"
            className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 24px 64px rgba(13,27,94,0.22)' }}
          >
            {/* Terminal toolbar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ backgroundColor: '#0D1B5E' }}
            >
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span
                className="ml-3 text-xs"
                style={{ color: 'rgba(139,185,247,0.5)', fontFamily: 'inherit' }}
              >
                blc-compiler
              </span>
            </div>

            {/* Terminal body */}
            <TerminalBody />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
