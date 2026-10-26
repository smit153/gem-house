import { Img } from '../components/ui/Img'
import { OutlineButton, TextLink } from '../components/ui/Button'

const A = '/assets/07-certificate/'

function Logo({ src, w, h, x, y }: { src: string; w: number; h: number; x: number; y: number }) {
  return (
    <div className="relative h-80 w-192 shrink-0 overflow-hidden max-md:[zoom:0.58]">
      <Img
        src={A + src}
        alt=""
        className="absolute max-w-none"
        style={{
          width: `calc(var(--spacing) * ${w})`,
          height: `calc(var(--spacing) * ${h})`,
          left: `calc(var(--spacing) * ${x})`,
          top: `calc(var(--spacing) * ${y})`,
        }}
      />
    </div>
  )
}

export default function Certificate() {
  return (
    <section className="flex w-full justify-center bg-white">
      <div className="page flex h-758 flex-col items-center pt-120 pr-52 pb-80 pl-52 max-md:h-auto max-md:px-16 max-md:pt-48 max-md:pb-48">
        <div className="flex w-full items-center gap-80 max-md:flex-col max-md:gap-40">
          {/* collage */}
          <div className="relative h-558 w-633 shrink-0 max-md:h-auto max-md:w-full max-md:pb-48">
            <div className="relative flex h-511 w-633 flex-col rounded-[2px] bg-[#f5f5f5] p-16 shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-md:h-auto max-md:w-full">
              <div className="absolute top-251 left-10 h-250 w-118 bg-wine max-md:top-[52%] max-md:h-[45%]" />
              <Img src={A + '88-5802.png'} alt="" className="relative h-479 w-601 max-w-full object-cover max-md:h-auto" />
            </div>
            <Img
              src={A + '88-5803.png'}
              alt=""
              className="absolute top-340 left-393 h-218 w-240 max-md:top-auto max-md:right-0 max-md:bottom-0 max-md:left-auto max-md:h-auto max-md:w-[40%]"
            />
          </div>

          {/* content */}
          <div className="flex w-623 flex-col justify-center gap-32 max-md:w-full">
            <div className="flex flex-col gap-32">
              <div className="flex w-513 max-w-full flex-col gap-24">
                <div className="flex flex-col gap-8">
                  <p className="font-sans font-semibold fs-12 leading-[1.4] tracking-[0.05em] text-ink">Trusted. Verified. Guaranteed.</p>
                  <h2 className="font-serif font-medium fs-32 leading-[1.2] tracking-[-0.02em] text-ink">Certified or It Didn’t Happen.</h2>
                </div>
                <p className="font-sans fs-14 leading-[1.4] tracking-[0.05em] text-ink">
                  Every single Gem House diamond is GIA and IGI certified. No guesswork. No gray areas. Just diamonds with proof on paper.
                </p>
              </div>
              <div className="flex flex-col gap-24">
                <div className="flex items-center gap-17 max-md:gap-4">
                  <Logo src="88-5815.png" w={175} h={70} x={8.5} y={5} />
                  <Logo src="88-5817.png" w={141} h={56} x={16} y={12} />
                </div>
                <div className="flex items-center gap-17 max-md:gap-4">
                  <Logo src="88-5820.png" w={175} h={70} x={8.5} y={5} />
                  <Logo src="88-5822.png" w={221.6} h={88} x={-15} y={-4.5} />
                  <Logo src="88-5824.png" w={148.1} h={76} x={21.9} y={1.5} />
                </div>
              </div>
            </div>
            <div className="flex w-620 max-w-full items-center justify-center gap-28 max-md:flex-col max-md:gap-20">
              <OutlineButton>Shop Certified Diamonds</OutlineButton>
              <div className="flex items-center gap-8">
                <TextLink className="text-bronze">Learn More About Certification</TextLink>
                <Img src={A + '88-5829.svg'} alt="" className="size-22" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
