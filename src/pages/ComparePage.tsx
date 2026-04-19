import { Brain, Globe, UsersThree } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import { ProblemComparisonSection } from '../components/ProblemComparisonSection'
import { springSoft } from '../motion'

const CHIPS: { label: string; Icon: typeof Globe }[] = [
  { label: 'Custom site', Icon: Globe },
  { label: 'Booking management', Icon: Brain },
  { label: 'One team', Icon: UsersThree },
]

export function ComparePage() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <section className="relative overflow-hidden border-b border-champagne-200/70 bg-gradient-to-b from-wine-deep/95 via-wine to-[#4a1520] py-12 text-center text-white md:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgb(251_146_60/0.28),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-0 size-[28rem] rounded-full bg-[radial-gradient(circle,rgb(244_63_94/0.14),transparent_62%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/4 size-72 rounded-full bg-amber-400/12 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[length:52px_52px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)] opacity-90"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl px-6 pt-12 text-center md:pt-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.04 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl">
              Site + bookings, <span className="bg-gradient-to-r from-sun via-mango to-champagne-100 bg-clip-text text-transparent">
                without the patchwork
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-white/78 md:text-base">
              A clear, simple comparison. No opinions on other tools.
            </p>

            <motion.div
              className="mt-7 flex flex-wrap items-center justify-center gap-2"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.14 }}
            >
              {CHIPS.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 font-sans text-[11px] font-medium tracking-wide text-white/85 backdrop-blur-sm"
                >
                  <Icon className="size-3.5 text-sun/90" weight="duotone" aria-hidden />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProblemComparisonSection embedded />
    </>
  )
}
