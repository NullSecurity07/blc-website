'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quotes } from '@phosphor-icons/react'
import { TESTIMONIALS } from '@/lib/constants'
import { Chip } from '@/components/ui/Chip'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false)
  const total = TESTIMONIALS.length

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((i) => (i + 1) % total)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused, total])

  const prev = () => {
    setDirection(-1)
    setActiveIndex((i) => (i - 1 + total) % total)
  }

  const next = () => {
    setDirection(1)
    setActiveIndex((i) => (i + 1) % total)
  }

  const goTo = (i: number) => {
    setDirection(i > activeIndex ? 1 : -1)
    setActiveIndex(i)
  }

  const t = TESTIMONIALS[activeIndex]

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  }

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
          <motion.div variants={fadeUp} className="mb-4">
            <Chip>What they say</Chip>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-text-primary">
            Real results. Real people.
          </motion.h2>
        </motion.div>

        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card */}
          <div className="relative overflow-hidden min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="bg-white border border-border rounded-2xl p-10 shadow-sm relative"
              >
                {/* Decorative quote */}
                <Quotes
                  size={48}
                  className="text-primary/10 absolute top-6 right-8"
                  weight="fill"
                />

                {/* Accent bar */}
                <div className="w-10 h-1 bg-accent rounded-full mb-6" />

                <p className="text-text-primary text-lg leading-relaxed mb-8">
                  {t.quote}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-lg">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
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
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-primary w-6' : 'bg-border w-2'
                  }`}
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
