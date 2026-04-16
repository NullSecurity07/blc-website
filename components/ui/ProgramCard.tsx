'use client'
import {
  Brain,
  Code,
  Users,
  Microphone,
  Fire,
  Rocket,
  ArrowRight,
} from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'

const ICON_MAP: Record<string, React.ElementType> = {
  brain: Brain,
  code: Code,
  users: Users,
  microphone: Microphone,
  fire: Fire,
  rocket: Rocket,
}

interface ProgramCardProps {
  title: string
  description: string
  icon: string
  id: string
}

export function ProgramCard({ title, description, icon }: ProgramCardProps) {
  const Icon = ICON_MAP[icon] ?? Code
  const reduced = useReducedMotion()

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="group relative bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden h-full flex flex-col transition-shadow duration-300"
      style={{ borderColor: 'var(--color-border)' }}
    >
      {/* Left accent bar — grows on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 origin-center scale-y-0 group-hover:scale-y-100 rounded-l-2xl transition-transform duration-300 ease-out"
        style={{ backgroundColor: 'var(--color-primary)' }}
        aria-hidden="true"
      />

      {/* Top-right glow on hover */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,50,139,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div className="mb-5 relative">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/10"
          style={{ backgroundColor: 'rgba(30,50,139,0.06)' }}
        >
          <Icon size={32} weight="duotone" style={{ color: 'var(--color-primary)' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3
          className="text-base font-bold mb-2 leading-snug"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {description}
        </p>

        {/* Learn more — fades + slides in on hover */}
        <div className="mt-5 overflow-hidden h-5">
          <div
            className="flex items-center gap-1.5 text-sm font-semibold translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out"
            style={{ color: 'var(--color-primary)' }}
          >
            Learn More
            <ArrowRight size={13} weight="bold" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
