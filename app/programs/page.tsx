import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Programs — Behave Like Compiler',
  description:
    'Explore BLC programs: Aptitude Training, Technical Training, Soft Skills, Verbal Communication, FireStarter Workshops, and PrepSprint mock interviews.',
}

const PROGRAM_DETAILS = [
  {
    id: 'aptitude',
    number: '01',
    title: 'Aptitude Training',
    tagline: 'Clear every screening round before you even see the interviewer.',
    description:
      'Most engineering students lose placement opportunities at the very first stage — the online aptitude test. BLC\'s Aptitude Training builds the logical and quantitative reasoning skills needed to consistently clear these rounds under timed conditions.',
    topics: [
      'Quantitative aptitude: percentages, profit/loss, time-speed-distance, ratios',
      'Logical reasoning: syllogisms, blood relations, coding-decoding, series',
      'Data interpretation: graphs, tables, pie charts',
      'Verbal reasoning: reading comprehension, sentence correction',
      'Timed mock tests modeled on actual company assessments',
    ],
    outcomes: [
      'Clear TCS, Infosys, Wipro, and Capgemini online rounds consistently',
      'Finish aptitude tests within allotted time with accuracy',
      'Develop a personal time-management strategy for assessments',
    ],
    who: 'Pre-final and final year engineering students preparing for on-campus or off-campus placements.',
    accent: '#8BB9F7',
  },
  {
    id: 'technical',
    number: '02',
    title: 'Technical Training',
    tagline: 'Write code that impresses. Answer questions that stump others.',
    description:
      'Technical rounds separate good students from placed students. BLC\'s Technical Training goes beyond textbook coverage — it teaches you to think through problems the way interviewers expect, covering the domains that appear most in real tech hiring rounds.',
    topics: [
      'Data Structures: arrays, linked lists, stacks, queues, trees, graphs',
      'Algorithms: sorting, searching, recursion, dynamic programming',
      'Database Management Systems: SQL, normalization, transactions',
      'Operating Systems: process management, memory management, deadlocks',
      'Computer Networks: OSI model, TCP/IP, DNS, HTTP',
      'Object-Oriented Programming: SOLID principles, design patterns',
    ],
    outcomes: [
      'Solve medium-difficulty LeetCode problems under interview conditions',
      'Explain technical concepts clearly when asked "walk me through this"',
      'Handle multi-domain technical interviews at service and product companies',
    ],
    who: 'Students targeting IT service companies and product-based firms. Especially useful for those who understand theory but can\'t apply it under pressure.',
    accent: '#1E328B',
  },
  {
    id: 'soft-skills',
    number: '03',
    title: 'Soft Skills Development',
    tagline: 'Technical skills get you the interview. Soft skills get you the offer.',
    description:
      'Across thousands of placements, the same pattern repeats: technically strong candidates are rejected while slightly weaker candidates with stronger interpersonal skills get placed. BLC\'s Soft Skills program addresses the traits that interviewers actually evaluate.',
    topics: [
      'Professional communication: email etiquette, meeting conduct, feedback',
      'Teamwork and collaboration: managing disagreement, shared ownership',
      'Leadership fundamentals: initiative, accountability, decision making',
      'Time management: prioritization frameworks, meeting deadlines',
      'Emotional intelligence: self-awareness, empathy, pressure handling',
      'Group Discussion technique: structured argumentation, listening, contribution',
    ],
    outcomes: [
      'Perform confidently in Group Discussion rounds',
      'Handle behavioral interview questions with structure (STAR method)',
      'Present yourself as a professional from day one of employment',
    ],
    who: 'All engineering students — particularly those who excel technically but struggle with GD rounds, HR interviews, or feel socially awkward in professional settings.',
    accent: '#FEBB39',
  },
  {
    id: 'verbal',
    number: '04',
    title: 'Verbal Communication',
    tagline: 'Say what you mean. Say it clearly. Say it with confidence.',
    description:
      'For many engineering students in India, the gap between what they know and what they can communicate is career-defining. BLC\'s Verbal Communication program builds the ability to speak with clarity and confidence in professional environments — whether it\'s a technical explanation or an HR conversation.',
    topics: [
      'Spoken English fluency: vocabulary, pronunciation, rhythm',
      'Professional conversation: introductions, status updates, clarifications',
      'Interview response techniques: structuring answers, staying on topic',
      'Extempore and prepared speaking: thinking on your feet',
      'Body language and voice: tone, pace, posture, eye contact',
      'Written communication: emails, reports, documentation',
    ],
    outcomes: [
      'Introduce yourself confidently without memorized scripts',
      'Answer interview questions clearly without drifting off-topic',
      'Communicate technical concepts to non-technical audiences',
    ],
    who: 'Students who know the answers but struggle to express them. Particularly valuable for regional-medium students transitioning to English-first professional environments.',
    accent: '#4ade80',
  },
  {
    id: 'firestarter',
    number: '05',
    title: 'FireStarter Workshops',
    tagline: 'Stop solving textbook problems. Start solving real ones.',
    description:
      'College teaches you how software works in theory. Industry expects you to know how it works in practice. FireStarter Workshops are intensive, hands-on sessions that bridge this gap — structured like real engineering challenges, not exam questions.',
    topics: [
      'Live project sprints: build something real in 48 hours',
      'Case study analysis: how real companies solved real problems',
      'Industry scenario simulations: debugging, product decisions, trade-offs',
      'Agile fundamentals: sprints, standups, retrospectives',
      'Code review culture: giving and receiving feedback on real code',
      'Hackathon preparation: structuring ideas, pitching solutions',
    ],
    outcomes: [
      'Experience what it actually feels like to work in a tech team',
      'Have a real project to discuss in interviews (not just coursework)',
      'Develop the mindset of an engineer, not just a student',
    ],
    who: 'Students who want more than marks — those hungry to build things and understand how the industry actually works.',
    accent: '#f97316',
  },
  {
    id: 'prepsprint',
    number: '06',
    title: 'PrepSprint',
    tagline: 'Enter placement season ready. Not hoping.',
    description:
      'PrepSprint is BLC\'s intensive pre-placement program — a focused sprint in the final weeks before your placement season begins. It combines mock interviews, resume critique, and placement strategy into a structured readiness program.',
    topics: [
      'Full mock interview simulations: technical + HR, recorded for review',
      'Resume audit: structure, content gaps, keyword optimization',
      'LinkedIn profile review: summary, skills, visibility',
      'Company-specific preparation: research frameworks, common questions',
      'Offer comparison and negotiation basics',
      'Day-of strategy: how to approach assessment centers, back-to-back rounds',
    ],
    outcomes: [
      'Walk into interviews with documented preparation, not anxiety',
      'Have a resume that clears ATS and impresses human reviewers',
      'Know exactly how to research and prepare for any company in 24 hours',
    ],
    who: 'Final-year students in the 4–8 weeks before placement season. Particularly valuable for students who have completed technical preparation but haven\'t practiced the full interview experience.',
    accent: '#a78bfa',
  },
]

