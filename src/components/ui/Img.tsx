import type { ImgHTMLAttributes } from 'react'

/** Image with shared loading and drag defaults. */
export function Img({ alt = '', className = '', ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={alt} loading="lazy" decoding="async" draggable={false} className={`block ${className}`} {...rest} />
}
