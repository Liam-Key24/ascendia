import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { springSnappy } from '../motion'

export function Pill({ children }: { children: ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={springSnappy}
      className="inline-flex items-center rounded-full border border-mango/35 bg-white/90 px-5 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted shadow-sm backdrop-blur"
    >
      {children}
    </motion.span>
  )
}
