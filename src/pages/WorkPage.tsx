import { ArrowSquareOut } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import { REVIEWS } from '../data/reviews'
import { springSnappy, springSoft } from '../motion'

export function WorkPage() {
  const reduceMotion = useReducedMotion()
  const beforeAfter = [
    {
      before: 'Scattered enquiries across DMs, forms, and calls.',
      after: 'One clear booking flow with tracked follow-up.',
    },
    {
      before: 'Template site that looks fine but converts softly.',
      after: 'Brand-led pages designed to drive real bookings.',
    },
    {
      before: 'Slow updates and constant plugin/tool overhead.',
      after: 'Fast edits, managed stack, and ongoing care included.',
    },
  ] as const

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
          02
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.02 }}
            className="relative overflow-visible border border-white/12 bg-linear-to-b from-white/[0.07] to-white/2 px-8 py-12 shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset] sm:px-12 sm:py-14 md:px-16 md:py-16"
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

            <h1 className="mx-auto mt-2 max-w-[20ch] text-center font-display text-[clamp(2rem,5.2vw+1.1rem,3.75rem)] font-bold leading-[1.2] tracking-[-0.038em] sm:max-w-[24ch] md:max-w-none">
              <motion.span
                className="block text-white"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springSoft, delay: 0.06 }}
              >
                Sites that earn,
              </motion.span>
              <motion.span
                className="mt-1 block bg-gradient-to-r from-cherry via-tangerine to-rose bg-clip-text px-[0.25em] pb-[0.2em] pr-[0.55em] italic text-transparent tracking-tight md:mt-1.5"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springSoft, delay: 0.12 }}
              >
                not just sit there.
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
              The difference is what happens after someone lands on your site — whether revenue stays fuzzy or locks in as real bookings you can track.
            </motion.p>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-[11px] sm:tracking-[0.26em]">
              Same story · every card below
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-28" aria-labelledby="work-grid-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-xl px-2 py-6 text-center md:py-10">
            <h2
              id="work-grid-heading"
              className="font-display text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.85rem] md:text-[2.15rem] lg:text-[2.35rem]"
            >
              Before and after Bookluno
            </h2>
            <p className="mt-4 max-w-md mx-auto font-sans text-sm leading-relaxed text-ink-muted md:mt-5 md:text-base">
              Clean snapshots from the same businesses featured in our reviews.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-2">
            {REVIEWS.map((item, index) => (
              <motion.article
                key={item.business}
                className="overflow-hidden rounded-3xl border border-champagne-200/80 bg-white/95 text-left shadow-md shadow-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/[0.07]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...springSnappy, delay: index * 0.04 }}
              >
                <div className="border-b border-champagne-200/70 bg-linear-to-r from-petal/25 via-champagne-50 to-petal/20 px-5 py-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-xl font-semibold text-ink">{item.business}</p>
                      <p className="mt-1 font-sans text-xs text-ink-muted">
                        {item.sector} · {item.location}
                      </p>
                    </div>
                    {item.website ? (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-champagne-200/90 bg-white px-3 py-1.5 font-sans text-xs font-medium text-ink transition hover:border-mango/40 hover:text-tangerine"
                      >
                        Visit
                        <ArrowSquareOut className="size-3.5" weight="bold" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-px bg-champagne-200/60 md:grid-cols-2">
                  <div className="bg-champagne-50/45 px-5 py-5">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                      Before
                    </p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
                      {beforeAfter[index % beforeAfter.length].before}
                    </p>
                  </div>
                  <div className="bg-white px-5 py-5">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-tangerine">
                      After
                    </p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink">
                      {beforeAfter[index % beforeAfter.length].after}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
