import { PainBentoVisual } from './PainBentoVisuals'

type BentoWatermarkProps = {
  ids: number[]
  className?: string
}

export function BentoWatermark({ ids, className = '' }: BentoWatermarkProps) {
  return (
    <div
      className={`pointer-events-none absolute opacity-[0.12] saturate-[0.85] ${className}`}
      aria-hidden
    >
      <div className="grid grid-cols-2 gap-3">
        {ids.map((id, i) => (
          <div
            key={`${id}-${i}`}
            className="size-20 overflow-hidden rounded-2xl border border-white/40 bg-white/20 shadow-sm backdrop-blur-[1px] md:size-24"
          >
            <PainBentoVisual id={id} />
          </div>
        ))}
      </div>
    </div>
  )
}
