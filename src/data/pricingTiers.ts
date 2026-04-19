/** Subscription tiers + optional ownership handover — shared by Home + Packages pages. */

export type SubscriptionTier = {
  id: string
  name: string
  tierLabel: string
  price: string
  blurb: string
  highlight: boolean
  /** Short “vibe” line for packages page */
  pitch: string
  /** Fun micro-badges under the price */
  vibes: string[]
  items: string[]
  outcome: string
}

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: 'launch',
    name: 'Launch',
    tierLabel: 'Start here',
    price: '£65',
    blurb: 'Lean site. Real bookings.',
    pitch: 'Lean site, smart booking capture — get live without the late nights.',
    vibes: ['1–3 pages', 'Enquiry capture', 'We host & fix'],
    highlight: false,
    items: [
      '1–3 page custom site',
      'Branding setup (fonts, colours, layout)',
      'Contact / enquiry forms',
      'Simple booking capture — enquiry list',
      'Mobile-first layout',
      'Hosting & SSL — we manage',
      'Maintenance & in-scope changes',
    ],
    outcome: 'Get live fast — we run hosting and care in scope.',
  },
  {
    id: 'suite',
    name: 'Suite',
    tierLabel: 'Full stack',
    price: '£149',
    blurb: 'Site + pipeline + priority.',
    pitch: 'The works — richer pages, pipeline, and priority when you need it.',
    vibes: ['5–8 pages', 'Full booking hub', 'Priority care'],
    highlight: true,
    items: [
      '5–8 page custom site',
      'Full design for your business',
      'Booking hub — contacts, stages, notes',
      'Enquiry / booking integration',
      'SEO + performance pass',
      'Hosting & SSL — we manage',
      'Priority fixes & in-scope changes',
      'Hands-on team training',
    ],
    outcome: 'One stack, priority support — your team can actually use it.',
  },
]

export type HandoverTier = {
  id: string
  name: string
  tierLabel: string
  priceLabel: string
  blurb: string
  pitch: string
  vibes: string[]
  items: string[]
  outcome: string
}

/** One-time — not part of monthly subs */
export const OWNERSHIP_HANDOVER: HandoverTier = {
  id: 'handover',
  name: 'Ownership handover',
  tierLabel: 'One-time',
  priceLabel: 'Custom quote',
  blurb: 'When you want the keys.',
  pitch: 'Export, migration, or full transfer — quoted separately, no subscription tricks.',
  vibes: ['Your stack', 'Your host', 'Clean exit'],
  items: [
    'Full export of site assets & content (as agreed)',
    'Booking data export / migration guidance',
    'Hosting migration support or handoff docs',
    'DNS & domain transfer guidance',
    'No lock-in — you paid for the build, and this is optional continuity',
  ],
  outcome: 'Walk away with what you own — we scope it clearly upfront.',
}
