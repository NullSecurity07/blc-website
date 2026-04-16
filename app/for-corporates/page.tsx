import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from '@phosphor-icons/react/dist/ssr'

export const metadata = {
  title: 'For Corporates — Behave Like Compiler',
  description:
    'Custom workforce training from BLC. Programs designed around your team\'s specific skill gaps with measurable outcomes.',
}

const BENEFITS = [
  'Needs assessment before any program is designed',
  "Custom curriculum mapped to your team's specific skill gaps",
  'Measurable outcomes: pre/post skill assessments included',
  'Programs for freshers, mid-level engineers, and leadership tracks',
  'Delivered on-site or remotely, flexible to your schedule',
]

export default function ForCorporatesPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-2xl">
          <Chip>For Corporates</Chip>
          <h1 className="text-5xl font-bold text-text-primary mt-6 mb-6">
            Custom training for your workforce
          </h1>
          <p className="text-text-muted leading-relaxed mb-8">
            BLC designs bespoke training programs for technology teams —
            delivered to organizations including IBM, Accenture, and Wipro. We
            don&apos;t offer off-the-shelf courses. Every program starts with a
            needs assessment and is built around your team&apos;s actual skill
            gaps and business goals.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4">
            What&apos;s included
          </h2>
          <ul className="space-y-4 mb-10">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-primary mt-0.5 shrink-0"
                  weight="fill"
                />
                <span className="text-text-muted text-sm leading-relaxed">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <Button href="/contact?type=corporate" variant="primary">
            Get a custom quote
          </Button>
        </div>
      </div>
    </main>
  )
}
