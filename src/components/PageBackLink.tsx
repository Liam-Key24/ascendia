import { ArrowLeft } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { springSoft } from '../motion'

type PageBackLinkVariant = 'dark' | 'light' | 'accent'

const variantStyles: Record<
  PageBackLinkVariant,
  { link: string; iconWrap: string }
> = {
  dark: {
    link: 'text-white/75 hover:text-white',
    iconWrap:
      'border-white/15 bg-white/5 group-hover:border-white/25 group-hover:bg-white/10',
  },
  light: {
    link: 'text-ink-muted hover:text-ink',
    iconWrap:
      'border-champagne-200/90 bg-white/80 shadow-sm group-hover:border-tangerine/35 group-hover:bg-white',
  },
  accent: {
    link: 'text-tangerine hover:text-cherry',
    iconWrap:
      'border-mango/30 bg-white/70 group-hover:border-tangerine/50 group-hover:bg-white/90',
  },
}

/** Full-bleed-friendly back link — pair with a parent `max-w-7xl px-4 sm:px-5` row so it sits nearer the viewport edge. */
export function PageBackLink({ variant }: { variant: PageBackLinkVariant }) {
  const reduceMotion = useReducedMotion()
  const v = variantStyles[variant]

  return (
    <motion.div
      initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={springSoft}
    >
      <Link
        to="/"
        className={`group inline-flex items-center gap-2.5 rounded-full py-1 pr-2 font-sans text-sm font-medium transition ${v.link}`}
      >
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition ${v.iconWrap}`}
        >
          <ArrowLeft className="size-4" weight="bold" aria-hidden />
        </span>
        Home
      </Link>
    </motion.div>
  )
}
