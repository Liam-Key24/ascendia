/** Shared Framer Motion presets */
export const springSnappy = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 26,
}
export const springSoft = {
  type: 'spring' as const,
  stiffness: 220,
  damping: 28,
}

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { ...springSoft, mass: 0.8 },
}
