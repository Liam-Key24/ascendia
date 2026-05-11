import { ChatsCircle, Check, X } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { GhostButton, PrimaryButton } from '../components/Button'
import { PackagesTierShowcase } from '../components/PackagesTierShowcase'
import { springSoft } from '../motion'

export function PackagesPage() {
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const tierColumns = [
    {
      id: 'launch',
      name: 'Launch',
      price: '£65/mo',
      cadence: 'Monthly',
      buttonLabel: 'Choose Launch',
      buttonPath: '/contact/launch',
    },
    {
      id: 'suite',
      name: 'Suite',
      price: '£149/mo',
      cadence: 'Monthly',
      buttonLabel: 'Choose Suite',
      buttonPath: '/contact/suite',
    },
    {
      id: 'handover',
      name: 'Handover',
      price: 'Custom quote',
      cadence: 'One-time',
      buttonLabel: 'Ask about handover',
      buttonPath: '/contact/custom',
    },
  ] as const

  const featureRows = [
    {
      label: 'Monthly subscription',
      values: ['yes', 'yes', 'no'],
    },
    {
      label: 'One-time handover quote',
      values: ['no', 'no', 'yes'],
    },
    {
      label: '1-3 page website scope',
      values: ['yes', 'no', 'no'],
    },
    {
      label: '5-8 page website scope',
      values: ['no', 'yes', 'no'],
    },
    {
      label: 'Hosting and SSL managed by us',
      values: ['yes', 'yes', 'no'],
    },
    {
      label: 'Booking enquiry list',
      values: ['yes', 'no', 'no'],
    },
    {
      label: 'Full booking hub with stages',
      values: ['no', 'yes', 'no'],
    },
    {
      label: 'Priority turnaround',
      values: ['no', 'yes', 'no'],
    },
    {
      label: 'Team training included',
      values: ['no', 'yes', 'no'],
    },
    {
      label: 'Export and migration support',
      values: ['no', 'no', 'yes'],
    },
  ] as const

  const renderValue = (value: string) => {
    if (value === 'yes') {
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 ring-1 ring-emerald-200/80">
          <Check className="size-4" weight="bold" aria-hidden />
          <span className="sr-only">Included</span>
        </span>
      )
    }

    if (value === 'no') {
      return (
        <span className="inline-flex items-center justify-center rounded-full bg-rose-50 px-2 py-1 text-rose-600 ring-1 ring-rose-200/80">
          <X className="size-4" weight="bold" aria-hidden />
          <span className="sr-only">Not included</span>
        </span>
      )
    }
    return null
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-champagne-200/70 bg-gradient-to-b from-wine-deep/95 via-wine to-[#4a1520] py-14 text-white md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgb(251_146_60/0.32),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-0 size-[28rem] rounded-full bg-[radial-gradient(circle,rgb(244_63_94/0.16),transparent_62%)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-amber-400/14 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.055)_1px,transparent_1px)] bg-[length:44px_44px] [mask-image:radial-gradient(ellipse_88%_72%_at_50%_28%,black,transparent)] opacity-90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_38%,rgb(251_146_60/0.07)_50%,transparent_62%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(10rem,42vw,22rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.035]"
          aria-hidden
        >
          01
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
          <motion.div
            className="relative overflow-visible border border-white/12 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-8 py-12 text-center shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset] sm:px-12 sm:py-14 md:px-16 md:py-16"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.02 }}
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

            <h1 className="mt-2 font-display text-[clamp(2rem,5.2vw+1.1rem,3.75rem)] font-bold leading-[1.2] tracking-[-0.038em]">
              <span className="block text-white">What you get</span>
              <span className="mt-1 block bg-gradient-to-r from-cherry via-tangerine to-rose bg-clip-text px-[0.35em] pb-[0.2em] italic text-transparent tracking-tight md:mt-1.5">
                &amp; what you own
              </span>
            </h1>

            <motion.p
              className="mx-auto mt-5 max-w-2xl text-center font-sans text-[15px] leading-relaxed text-white/76 sm:text-base md:text-[1.05rem] md:leading-relaxed"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.14 }}
            >
              Same system. Scaled by site size, booking depth, and priority.
            </motion.p>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-[11px] sm:tracking-[0.26em]">
              Same criteria · every tier below
            </p>
          </motion.div>
        </div>
      </section>

      <PackagesTierShowcase />

      <section
        className="border-y border-champagne-200/60 bg-gradient-to-b from-white/90 to-champagne-50/40 py-20 md:py-28"
        id="choose-tier"
        aria-labelledby="choose-tier-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springSoft}
          >
            <h2
              id="choose-tier-heading"
              className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[2.25rem]"
            >
              Not sure which tier?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-[1.8] text-ink-muted md:text-[15px]">
              Quick compare: Launch and Suite are monthly subscriptions. Handover is separate and only needed if you
              want to move away later.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 md:mt-18"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={springSoft}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-190 border-collapse bg-white">
                <thead>
                  <tr className="border-b border-champagne-200/90">
                    <th className="w-[34%] px-4 py-6 text-left md:px-6" aria-label="Feature list" />
                    {tierColumns.map((tier) => (
                      <th key={tier.id} className="w-[22%] px-3 py-6 text-center md:px-4">
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="font-display text-[1.55rem] font-semibold tracking-[-0.025em] text-ink md:text-[1.8rem]">
                            {tier.name}
                          </span>
                          <span className="font-sans text-sm font-medium text-ink">{tier.price}</span>
                          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted/80">
                            {tier.cadence}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureRows.map((row, rowIndex) => (
                    <tr
                      key={row.label}
                      className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-champagne-50/20'}
                    >
                      <th className="border-b border-champagne-100/85 px-4 py-6 text-left font-sans text-sm font-medium text-ink md:px-6 md:py-6.5 md:text-[15px]">
                        {row.label}
                      </th>
                      {row.values.map((value, valueIndex) => (
                        <td
                          key={`${row.label}-${valueIndex}`}
                          className="border-b border-champagne-100/85 px-3 py-6 text-center md:px-4 md:py-6.5"
                        >
                          {renderValue(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-3 border-t border-champagne-200/90 bg-white px-4 py-5 sm:grid-cols-3 md:px-6">
              {tierColumns.map((tier) => (
                <GhostButton
                  key={tier.id}
                  type="button"
                  className="w-full justify-center border-champagne-200/90 px-4 py-2.5 text-sm shadow-none"
                  onClick={() => navigate(tier.buttonPath)}
                >
                  {tier.buttonLabel}
                </GhostButton>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-24 rounded-3xl border border-champagne-200/90 bg-white/95 px-6 py-8 text-center shadow-md ring-1 ring-champagne-100/70 md:mt-32 md:px-10 md:py-11"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springSoft, delay: 0.06 }}
          >
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-petal/80 to-champagne-100/90 ring-1 ring-mango/20">
              <ChatsCircle className="size-7 text-tangerine" weight="duotone" aria-hidden />
            </div>
            <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-ink-muted md:text-[15px]">
              Still unsure after reading the above? Send a short note or book through the FAQ — we’ll match you to
              Launch or Suite on facts (volume, team size, how you take bookings), not upsell pressure.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton type="button" className="px-8" onClick={() => navigate('/contact/launch')}>
                Get in touch
              </PrimaryButton>
              <GhostButton type="button" className="px-8" onClick={() => navigate('/#pricing')}>
                View prices on home
              </GhostButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-champagne-200/70 bg-champagne-50/50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springSoft}
          >
            <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
              Same home page, live prices
            </h2>
            <p className="mt-3 font-sans text-sm text-ink-muted md:text-base">
              The pricing cards on the homepage mirror these tiers — <Link to="/#pricing" className="font-semibold text-tangerine underline decoration-tangerine/35 underline-offset-2">
                open Plans
              </Link> to book or compare side-by-side.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PrimaryButton
                type="button"
                className="px-8"
                onClick={() => navigate('/#pricing')}
              >
                Go to Plans
              </PrimaryButton>
              <GhostButton
                type="button"
                className="px-8"
                onClick={() => navigate('/contact/launch')}
              >
                Book a call
              </GhostButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
