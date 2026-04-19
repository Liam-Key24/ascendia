import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { WhatsIncludedSection } from './WhatsIncludedSection'

export function HomeWhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-champagne-100/95 via-white to-champagne-50/90 py-24 md:py-32"
      aria-labelledby="what-we-do-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-32 top-20 size-[420px] rounded-full bg-gradient-to-br from-mango/25 via-rose/15 to-transparent blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-80 rounded-full bg-gradient-to-tl from-sun/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div className="mx-auto max-w-xl text-center" {...fadeUp}>
          <h2
            id="what-we-do-heading"
            className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-[2.5rem]"
          >
            Three principles. <span className="bg-gradient-to-r from-cherry via-tangerine to-mango bg-clip-text text-transparent">
              One team.
            </span>
          </h2>
          <p className="mt-3 font-sans text-sm text-ink-muted md:text-[15px]">
            Less noise — site, guests, stack.
          </p>
        </motion.div>
        <div className="mt-12 md:mt-16">
          <WhatsIncludedSection />
        </div>
      </div>
    </section>
  )
}
