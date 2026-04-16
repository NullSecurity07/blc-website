import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://blcompiler.com'),
  title: 'Behave Like Compiler — Engineering Career Training | Bangalore',
  description:
    'BLC bridges academic learning and real-world industry with hands-on training, placement support, and career strategy for engineering students.',
  keywords: [
    'engineering career training Bangalore',
    'placement training Karnataka',
    'BLC Behave Like Compiler',
    'aptitude training engineers',
    'campus recruitment preparation',
    'soft skills training engineering',
    'mock interviews Bangalore',
  ],
  alternates: {
    canonical: 'https://blcompiler.com',
  },
  openGraph: {
    title: 'Behave Like Compiler — Engineering Career Training | Bangalore',
    description:
      'BLC bridges academic learning and real-world industry with hands-on training, placement support, and career strategy for engineering students.',
    url: 'https://blcompiler.com',
    siteName: 'Behave Like Compiler',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Behave Like Compiler — Engineering Career Training | Bangalore',
    description:
      'BLC bridges academic learning and real-world industry with hands-on training, placement support, and career strategy for engineering students.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'EducationalOrganization'],
      '@id': 'https://blcompiler.com/#organization',
      name: 'Behave Like Compiler',
      alternateName: 'BLC',
      url: 'https://blcompiler.com',
      logo: 'https://blcompiler.com/logo.png',
      description:
        'BLC bridges the gap between academic learning and real-world industry through structured placement training, mentorship, and career strategy for engineering students in Bangalore.',
      telephone: '+917026676671',
      email: 'info@blcompiler.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      areaServed: 'IN',
      founder: {
        '@type': 'Person',
        name: 'Vishal Vanaki',
      },
      sameAs: [
        'https://www.instagram.com/blcompiler/',
        'https://www.youtube.com/@BehaveLikeCompiler/',
        'https://www.linkedin.com/company/blcompiler',
      ],
    },
    {
      '@type': 'ItemList',
      name: 'BLC Training Programs',
      itemListElement: [
        'Aptitude Training',
        'Technical Training',
        'Soft Skills Development',
        'Verbal Communication',
        'FireStarter Workshops',
        'PrepSprint Mock Interviews',
      ].map((name, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Course',
          name,
          provider: { '@id': 'https://blcompiler.com/#organization' },
        },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
