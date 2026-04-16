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
              {/* ⚠️ TEMP: Replace with actual SVG logos from founder */}
              <div className="h-10 px-6 bg-white rounded-lg border border-border flex items-center justify-center min-w-[100px] shadow-sm">
                <span className="text-sm font-bold text-text-muted">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
