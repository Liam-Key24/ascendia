/** Deliverables & ownership — shared copy for landing teaser + /packages detail page. */

export type PackagePillar = {
  id: string
  title: string
  /** One line for the landing page */
  teaser: string
  /** Intro line on the detail page */
  lead: string
  bullets: string[]
  outcome: string
  note?: string
}

export const PACKAGE_PILLARS: PackagePillar[] = [
  {
    id: 'website',
    title: 'Custom website',
    teaser: 'Designed & built — mobile-first, fast, yours.',
    lead: 'This is the foundation — custom design, not template-looking.',
    bullets: [
      'Custom design (not template-looking)',
      'Mobile + tablet responsive layout',
      '3–8 pages (Home, About, Services, Contact, etc.)',
      'Contact / enquiry forms',
      'Fast loading + basic performance optimisation',
      'Basic SEO setup (titles, meta, structure)',
    ],
    outcome: 'A professional website they fully own.',
  },
  {
    id: 'bookings',
    title: 'Booking management (built in)',
    teaser: 'Enquiries and bookings in one place — simple, not enterprise software.',
    lead: 'Your differentiator — a proper booking hub for a small team, not a patchwork of apps.',
    bullets: [
      'Enquiry capture from your site',
      'Booking list / simple stages (e.g. New → Confirmed → Done)',
      'Guest & customer records (names, notes, requests)',
      'Form submissions land in the same system as bookings',
      'Simple dashboard view',
    ],
    outcome: 'Everything stays manageable for a busy front-of-house team.',
    note: 'We keep it simple on purpose — built for bookings and guests, not sales automation.',
  },
  {
    id: 'setup',
    title: 'Full setup & integration',
    teaser: 'Domain, SSL, hosting, forms — we wire it all.',
    lead: 'We handle the technical glue so nothing sits half-connected.',
    bullets: [
      'Domain connection (or transfer guidance)',
      'Hosting setup or deployment to their provider',
      'SSL / security setup',
      'Email form routing (so enquiries actually arrive)',
      'Booking system + website connected properly',
    ],
    outcome: 'Go-live without playing email detective.',
  },
  {
    id: 'branding',
    title: 'Branding setup (light)',
    teaser: 'Colours, fonts, layout — logo guidance included.',
    lead: 'Basic but valuable — consistency beats “we’ll fix it later”.',
    bullets: [
      'Colour scheme setup',
      'Font pairing',
      'Layout consistency across pages',
      'Logo placement guidance (full rebrand available if upsold)',
    ],
    outcome: 'Looks like one brand, not a page-by-page accident.',
  },
  {
    id: 'training',
    title: 'Training & handover',
    teaser: 'Walkthrough + docs — you’re not left guessing.',
    lead: 'Critical for the “we own this” feeling.',
    bullets: [
      'Short walkthrough (video or live call)',
      'How to update text & images',
      'How to view & manage bookings and enquiries',
      'Simple documentation to keep',
    ],
    outcome: 'Your team can run day-to-day without calling us for every comma.',
  },
  {
    id: 'ownership',
    title: 'Ownership & no lock-in',
    teaser: 'You own the site & booking data — move hosting if you want.',
    lead: 'Make this explicit in the offer — clarity beats surprises.',
    bullets: [
      'Client owns the website after delivery',
      'Booking records are theirs to use',
      'They can move hosting if they want',
      'No lock-in required — subscription covers care in scope, with handover quoted apart',
    ],
    outcome: 'Ownership first. We’re the partner, not the cage.',
  },
]
