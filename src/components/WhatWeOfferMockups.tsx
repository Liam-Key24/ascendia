import { RocketLaunch } from '@phosphor-icons/react'

/** Decorative mini-mockups for “What we offer” — inspired by soft SaaS UI, not literal copies. */

export function OfferMockupWebsite() {
  return (
    <div
      className="relative mx-auto w-full max-w-[300px] rounded-2xl border border-champagne-200/90 bg-gradient-to-b from-white to-champagne-50/90 p-3 shadow-[0_20px_50px_-14px_rgb(60_30_20/0.15)] ring-1 ring-white/90"
      aria-hidden
    >
      <div className="flex items-center gap-1.5 px-0.5 pb-2">
        <span className="size-2 rounded-full bg-[#ff6b6b]/90" />
        <span className="size-2 rounded-full bg-[#ffd43b]/90" />
        <span className="size-2 rounded-full bg-[#69db7c]/90" />
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-champagne-200/80 bg-white/95 px-2.5 py-1.5 shadow-sm">
        <span className="size-2 shrink-0 rounded-sm bg-gradient-to-br from-rose to-petal" />
        <span className="truncate font-sans text-[10px] font-medium tracking-tight text-ink-muted">
          yourbusiness.co.uk
        </span>
      </div>
      <div className="mt-2.5 h-1.5 rounded-full bg-gradient-to-r from-sun via-mango to-rose shadow-sm" />
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((k) => (
          <div
            key={k}
            className="h-11 rounded-xl bg-petal/35 ring-1 ring-champagne-200/55"
            style={{ opacity: 1 - k * 0.12 }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-stretch gap-2">
        <div className="h-10 min-w-0 flex-1 rounded-xl bg-gradient-to-r from-cherry/90 via-tangerine to-rose shadow-md shadow-cherry/15" />
        <div className="size-10 shrink-0 rounded-xl bg-champagne-100/90 ring-1 ring-champagne-200/80" />
      </div>
      <span className="absolute -bottom-2 -right-1 rounded-full border border-white/90 bg-white px-2.5 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-tangerine shadow-md">
        Live
      </span>
    </div>
  )
}

export function OfferMockupBookings() {
  return (
    <div
      className="relative mx-auto w-full max-w-[300px] rounded-2xl border border-champagne-200/90 bg-gradient-to-br from-white via-champagne-50/40 to-petal/25 p-3 shadow-[0_20px_50px_-14px_rgb(60_30_20/0.12)] ring-1 ring-white/90"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-champagne-200/65 pb-2">
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-ink-muted">
          Bookings
        </span>
        <span className="rounded-full bg-mango/20 px-2 py-0.5 font-sans text-[9px] font-semibold text-tangerine ring-1 ring-mango/25">
          +12%
        </span>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {['New', 'Hot', 'Booked'].map((label) => (
          <div
            key={label}
            className="rounded-xl bg-champagne-50/95 p-1.5 ring-1 ring-champagne-200/65"
          >
            <p className="text-[8px] font-semibold uppercase tracking-wide text-ink-muted">{label}</p>
            <div className="mt-1.5 space-y-1">
              <div className="h-2 rounded-md bg-gradient-to-r from-tangerine/50 to-rose/35" />
              <div className="h-2 rounded-md bg-champagne-200/90" />
              <div className="h-2 rounded-md bg-champagne-200/55" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex gap-2">
        <div className="flex-1 rounded-xl border border-champagne-200/70 bg-white/95 p-2 shadow-sm">
          <p className="font-sans text-[8px] font-medium uppercase tracking-wide text-ink-muted">
            Today
          </p>
          <p className="font-display text-lg font-semibold tabular-nums leading-tight text-ink">24</p>
        </div>
        <div className="flex-1 rounded-xl border border-champagne-200/70 bg-white/95 p-2 shadow-sm">
          <p className="font-sans text-[8px] font-medium uppercase tracking-wide text-ink-muted">
            Queue
          </p>
          <p className="font-display text-lg font-semibold tabular-nums leading-tight text-ink">9</p>
        </div>
      </div>
      <span className="absolute -left-2 bottom-10 max-w-[7.5rem] rounded-full border border-champagne-200/90 bg-white/95 px-2 py-0.5 font-sans text-[8px] font-medium text-ink-muted shadow-md ring-1 ring-white">
        <span className="mr-1 inline-block size-1.5 rounded-full bg-mango" />
        Secure hosting
      </span>
    </div>
  )
}

export function OfferMockupLaunch() {
  return (
    <div
      className="relative mx-auto w-full max-w-[300px] rounded-2xl border border-champagne-200/90 bg-gradient-to-b from-white via-champagne-50/50 to-petal/20 p-3 shadow-[0_20px_50px_-14px_rgb(60_30_20/0.12)] ring-1 ring-white/90"
      aria-hidden
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <RocketLaunch className="size-5 shrink-0 text-tangerine" weight="duotone" />
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">
            Handover
          </span>
        </div>
        <span className="rounded-full border border-rose/25 bg-white/90 px-2 py-0.5 font-sans text-[9px] font-semibold text-cherry shadow-sm">
          Always on
        </span>
      </div>
      <ul className="mt-3 space-y-2">
        {['Site live', 'Bookings wired', 'You’re trained'].map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mango to-tangerine font-sans text-[10px] font-bold text-white shadow-sm">
              ✓
            </span>
            <span className="font-sans text-[11px] font-medium text-ink/85">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-champagne-200/70 ring-1 ring-champagne-200/50">
        <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-sun via-mango to-tangerine shadow-sm" />
      </div>
      <div className="mt-3 flex gap-2">
        <div className="h-11 min-w-0 flex-1 rounded-2xl bg-gradient-to-r from-cherry via-tangerine to-rose shadow-lg shadow-cherry/20" />
        <div className="size-11 shrink-0 rounded-2xl bg-white ring-1 ring-champagne-200/85 shadow-sm" />
      </div>
      <span className="absolute -bottom-2 left-3 rounded-full border border-white/90 bg-white px-2.5 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-tangerine shadow-md">
        Ready to use
      </span>
    </div>
  )
}
