import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from '@phosphor-icons/react/dist/ssr'

export const metadata = {
  title: 'For Colleges — Behave Like Compiler',
  description:
    'Partner with BLC to bring structured placement training to your engineering campus. Proven framework, dedicated trainer, measurable outcomes.',
}

const BENEFITS = [
  'Structured curriculum aligned to your placement season timeline',
  'Dedicated BLC trainer assigned to your campus',
  'Measurable placement outcomes tracked per batch',
  'Flexible scheduling around the academic calendar',
  'Pre and post assessments to show improvement',
]

export default function ForCollegesPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-2xl">
          <Chip>For Colleges</Chip>
          <h1 className="text-5xl font-bold text-text-primary mt-6 mb-6">
            Bring BLC to your campus
          </h1>
          <p className="text-text-muted leading-relaxed mb-8">
            BLC partners with engineering colleges across Karnataka to deliver
            structured, outcome-driven placement preparation programs. We work
            directly with Training & Placement Officers and HODs to design a
            program that fits your students&apos; needs and your academic
            calendar.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mb-4">
            What we bring to your campus
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

          <Button href="/contact?type=college" variant="primary">
            Request a campus program
          </Button>
        </div>
      </div>
    </main>
  )
}
