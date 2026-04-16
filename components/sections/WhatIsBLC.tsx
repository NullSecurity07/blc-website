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
            <motion.div variants={fadeUp}>
              <Chip>Our Story</Chip>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-bold text-text-primary"
            >
              We don&apos;t teach.
              <br />
              We transform.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text-muted leading-relaxed"
            >
              BLC was born from a simple observation: brilliant engineering
              graduates were failing interviews — not because they lacked
              intelligence, but because no one taught them to think the way
              industry expects.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-text-muted leading-relaxed"
            >
              Vishal Vanaki built BLC to close that gap — with a methodology
              that mirrors how real software teams operate, how real interviews
              are conducted, and how real careers are built.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp}
              className="border-l-4 border-accent pl-6 py-2"
            >
              <p className="text-2xl font-bold italic text-text-primary">
                &ldquo;Have Patience and Behave Like Compiler&rdquo;
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

          {/* Right: Photo / Video placeholder */}
          <motion.div variants={slideFromRight} className="flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 to-primary-light/10 border border-border flex items-center justify-center">
              {/* ⚠️ TEMP: Replace with Vishal's founder photo or short video embed */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <p className="text-text-muted text-sm">Founder photo placeholder</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
