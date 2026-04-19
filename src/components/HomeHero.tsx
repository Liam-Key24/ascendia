import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GhostButton, PrimaryButton } from './Button'
import { HeroVisual } from './HeroVisual'
import { springSoft } from '../motion'

export function HomeHero() {
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-14 text-center md:pb-28 md:pt-20">
      <div className="flex flex-col items-center">
        <motion.h1
          className="max-w-[min(20ch,92vw)] font-display text-[clamp(2.75rem,7vw+1.25rem,4.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:max-w-[22ch] md:max-w-[24ch]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.05 }}
        >
          Site + bookings, <span className="bg-gradient-to-r from-cherry via-tangerine to-rose bg-clip-text italic text-transparent">
            zero drama.
          </span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-lg font-sans text-base leading-relaxed text-ink-muted md:mt-9 md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.15 }}
        >
          We design, build, and maintain. <strong className="font-semibold text-ink/90">From £65/mo.</strong> You run
          guests. We run the stack.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.22 }}
        >
          <PrimaryButton onClick={() => navigate('/contact/launch')}>Talk to us</PrimaryButton>
          <GhostButton onClick={() => navigate('/#what-we-do')}>What we do</GhostButton>
        </motion.div>
        <motion.p
          className="mx-auto mt-6 max-w-sm font-sans text-sm text-ink-muted/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          No DIY nights. Real support when it breaks.
        </motion.p>
        <div className="mt-12 w-full max-w-xl md:max-w-2xl">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
