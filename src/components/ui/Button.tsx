import type { ReactNode } from 'react'

type Props = { children: ReactNode; className?: string; href?: string; icon?: ReactNode }

/** Outlined call-to-action link. */
export function OutlineButton({ children, className = '', href = '#' }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex h-44 w-360 max-w-full items-center justify-center rounded-[2px] px-40 py-12 font-sans font-semibold fs-14 leading-[1.5] text-ink outline outline-1 outline-ink transition-colors hover:bg-ink hover:text-white ${className}`}
    >
      {children}
    </a>
  )
}

/** Filled call-to-action link with an optional icon. */
export function SolidButton({ children, className = '', href = '#', icon }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex h-48 w-360 max-w-full items-center justify-center gap-8 rounded-[2px] bg-ink px-40 py-20 font-sans font-semibold fs-14 leading-[1.5] text-white transition-opacity hover:opacity-85 ${className}`}
    >
      {icon}
      {children}
    </a>
  )
}

/** Text link with an animated underline. */
export function TextLink({ children, className = '', href = '#', icon }: Props) {
  return (
    <a href={href} className={`group inline-flex items-center gap-8 font-sans font-semibold fs-14 leading-[1.5] ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all group-hover:w-full" />
      </span>
      {icon}
    </a>
  )
}
