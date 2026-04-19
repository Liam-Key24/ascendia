import { FeedbackMarquee } from '../components/FeedbackMarquee'
import { HomeFaqSection } from '../components/HomeFaqSection'
import { HomeFinalCtaSection } from '../components/HomeFinalCtaSection'
import { HomeHero } from '../components/HomeHero'
import { HomePricingSection } from '../components/HomePricingSection'
import { HomeWhatWeDoSection } from '../components/HomeWhatWeDoSection'
import { StatsProsSection } from '../components/StatsProsSection'
import { WhatWeOfferSection } from '../components/WhatWeOfferSection'
import { ContactSection } from '../components/ContactSection'
import { WhoPainPoints } from '../components/WhoPainPoints'

export function HomePage() {
  return (
    <>
      <HomeHero />
      <FeedbackMarquee />
      <StatsProsSection />
      <WhatWeOfferSection />
      <WhoPainPoints />
      <HomeWhatWeDoSection />
      <HomePricingSection />
      <ContactSection />
      <HomeFaqSection />
      <HomeFinalCtaSection />
    </>
  )
}
