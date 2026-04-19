import { motion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const
const float = {
  y: [0, -10, 0],
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,640px)]">
      <div
        className="pointer-events-none absolute -inset-10 rounded-[40px] opacity-95 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgb(251 191 36 / 0.35), transparent 50%), radial-gradient(ellipse at 70% 80%, rgb(244 114 182 / 0.28), transparent 45%), radial-gradient(ellipse at 50% 50%, rgb(249 115 22 / 0.18), transparent 55%)',
        }}
      />

      <motion.div
        className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-center sm:gap-6"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 26 }}
      >
        <motion.div
          className="relative z-10 w-full overflow-hidden rounded-2xl border border-champagne-200/80 bg-white/90 shadow-soft backdrop-blur-xl sm:max-w-[280px]"
          animate={float}
          whileHover={{ y: -12, scale: 1.02, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        >
          <div className="flex items-center gap-2 border-b border-champagne-200/60 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-cherry/90" />
              <span className="size-2.5 rounded-full bg-mango/90" />
              <span className="size-2.5 rounded-full bg-sun/90" />
            </div>
            <span className="ml-2 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Bookings
            </span>
          </div>
          <div className="flex gap-3 p-4">
            <div className="flex w-14 shrink-0 flex-col gap-2">
              {['Calendar', 'Reservations', 'Guests'].map((label, i) => (
                <div
                  key={label}
                  className={`rounded-lg px-2 py-1.5 font-sans text-[10px] font-medium ${
                    i === 0
                      ? 'bg-rose/15 text-blush'
                      : 'text-ink-muted/80'
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="min-w-0 flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-ink">
                  Tonight
                </span>
                <span className="rounded-full bg-sun/25 px-2 py-0.5 font-sans text-[10px] font-semibold text-ruby">
                  +12%
                </span>
              </div>
              {[72, 54, 38].map((w, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="h-1.5 overflow-hidden rounded-full bg-black/6">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cherry via-tangerine to-rose"
                      initial={{ width: 0 }}
                      animate={{ width: `${w}%` }}
                      transition={{
                        duration: 1.1,
                        delay: 0.4 + idx * 0.12,
                        ease: easeOut,
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="rounded-xl border border-champagne-200/50 bg-petal/30 p-2">
                  <p className="font-sans text-[9px] text-ink-muted">Booked today</p>
                  <p className="font-display text-sm font-semibold text-ink">24</p>
                </div>
                <div className="rounded-xl border border-champagne-200/50 bg-petal/30 p-2">
                  <p className="font-sans text-[9px] text-ink-muted">Waitlist</p>
                  <p className="font-display text-sm font-semibold text-ink">9</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 w-full overflow-hidden rounded-2xl border border-champagne-200/80 bg-white/90 shadow-soft backdrop-blur-xl sm:max-w-[320px]"
          animate={{
            y: [0, -12, 0],
            transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          }}
          whileHover={{ y: -14, scale: 1.02, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="flex items-center gap-2 border-b border-champagne-200/60 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-cherry/90" />
              <span className="size-2.5 rounded-full bg-mango/90" />
              <span className="size-2.5 rounded-full bg-sun/90" />
            </div>
            <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-black/4 px-3 py-1.5">
              <span className="size-3 shrink-0 rounded-sm bg-rose/60" />
              <span className="truncate font-sans text-[10px] tracking-wide text-ink-muted">
                yourbusiness.com
              </span>
            </div>
          </div>
          <div className="space-y-4 p-5">
            <div className="space-y-2">
              <motion.div
                className="h-2 w-3/4 rounded-full bg-gradient-to-r from-sun/50 via-mango/40 to-rose/45"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: 'left center' }}
              />
              <div className="h-2 w-1/2 rounded-full bg-black/7" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="aspect-4/3 rounded-xl bg-gradient-to-br from-petal/50 to-champagne-50 ring-1 ring-mango/15"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <motion.div
                className="h-9 flex-1 rounded-xl bg-gradient-to-r from-cherry via-tangerine to-rose shadow-lg shadow-cherry/25"
                whileHover={{ scale: 1.02 }}
              />
              <div className="h-9 w-9 rounded-xl bg-black/6" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-2 top-6 z-20 hidden rounded-full border border-mango/35 bg-white/95 px-3 py-1.5 font-sans text-[10px] font-semibold tracking-wide text-cherry shadow-card backdrop-blur sm:block"
          initial={{ opacity: 0, x: 16 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { delay: 0.9, duration: 0.4 },
            x: { delay: 0.9, duration: 0.4 },
            y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          Always on
        </motion.div>
        <motion.div
          className="absolute -left-4 bottom-8 z-20 hidden rounded-full border border-rose/35 bg-white/95 px-3 py-1.5 font-sans text-[10px] font-semibold tracking-wide text-ink shadow-card backdrop-blur sm:block"
          initial={{ opacity: 0, x: -16 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, 5, 0],
          }}
          transition={{
            opacity: { delay: 1.05, duration: 0.4 },
            x: { delay: 1.05, duration: 0.4 },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
          }}
        >
          <span className="text-mango">●</span> Secure hosting
        </motion.div>
      </motion.div>
    </div>
  )
}
