import {
  BookOpen,
  CalendarDots,
  CurrencyGbp,
  Headset,
  Key,
  RocketLaunch,
  UsersThree,
} from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import type { Icon } from '@phosphor-icons/react'

const easeOut = [0.22, 1, 0.36, 1] as const

const ASCENDIA_PRICING_ROW =
  'No bolt ons, no extra fees, get whats on the tin. '

const ROW_ICONS: Icon[] = [
  UsersThree,
  RocketLaunch,
  BookOpen,
  CalendarDots,
  Headset,
  Key,
  CurrencyGbp,
]

const COMPARISONS = [
  {
    id: 'wordpress',
    tab: 'WordPress',
    otherLabel: 'WordPress',
    rows: [
      {
        label: 'Fit',
        ascendia: 'You run the business — we run the stack.',
        other: 'You’re the accidental admin for updates & plugins.',
      },
      {
        label: 'Ship',
        ascendia: 'We build and you get training + handover.',
        other: 'You wire hosting + theme + plugin soup.',
      },
      {
        label: 'Bookings',
        ascendia: 'Launch = capture · Suite = full booking hub in one place.',
        other: 'More plugins, more logins, more bills.',
      },
      {
        label: 'Forms',
        ascendia: 'Flows matched to how you work.',
        other: 'Form plugins & duct-tape embeds.',
      },
      {
        label: 'Help',
        ascendia: 'People who built it — plain English.',
        other: 'Forums, hosts, random freelancers.',
      },
      {
        label: 'Own',
        ascendia: 'You own it — move host or dev anytime.',
        other: 'Own it if exports still work.',
      },
      {
        label: 'Price',
        ascendia: ASCENDIA_PRICING_ROW,
        other: '“Free” core — hosting + plugins + fixes add up.',
      },
    ],
  },
  {
    id: 'squarespace',
    tab: 'Squarespace',
    otherLabel: 'Squarespace',
    rows: [
      {
        label: 'Fit',
        ascendia: 'Custom depth — not “almost fits” templates.',
        other: 'Great inside the guardrails.',
      },
      {
        label: 'Ship',
        ascendia: 'Built + trained for your workflow.',
        other: 'You drag blocks, and edge cases need workarounds.',
      },
      {
        label: 'Bookings',
        ascendia: 'Suite = real guest records & notes.',
        other: 'Email capture → usually another tool.',
      },
      {
        label: 'Forms',
        ascendia: 'Enquiry & booking paths tied to one hub.',
        other: 'Widgets until you outgrow them.',
      },
      {
        label: 'Help',
        ascendia: 'We shipped it — fast context.',
        other: 'Platform help ≠ your weird workflow.',
      },
      {
        label: 'Own',
        ascendia: 'Own the build with host-agnostic handover.',
        other: 'You rent the platform — leaving = rebuild.',
      },
      {
        label: 'Price',
        ascendia: ASCENDIA_PRICING_ROW,
        other: '~£10–£35+/mo + add-ons + your hours.',
      },
    ],
  },
  {
    id: 'wix',
    tab: 'Wix',
    otherLabel: 'Wix & similar',
    rows: [
      {
        label: 'Fit',
        ascendia: 'One price, one handoff, you hold the keys.',
        other: 'Fun until the stack gets heavy.',
      },
      {
        label: 'Ship',
        ascendia: 'We scope & train — no app zoo.',
        other: 'Layers of apps & “why so slow?”',
      },
      {
        label: 'Bookings',
        ascendia: 'Launch or Suite — fewer logins.',
        other: 'Light tools or paid add-ons elsewhere.',
      },
      {
        label: 'Forms',
        ascendia: 'Enquiry + booking in one system.',
        other: 'More apps for anything serious.',
      },
      {
        label: 'Help',
        ascendia: 'Builders, not ticket roulette.',
        other: 'Generic chat — complex = hire out.',
      },
      {
        label: 'Own',
        ascendia: 'Your data, your host, your call.',
        other: 'Migrating clean is painful.',
      },
      {
        label: 'Price',
        ascendia: ASCENDIA_PRICING_ROW,
        other: '~£10–£30/mo + apps — death by a thousand cuts.',
      },
    ],
  },
] as const

