import type { ReactNode } from 'react'

import { A } from './assets'
import { designPx as u } from '../../utils/design'

export function Heading({
  tagline,
  title,
  body,
  align = 'center',
  className = '',
}: {
  tagline: string
  title: ReactNode
  body: ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  const t = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-24 ${t} ${className}`}>
      <div className={`flex flex-col gap-8 ${t}`}>
        <p className="h-17 font-sans font-semibold fs-12 leading-[1.4] tracking-[0.05em] text-ink">{tagline}</p>
        <h2 className="font-serif font-medium fs-32 leading-[1.2] tracking-[-0.02em] text-ink">{title}</h2>
      </div>
      <p className="font-sans fs-14 leading-[1.4] tracking-[0.05em] text-ink [&:not(:has(br))]:min-h-0">{body}</p>
    </div>
  )
}

export type ChartLabel = { x: number; y: number; w: number; gap: number; title: string; sub: string }
export type ChartBand = { x: number; y: number; w: number; h: number; src: string }

/** Pyramid chart: SVG bands absolutely positioned, real-text labels on top. */
export function Chart({
  bands,
  labels,
  className = '',
  children,
}: {
  bands: ChartBand[]
  labels: ChartLabel[]
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={`relative ${className}`}>
      {bands.map((b) => (
        <img
          key={b.src}
          src={A(b.src)}
          alt=""
          draggable={false}
          className="absolute block max-w-none"
          style={{ left: u(b.x), top: u(b.y), width: u(b.w), height: u(b.h) }}
        />
      ))}
      {labels.map((l) => (
        <div
          key={l.title}
          className="absolute flex flex-col items-center text-center whitespace-nowrap text-ink"
          style={{ left: u(l.x), top: u(l.y), width: u(l.w), gap: u(l.gap) }}
        >
          <span className="font-serif font-semibold fs-16 leading-[1.4]">{l.title}</span>
          <span className="font-sans fs-12 leading-[1.5]">{l.sub}</span>
        </div>
      ))}
      {children}
    </div>
  )
}
