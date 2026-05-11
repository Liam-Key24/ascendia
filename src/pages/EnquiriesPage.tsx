import { motion, useReducedMotion } from 'framer-motion'
import { ContactSection } from '../components/ContactSection'
import { HomeFaqSection } from '../components/HomeFaqSection'
import { springSoft } from '../motion'

export function EnquiriesPage() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <section className="relative overflow-hidden border-b border-champagne-200/70 bg-linear-to-b from-wine-deep/95 via-wine to-[#4a1520] py-14 text-white md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgb(251_146_60/0.32),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-0 size-112 rounded-full bg-[radial-gradient(circle,rgb(244_63_94/0.16),transparent_62%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-amber-400/14 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.055)_1px,transparent_1px)] bg-size-[44px_44px] mask-[radial-gradient(ellipse_88%_72%_at_50%_28%,black,transparent)] opacity-90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_38%,rgb(251_146_60/0.07)_50%,transparent_62%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(10rem,42vw,22rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.035]"
          aria-hidden
        >
          04
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.02 }}
            className="relative overflow-visible border border-white/12 bg-linear-to-b from-white/[0.07] to-white/2 px-6 py-12 shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset] sm:px-10 sm:py-14 md:px-12 md:py-16"
          >
            <div
              className="pointer-events-none absolute left-3 top-3 size-4 border-l-2 border-t-2 border-sun/50 sm:left-4 sm:top-4"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-3 top-3 size-4 border-r-2 border-t-2 border-sun/50 sm:right-4 sm:top-4"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-3 left-3 size-4 border-b-2 border-l-2 border-white/25 sm:bottom-4 sm:left-4"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-3 right-3 size-4 border-b-2 border-r-2 border-white/25 sm:bottom-4 sm:right-4"
              aria-hidden
            />

            <h1 className="mx-auto mt-2 max-w-[17ch] text-center font-display text-[clamp(2rem,5.2vw+1.1rem,3.75rem)] font-bold leading-[1.2] tracking-[-0.038em] sm:max-w-[22ch] md:max-w-none">
              <motion.span
                className="block text-white"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springSoft, delay: 0.06 }}
              >
                Ask anything,
              </motion.span>
              <motion.span
                className="mt-1 block bg-gradient-to-r from-cherry via-tangerine to-rose bg-clip-text px-[0.2em] pb-[0.2em] italic text-transparent md:mt-1.5"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springSoft, delay: 0.12 }}
              >
                then we guide you clearly
              </motion.span>
            </h1>

            <motion.div
              className="mx-auto mt-5 h-px max-w-xs origin-center bg-linear-to-r from-transparent via-white/35 to-transparent md:mt-6"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ ...springSoft, delay: 0.2 }}
              aria-hidden
            />

            <motion.p
              className="mx-auto mt-4 max-w-2xl text-center font-sans text-[15px] leading-relaxed text-white/76 sm:text-base md:text-[1.05rem] md:leading-relaxed"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.18 }}
            >
              Send a quick message about your goals, timings, or package fit. You can also check the FAQs below before
              you enquire.
            </motion.p>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-[11px] sm:tracking-[0.26em]">
              Direct contact · then FAQ below
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <HomeFaqSection />
    </>
  )
}
