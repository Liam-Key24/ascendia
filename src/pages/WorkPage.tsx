import { ArrowSquareOut, Storefront } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { PageBackLink } from '../components/PageBackLink'
import { springSnappy, springSoft } from '../motion'

const NUMBER_STATS = [
  { value: '6+', label: 'Pages', hint: 'Custom build' },
  { value: '100%', label: 'Responsive', hint: 'Mobile-first' },
  { value: '<2s', label: 'LCP goal', hint: 'Placeholder' },
  { value: '24/7', label: 'Hosting', hint: 'Managed' },
] as const

export function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-champagne-200/70 bg-gradient-to-b from-petal/30 via-champagne-50/90 to-white/80 py-14 text-center md:py-20">
        <div
          className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full bg-gradient-to-br from-mango/20 via-rose/15 to-transparent blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5">
          <PageBackLink variant="accent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-8 text-center md:pt-10">
          <motion.div
            className="mx-auto max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.05 }}
          >
            <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
              Real sites. <span className="bg-gradient-to-r from-cherry via-tangerine to-rose bg-clip-text italic text-transparent">
                Real guests.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-md font-sans text-sm text-ink-muted md:text-base">
              Placeholder stats below — swap when you have analytics.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-3 sm:max-w-2xl sm:grid-cols-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.12 }}
          >
            {NUMBER_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-champagne-200/80 bg-white/90 px-3 py-4 text-center shadow-sm"
              >
                <p className="font-display text-2xl font-semibold tabular-nums text-ink md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-wider text-tangerine">
                  {s.label}
                </p>
                <p className="mt-0.5 font-sans text-[10px] text-ink-muted">{s.hint}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-16" aria-labelledby="terracotta-heading">
        <div className="mx-auto max-w-6xl px-6">
          <motion.article
            className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-champagne-200/80 bg-white/95 text-left shadow-lg shadow-black/[0.06] sm:text-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...springSnappy, delay: 0.08 }}
          >
            <div className="border-b border-champagne-200/70 bg-gradient-to-r from-petal/40 via-champagne-50 to-petal/30 px-6 py-6 sm:px-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-champagne-200/80">
                    <Storefront className="size-7 text-tangerine" weight="duotone" aria-hidden />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2
                      id="terracotta-heading"
                      className="font-display text-2xl font-semibold text-ink md:text-3xl"
                    >
                      Terracotta Acton
                    </h2>
                    <p className="mt-2 font-sans text-sm text-ink-muted">
                      Indian dining · Acton — site + ongoing care.
                    </p>
                  </div>
                </div>
                <a
                  href="https://terracotta-acton.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-champagne-200/90 bg-white px-4 py-2 font-sans text-sm font-medium text-ink shadow-sm transition hover:border-mango/40 hover:text-tangerine"
                >
                  Visit site
                  <ArrowSquareOut className="size-4" weight="bold" aria-hidden />
                </a>
              </div>
            </div>

            <div className="grid gap-px bg-champagne-200/60 sm:grid-cols-2">
              {[
                { label: 'Sector', value: 'Dining' },
                { label: 'Where', value: 'Acton, London' },
                { label: 'Scope', value: 'Site + bookings' },
                { label: 'Care', value: 'Subscription' },
              ].map((row) => (
                <div key={row.label} className="bg-white px-6 py-4 text-center sm:px-8 sm:text-left">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-ink-muted">
                    {row.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-champagne-200/70 bg-champagne-50/50 px-6 py-5 text-center sm:text-left sm:px-8">
              <p className="font-sans text-sm font-semibold text-ink">Delivered</p>
              <ul className="mx-auto mt-3 max-w-md space-y-2 text-left font-sans text-sm text-ink-muted sm:mx-0">
                <li className="flex gap-2">
                  <span className="text-mango">✓</span>
                  Brand-led pages &amp; booking journey.
                </li>
                <li className="flex gap-2">
                  <span className="text-mango">✓</span>
                  Mobile-first UX.
                </li>
                <li className="flex gap-2">
                  <span className="text-mango">✓</span>
                  Hosted &amp; maintained on plan.
                </li>
              </ul>
            </div>

            <p className="border-t border-champagne-200/70 px-6 py-3 text-center font-sans text-[11px] text-ink-muted">
              Replace with your real KPIs anytime.
            </p>
          </motion.article>
        </div>
      </section>
    </>
  )
}
