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
      {/* Animated dot field */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(139,185,247,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(30,50,139,0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
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
          <motion.p
            variants={fadeUp}
            className="text-white/60 text-lg max-w-lg mx-auto"
          >
            Join hundreds of engineers who&apos;ve transformed their careers
            with BLC.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button href="/contact" variant="accent">
              Start your journey
            </Button>
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
