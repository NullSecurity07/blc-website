'use client'
import { motion } from 'framer-motion'
import { Chip } from '@/components/ui/Chip'
import { SKILL_TREE } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/animations'

const LOOP_STEPS = [
  { label: 'Learn', angle: 270, desc: 'Absorb concepts' },
  { label: 'Apply', angle: 0, desc: 'Hands-on practice' },
  { label: 'Evaluate', angle: 90, desc: 'Get feedback' },
  { label: 'Repeat', angle: 180, desc: 'Deepen mastery' },
]

// Circular loop diagram — 4 nodes positioned at 12/3/6/9 using CSS transforms
function LoopDiagram() {
  const R = 110 // radius in px
  const SIZE = 320 // container size

  return (
    <div
      className="relative"
      style={{ width: SIZE, height: SIZE }}
      aria-label="BLC Loop Model: Learn, Apply, Evaluate, Repeat"
    >
      {/* SVG circular arrow track */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
        aria-hidden="true"
      >
        {/* Dashed circular track */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={R}
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          opacity="0.25"
        />
        {/* 4 arc arrows between nodes */}
        {[0, 1, 2, 3].map((i) => {
          const startAngle = ((i * 90 - 90) * Math.PI) / 180
          const endAngle = (((i + 1) * 90 - 90) * Math.PI) / 180
          const midAngle = (startAngle + endAngle) / 2
          const cx = SIZE / 2
          const cy = SIZE / 2
          // arrow tip near the end node, slightly before it
          const tipAngle = endAngle - 0.18
          const tx = cx + R * Math.cos(tipAngle)
          const ty = cy + R * Math.sin(tipAngle)
          // arrow direction tangent
          const dx = -Math.sin(tipAngle)
          const dy = Math.cos(tipAngle)
          const al = 8
          return (
            <g key={i}>
              <polyline
                points={`${tx - dx * al - dy * 4},${ty - dy * al + dx * 4} ${tx},${ty} ${tx - dx * al + dy * 4},${ty - dy * al - dx * 4}`}
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
                fill="none"
              />
            </g>
          )
        })}
        {/* Center label */}
        <text
          x={SIZE / 2}
          y={SIZE / 2 - 8}
          textAnchor="middle"
          fill="var(--color-primary)"
          fontSize="11"
          fontFamily="inherit"
          fontWeight="700"
          opacity="0.5"
        >
          BLC
        </text>
        <text
          x={SIZE / 2}
          y={SIZE / 2 + 8}
          textAnchor="middle"
          fill="var(--color-text-muted)"
          fontSize="9"
          fontFamily="inherit"
          opacity="0.6"
        >
          LOOP MODEL
        </text>
      </svg>

      {/* Node items */}
      {LOOP_STEPS.map(({ label, angle, desc }, i) => {
        const rad = ((angle - 90) * Math.PI) / 180
        const cx = SIZE / 2 + R * Math.cos(rad) - 44
        const cy = SIZE / 2 + R * Math.sin(rad) - 44
        return (
          <div
            key={label}
            className="absolute flex flex-col items-center"
            style={{ left: cx, top: cy, width: 88 }}
          >
            <div
              className="w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg border-2 text-white"
              style={{
                backgroundColor: 'var(--color-primary)',
                borderColor: 'var(--color-primary-light)',
                boxShadow: '0 4px 16px rgba(30,50,139,0.3)',
              }}
            >
              <span className="text-[10px] opacity-60 font-medium">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-xs font-bold leading-tight">{label}</span>
            </div>
            <p className="text-[10px] text-text-muted mt-1.5 text-center leading-tight">{desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export function BLCFrameworks() {
  return (
    <section className="bg-bg-subtle py-32">
      <div className="max-w-container mx-auto px-6 space-y-28">

        {/* The BLC Loop Model */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <Chip>Our Methodology</Chip>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-text-primary mb-4"
          >
            The BLC Loop Model
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-text-muted max-w-md mx-auto mb-12"
          >
            Learning is not linear. Real skill comes from repeated, guided cycles of practice and feedback.
          </motion.p>

          {/* Circular loop diagram */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center"
          >
            <LoopDiagram />
          </motion.div>
        </motion.div>

        {/* 4-Year Skill Tree */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="text-center mb-12">
            <motion.div variants={fadeUp} className="mb-4">
              <Chip>Career Roadmap</Chip>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold text-text-primary"
            >
              A 4-year roadmap to industry readiness
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {SKILL_TREE.map((phase, i) => (
              <motion.div
                key={phase.year}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 border border-border bg-white group hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Color strip at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: phase.color }}
                />
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: phase.color }}
                >
                  {i + 1}
                </div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                  {phase.year}
                </p>
                <h3 className="font-bold text-text-primary mb-2">
                  {phase.phase}
                </h3>
                <p className="text-sm text-text-muted">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
