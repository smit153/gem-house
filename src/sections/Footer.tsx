import { Img } from '../components/ui/Img'

const A = '/assets/13-footer/'
const h = 'font-serif fs-28 leading-[1.2] tracking-[-0.02em] text-ink font-normal'

const cols: { title: string; links: string[] }[] = [
  { title: 'Client Care', links: ['Contact Us', 'Book an Appointment', 'Track Your Order', 'Delivery Information', 'Shipping & VAT', 'Our Services', 'FAQs'] },
  { title: 'Corporate', links: ['Refer a Friend', 'Affiliates', 'Become a Partner', 'Careers', 'Site Index'] },
  { title: 'The House', links: ['Our Story', 'Craftsmanship', 'Gem House Equilibrium', 'Mission & Vision', 'Conflict-Free Diamonds', 'Diamond Price Matching'] },
  { title: 'Legal', links: ['Cookie Settings', 'Cookie Policy', 'Privacy Policy', 'Terms of Sale'] },
]

const services = [
  ['I88-5908_10148-258262.svg', 'Radical Personalization', 'w-75'],
  ['I88-5908_10148-258274.svg', 'Price Match Guarantee', 'w-75'],
  ['I88-5908_10148-258281.svg', 'Complimentary Delivery', 'w-156'],
  ['I88-5908_10148-258290.svg', 'Gift Wrapping', 'w-56'],
]

function Pick({ children }: { children: string }) {
  return (
    <a href="#" className="group flex flex-col gap-4 font-serif fs-18 leading-[1.2] tracking-[-0.02em] text-ink whitespace-nowrap">
      {children}
      <span className="h-1 w-full bg-ink" />
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[calc(var(--spacing)*1440)] flex-col items-center gap-32 p-52 max-md:px-16 max-md:py-40">
        <h2 className={`${h} text-center`}>Our Exclusive E-Boutique Services</h2>
        <div className="flex w-912 items-center gap-32 max-md:w-full max-md:flex-wrap max-md:justify-center max-md:gap-y-24">
          {services.map(([src, label, w], i) => (
            <div key={label} className="contents">
              {i > 0 && <span className="h-103 w-1 bg-grey-99 max-md:hidden" />}
              <div className="flex h-103 w-180 flex-col items-center justify-center gap-8 max-md:w-[calc(50%-16px)]">
                <Img src={A + src} className={`${w} h-75`} />
                <span className="fs-14 leading-[1.4] font-sans text-ink text-center whitespace-nowrap max-md:whitespace-normal">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-mb-px h-px w-full bg-ink/40" />

      <div className="mx-auto flex w-full max-w-[calc(var(--spacing)*1440)] flex-col gap-80 px-52 py-80 max-md:gap-40 max-md:px-16 max-md:py-40">
        <div className="flex justify-between gap-132 max-lg:flex-col max-lg:gap-40">
          <div className="flex w-440 flex-col gap-24 max-lg:w-full">
            <div className="flex w-424 flex-col gap-24 max-md:w-full">
              <p className={`${h}`}>Get the stories, the perks, and the access everyone whispers about.</p>
              <form className="flex items-end max-md:flex-col max-md:items-stretch max-md:gap-12" onSubmit={(e) => e.preventDefault()}>
                <label className="flex h-47 w-276 flex-col justify-end gap-4 border-b border-[#cccccc] bg-white max-md:w-full">
                  <span className="fs-12 leading-[1.5] font-sans text-ink opacity-60">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="vinamrakothari@gmail.com"
                    className="fs-14 h-21 w-full bg-transparent leading-[1.4] font-sans text-ink outline-none placeholder:text-ink"
                  />
                </label>
                <button type="submit" className="flex h-40 w-148 cursor-pointer items-center justify-center bg-ink px-40 fs-14 font-semibold leading-[1.5] text-white font-sans max-md:w-full">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-24">
              <h3 className={h}>Follow Us</h3>
              <Img src={A + 'I88-5908_1542-23635.svg'} className="w-200 h-24" />
            </div>
          </div>
          <div className="flex gap-80 max-md:grid max-md:grid-cols-2 max-md:gap-x-16 max-md:gap-y-32">
            {cols.map((c) => (
              <div key={c.title} className="flex flex-col gap-16">
                <h3 className={h}>{c.title}</h3>
                <ul className="flex flex-col gap-8">
                  {c.links.map((l) => (
                    <li key={l} className="flex">
                      <a href="#" className="flex h-21 items-center fs-14 leading-[1.4] font-sans text-ink whitespace-nowrap hover:underline">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start justify-between gap-20 max-md:flex-col max-md:gap-24">
          <div className="flex h-40 w-480 items-center gap-36 max-md:w-full max-md:flex-wrap max-md:h-auto max-md:gap-x-24">
            <Img src={A + 'I88-5908_1542-23680.svg'} className="w-117 h-40" />
            <Img src={A + 'I88-5908_1542-23745.png'} className="w-96 h-40 brightness-0" />
            <Img src={A + 'I88-5908_1542-23747.png'} className="w-76 h-40" />
            <Img src={A + 'I88-5908_15284-1004651.png'} className="w-83 h-40" />
          </div>
          <Img src={A + 'I88-5908_2159-104106.svg'} className="w-502 h-40 max-md:w-full max-md:h-auto" />
        </div>
      </div>
      <div className="-mb-px h-px w-full bg-ink/40" />

      <div className="mx-auto flex w-full max-w-[calc(var(--spacing)*1440)] items-center justify-between gap-40 px-52 py-40 max-md:flex-col max-md:items-start max-md:gap-20 max-md:px-16">
        <div className="flex w-410 items-center gap-32 whitespace-nowrap max-md:w-full max-md:flex-wrap max-md:gap-16">
          <div className="flex items-center gap-8 font-serif fs-18 leading-[1.2] tracking-[-0.02em] text-ink">
            <span>Shop In:</span>
            <Pick>Germany (En)</Pick>
            <span>/</span>
            <Pick>(De)</Pick>
            <Img src={A + 'I88-5908_4341-98636.png'} className="ml-4 w-22 h-16 rounded-[1.5px]" />
          </div>
          <div className="flex items-center gap-8 font-serif fs-18 leading-[1.2] tracking-[-0.02em] text-ink">
            <span>Currency:</span>
            <Pick>€ - Euros</Pick>
          </div>
        </div>
        <Img src={A + 'I88-5908_3039-93932.svg'} className="w-177 h-36" />
        <p className="w-410 text-right font-serif fs-18 leading-[1.2] tracking-[-0.02em] text-ink max-md:w-full max-md:text-left">
          © 2025 Gem House — All rights reserved.
        </p>
      </div>
    </footer>
  )
}
