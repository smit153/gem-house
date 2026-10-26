import { OutlineButton } from '../../components/ui/Button'
import { A } from './assets'
import { designPx as u } from '../../utils/design'
import { Heading } from './shared'

// x/w = column position + width, lineTop, img size/left/top, all relative to the row (design px)
const cols = [
  { x: 0, w: 120, mm: '9.0 mm', ct: '2.50ct', line: '88-5728.svg', lt: 45, lh: 22.8, img: '88-5729.svg', is: 119.9, il: 0, it: 67.8 },
  { x: 220, w: 102.4, mm: '8.2 mm', ct: '2.00ct', line: '88-5740.svg', lt: 44, lh: 22.8, img: '88-5741.svg', is: 102.3, il: 0, it: 76.8 },
  { x: 422.4, w: 93.6, mm: '7.4 mm', ct: '1.50ct', line: '88-5752.svg', lt: 44, lh: 22.8, img: '88-5753.svg', is: 93.3, il: 0, it: 79.8 },
  { x: 616, w: 84.7, mm: '6.5 mm', ct: '1.00ct', line: '88-5764.svg', lt: 44, lh: 22.8, img: '88-5765.svg', is: 83.6, il: 1.1, it: 85.8 },
  { x: 800.7, w: 69.2, mm: '5.2 mm', ct: '0.50ct', line: '88-5776.svg', lt: 44, lh: 22.8, img: '88-5777.svg', is: 69.2, il: 0, it: 92.8 },
  { x: 969.9, w: 77.7, mm: '1.7 mm', ct: '0.20ct', line: '88-5788.svg', lt: 44, lh: 22.8, img: '88-5789.svg', is: 54.4, il: 11.6, it: 99.8 },
]
const N: Record<string, [number, number]> = {"88-5728": [122, 24], "88-5729": [170, 175], "88-5740": [104, 24], "88-5741": [153, 158], "88-5752": [95, 24], "88-5753": [144, 149], "88-5764": [86, 24], "88-5765": [134, 139], "88-5776": [70, 24], "88-5777": [120, 125], "88-5788": [79, 24], "88-5789": [106, 111]}
const txt = 'absolute text-center font-serif font-semibold fs-20 leading-[1.24] tracking-[-0.02em] text-ink whitespace-nowrap'

export function Carat() {
  return (
    <div className="flex w-full flex-col items-center py-80 max-md:py-48">
      <div className="flex w-full flex-col items-center gap-80 max-md:gap-40">
        <Heading
          tagline="Supersize Your Shine"
          title={
            <>
              How Big Is Too Big? <br />
              Let&rsquo;s Talk Carats!
            </>
          }
          body="Size does Matter. But so does budget. We’ll help you size up without maxing out."
          className="w-447 max-w-full max-md:px-16"
        />
        <div className="w-full max-md:overflow-x-auto">
          <div className="relative mx-auto shrink-0 max-md:mx-16" style={{ height: u(229.1), width: u(1047.6) }}>
            {cols.map((c) => (
              <div key={c.mm} className="absolute top-0 h-full" style={{ left: u(c.x), width: u(c.w) }}>
                <span className={`${txt} top-0 left-0 w-full`}>{c.mm}</span>
                <img src={A(c.line)} alt="" draggable={false} className="absolute block max-w-none" style={{ top: u(c.lt - 0.6), left: u(-(N[c.line.slice(0, 7)][0] - c.w) / 2), width: u(N[c.line.slice(0, 7)][0]), height: u(N[c.line.slice(0, 7)][1]) }} />
                <img src={A(c.img)} alt="" draggable={false} className="absolute block max-w-none" style={{ left: u(c.il - (N[c.img.slice(0, 7)][0] - c.is) / 2), top: u(c.it - (N[c.img.slice(0, 7)][0] - c.is) / 2), width: u(N[c.img.slice(0, 7)][0]), height: u(N[c.img.slice(0, 7)][1]) }} />
                <span className={`${txt} left-0 w-full`} style={{ top: u(204.1) }}>{c.ct}</span>
              </div>
            ))}
          </div>
        </div>
        <OutlineButton>Learn More About Carats</OutlineButton>
      </div>
    </div>
  )
}
