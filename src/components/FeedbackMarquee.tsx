import { ChatCircle, Quotes } from '@phosphor-icons/react'

const FEEDBACK = [
  {
    quote:
      'Finally — someone answers emails and actually fixes things. Game changer for us.',
    who: 'Jordan',
    role: 'Studio owner',
  },
  {
    quote:
      'We went from “we’ll update the site someday” to it just… being handled.',
    who: 'Priya',
    role: 'Salon owner',
  },
  {
    quote:
      'I stopped pretending I’d learn WordPress on the weekend. Worth every penny.',
    who: 'Marcus',
    role: 'Contractor',
  },
  {
    quote:
      'Reservations land in one place now — not scattered across DMs and voicemail.',
    who: 'Elena',
    role: 'Restaurant GM',
  },
  {
    quote:
      'Guests can actually book online. Our front desk isn’t playing phone tag all day.',
    who: 'Chris',
    role: 'Spa director',
  },
  {
    quote:
      'One subscription covers hosting and fixes — I’m not chasing invoices for SSL at 11 p.m.',
    who: 'Sam',
    role: 'Cafe owner',
  },
]

export function FeedbackMarquee() {
  const loop = [...FEEDBACK, ...FEEDBACK]

  return (
    <section
      id="feedback"
      className="scroll-mt-24 border-y border-champagne-200/70 bg-white/40 py-10"
      aria-label="Customer feedback"
    >
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-champagne-50 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-champagne-50 to-transparent"
          aria-hidden
        />
        <div className="flex w-max animate-feedback-marquee gap-6 pr-6 hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <article
              key={`${item.who}-${i}`}
              className="flex w-[min(100vw-3rem,380px)] shrink-0 flex-col rounded-2xl border border-champagne-200/80 bg-white/95 p-6 shadow-sm"
            >
              <Quotes
                className="mb-3 size-8 text-mango/80"
                weight="duotone"
                aria-hidden
              />
              <p className="font-sans text-[15px] leading-relaxed text-ink">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-champagne-200/60 pt-4 font-sans text-sm text-ink-muted">
                <ChatCircle className="size-4 text-tangerine" weight="fill" />
                <span>
                  <span className="font-semibold text-ink">{item.who}</span>
                  <span className="text-ink-muted"> · {item.role}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
