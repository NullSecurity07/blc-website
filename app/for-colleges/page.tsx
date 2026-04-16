import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr'

export const metadata = {
  title: 'For Colleges — Behave Like Compiler',
  description:
    'Partner with BLC to bring structured placement training to your engineering campus. Proven framework, dedicated trainer, measurable outcomes.',
}

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Initial Assessment',
    body: 'We meet with your T&P Officer and HOD to understand your students\' current skill levels, your placement season timeline, and the companies you\'re targeting.',
  },
  {
    step: '02',
    title: 'Custom Program Design',
    body: 'BLC designs a module schedule tailored to your academic calendar — working around exams, lab sessions, and other commitments. No one-size-fits-all templates.',
  },
  {
    step: '03',
    title: 'Dedicated Trainer on Campus',
    body: 'A BLC trainer is assigned to your institution for the duration of the program. Not a different face every week — consistent mentorship builds trust and results.',
  },
  {
    step: '04',
    title: 'Tracked Outcomes',
    body: 'Pre and post assessments measure improvement at the individual and batch level. You get data on who is ready, who needs more work, and where the gaps are.',
  },
]

const WHAT_YOU_GET = [
  'Structured curriculum covering aptitude, technical, communication, and soft skills',
  'Dedicated BLC trainer assigned exclusively to your campus for program duration',
  'Pre/post skill assessments with individual student progress reports',
  'Mock interview simulations with feedback sessions',
  'Placement data and outcomes tracked across the batch',
  'Flexible scheduling around your academic calendar and exam timetable',
  'Direct T&P Officer coordination — one point of contact throughout',
]

const PARTNER_COLLEGES = ['Amrita Institute', 'CMR Institute', 'Canara Engineering College', 'Alvas Institute']

export default function ForCollegesPage() {
  return (
    <main className="pt-24 pb-32">
      {/* Hero */}
      <div
        className="py-24 border-b border-border"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <Chip light>Institutional Partnerships</Chip>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6 mb-6">
              Bring BLC to your campus.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed max-w-xl">
              BLC partners with engineering colleges across Karnataka to deliver
              structured, outcome-driven placement preparation — designed around
              your students, your calendar, your targets.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button href="/contact?type=college" variant="accent">
                Request a campus program
              </Button>
              <a
                href="tel:+918722077934"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm py-4"
              >
                Or call: +91 8722077934 <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 bg-bg-subtle border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '10+', label: 'Partner colleges' },
              { value: '500+', label: 'Students trained' },
              { value: '85%', label: 'Placement rate' },
              { value: '4', label: 'Years running programs' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-primary tabular-nums">{s.value}</p>
                <p className="text-sm text-text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
              The Process
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              How a BLC campus partnership works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-bg-subtle rounded-2xl p-6 border border-border">
                <span className="text-3xl font-bold text-primary/20 tabular-nums">{step.step}</span>
                <h3 className="text-base font-bold text-text-primary mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
                What&apos;s Included
              </p>
              <h2 className="text-3xl font-bold text-text-primary mb-8">
                Everything your T&P team needs — and nothing you don&apos;t.
              </h2>
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

            {/* Partner colleges */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-6">
                Colleges We&apos;ve Worked With
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {PARTNER_COLLEGES.map((college) => (
                  <div
                    key={college}
                    className="bg-bg-subtle rounded-xl border border-border px-4 py-5 flex items-center justify-center text-center"
                  >
                    <span className="text-sm font-medium text-text-muted">{college}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <p className="text-sm font-bold text-text-primary mb-2">
                  Not seeing your college?
                </p>
                <p className="text-sm text-text-muted mb-4">
                  We&apos;re always open to new partnerships. If your institution is
                  serious about placement outcomes, let&apos;s talk.
                </p>
                <Button href="/contact?type=college" variant="primary">
                  Start the conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready to bring BLC to your campus?
          </h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            Reach out and we&apos;ll schedule a meeting with your T&P Officer within
            48 hours.
          </p>
          <Button href="/contact?type=college" variant="accent">
            Request a campus program
          </Button>
        </div>
      </section>
    </main>
  )
}
