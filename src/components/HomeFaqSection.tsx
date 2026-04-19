import { motion } from 'framer-motion'
import { fadeUp } from '../motion'
import { FaqItem } from './FaqItem'

export function HomeFaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-champagne-200/70 bg-champagne-50/50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div className="text-center" {...fadeUp}>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.35rem]">
            FAQ
          </h2>
          <p className="mt-2 font-sans text-sm text-ink-muted">Tap to open.</p>
        </motion.div>
        <div className="mt-10 flex flex-col gap-3">
          <FaqItem
            question="Do I build it myself?"
            answer="No — we design and build. Plans include hosting and maintenance. Full ownership handover is a separate one-time quote if you want it later."
          />
          <FaqItem
            question="Enterprise booking or PMS software?"
            answer="No — it’s a lean booking management layer plus your site (salons, dining, spas). If you need hospital-grade scheduling or deep POS integration, we’ll say if we’re not the fit."
          />
          <FaqItem
            question="Subscription vs handover?"
            answer="Launch (£65/mo) and Suite (£149/mo) cover hosting, maintenance, and in-scope changes. Full transfer/migration/handover is quoted separately."
          />
          <FaqItem
            question="Changes after launch?"
            answer="Yes — request edits and we queue them per your plan."
          />
          <FaqItem
            question="Already have a site?"
            answer="We can migrate or rebuild — we’ll scope it on a call."
          />
        </div>
      </div>
    </section>
  )
}
