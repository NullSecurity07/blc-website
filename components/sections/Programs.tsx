'use client'
import { motion } from 'framer-motion'
import { PROGRAMS } from '@/lib/constants'
import { ProgramCard } from '@/components/ui/ProgramCard'
import { Chip } from '@/components/ui/Chip'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function Programs() {
  return (
    <section className="bg-white py-32" id="programs">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="mb-4">
            <Chip>What We Teach</Chip>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-text-primary mb-4"
          >
            Programs built for the real world
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-text-muted max-w-lg mx-auto"
          >
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
            <motion.div key={program.id} variants={fadeUp} className="flex">
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
