import { Chip } from '@/components/ui/Chip'
import { ProgramCard } from '@/components/ui/ProgramCard'
import { PROGRAMS } from '@/lib/constants'

export const metadata = {
  title: 'Programs — Behave Like Compiler',
  description:
    'Explore BLC programs: Aptitude Training, Technical Training, Soft Skills, Verbal Communication, FireStarter Workshops, and PrepSprint mock interviews.',
}

export default function ProgramsPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <Chip>Programs</Chip>
          <h1 className="text-5xl font-bold text-text-primary mt-6 mb-4">
            Programs built for the real world
          </h1>
          <p className="text-text-muted max-w-lg mx-auto">
            Every module is designed with industry requirements at its core.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <div key={p.id} id={p.id} className="flex">
              <ProgramCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
