'use client'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({
  target,
  suffix = '',
  duration = 1800,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setValue(target)
      return
    }

    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, reduced])

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}
