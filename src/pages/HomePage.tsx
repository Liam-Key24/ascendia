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
import { useEffect } from 'react'

export function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add('home-snap-page')
    document.body.classList.add('home-snap-page')

    return () => {
      document.documentElement.classList.remove('home-snap-page')
      document.body.classList.remove('home-snap-page')
    }
  }, [])

  return (
    <div className="home-snap-container">
      <div className="home-snap-section">
        <HomeHero />
      </div>
      <div className="home-snap-section">
        <FeedbackMarquee />
      </div>
      <div className="home-snap-section">
        <StatsProsSection />
      </div>
      <div className="home-snap-section">
        <WhatWeOfferSection />
      </div>
      <div className="home-snap-section">
        <WhoPainPoints />
      </div>
      <div className="home-snap-section">
        <HomeWhatWeDoSection />
      </div>
      <div className="home-snap-section">
        <HomePricingSection />
      </div>
      <div className="home-snap-section">
        <ContactSection />
      </div>
      <div className="home-snap-section">
        <HomeFaqSection />
      </div>
      <div className="home-snap-section">
        <HomeFinalCtaSection />
      </div>
    </div>
  )
}
