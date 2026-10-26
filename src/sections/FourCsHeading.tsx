import { Img } from '../components/ui/Img'
import { Tagline } from '../components/ui/Typography'

const A = '/assets/04-4cs-heading/'
const lbl = 'absolute font-sans font-medium fs-16 leading-[1.5] text-ink max-md:static'

export default function FourCsHeading() {
  return (
    <section className="w-full bg-white">
      <div className="page flex flex-col items-center gap-80 px-165 py-80 max-md:gap-40 max-md:px-16 max-md:py-48">
        <div className="flex flex-col items-center gap-8 text-center">
          <Tagline>The Rules of the Rock</Tagline>
          <h2 className="font-serif font-medium fs-36 leading-[1.2] text-ink">
            The 4Cs That Make or <br />
            Break Your Diamond
          </h2>
        </div>
        <div className="flex w-full items-center justify-center gap-173 max-md:flex-col max-md:gap-32">
          <div className="relative h-480 w-608 shrink-0 max-md:h-auto max-md:w-full">
            <div className="absolute left-77 top-0 h-480 w-479 max-md:relative max-md:left-0 max-md:mx-auto max-md:aspect-[479/480] max-md:h-auto max-md:w-[80%]">
              <Img src={A + '88-5532.png'} alt="" className="absolute left-11 top-37 h-417 w-443 max-w-none max-md:left-[2.3%] max-md:top-[7.7%] max-md:h-[86.9%] max-md:w-[92.5%]" />
              {[
                ['88-5533.svg', 267, 32, 181, 424],
                ['88-5534.svg', 19, 29.7, 214, 429],
                ['88-5535.svg', 231.2, 44.1, 243, 198],
                ['88-5536.svg', 231.2, 238.0, 243, 198],
                ['88-5537.svg', -1.5, 44.0, 236, 198],
                ['88-5538.svg', -1.5, 238.0, 236, 198],
              ].map(([f, x, y, w, h]) => (
                <Img
                  key={f as string}
                  src={A + f}
                  alt=""
                  className="absolute max-w-none"
                  style={{
                    left: `${((x as number) / 478.6) * 100}%`,
                    top: `${((y as number) / 480) * 100}%`,
                    width: `${((w as number) / 478.6) * 100}%`,
                    height: `${((h as number) / 480) * 100}%`,
                  }}
                />
              ))}
            </div>
            <span className={`${lbl} left-28 top-6 max-md:hidden`}>Cut</span>
            <span className={`${lbl} left-566 top-6 max-md:hidden`}>Color</span>
            <span className={`${lbl} left-0 top-423 max-md:hidden`}>Clarity</span>
            <span className={`${lbl} left-566 top-423 max-md:hidden`}>Carat</span>
            <div className="hidden justify-between max-md:flex max-md:flex-wrap max-md:gap-x-24 max-md:pt-16 max-md:justify-center">
              {['Cut', 'Color', 'Clarity', 'Carat'].map((t) => (
                <span key={t} className={lbl}>{t}</span>
              ))}
            </div>
          </div>
          <div className="flex w-319 flex-col items-center gap-8 max-md:w-full">
            <h3 className="w-full font-serif font-semibold fs-24 leading-[1.4] tracking-[-0.01em] text-ink text-center">Cut. Color. Clarity. Carat. </h3>
            <p className="font-sans fs-14 leading-[1.4] tracking-[0.05em] text-center text-ink">
              Master these and you{'’'}ll never get played at the jewelry counter again.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
