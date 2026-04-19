import { ClockCountdown, Funnel, TrendDown } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const

const TOP_ACCENT = [
  'from-rose via-tangerine to-mango',
  'from-sun via-mango to-cherry',
  'from-cherry via-rose to-tangerine',
] as const

const STATS = [
  {
    icon: TrendDown,
    stat: 'Traffic isn’t revenue',
    caption: 'A website isn’t a customer system.',
  },
  {
    icon: ClockCountdown,
    stat: 'No time to run it',
    caption: 'Maintenance becomes burden — not a growth tool.',
  },
  {
    icon: Funnel,
    stat: 'Leads slip',
    caption: 'Enquiries everywhere — follow-ups get missed.',
  },
] as const

export function StatsProsSection() {
  return (
    <section
      id="reality-check"
      className="scroll-mt-24 py-24 md:py-28"
      aria-labelledby="reality-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <h2
            id="reality-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.35rem]"
          >
            Your site isn’t bringing customers.
          </h2>
          <p className="mt-5 font-sans text-sm leading-relaxed text-ink-muted md:text-[15px]">
            Most small-business sites exist — they don&apos;t perform. Three patterns we see
            everywhere.
          </p>
        </motion.div>

        <div className="mt-16 grid justify-items-stretch gap-8 sm:grid-cols-2 sm:gap-9 lg:grid-cols-3 lg:gap-10">
          {STATS.map((s, i) => (
            <motion.article
              key={s.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: easeOut }}
              whileHover={{ y: -4 }}
              className="relative flex min-h-[13rem] flex-col items-center overflow-hidden rounded-2xl border border-champagne-200/80 bg-white/95 px-7 pb-9 pt-10 text-center shadow-md shadow-black/[0.04] transition-shadow duration-300 hover:shadow-lg md:min-h-[14rem]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${TOP_ACCENT[i]}`}
                aria-hidden
              />
              <s.icon
                className="size-12 text-tangerine"
                weight="duotone"
                aria-hidden
              />
              <p className="mt-8 font-display text-[1.65rem] font-semibold leading-tight tracking-tight text-ink md:text-[1.85rem]">
                {s.stat}
              </p>
              <p className="mt-5 max-w-[16rem] font-sans text-[13px] leading-snug text-ink-muted md:text-sm">
                {s.caption}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
