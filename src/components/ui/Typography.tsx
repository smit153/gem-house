import type { ElementType, ReactNode } from 'react'

type Props = { children: ReactNode; className?: string; as?: ElementType }

/** Mulish 600 12/16.8, tracking 0.6px — small eyebrow above headings */
export function Tagline({ children, className = '', as: Tag = 'p' }: Props) {
  return <Tag className={`font-sans font-semibold fs-12 leading-[1.4] tracking-[0.05em] ${className}`}>{children}</Tag>
}

/** Cormorant Infant 500 44/47.52, tracking -0.88px — hero H1 */
export function H1({ children, className = '', as: Tag = 'h1' }: Props) {
  return <Tag className={`font-serif font-medium fs-44 leading-[1.08] tracking-[-0.02em] ${className}`}>{children}</Tag>
}

/** Cormorant Infant 500 32/38.4, tracking -0.64px — section headings */
export function H2({ children, className = '', as: Tag = 'h2' }: Props) {
  return <Tag className={`font-serif font-medium fs-32 leading-[1.2] tracking-[-0.02em] ${className}`}>{children}</Tag>
}

/** Mulish 400 14/19.6 — body copy. Pass `wide` for the 0.7px tracked variant */
export function Body({ children, className = '', as: Tag = 'p', wide = false }: Props & { wide?: boolean }) {
  return (
    <Tag className={`font-sans fs-14 leading-[1.4] ${wide ? 'tracking-[0.05em]' : ''} ${className}`}>{children}</Tag>
  )
}
