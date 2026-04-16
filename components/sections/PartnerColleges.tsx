import { COLLEGE_LOGOS } from '@/lib/constants'

// Doubled for seamless infinite loop
const DOUBLED = [...COLLEGE_LOGOS, ...COLLEGE_LOGOS]

export function PartnerColleges() {
  return (
    <section className="bg-bg-subtle py-16 overflow-hidden">
      <p className="text-xs text-text-muted uppercase tracking-widest text-center mb-8">
        Partner Colleges
      </p>
      <div className="relative flex">
        <div className="flex gap-10 animate-marquee" style={{ width: 'max-content' }}>
          {DOUBLED.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="h-12 px-8 bg-white rounded-xl border border-border flex items-center justify-center min-w-[130px] grayscale opacity-60 shadow-sm"
            >
              {/* ⚠️ TEMP: Replace with actual college logos from founder */}
              <span className="text-sm font-bold text-text-muted">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
