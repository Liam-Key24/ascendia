import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GhostButton, PrimaryButton } from './Button'
import { HeroVisual } from './HeroVisual'
import { springSoft } from '../motion'

export function HomeHero() {
  const navigate = useNavigate()

  return (
    <section className="mx-auto flex min-h-[calc(100svh-6.25rem)] w-full max-w-7xl items-center overflow-visible px-7 py-12 sm:px-9 sm:py-14 md:min-h-[calc(100svh-5rem)] md:px-10 md:py-18">
      <div className="grid w-full items-center gap-10 md:gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
        <div className="text-center lg:text-left">
          
          <motion.h1
            className="mx-auto mt-6 max-w-[19ch] px-3 font-display text-[clamp(2.6rem,6.4vw+1.2rem,4.45rem)] font-bold leading-[1.18] tracking-normal text-ink sm:px-4 lg:mx-0 lg:max-w-[22ch] lg:px-0"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.05 }}
        >
          Book more guests without
          {' '}
          <span className="inline-block bg-gradient-to-r from-cherry via-tangerine to-rose bg-clip-text pb-[0.2em] italic text-transparent">
            running the tech.
          </span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-ink-muted sm:text-base md:text-[1.05rem] lg:mx-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.15 }}
        >
          We design your site, set up enquiries and bookings, and keep everything running.
          {' '}
          <strong className="font-semibold text-ink/90">From £65/mo with hosting and maintenance included.</strong>
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.22 }}
        >
          <PrimaryButton className="px-8" onClick={() => navigate('/contact/launch')}>
            Get your plan
          </PrimaryButton>
          <GhostButton className="px-7" onClick={() => navigate('/#pricing')}>
            See pricing first
          </GhostButton>
          </motion.div>
          <motion.p
            className="mx-auto mt-5 max-w-sm font-sans text-sm text-ink-muted/95 lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Built for salons, dining, and hospitality teams.
          </motion.p>
        </div>

        <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-2xl">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
