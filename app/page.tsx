import { Hero } from '@/components/sections/Hero'
import { SocialProofBar } from '@/components/sections/SocialProofBar'
import { ImpactNumbers } from '@/components/sections/ImpactNumbers'
import { WhatIsBLC } from '@/components/sections/WhatIsBLC'
import { Programs } from '@/components/sections/Programs'
import { BLCFrameworks } from '@/components/sections/BLCFrameworks'
import { ForColleges } from '@/components/sections/ForColleges'
import { ForCorporates } from '@/components/sections/ForCorporates'
import { Testimonials } from '@/components/sections/Testimonials'
import { PartnerColleges } from '@/components/sections/PartnerColleges'
import { CTABanner } from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProofBar />
      <ImpactNumbers />
      <WhatIsBLC />
      <Programs />
      <BLCFrameworks />
      <ForColleges />
      <ForCorporates />
      <Testimonials />
      <PartnerColleges />
      <CTABanner />
    </main>
  )
}
