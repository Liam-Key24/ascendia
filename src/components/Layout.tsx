import { motion } from 'framer-motion'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { GhostButton, PrimaryButton } from './Button'
import { springSnappy } from '../motion'

export function Layout({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  const link = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'font-semibold text-ink' : 'text-ink-muted transition hover:text-ink'

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-15%,rgb(251_191_36/0.28),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_95%_5%,rgb(244_114_182/0.14),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_100%,rgb(249_115_22/0.1),transparent)]" />
        <motion.div
          className="absolute -left-32 top-1/4 size-96 rounded-full bg-gradient-to-br from-mango/30 via-rose/20 to-transparent blur-3xl"
          animate={{ y: [0, 24, 0], rotate: [0, 6, -2, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 bottom-1/4 size-[22rem] rounded-full bg-gradient-to-br from-champagne-200/60 via-sun/15 to-petal/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -14, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 size-64 rounded-full bg-gradient-to-br from-cherry/20 to-transparent blur-3xl"
          animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-champagne-200/60 bg-champagne-50/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <motion.div whileHover={{ scale: 1.03 }} transition={springSnappy}>
            <Link
              to="/"
              className="font-display text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl"
            >
              Ascendia
            </Link>
          </motion.div>

          <nav
            className="hidden flex-1 justify-center gap-5 font-sans text-sm font-medium sm:flex sm:gap-6"
            aria-label="Main"
          >
            <NavLink to="/packages" className={link}>
              Packages
            </NavLink>
            <NavLink to="/work" className={link}>
              Work
            </NavLink>
            <NavLink to="/compare" className={link}>
              Compare
            </NavLink>
            <a href="/#enquiries" className="text-ink-muted transition hover:text-ink">
              Enquiries
            </a>
            <a href="/#faq" className="text-ink-muted transition hover:text-ink">
              FAQ
            </a>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <GhostButton
              type="button"
              className="hidden px-4 py-2 text-xs sm:inline-flex sm:px-5 sm:py-2.5 sm:text-sm"
              onClick={() => navigate('/#enquiries')}
            >
              Enquiries
            </GhostButton>
            <PrimaryButton
              className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
              onClick={() => navigate('/#pricing')}
            >
              Start
            </PrimaryButton>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/5 bg-wine-deep py-12 text-center font-sans text-sm text-white/55">
        <p className="font-display text-lg font-semibold tracking-[-0.02em] text-champagne-50 sm:text-xl">
          Ascendia
        </p>
        <p className="mt-2 text-white/50">Sites &amp; bookings — we host &amp; maintain.</p>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-sm">
          <Link to="/packages" className="text-white/70 hover:text-white">
            Packages
          </Link>
          <span className="text-white/25">·</span>
          <Link to="/work" className="text-white/70 hover:text-white">
            Work
          </Link>
          <span className="text-white/25">·</span>
          <Link to="/compare" className="text-white/70 hover:text-white">
            Compare
          </Link>
          <span className="text-white/25">·</span>
          <Link to="/#enquiries" className="text-white/70 hover:text-white">
            Enquiries
          </Link>
        </p>
        <p className="mt-6 text-xs text-white/35">
          © {new Date().getFullYear()} Ascendia
        </p>
      </footer>
    </div>
  )
}
