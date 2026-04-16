interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
}

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-8 min-w-[320px] max-w-sm flex-shrink-0 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
      style={{
        border: '1px solid var(--color-border)',
        boxShadow: '0 2px 16px rgba(30,50,139,0.06)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(30,50,139,0.12)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(30,50,139,0.06)'
      }}
    >
      {/* Left accent bar (from Magic's Tailark testimonial pattern) */}
      <div
        className="absolute left-0 top-8 bottom-8 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: 'var(--color-accent)' }}
        aria-hidden="true"
      />

      {/* Decorative quote mark */}
      <div
        className="text-6xl font-serif leading-none select-none -mb-2"
        style={{ color: 'var(--color-primary-light)', opacity: 0.35 }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {quote}
      </p>

      {/* Divider */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: 'var(--color-border)' }}
        aria-hidden="true"
      />

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar with initials */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors duration-300 group-hover:border-primary"
          style={{
            backgroundColor: 'rgba(139,185,247,0.15)',
            border: '2px solid var(--color-primary-light)',
            color: 'var(--color-primary)',
          }}
          aria-hidden="true"
        >
          {name[0]}
        </div>
        <div>
          <p
            className="font-bold text-sm leading-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {name}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  )
}
