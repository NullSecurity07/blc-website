import Link from 'next/link'
import { InstagramLogo, YoutubeLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { NAV_LINKS, PROGRAMS, CONTACT } from '@/lib/constants'

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0F2E' }} className="text-white/70 pt-16 pb-8">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <p className="font-bold text-white text-xl">BLC</p>
            <p className="text-sm leading-relaxed">
              Have Patience and Behave Like Compiler
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <InstagramLogo size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <YoutubeLogo size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <LinkedinLogo size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wider">
              Programs
            </p>
            <ul className="space-y-2">
              {PROGRAMS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/programs#${p.id}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wider">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>{CONTACT.address}</li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-xs text-white/40 flex flex-col sm:flex-row justify-between gap-2">
          <p>
            © {new Date().getFullYear()} Behave Like Compiler. All rights
            reserved.
          </p>
          <p>Designed & Developed by BLC Team</p>
        </div>
      </div>
    </footer>
  )
}
