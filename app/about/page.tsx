import { Chip } from '@/components/ui/Chip'

export const metadata = {
  title: 'About BLC — Behave Like Compiler',
  description:
    'Learn about BLC and founder Vishal Vanaki — the mission to bridge academic learning and real-world industry for engineering students.',
}

export default function About() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6">
        <div className="max-w-2xl">
          <Chip>About BLC</Chip>
          <h1 className="text-5xl font-bold text-text-primary mt-6 mb-6">
            We don&apos;t teach. We transform.
          </h1>
          <p className="text-text-muted leading-relaxed mb-4">
            BLC (Behave Like Compiler) was founded by Vishal Vanaki with one
            mission: bridge the gap between what engineering colleges teach and
            what industry demands.
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            The name comes from a simple philosophy — a compiler doesn&apos;t
            guess, doesn&apos;t shortcut, doesn&apos;t skip steps. It processes
            inputs systematically and produces reliable outputs. That&apos;s
            how we train engineers.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            Our programs are built around the realities of tech hiring in India
            — aptitude tests, technical rounds, HR interviews, and the soft
            skills that separate candidates who get offers from those who
            don&apos;t.
          </p>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-accent pl-6 py-2 mb-8">
            <p className="text-2xl font-bold italic text-text-primary">
              &ldquo;Have Patience and Behave Like Compiler&rdquo;
            </p>
            <p className="text-text-muted text-sm mt-2">— Vishal Vanaki, Founder</p>
          </blockquote>

          {/* ⚠️ TEMP: Add founder photo, full biography, and video when content is ready */}
          <div className="w-full max-w-md aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 to-primary-light/10 border border-border flex items-center justify-center">
            <p className="text-text-muted text-sm">
              Founder photo / video placeholder
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
