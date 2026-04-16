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
    <section
      className="py-32"
      style={{ backgroundColor: 'var(--color-primary)' }}
      id="for-colleges"
    >
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
            <motion.div variants={fadeUp}>
              <Chip light>Institutional Partnerships</Chip>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-white"
            >
              Bring BLC to your campus
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
                    className="text-accent mt-0.5 shrink-0"
                    weight="fill"
                  />
                  <span className="text-white/80 text-sm leading-relaxed">
                    {b}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Button href="/contact?type=college" variant="accent">
                Request a campus program
              </Button>
            </motion.div>
          </div>

          {/* Right: College logo cards */}
          <motion.div
            variants={slideFromRight}
            className="grid grid-cols-2 gap-4"
          >
            {COLLEGE_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="bg-white/10 rounded-xl p-6 flex items-center justify-center border border-white/20 aspect-video"
              >
                {/* ⚠️ TEMP: Replace with actual college logos from founder */}
                <span className="text-white/70 text-sm font-medium">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
