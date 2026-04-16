'use client'
import { useState, useRef } from 'react'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'

type Status = 'idle' | 'sending' | 'success' | 'error'

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text' },
  { name: 'email', label: 'Email address', type: 'email' },
  { name: 'phone', label: 'Phone number', type: 'tel' },
] as const

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <Chip>Get in touch</Chip>
            <h1 className="text-5xl font-bold text-text-primary mt-6 mb-6">
              Let&apos;s talk
            </h1>
            <p className="text-text-muted leading-relaxed mb-8">
              Whether you&apos;re a student looking to enroll, a college
              seeking a partnership, or a corporate exploring custom training —
              we&apos;d love to hear from you.
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-medium text-text-primary">Phone: </span>
                <a href={`tel:${CONTACT.phone}`} className="text-primary hover:underline">
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-text-primary">Email: </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-primary hover:underline"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-text-primary">
                  Location:{' '}
                </span>
                {CONTACT.address}
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            {FIELDS.map((f) => (
              <div key={f.name}>
                <label
                  htmlFor={f.name}
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  type={f.type}
                  name={f.name}
                  required
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors font-mono"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                I am a
              </label>
              <select
                id="type"
                name="type"
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary bg-white font-mono"
              >
                <option value="student">Student</option>
                <option value="college">College / Institution</option>
                <option value="corporate">Corporate / Organization</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none font-mono"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </Button>

            {status === 'success' && (
              <p className="text-sm text-green-600 text-center" role="status">
                Message sent! We&apos;ll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500 text-center" role="alert">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  )
}
