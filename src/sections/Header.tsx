import { useState } from 'react'
import { Img } from '../components/ui/Img'

const A = '/assets/01-header/'
const nav = ['Engagement & Bridal', 'Jewelry Collection', 'Our Diamonds', 'Education', 'Gifting', 'Inside the House']

function NavLink({ children, className = '' }: { children: string; className?: string }) {
  return (
    <a href="#" className={`group flex flex-col gap-4 ${className}`}>
      <span className="fs-14 leading-[1.4] text-ink font-sans whitespace-nowrap">{children}</span>
      <span className="h-2 w-0 bg-wine transition-all group-hover:w-full" />
    </a>
  )
}

function TopLink({ icon, children }: { icon: string; children: string }) {
  return (
    <a href="#" className="group flex items-center gap-8">
      <Img src={A + icon} className="size-28" />
      <span className="flex flex-col gap-2">
        <span className="fs-14 leading-[1.4] font-sans text-ink whitespace-nowrap">{children}</span>
        <span className="h-1 w-0 bg-wine transition-all group-hover:w-full" />
      </span>
    </a>
  )
}

function Badge({ className = '' }: { className?: string }) {
  return (
    <span className={`absolute flex size-16 items-center justify-center rounded-full bg-wine fs-10 leading-[1.5] text-white font-sans ${className}`}>
      8
    </span>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="relative flex w-full flex-col items-center gap-32 bg-white max-md:gap-0">
      <div className="flex h-36 w-full items-center justify-between bg-bronze px-40 max-md:px-8">
        <button type="button" aria-label="Previous announcement" className="size-20 cursor-pointer">
          <Img src={A + 'I88-5506_3887-101465.svg'} className="size-20" />
        </button>
        <p className="fs-12 leading-[1.5] text-white font-sans text-center max-md:fs-11">
          We are pleased to offer complimetary standard shipping on all orders.
        </p>
        <button type="button" aria-label="Next announcement" className="size-20 cursor-pointer">
          <Img src={A + 'I88-5506_3887-101467.svg'} className="size-20" />
        </button>
      </div>

      <div className="flex h-36 w-full items-center justify-between px-52 max-md:h-56 max-md:px-16">
        <div className="flex items-center gap-24 max-md:hidden">
          <TopLink icon="I88-5506_22214-1133696.svg">Contact Us</TopLink>
          <TopLink icon="I88-5506_23009-303446.svg">Book an Appointment</TopLink>
        </div>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="hidden size-28 flex-col items-center justify-center gap-4 max-md:flex"
        >
          <span className="h-[2px] w-20 bg-ink" />
          <span className="h-[2px] w-20 bg-ink" />
          <span className="h-[2px] w-20 bg-ink" />
        </button>
        <a href="#" aria-label="Gem House" className="max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
          <Img src={A + 'I88-5506_3037-83258.svg'} className="w-177 h-36 max-md:w-130 max-md:h-auto" />
        </a>
        <div className="flex items-start gap-24 max-md:gap-12">
          <a href="#" aria-label="Account" className="flex h-28 items-center gap-10">
            <span className="fs-14 leading-[1.4] font-sans text-ink whitespace-nowrap max-md:hidden">Vinamra Kothari</span>
            <Img src={A + 'I88-5506_22236-305345.svg'} className="size-28" />
          </a>
          <a href="#" aria-label="Wishlist" className="relative size-28 max-md:hidden">
            <Img src={A + 'I88-5506_22236-306712_22229-1136427.svg'} className="absolute left-2 top-4 w-23 h-20" />
            <Badge className="left-12 top-12" />
          </a>
          <a href="#" aria-label="Bag" className="relative h-28 w-28">
            <Img src={A + 'I88-5506_23037-313437_23009-322142.svg'} className="absolute left-4 top-0 w-21 h-27" />
            <Badge className="left-11 top-12" />
          </a>
        </div>
      </div>

      <nav className="flex h-42 w-full flex-col items-center gap-15 max-md:hidden">
        <div className="flex h-26 w-1110 items-start justify-between gap-20">
          <span className="h-26 w-25" />
          {nav.map((n) => (
            <NavLink key={n}>{n}</NavLink>
          ))}
          <span className="h-26 w-25" />
          <a href="#" aria-label="Search" className="size-26">
            <Img src={A + 'I88-5506_22236-308470.svg'} className="size-26" />
          </a>
        </div>
        <div className="h-1 w-full bg-[#cccccc]" />
      </nav>

      {open && (
        <nav className="hidden w-full flex-col gap-16 border-t border-[#cccccc] px-16 py-16 max-md:flex">
          {nav.map((n) => (
            <a key={n} href="#" className="fs-14 font-sans text-ink">{n}</a>
          ))}
          <a href="#" className="fs-14 font-sans text-ink">Contact Us</a>
          <a href="#" className="fs-14 font-sans text-ink">Book an Appointment</a>
          <a href="#" className="fs-14 font-sans text-ink">Search</a>
        </nav>
      )}
      <div className="hidden h-1 w-full bg-[#cccccc] max-md:block" />
    </header>
  )
}
