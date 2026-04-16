'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'
import { Chip } from '@/components/ui/Chip'
import { COMPANY_LOGOS } from '@/lib/constants'
import { staggerContainer, fadeUp, slideFromRight } from '@/lib/animations'

const BENEFITS = [
  'Needs assessment before program design',
  "Custom curriculum mapped to your team's skill gaps",
  'Measurable outcomes: pre/post assessments included',
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
          <motion.div
            variants={slideFromRight}
            className="grid grid-cols-3 gap-4"
          >
            {COMPANY_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="bg-white rounded-xl p-4 flex items-center justify-center border border-border aspect-video shadow-sm"
              >
                {/* ⚠️ TEMP: Replace with actual company logos from founder */}
                <span className="text-text-muted text-xs font-bold">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right: Text */}
          <div className="space-y-6">
            <motion.div variants={fadeUp}>
              <Chip>Corporate Training</Chip>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-text-primary"
            >
              Custom training for your workforce
            </motion.h2>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {BENEFITS.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-primary mt-0.5 shrink-0"
                    weight="fill"
                  />
                  <span className="text-text-muted text-sm leading-relaxed">
                    {b}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Button href="/contact?type=corporate" variant="primary">
                Get a custom quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
