import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const ERROR_LINES = [
  { text: '$ blc --resolve path', color: 'rgba(139,185,247,0.9)' },
  { text: '', color: '' },
  { text: 'ERROR: Module not found', color: '#f87171' },
  { text: '  Cannot resolve route: 404', color: 'rgba(255,255,255,0.4)' },
  { text: '', color: '' },
  { text: 'Hint: This path does not exist.', color: 'rgba(255,255,255,0.55)' },
  { text: '      Try navigating home.', color: 'rgba(255,255,255,0.55)' },
]

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-lg mx-auto px-6 text-center">
        {/* Mini terminal */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl mb-10 text-left"
          style={{ boxShadow: '0 16px 48px rgba(13,27,94,0.18)' }}
        >
          {/* Toolbar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ backgroundColor: '#0D1B5E' }}
          >
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
            <span
              className="ml-3 text-xs"
              style={{ color: 'rgba(139,185,247,0.5)' }}
            >
              blc-compiler — error
            </span>
          </div>
          {/* Body */}
          <div
            className="px-5 py-5 text-xs leading-7 space-y-0"
            style={{ backgroundColor: '#0A0F2E', fontFamily: 'inherit' }}
          >
            {ERROR_LINES.map((line, i) =>
              line.text === '' ? (
                <div key={i} className="h-2" />
              ) : (
                <div key={i} style={{ color: line.color }}>
                  {line.text}
                </div>
              )
            )}
          </div>
        </div>

        <p
          className="text-6xl font-bold mb-3"
          style={{ color: 'var(--color-primary)' }}
        >
          404
        </p>
        <h1
          className="text-xl font-bold mb-2"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Page not found
        </h1>
        <p
          className="text-sm mb-8 leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          A good compiler never guesses — and neither do we.
          <br />
          Let&apos;s get you back to a valid path.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">Go home</Button>
          <Button href="/contact" variant="ghost">Contact us</Button>
        </div>
      </div>
    </main>
  )
}
