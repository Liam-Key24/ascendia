import { Plus } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { springSnappy } from '../motion'

const easeOut = [0.22, 1, 0.36, 1] as const

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      layout
      className="overflow-hidden rounded-2xl border border-champagne-200/80 bg-white/95 shadow-sm"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-sans text-base font-semibold text-ink transition hover:bg-champagne-50/80"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={springSnappy}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-petal/50 text-tangerine"
        >
          <Plus className="size-5" weight="bold" aria-hidden />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
          >
            <div className="border-t border-champagne-200/60 px-6 pb-6">
              <p className="mt-4 font-sans text-sm leading-relaxed text-ink-muted sm:mt-5">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
