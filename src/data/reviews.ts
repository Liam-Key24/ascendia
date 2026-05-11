export type Review = {
  quote: string
  who: string
  role: string
  business: string
  sector: string
  location: string
  website?: string
}

export const REVIEWS: Review[] = [
  {
    quote:
      'Finally - someone answers emails and actually fixes things. Game changer for us.',
    who: 'Jordan',
    role: 'Studio owner',
    business: 'Lumen Studio',
    sector: 'Wellness studio',
    location: 'Ealing, London',
  },
  {
    quote:
      'We went from "we\'ll update the site someday" to it just... being handled.',
    who: 'Priya',
    role: 'Salon owner',
    business: 'Priya Hair Lounge',
    sector: 'Salon',
    location: 'Acton, London',
  },
  {
    quote:
      'I stopped pretending I\'d learn WordPress on the weekend. Worth every penny.',
    who: 'Marcus',
    role: 'Contractor',
    business: 'MK Home Projects',
    sector: 'Trades',
    location: 'Chiswick, London',
  },
  {
    quote:
      'Reservations land in one place now - not scattered across DMs and voicemail.',
    who: 'Elena',
    role: 'Restaurant GM',
    business: 'Terracotta Acton',
    sector: 'Indian dining',
    location: 'Acton, London',
  },
  {
    quote:
      'Guests can actually book online. Our front desk isn\'t playing phone tag all day.',
    who: 'Chris',
    role: 'Spa director',
    business: 'Willow Spa Rooms',
    sector: 'Spa',
    location: 'Hammersmith, London',
  },
  {
    quote:
      'One subscription covers hosting and fixes - I\'m not chasing invoices for SSL at 11 p.m.',
    who: 'Sam',
    role: 'Cafe owner',
    business: 'Southbank Brew',
    sector: 'Cafe',
    location: 'Southbank, London',
  },
]
