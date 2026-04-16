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
