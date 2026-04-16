'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { NAV_LINKS, PROGRAMS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl text-primary tracking-tight"
        >
          BLC
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}

          {/* Programs dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <button
              className="text-sm text-text-muted hover:text-primary transition-colors flex items-center gap-1"
              aria-expanded={programsOpen}
              aria-haspopup="true"
            >
              Programs
              <span className="text-xs transition-transform duration-200" style={{ transform: programsOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
            </button>
            <AnimatePresence>
              {programsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-border shadow-lg py-2"
                  role="menu"
                >
                  {PROGRAMS.map((p) => (
                    <Link
                      key={p.id}
                      href={`/programs#${p.id}`}
                      className="block px-4 py-2.5 text-sm text-text-primary hover:bg-bg-subtle hover:text-primary transition-colors"
                      role="menuitem"
                    >
                      {p.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Talk to Us
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-text-primary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-text-muted mb-2 uppercase tracking-wider">
                  Programs
                </p>
                {PROGRAMS.map((p) => (
                  <Link
                    key={p.id}
                    href={`/programs#${p.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 text-sm text-text-primary hover:text-primary"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
              <Button href="/contact" variant="primary" className="mt-2">
                Talk to Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
