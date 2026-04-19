import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from './Button'
import { fadeUp, springSnappy } from '../motion'

export function HomeFinalCtaSection() {
  const navigate = useNavigate()

  return (
    <section className="border-t border-champagne-200/70 bg-gradient-to-b from-white to-champagne-100/95 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-ink md:text-5xl md:leading-[1.1]">
            Run the day. <span className="bg-gradient-to-r from-cherry via-mango to-rose bg-clip-text italic text-transparent">
              We run the site.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans text-base text-ink-muted md:text-lg">
            Free call — Launch vs Suite, what&apos;s included, handover options.
          </p>
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springSnappy}
          >
            <PrimaryButton className="px-10 py-4 text-base" onClick={() => navigate('/#pricing')}>
              Get started
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
