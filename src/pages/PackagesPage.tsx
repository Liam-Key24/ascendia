import { ChatsCircle, Key, RocketLaunch, Sparkle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { GhostButton, PrimaryButton } from '../components/Button'
import { PackagesTierShowcase } from '../components/PackagesTierShowcase'
import { springSoft } from '../motion'

export function PackagesPage() {
  const navigate = useNavigate()

  return (
    <>
      <section className="relative overflow-hidden border-b border-champagne-200/70 bg-gradient-to-b from-champagne-50 via-white to-champagne-50/80 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSoft, delay: 0.05 }}
          >
            <h1 className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-ink md:text-5xl">
              What you get <span className="bg-gradient-to-r from-cherry via-tangerine to-mango bg-clip-text text-transparent">
                &amp; own
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-md font-sans text-sm text-ink-muted md:text-base">
            Same system. Scaled by site size, booking depth, and priority.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#tiers"
                className="inline-flex items-center justify-center rounded-full border border-champagne-200/90 bg-white px-5 py-2.5 font-sans text-sm font-semibold text-ink shadow-sm ring-1 ring-champagne-100/80 transition hover:border-tangerine/35"
              >
                View tiers
              </a>
              <GhostButton
                type="button"
                className="px-5 py-2.5 text-sm"
                onClick={() => navigate('/contact/launch')}
              >
                Contact
              </GhostButton>
            </div>
          </motion.div>
        </div>
      </section>

      <PackagesTierShowcase />

      <section
        className="border-y border-champagne-200/60 bg-gradient-to-b from-white/90 to-champagne-50/40 py-20 md:py-28"
        id="choose-tier"
        aria-labelledby="choose-tier-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
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
              Both monthly plans are <strong className="font-semibold text-ink/88">subscriptions</strong>: you pay <strong className="font-semibold text-ink/88">£65 or £149 per month</strong> for the tier you choose. Each tier includes <strong className="font-semibold text-ink/88">hosting, SSL</strong>, and <strong className="font-semibold text-ink/88">maintenance &amp; changes within that tier&apos;s agreed scope</strong> (what we build and how we care for it is scoped to that tier — not unlimited everything). What changes between Launch and Suite is <strong className="font-semibold text-ink/88">how many pages</strong>, <strong className="font-semibold text-ink/88">how deep booking management goes</strong>, and <strong className="font-semibold text-ink/88">priority + training</strong>. Handover is <strong className="font-semibold text-ink/88">never</strong> part of £65 or £149 — it is quoted separately if you want it later.
            </p>
          </motion.div>

          <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
            <motion.article
              className="rounded-3xl border border-champagne-200/85 bg-white/95 p-9 shadow-md ring-1 ring-champagne-100/70 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={springSoft}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-champagne-50 ring-1 ring-champagne-200/90">
                    <RocketLaunch className="size-7 text-tangerine" weight="duotone" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[1.75rem]">
                      Launch
                    </h3>
                  </div>
                </div>
                <p className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-right md:pt-1">
                  £65<span className="font-sans text-lg font-medium text-ink-muted">/mo</span>
                </p>
              </div>

              <p className="mt-10 border-t border-champagne-200/70 pt-10 font-sans text-sm leading-[1.85] text-ink-muted md:text-[15px]">
                <strong className="font-semibold text-ink/90">How billing works:</strong> £65/month is billed monthly
                for as long as you stay on Launch. The initial build (design, build, booking setup, go-live) is
                delivered as part of the engagement. The subscription covers <strong className="font-semibold text-ink/88">ongoing hosting, SSL</strong>, and <strong className="font-semibold text-ink/88">agreed maintenance &amp; changes within Launch scope</strong>.
                Out-of-scope or out-of-tier work is quoted separately.
              </p>

              <div className="mt-12">
                <ul className="space-y-3 font-sans text-sm leading-[1.85] text-ink-muted md:text-[15px]">
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-tangerine/80" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">First proper site</strong> or a light refresh — you
                      need a credible presence, not a ten-page brochure.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-tangerine/80" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">Roughly 1–3 pages</strong> (e.g. home, services,
                      contact) — enough to explain what you do and take enquiries.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-tangerine/80" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">Lead capture only</strong> — you want a simple list
                      of enquiries, not a full pipeline with stages and handoffs across staff.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-tangerine/80" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">One location or a small team</strong> — one person
                      can reasonably follow up without a shared booking process in the system.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <ul className="space-y-2.5 font-sans text-sm leading-[1.85] text-ink-muted md:text-[15px]">
                  <li>1–3 page custom website</li>
                  <li>Branding setup (fonts, colours, layout)</li>
                  <li>Contact / enquiry forms</li>
                  <li>Simple booking capture — enquiry list</li>
                  <li>Mobile-first layout</li>
                  <li>Hosting &amp; SSL — we manage</li>
                  <li>Maintenance and changes within Launch scope</li>
                </ul>
              </div>

              <p className="mt-12 rounded-2xl border border-champagne-200/80 bg-champagne-50/80 px-5 py-4 font-sans text-sm leading-[1.85] text-ink-muted md:px-6 md:py-5">
                <strong className="font-semibold text-ink/90">When Suite is the better fit:</strong> you need more
                pages, full booking management with contacts, stages and notes, richer enquiry or booking flows, SEO/performance work,
                priority turnaround when something breaks, or multi-person training — that&apos;s all above Launch scope.
              </p>
            </motion.article>

            <motion.article
              className="rounded-3xl border border-mango/30 bg-gradient-to-b from-white to-petal/15 p-9 shadow-lg shadow-cherry/5 ring-1 ring-rose/20 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...springSoft, delay: 0.05 }}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-rose/25">
                    <Sparkle className="size-7 text-cherry" weight="duotone" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[1.75rem]">
                      Suite
                    </h3>
                  </div>
                </div>
                <p className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-right md:pt-1">
                  £149<span className="font-sans text-lg font-medium text-ink-muted">/mo</span>
                </p>
              </div>

              <p className="mt-10 border-t border-champagne-200/70 pt-10 font-sans text-sm leading-[1.85] text-ink-muted md:text-[15px]">
                <strong className="font-semibold text-ink/90">How billing works:</strong> £149/month while you stay on
                Suite. Same idea as Launch: hosting + SSL + <strong className="font-semibold text-ink/88">care within Suite scope</strong>, with <strong className="font-semibold text-ink/88">priority</strong> for fixes and a larger build envelope
                (pages, booking hub, integrations, training). Anything outside the agreed Suite scope is quoted separately.
              </p>

              <div className="mt-12">
                <ul className="space-y-3 font-sans text-sm leading-[1.85] text-ink-muted md:text-[15px]">
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cherry/70" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">Steady enquiry volume</strong> — salons, dining,
                      spas, multi-staff floors where leads must not vanish between shifts.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cherry/70" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">About 5–8 pages</strong> — room for services,
                      locations, team, or offers without cramming everything on one screen.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cherry/70" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">Full booking hub</strong> — contacts, stages,
                      notes so more than one person can pick up an enquiry.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cherry/70" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">Enquiry or booking flows</strong> that match how you
                      actually operate (within scope we agree).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cherry/70" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">Training</strong> — you need staff to use the system
                      day to day, not a single owner who remembers everything.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <ul className="space-y-2.5 font-sans text-sm leading-[1.85] text-ink-muted md:text-[15px]">
                  <li>5–8 page custom website</li>
                  <li>Full design tailored to your business</li>
                  <li>Booking hub — contacts, stages, notes</li>
                  <li>Enquiry / booking form integration</li>
                  <li>Basic SEO and performance optimisation</li>
                  <li>Hosting &amp; SSL — we manage</li>
                  <li>Priority fixes and changes within Suite scope</li>
                  <li>Training so your team can use the system day to day</li>
                </ul>
              </div>

              <p className="mt-12 rounded-2xl border border-champagne-200/80 bg-white/85 px-5 py-4 font-sans text-sm leading-[1.85] text-ink-muted md:px-6 md:py-5">
                <strong className="font-semibold text-ink/90">When Launch is enough:</strong> you don&apos;t need the
                extra pages, full booking hub, priority queue, or multi-session training yet — start smaller and
                upgrade when volume and process justify it.
              </p>
            </motion.article>

            <motion.article
              className="rounded-3xl border-2 border-dashed border-tangerine/40 bg-champagne-50/70 p-9 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...springSoft, delay: 0.08 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-tangerine/30">
                    <Key className="size-7 text-tangerine" weight="duotone" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[1.75rem]">
                      Ownership handover
                    </h3>
                  </div>
                </div>
                <p className="font-display text-2xl font-semibold text-ink sm:text-right md:text-3xl">
                  Custom quote
                </p>
              </div>

              <p className="mt-10 border-t border-champagne-200/70 pt-10 font-sans text-sm leading-[1.85] text-ink-muted md:text-[15px]">
                <strong className="font-semibold text-ink/90">What it is:</strong> a separate, written quote for work
                such as <strong className="font-semibold text-ink/88">full export of site and/or booking data</strong>, <strong className="font-semibold text-ink/88">migration to another host or stack</strong>, or a <strong className="font-semibold text-ink/88">documented handoff</strong> so another team can operate
                everything. It is <strong className="font-semibold text-ink/88">not</strong> included in £65/mo or
                £149/mo. You are <strong className="font-semibold text-ink/88">not</strong> required to buy handover to
                use either subscription month to month.
              </p>

              <div className="mt-12">
                <ul className="space-y-3 font-sans text-sm leading-[1.85] text-ink-muted md:text-[15px]">
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-tangerine/80" aria-hidden />
                    <span>
                      You plan to <strong className="font-semibold text-ink/90">leave managed hosting</strong> or move
                      to another provider.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-tangerine/80" aria-hidden />
                    <span>
                      <strong className="font-semibold text-ink/90">Acquisition, rebrand, or new agency</strong> — you
                      need a clean export and a clear boundary.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-tangerine/80" aria-hidden />
                    <span>
                      You want <strong className="font-semibold text-ink/90">everything in writing</strong> — DNS,
                      domains, data handover — not an informal “send us a zip” at the last minute.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.article>
          </div>

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