export default function ProgramsPage() {
  return (
    <main className="pt-24 pb-32">
      {/* Page header */}
      <div className="bg-bg-subtle border-b border-border py-20">
        <div className="max-w-container mx-auto px-6">
          <Chip>What We Teach</Chip>
          <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mt-6 mb-4 max-w-2xl">
            Programs built for the real world
          </h1>
          <p className="text-text-muted max-w-xl leading-relaxed">
            Six modules, each targeting a specific gap between academic preparation
            and what industry actually tests. Start with one or combine them — every
            program is designed to stack.
          </p>
          {/* Quick jump nav */}
          <div className="flex flex-wrap gap-3 mt-10">
            {PROGRAM_DETAILS.map((p) => (
              <Link
                key={p.id}
                href={`#${p.id}`}
                className="text-xs font-medium text-text-muted border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors"
              >
                {p.number} {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Program sections */}
      <div className="max-w-container mx-auto px-6">
        {PROGRAM_DETAILS.map((program, idx) => (
          <section
            key={program.id}
            id={program.id}
            className={`py-24 ${idx < PROGRAM_DETAILS.length - 1 ? 'border-b border-border' : ''}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left: Meta */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <span
                    className="text-4xl font-bold tabular-nums"
                    style={{ color: program.accent }}
                  >
                    {program.number}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ backgroundColor: program.accent, opacity: 0.3 }}
                  />
                </div>

                <h2 className="text-3xl font-bold text-text-primary">{program.title}</h2>

                <p className="text-base font-medium text-text-muted italic leading-snug">
                  &ldquo;{program.tagline}&rdquo;
                </p>

                <p className="text-sm text-text-muted leading-relaxed">{program.description}</p>

                <div className="pt-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-2">
                    Who this is for
                  </p>
                  <p className="text-sm text-text-primary leading-relaxed">{program.who}</p>
                </div>

                <Button href="/contact" variant="primary">
                  Enquire about this program
                </Button>
              </div>

              {/* Right: Topics + Outcomes */}
              <div className="lg:col-span-3 space-y-8">
                {/* Topics */}
                <div className="bg-bg-subtle rounded-2xl p-6 border border-border">
                  <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
                    What you&apos;ll cover
                  </p>
                  <ul className="space-y-3">
                    {program.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: program.accent }}
                        />
                        <span className="text-sm text-text-primary leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-4">
                    What you&apos;ll walk away with
                  </p>
                  <ul className="space-y-3">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="shrink-0 mt-0.5"
                          style={{ color: program.accent }}
                          weight="fill"
                        />
                        <span className="text-sm text-text-primary leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className="mt-8 py-20 text-center"
        style={{ backgroundColor: 'var(--color-bg-navy)' }}
      >
        <p className="text-white/60 text-sm uppercase tracking-widest mb-4">Ready to begin?</p>
        <h2 className="text-4xl font-bold text-white mb-6">
          Not sure which program fits you?
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Talk to us. We&apos;ll assess where you are and recommend the right starting point.
        </p>
        <Button href="/contact" variant="accent">Talk to BLC</Button>
      </div>
    </main>
  )
}
