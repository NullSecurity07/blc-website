import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr'

export const metadata = {
  title: 'For Corporates — Behave Like Compiler',
  description:
    "Custom workforce training from BLC. Programs designed around your team's specific skill gaps with measurable outcomes.",
}

const PROCESS = [
  {
    step: '01',
    title: 'Needs Assessment',
    body: 'Before any program is designed, we conduct a structured needs assessment — interviews with team leads, skills gap analysis, and review of your current onboarding or L&D materials.',
  },
  {
    step: '02',
    title: 'Custom Curriculum Design',
    body: 'Based on the assessment, we build a curriculum mapped to your team\'s specific gaps. No off-the-shelf content — every module is purpose-built for your organization.',
  },
  {
    step: '03',
    title: 'Delivery',
    body: 'Programs are delivered on-site at your office or remotely — whichever works for your team structure. Cohort size, schedule, and pacing are all configurable.',
  },
  {
    step: '04',
    title: 'Measurement & Reporting',
    body: 'Pre and post assessments measure skill change at the individual level. You receive a batch-level outcome report — concrete evidence of ROI on training spend.',
  },
]

const DELIVERY_FORMATS = [
  {
    format: 'Fresher Induction',
    description:
      'Structured onboarding programs for new engineers joining your team — bridging the gap between their college training and your production environment.',
  },
  {
    format: 'Mid-Level Upskilling',
    description:
      'Targeted modules for engineers with 2–5 years of experience — communication, leadership, advanced technical depth.',
  },
  {
    format: 'Team Communication Workshops',
    description:
      'Half-day or full-day sessions on professional communication, meeting culture, cross-functional collaboration, and technical writing.',
  },
  {
    format: 'Assessment Center Preparation',
    description:
      'For engineering teams preparing for internal certifications, promotions, or performance reviews.',
  },
]

const COMPANIES = ['IBM', 'Capgemini', 'Accenture', 'Wipro', 'Hexaware', 'Intel']

const WHAT_YOU_GET = [
  'Needs assessment and gap analysis before any program is designed',
  "Custom curriculum built around your team's actual skill gaps",
  'Pre and post assessments to measure skill improvement',
  'Individual and batch-level outcome reports',
  'On-site or remote delivery, flexible scheduling',
  'Programs for freshers, mid-level, and senior engineers',
  'Single point of contact throughout the engagement',
]

export default function ForCorporatesPage() {
  return (
    <main className="pt-24 pb-32">
      {/* Hero */}
      <div className="py-24 border-b border-border bg-bg-subtle">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <Chip>Corporate Training</Chip>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mt-6 mb-6">
              Custom training for your workforce.
            </h1>
            <p className="text-text-muted text-xl leading-relaxed max-w-xl">
              BLC doesn&apos;t offer off-the-shelf training packages. Every program
              starts with understanding what your team actually needs — then building
              something that addresses exactly that.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button href="/contact?type=corporate" variant="primary">
                Get a custom quote
              </Button>
              <a
                href="tel:+918722077934"
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm py-4"
              >
                Or call: +91 8722077934 <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Companies strip */}
      <section className="py-12 border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <p className="text-xs text-text-muted uppercase tracking-widest mb-6">
            Graduates placed at
          </p>
          <div className="flex flex-wrap gap-3">
            {COMPANIES.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full border border-border text-sm text-text-muted font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
              How It Works
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              Four stages. No surprises.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-bg-subtle rounded-2xl p-6 border border-border">
                <span className="text-3xl font-bold text-primary/20 tabular-nums">{p.step}</span>
                <h3 className="text-base font-bold text-text-primary mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get + Delivery formats */}
      <section className="py-24 border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What's included */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-6">
                What&apos;s Included
              </p>
              <ul className="space-y-4">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                      weight="fill"
                    />
                    <span className="text-sm text-text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery formats */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-6">
                Delivery Formats
              </p>
              <div className="space-y-4">
                {DELIVERY_FORMATS.map((f) => (
                  <div
                    key={f.format}
                    className="border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors"
                  >
                    <h3 className="text-sm font-bold text-text-primary mb-1">{f.format}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="bg-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let&apos;s build your program.
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Tell us about your team and what you&apos;re trying to solve.
              We&apos;ll respond within 24 hours with an approach.
            </p>
            <Button href="/contact?type=corporate" variant="accent">
              Get a custom quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
