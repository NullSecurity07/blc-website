'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { TESTIMONIALS } from '@/lib/constants'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { Chip } from '@/components/ui/Chip'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-advance every 5s, pause on hover
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  // Scroll active card into view within the carousel container only
  useEffect(() => {
    if (!scrollRef.current) return
    const card = scrollRef.current.children[activeIndex] as HTMLElement
    if (!card) return
    scrollRef.current.scrollTo({
      left: card.offsetLeft - scrollRef.current.offsetLeft,
      behavior: 'smooth',
    })
  }, [activeIndex])

  const prev = () =>
    setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () =>
    setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)

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
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-text-primary"
          >
            Real results. Real people.
          </motion.h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="snap-center">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
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
                  onClick={() => setActiveIndex(i)}
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
