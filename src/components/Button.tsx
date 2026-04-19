import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { springSnappy } from '../motion'

export function PrimaryButton({
  children,
  className = '',
  onClick,
  type = 'button',
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cherry via-tangerine to-rose px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-white shadow-[0_10px_40px_-4px_rgb(239_68_68/0.45)] ring-1 ring-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sun/70 focus-visible:ring-offset-2 focus-visible:ring-offset-champagne-50 ${className}`}
      whileHover={{ scale: 1.06, y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
    >
      {children}
    </motion.button>
  )
}

export function GhostButton({
  children,
  className = '',
  onClick,
  type = 'button',
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border border-champagne-200/80 bg-white/90 px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-ink shadow-sm backdrop-blur transition hover:border-mango/50 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/40 focus-visible:ring-offset-2 focus-visible:ring-offset-champagne-50 ${className}`}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={springSnappy}
    >
      {children}
    </motion.button>
  )
}
