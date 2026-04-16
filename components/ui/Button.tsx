'use client'
import Link from 'next/link'

type Variant = 'primary' | 'accent' | 'ghost'

interface ButtonProps {
  variant?: Variant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const base =
  'inline-flex items-center justify-center px-8 py-4 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-primary',
  accent:
    'bg-accent text-text-primary font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 focus-visible:outline-accent',
  ghost:
    'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus-visible:outline-primary',
}

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
