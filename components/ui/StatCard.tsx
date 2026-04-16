'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCardProps {
  value: number
  suffix: string
  label: string
  dark?: boolean
}

export function StatCard({ value, suffix, label, dark = false }: StatCardProps) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const rafRef = useRef<number | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 1800
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(Math.round(eased * value))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [isInView, value])

  return (
    <div
      ref={ref}
      className="rounded-2xl p-8 text-center relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: dark ? 'var(--color-primary)' : 'var(--color-bg-subtle)',
        boxShadow: dark ? '0 4px 24px rgba(30,50,139,0.25)' : '0 2px 8px rgba(30,50,139,0.06)',
      }}
    >
      {/* Subtle radial glow on dark variant */}
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(139,185,247,0.15) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
      )}

      <div
        className="text-6xl font-bold mb-2 leading-none relative z-10 tabular-nums"
        style={{ color: dark ? 'var(--color-accent)' : 'var(--color-primary)' }}
        aria-live="polite"
        aria-atomic="true"
      >
        {displayed}{suffix}
      </div>

      <p
        className="text-sm relative z-10"
        style={{ color: dark ? 'rgba(255,255,255,0.65)' : 'var(--color-text-muted)' }}
      >
        {label}
      </p>
    </div>
  )
}
