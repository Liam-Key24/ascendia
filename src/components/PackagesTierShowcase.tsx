import { CheckFat, Key, RocketLaunch, Sparkle } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import type { HandoverTier, SubscriptionTier } from '../data/pricingTiers'
import { OWNERSHIP_HANDOVER, SUBSCRIPTION_TIERS } from '../data/pricingTiers'
import { springSnappy, springSoft } from '../motion'
import { GhostButton, PrimaryButton } from './Button'

const tierIcon = (id: string) => {
  if (id === 'launch') return RocketLaunch
  if (id === 'suite') return Sparkle
  return Key
}

const cardVariants = {
  hidden: (reduce: boolean) =>
    reduce
      ? { opacity: 0, y: 16 }
      : { opacity: 0, y: 36, rotate: -1.5, scale: 0.97 },
  show: (reduce: boolean) =>
    reduce
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: springSoft,
        },
}

const listContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
}

const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: springSnappy },
}

function SubscriptionCard({
  tier,
  reduceMotion,
}: {
  tier: SubscriptionTier
  reduceMotion: boolean | null
}) {
  const navigate = useNavigate()
  const Icon = tierIcon(tier.id)
  const rm = !!reduceMotion

  return (
    <motion.article
      custom={rm}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={
        rm
          ? undefined
          : {
              y: -8,
              scale: tier.highlight ? 1.02 : 1.015,
              transition: springSnappy,
            }
      }
      className={`relative flex h-full flex-col rounded-3xl border p-6 text-left shadow-lg transition-shadow sm:p-8 ${
        tier.highlight
          ? 'z-[1] border-mango/45 bg-gradient-to-b from-white via-white to-petal/20 shadow-xl shadow-cherry/10 ring-2 ring-rose/25 md:-mt-2 md:scale-[1.02]'
          : 'border-champagne-200/90 bg-white/95 shadow-card ring-1 ring-champagne-100/80'
      }`}
    >
      {tier.highlight && (
        <motion.span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-gradient-to-r from-cherry via-tangerine to-rose px-4 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg"
          animate={
            rm
              ? undefined
              : { y: [0, -3, 0] }
          }
          transition={
            rm
              ? undefined
              : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          Most picked
        </motion.span>
      )}

      <div className="flex items-start gap-3">
        <span
          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${
            tier.highlight
              ? 'bg-gradient-to-br from-petal/90 to-champagne-100 ring-1 ring-mango/25'
              : 'bg-champagne-50 ring-1 ring-champagne-200/80'
          }`}
        >
          <Icon
            className={`size-7 ${tier.highlight ? 'text-cherry' : 'text-tangerine'}`}
            weight="duotone"
            aria-hidden
          />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
            {tier.name}
          </h3>
          <p className="mt-1 font-sans text-sm font-medium text-tangerine">{tier.blurb}</p>
        </div>
      </div>

      <p className="mt-5 font-sans text-sm leading-relaxed text-ink-muted">{tier.pitch}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tier.vibes.map((v) => (
          <span
            key={v}
            className="rounded-full border border-champagne-200/90 bg-champagne-50/80 px-2.5 py-1 font-sans text-[11px] font-medium text-ink/85"
          >
            {v}
          </span>
        ))}
      </div>

      <p className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] text-ink">
        {tier.price}
        <span className="font-sans text-lg font-medium text-ink-muted">/mo</span>
      </p>
      <p className="mt-1 font-sans text-xs text-ink-muted">Hosting &amp; maintenance in scope.</p>

      <motion.ul
        className="mt-6 flex-1 space-y-2.5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={listContainer}
      >
        {tier.items.map((li) => (
          <motion.li key={li} variants={listItem} className="flex gap-2.5 font-sans text-sm text-ink-muted">
            <CheckFat className="mt-0.5 size-5 shrink-0 text-mango" weight="fill" aria-hidden />
            <span>{li}</span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-6 rounded-2xl border border-champagne-200/80 bg-champagne-50/80 px-4 py-3">
        <p className="font-sans text-sm font-medium leading-snug text-ink">{tier.outcome}</p>
      </div>

      <PrimaryButton className="mt-8 w-full" onClick={() => navigate(`/contact/${tier.id}`)}>
        Chat about {tier.name}
      </PrimaryButton>
    </motion.article>
  )
}

function HandoverCard({
  tier,
  reduceMotion,
}: {
  tier: HandoverTier
  reduceMotion: boolean | null
}) {
  const navigate = useNavigate()
  const Icon = tierIcon(tier.id)
  const rm = !!reduceMotion

  return (
    <motion.article
      id="ownership"
      custom={rm}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={rm ? undefined : { y: -6, transition: springSnappy }}
      className="relative flex h-full flex-col rounded-3xl border border-dashed border-tangerine/45 bg-gradient-to-br from-champagne-50/95 to-white p-6 text-left shadow-md ring-2 ring-tangerine/10 sm:p-8"
    >
      <div className="absolute -right-6 -top-6 size-24 rounded-full bg-gradient-to-br from-sun/25 to-mango/10 blur-2xl" aria-hidden />

      <div className="flex items-start gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-tangerine/25">
          <Icon className="size-7 text-tangerine" weight="duotone" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
            {tier.name}
          </h3>
          <p className="mt-1 font-sans text-sm font-medium text-ink-muted">{tier.blurb}</p>
        </div>
      </div>

      <p className="mt-5 font-sans text-sm leading-relaxed text-ink-muted">{tier.pitch}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tier.vibes.map((v) => (
          <span
            key={v}
            className="rounded-full border border-tangerine/25 bg-white/90 px-2.5 py-1 font-sans text-[11px] font-medium text-ink/90"
          >
            {v}
          </span>
        ))}
      </div>

      <p className="mt-6 font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
        {tier.priceLabel}
      </p>
      <p className="mt-1 font-sans text-xs text-ink-muted">Scoped after we know your stack.</p>

      <motion.ul
        className="mt-6 flex-1 space-y-2.5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={listContainer}
      >
        {tier.items.map((li) => (
          <motion.li key={li} variants={listItem} className="flex gap-2.5 font-sans text-sm text-ink-muted">
            <CheckFat className="mt-0.5 size-5 shrink-0 text-tangerine" weight="fill" aria-hidden />
            <span>{li}</span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-6 rounded-2xl border border-tangerine/20 bg-white/90 px-4 py-3">
        <p className="font-sans text-sm font-medium leading-snug text-ink">{tier.outcome}</p>
      </div>

      <GhostButton className="mt-8 w-full" onClick={() => navigate('/contact/custom')}>
        Ask about handover
      </GhostButton>
    </motion.article>
  )
}

export function PackagesTierShowcase() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="tiers"
      className="relative scroll-mt-24 border-y border-champagne-200/60 bg-gradient-to-b from-petal/10 via-white to-champagne-50/40 py-16 md:py-24"
      aria-labelledby="packages-tiers-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-72 max-w-4xl bg-[radial-gradient(ellipse_at_center,rgb(251_146_60/0.14),transparent_65%)] blur-2xl md:top-28"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springSoft}
        >
          <h2
            id="packages-tiers-heading"
            className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.35rem]"
          >
            Three ways to work with us — <span className="italic text-tangerine">same craft</span>, different runway.
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-ink-muted md:text-base">
            Subscriptions keep us in your corner, and handover is optional when you want the keys.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          <SubscriptionCard tier={SUBSCRIPTION_TIERS[0]} reduceMotion={reduceMotion} />
          <SubscriptionCard tier={SUBSCRIPTION_TIERS[1]} reduceMotion={reduceMotion} />
          <HandoverCard tier={OWNERSHIP_HANDOVER} reduceMotion={reduceMotion} />
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-lg text-center font-sans text-xs text-ink-muted md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, ...springSoft }}
        >
          Monthly plans include hosting &amp; care in scope. Handover is quoted separately — no
          surprise line items.
        </motion.p>
      </div>
    </section>
  )
}
