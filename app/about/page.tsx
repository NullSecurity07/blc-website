import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from '@phosphor-icons/react/dist/ssr'

export const metadata = {
  title: 'About BLC — Behave Like Compiler',
  description:
    'Learn about BLC and founder Vishal Vanaki — the mission to bridge academic learning and real-world industry for engineering students.',
}

const VALUES = [
  {
    label: 'Systematic',
    description:
      'A compiler processes every input in sequence. No guessing, no skipping. We teach engineers to approach problems the same way.',
  },
  {
    label: 'Honest',
    description:
      'We tell students where they stand, not what they want to hear. Real feedback is the only feedback that leads to real improvement.',
  },
  {
    label: 'Outcome-first',
    description:
      'Every module exists because it produces a result — a round cleared, a skill demonstrated, an offer received.',
  },
  {
    label: 'Industry-grounded',
    description:
      'Our curriculum is built from actual placement data, not academic assumptions about what companies want.',
  },
]

const COMPILER_PRINCIPLES = [
  {
    step: '01',
    title: 'No shortcuts',
    body: 'A compiler cannot skip parsing a line because it looks too hard. It processes every input completely. We expect the same discipline from our students.',
  },
  {
    step: '02',
    title: 'Systematic execution',
    body: 'Good code runs the same way every time. Good preparation should too — not cramming the night before, but building capability consistently.',
  },
  {
    step: '03',
    title: 'Clear error messages',
    body: 'Compilers don\'t hide problems. They surface them. Our feedback is direct — you need to know exactly what to fix, not a vague "try harder".',
  },
  {
    step: '04',
    title: 'Build output that works',
    body: 'The goal of compilation is a working binary. The goal of BLC is a placed engineer. Everything traces back to that output.',
  },
]

export default function About() {
  return (
    <main className="pt-24 pb-32">
      {/* Page header */}
      <div className="bg-bg-subtle border-b border-border py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <Chip>About BLC</Chip>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mt-6 mb-6">
              We don&apos;t teach.<br />We transform.
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              BLC was born from a simple observation: brilliant engineering graduates
              were failing interviews — not because they lacked intelligence, but
              because no one taught them to think the way industry expects.
            </p>
          </div>
        </div>
      </div>

      {/* Founder section */}
      <section className="py-24 border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-6">
                The Founder
              </p>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Vishal Vanaki
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed text-sm">
                <p>
                  Vishal built BLC after watching the same pattern repeat across
                  engineering colleges in Karnataka — technically capable students
                  struggling through rounds they should have cleared, not because
                  they didn&apos;t know the material, but because they hadn&apos;t
                  been trained to perform under interview conditions.
                </p>
                <p>
                  His approach is different from standard placement coaching. Rather
                  than running students through question banks, BLC trains them to
                  think systematically — to approach problems with the same
                  methodical discipline a compiler uses to process code.
                </p>
                <p>
                  BLC has worked with colleges across Karnataka — Amrita, CMR, Canara,
                  Alvas — and graduates placed at IBM, Capgemini, Accenture, Wipro,
                  Hexaware, and Intel.
                </p>
              </div>

              <blockquote className="border-l-4 border-accent pl-6 py-2 mt-8">
                <p className="text-xl font-bold text-text-primary">
                  &ldquo;Have Patience and Behave Like Compiler&rdquo;
                </p>
                <p className="text-text-muted text-sm mt-2">— Vishal Vanaki, Founder</p>
              </blockquote>
            </div>

            {/* Photo placeholder */}
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 to-primary-light/10 border border-border flex items-center justify-center">
              <p className="text-text-muted text-sm text-center px-8">
                ⚠️ Founder photo placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Compiler Philosophy */}
      <section className="py-24 border-b border-border bg-bg-subtle">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
              The Philosophy
            </p>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Why &ldquo;Behave Like Compiler&rdquo;?
            </h2>
            <p className="text-text-muted leading-relaxed text-sm">
              A compiler is the most honest, most systematic tool in engineering.
              It doesn&apos;t guess, doesn&apos;t take shortcuts, doesn&apos;t pass
              broken code. It surfaces every error and forces you to fix it. That
              discipline is exactly what separates engineers who get placed from
              those who don&apos;t.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {COMPILER_PRINCIPLES.map((p) => (
              <div
                key={p.step}
                className="bg-white rounded-2xl p-6 border border-border"
              >
                <span className="text-3xl font-bold text-primary/20 tabular-nums">{p.step}</span>
                <h3 className="text-base font-bold text-text-primary mt-2 mb-2">{p.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl font-bold text-text-primary">
              Four principles that run everything we do.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.label} className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <CheckCircle size={16} className="text-text-primary" weight="bold" />
                </div>
                <h3 className="font-bold text-text-primary">{v.label}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 border-b border-border bg-bg-subtle">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Students trained' },
              { value: '85%', label: 'Placement rate' },
              { value: '10+', label: 'Partner colleges' },
              { value: '15+', label: 'Hiring companies' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-primary tabular-nums">{s.value}</p>
                <p className="text-sm text-text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Want to work with us?
          </h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto">
            Whether you&apos;re a student, a college, or a company — we&apos;d love
            to start a conversation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact" variant="primary">Get in touch</Button>
            <Button href="/programs" variant="ghost">View programs</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