export function ProblemComparisonSection({
  embedded = false,
}: {
  /** Hide duplicate title when a parent page already has a hero (e.g. /compare). */
  embedded?: boolean
}) {
  const [active, setActive] = useState(0)
  const current = COMPARISONS[active]
  const reduceMotion = useReducedMotion()

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: easeOut }

  return (
    <section
      id="compare"
      className={`scroll-mt-24 border-champagne-200/70 bg-gradient-to-b from-white/80 via-champagne-50/60 to-petal/20 ${
        embedded
          ? 'border-t border-b py-16 md:py-20'
          : 'border-y py-20'
      }`}
      aria-labelledby={embedded ? undefined : 'compare-heading'}
      aria-label={embedded ? 'Compare approaches by platform' : undefined}
    >
      <div className="mx-auto max-w-3xl px-6">
        {!embedded && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <h2
              id="compare-heading"
              className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl"
            >
              How we compare
            </h2>
            <p className="mx-auto mt-2 max-w-md font-sans text-sm text-ink-muted">
              Pick a platform to see the rows.
            </p>
          </motion.div>
        )}

        {embedded && (
          <p className="mb-8 text-center font-sans text-sm text-ink-muted md:mb-10">
            Choose a platform — same story, different column.
          </p>
        )}

        <motion.div
          className={embedded ? 'mt-0' : 'mt-10'}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, ease: easeOut, delay: 0.04 }}
        >
          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-2.5"
            role="tablist"
            aria-label="Choose platform"
          >
            {COMPARISONS.map((c, i) => (
              <button
                key={c.id}
                id={`compare-tab-${c.id}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={`compare-panel-${c.id}`}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 font-sans text-xs font-semibold tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine/40 ${
                  active === i
                    ? 'bg-wine text-white shadow-md shadow-wine/25'
                    : 'border border-champagne-300/90 bg-white/95 text-ink-muted hover:border-mango/40 hover:text-ink'
                }`}
              >
                {c.tab}
              </button>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-champagne-200/90 bg-white/95 shadow-card ring-1 ring-champagne-100/80">
            <div className="grid grid-cols-2 border-b border-champagne-200/80">
              <div className="border-r border-champagne-200/70 bg-gradient-to-br from-wine/6 to-champagne-50/50 px-4 py-4 text-center sm:px-6">
                <span className="font-display text-sm font-semibold tracking-tight text-wine md:text-[15px]">
                  Ascendia
                </span>
              </div>
              <div className="bg-gradient-to-br from-white to-champagne-50/30 px-4 py-4 text-center sm:px-6">
                <span className="font-display text-sm font-semibold tracking-tight text-ink-muted md:text-[15px]">
                  {current.otherLabel}
                </span>
              </div>
            </div>

            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={current.id}
                role="tabpanel"
                id={`compare-panel-${current.id}`}
                aria-labelledby={`compare-tab-${current.id}`}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={panelTransition}
                className="divide-y divide-champagne-100/90"
              >
                {current.rows.map((row, ri) => {
                  const Icon = ROW_ICONS[ri]
                  return (
                    <div
                      key={`${current.id}-${row.label}`}
                      className={`grid gap-4 px-4 py-5 sm:grid-cols-[5.5rem_1fr_1fr] sm:items-center sm:gap-5 sm:px-5 ${
                        ri % 2 === 0 ? 'bg-white/80' : 'bg-champagne-50/40'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1.5 text-center sm:items-center sm:justify-center sm:gap-2">
                        <Icon
                          className="size-6 shrink-0 text-tangerine sm:size-7"
                          weight="duotone"
                          aria-hidden
                        />
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                          {row.label}
                        </span>
                      </div>
                      <p className="text-balance text-center font-sans text-[13px] font-semibold leading-relaxed text-ink sm:px-1 sm:text-[14px]">
                        {row.ascendia}
                      </p>
                      <p className="text-balance text-center font-sans text-[13px] leading-relaxed text-ink-muted sm:px-1 sm:text-[14px]">
                        {row.other}
                      </p>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
