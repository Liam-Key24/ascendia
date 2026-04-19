/** Shared field classes — used by `ContactSection` and lead forms. */
export const labelCls = 'font-sans text-xs font-semibold tracking-wide text-ink'

export const inputCls =
  'mt-1.5 w-full rounded-xl border border-champagne-200/90 bg-gradient-to-b from-white to-champagne-50/40 px-4 py-3 font-sans text-sm text-ink shadow-sm outline-none transition placeholder:text-ink-muted/50 focus:border-tangerine/50 focus:bg-white focus:shadow-md focus:ring-2 focus:ring-tangerine/25'

export const textareaCls = `${inputCls} min-h-[100px] resize-y`

/** Homepage contact strip — flat white fields, thin peach borders (matches marketing mockups) */
export const inputContactCls =
  'mt-1.5 w-full rounded-xl border border-champagne-200/90 bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition placeholder:text-ink-muted/45 focus:border-tangerine/45 focus:ring-2 focus:ring-tangerine/15'
export const textareaContactCls = `${inputContactCls} min-h-[120px] resize-y`

export const legendCls = `${labelCls} block`

/** Vertical rhythm for long forms */
export const formStackCls = 'flex flex-col gap-5'

/** Two fields side-by-side from `sm` */
export const formRow2Cls = 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 sm:items-start'

/** Decorative top accent for form cards (flow layout — reserves space) */
export const formAccentBarCls =
  'pointer-events-none h-[3px] w-full shrink-0 bg-gradient-to-r from-tangerine/55 via-mango/45 to-sun/50'

/** Pull accent flush to top edge when parent card uses `p-6 md:p-8` */
export const formAccentBleedContactCls = '-mx-6 -mt-6 mb-5 md:-mx-8 md:-mt-8 md:mb-6'

/** Pull accent flush to top edge when parent card uses `p-6 md:p-10` */
export const formAccentBleedLeadCls = '-mx-6 -mt-6 mb-6 md:-mx-10 md:-mt-10 md:mb-8'

/** Yes / no and similar choice blocks */
export const choiceGroupCls =
  'rounded-2xl border border-champagne-200/80 bg-gradient-to-br from-champagne-50/70 via-white/95 to-champagne-50/40 p-4 shadow-sm ring-1 ring-champagne-100/60'

/** Yes/No options stay on one row */
export const choiceRowCls = 'mt-3 flex flex-nowrap items-stretch gap-2'

export const choiceLabelCls =
  'flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-champagne-200/90 bg-white/90 px-3 py-2.5 font-sans text-sm text-ink shadow-sm transition hover:border-tangerine/35 hover:bg-champagne-50/80 has-[:checked]:border-tangerine/55 has-[:checked]:bg-tangerine/[0.09] has-[:checked]:shadow-md has-[:checked]:ring-2 has-[:checked]:ring-tangerine/20 sm:px-4'
