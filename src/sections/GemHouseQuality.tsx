import { Img } from '../components/ui/Img'
import { Tagline, H2, Body } from '../components/ui/Typography'

const box =
  'absolute flex h-52 items-center border border-ink px-14 font-sans font-semibold fs-16 leading-[1.5] whitespace-pre shadow-[-10px_4px_4px_rgba(0,0,0,0.25)]'
const lbl = 'absolute font-sans font-medium fs-16 leading-[1.5]'

export default function GemHouseQuality() {
  return (
    <section className="relative flex h-792 w-full items-center justify-center overflow-x-clip bg-white z-10 px-136 py-80 max-md:h-auto max-md:px-16 max-md:py-64">
      {/* Keep ring artwork centered and allow it to overlap the preceding section. */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-1440 -translate-x-1/2 max-md:hidden">
        <Img src="/assets/09-gem-house-quality/88-5867.png" className="absolute -left-471 -top-201 h-791 w-791" />
        <Img src="/assets/09-gem-house-quality/88-5868.png" className="absolute left-1093 -top-201 h-791 w-791" />
      </div>
      <div className="relative z-10 flex w-full max-w-1168 flex-col items-center gap-64 max-md:gap-40">
        <div className="flex flex-col items-center gap-24 text-center">
          <div className="flex flex-col items-center gap-8">
            <Tagline>Graded. Certified. Guaranteed.</Tagline>
            <H2>We Only Carry the Good Stuff.</H2>
          </div>
          <Body wide>Every stone is handpicked to international standards.</Body>
        </div>
        <div className="w-full max-md:overflow-x-auto">
          <div className="relative mx-auto h-372 w-1163 shrink-0">
            <span className={`${lbl} left-0 top-102`}>Cut</span>
            <span className={`${lbl} left-0 top-174`}>Color</span>
            <span className={`${lbl} left-0 top-246`}>Clarity</span>

            <div className={`${box} left-85 top-88 w-507 justify-end bg-[#fcfcfc]`}>Poor     Fair</div>
            <div className={`${box} left-85 top-160 w-507 justify-end bg-[#fcfcfc]`}>Z    Y    X    W    V   U   T   S   R   Q   P   O   N   M    L</div>
            <div className={`${box} left-85 top-232 w-507 justify-end bg-[#fcfcfc]`}>13     12     11</div>
            <div className={`${box} left-609 top-88 w-554 bg-mist`}>Good     Very Good     Excellent    Ideal</div>
            <div className={`${box} left-609 top-160 w-554 bg-mist tracking-[0.02em]`}>K     J     I     H     G     F     E     D</div>
            <div className={`${box} left-609 top-232 w-554 bg-mist`}>S12     S11     VS2     VS1     VVS2     VVS1     IF     FL</div>

            <div className="absolute left-138 top-305 h-45 w-368 border-x border-b border-wine" />
            <div className="absolute left-644 top-29 h-45 w-476 border-x border-t border-wine" />
            <div className="absolute left-795 top-0 flex h-52 w-173 items-center justify-center bg-white font-sans font-medium fs-16 leading-[1.5]">Gem House Quality</div>
            <div className="absolute left-210 top-320 flex h-52 w-224 items-center justify-center bg-white font-sans font-medium fs-16 leading-[1.5]">Not carried by Gem House</div>
          </div>
        </div>
      </div>
    </section>
  )
}
