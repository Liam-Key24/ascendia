import { ASCENDIA as C } from '../constants/ascendiaPalette'

/**
 * Bauhaus-style modular SVG tiles — Ascendia palette, linear + radial gradients only.
 */

function DefsPain0({ uid }: { uid: string }) {
  return (
    <defs>
      <radialGradient id={`${uid}-rad`} cx="50%" cy="42%" r="58%">
        <stop offset="0%" stopColor={C.petal} />
        <stop offset="55%" stopColor={C.champagne100} />
        <stop offset="100%" stopColor={C.champagne50} />
      </radialGradient>
      <linearGradient id={`${uid}-arc`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={C.mango} />
        <stop offset="100%" stopColor={C.tangerine} />
      </linearGradient>
    </defs>
  )
}

function DefsPain1({ uid }: { uid: string }) {
  return (
    <defs>
      <linearGradient id={`${uid}-pill`} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={C.sun} />
        <stop offset="45%" stopColor={C.mango} />
        <stop offset="100%" stopColor={C.tangerine} />
      </linearGradient>
      <linearGradient id={`${uid}-chip`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={C.cherry} />
        <stop offset="100%" stopColor={C.ruby} />
      </linearGradient>
    </defs>
  )
}

function DefsPain2({ uid }: { uid: string }) {
  return (
    <defs>
      <linearGradient id={`${uid}-cell`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={C.cherry} />
        <stop offset="100%" stopColor={C.rose} />
      </linearGradient>
    </defs>
  )
}

function DefsPain3({ uid }: { uid: string }) {
  return (
    <defs>
      <linearGradient id={`${uid}-tri`} x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={C.tangerine} />
        <stop offset="55%" stopColor={C.cherry} />
        <stop offset="100%" stopColor={C.rose} />
      </linearGradient>
      <linearGradient id={`${uid}-tri2`} x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={C.mango} />
        <stop offset="100%" stopColor={C.blush} />
      </linearGradient>
    </defs>
  )
}

function DefsPain4({ uid }: { uid: string }) {
  return (
    <defs>
      <radialGradient id={`${uid}-sun`} cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor={C.sun} />
        <stop offset="70%" stopColor={C.mango} />
        <stop offset="100%" stopColor={C.tangerine} />
      </radialGradient>
      <linearGradient id={`${uid}-ray`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={C.petal} />
        <stop offset="100%" stopColor={C.rose} />
      </linearGradient>
    </defs>
  )
}

export function PainBentoVisual({ id }: { id: number }) {
  const uid = `pain-${id}`

  switch (id) {
    case 0: {
      // Semicircle + radial orb + quarter arcs (signal / fade)
      return (
        <svg viewBox="0 0 100 100" className="block h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
          <DefsPain0 uid={uid} />
          <rect width="100" height="100" fill={C.champagne100} />
          {/* Upper semicircle (center 50,50 r=50) */}
          <path
            d="M 0 50 A 50 50 0 0 1 100 50 L 100 0 L 0 0 Z"
            fill={C.champagne200}
            opacity="0.65"
          />
          <circle cx="50" cy="44" r="34" fill={`url(#${uid}-rad)`} />
          {/* Quarter circle top-right */}
          <path d="M 100 50 A 50 50 0 0 1 50 0 L 100 0 Z" fill={`url(#${uid}-arc)`} opacity="0.92" />
          {/* Quarter circle bottom-left */}
          <path d="M 0 50 A 50 50 0 0 1 50 100 L 0 100 Z" fill={C.mango} opacity="0.55" />
        </svg>
      )
    }
    case 1: {
      // Tall pill + accent chip (time pressure)
      return (
        <svg viewBox="0 0 100 100" className="block h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
          <DefsPain1 uid={uid} />
          <rect width="100" height="100" fill={C.champagne50} />
          <rect x="36" y="10" width="28" height="80" rx="14" fill={`url(#${uid}-pill)`} />
          <rect x="8" y="56" width="22" height="32" rx="8" fill={`url(#${uid}-chip)`} opacity="0.9" />
          <rect x="70" y="24" width="22" height="52" rx="10" fill={C.petal} opacity="0.85" />
        </svg>
      )
    }
    case 2: {
      // Modular triangle grid + one gradient cell (channels)
      return (
        <svg viewBox="0 0 100 100" className="block h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
          <DefsPain2 uid={uid} />
          <rect width="100" height="100" fill={C.champagne100} />
          {/* Row 1: three right triangles */}
          <polygon points="4,8 34,8 4,38" fill={C.mango} />
          <polygon points="38,8 68,8 38,38" fill={C.inkMuted} opacity="0.35" />
          <polygon points="72,8 96,8 72,38" fill={C.sunDeep} opacity="0.85" />
          {/* Row 2 */}
          <polygon points="4,42 34,42 4,72" fill={C.tangerine} opacity="0.75" />
          <polygon points="38,42 68,42 38,72" fill={`url(#${uid}-cell)`} />
          <polygon points="72,42 96,42 72,72" fill={C.mango} opacity="0.6" />
          {/* Row 3 */}
          <polygon points="4,76 34,76 4,96" fill={C.inkMuted} opacity="0.28" />
          <polygon points="38,76 68,76 38,96" fill={C.cherry} opacity="0.45" />
          <polygon points="72,76 96,76 72,96" fill={C.petal} opacity="0.9" />
        </svg>
      )
    }
    case 3: {
      // Overlapping triangles + stripe (cost / drain)
      return (
        <svg viewBox="0 0 100 100" className="block h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
          <DefsPain3 uid={uid} />
          <rect width="100" height="100" fill={C.champagne50} />
          <polygon points="8,92 92,92 50,18" fill={`url(#${uid}-tri)`} opacity="0.95" />
          <polygon points="20,92 80,92 50,32" fill={`url(#${uid}-tri2)`} opacity="0.75" />
          <rect x="0" y="0" width="22" height="100" fill={C.champagne200} opacity="0.55" />
          <rect x="78" y="0" width="10" height="100" fill={C.ink} opacity="0.18" />
        </svg>
      )
    }
    case 4: {
      // Radial core + rays + star (broadcast / pipeline)
      const rays = [0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <rect
          key={i}
          x="48"
          y="10"
          width="4"
          height="22"
          fill={`url(#${uid}-ray)`}
          opacity="0.85"
          transform={`rotate(${deg} 50 50)`}
        />
      ))
      return (
        <svg viewBox="0 0 100 100" className="block h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
          <DefsPain4 uid={uid} />
          <rect width="100" height="100" fill={C.champagne100} />
          <circle cx="50" cy="50" r="26" fill={`url(#${uid}-sun)`} />
          {rays}
          <path
            d="M50 18 L58 42 L84 50 L58 58 L50 82 L42 58 L16 50 L42 42 Z"
            fill={C.petal}
            opacity="0.55"
          />
        </svg>
      )
    }
    default:
      return null
  }
}
