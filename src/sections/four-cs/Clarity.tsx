import { OutlineButton } from '../../components/ui/Button'
import { A } from './assets'
import { designPx as u } from '../../utils/design'
import { Chart, Heading } from './shared'

const bands = [
  { src: '88-5660.svg', x: 45, y: 270, w: 389.3, h: 55.1 },
  { src: '88-5661.svg', x: 83, y: 209, w: 313.1, h: 55.1 },
  { src: '88-5662.svg', x: 122, y: 147, w: 237, h: 55.1 },
  { src: '88-5663.svg', x: 158, y: 86, w: 164.7, h: 55.1 },
  { src: '88-5664.svg', x: 192, y: 0, w: 96.6, h: 80.8 },
  { src: '88-5680.svg', x: 0, y: 331, w: 480.1, h: 69.1 },
]
const labels = [
  { x: 216, y: 34, w: 49, gap: 2, title: 'FL', sub: 'Flawless' },
  { x: 184, y: 94, w: 112, gap: 1, title: 'VVS1 VVS2', sub: 'Very nearly flawless' },
  { x: 177, y: 155, w: 127, gap: 0, title: 'VS1 VS2', sub: 'Flawless to human eye' },
  { x: 157, y: 216, w: 166, gap: 1, title: 'Si1 Si2', sub: 'Inclusion at 10x magnification' },
  { x: 143, y: 277, w: 194, gap: 1, title: 'P1 P2 P3', sub: 'Inclusions noticeable to human eye' },
  { x: 31, y: 345, w: 419, gap: 1, title: 'Mottled', sub: 'Inclusions in such quantity and size as to severely impact the stone’s beauty' },
]

export function Clarity() {
  return (
    <div className="flex w-full justify-center px-165 py-80 max-md:px-16 max-md:py-48">
      <div className="relative flex w-1110 max-w-full items-center justify-center gap-198 max-md:flex-col max-md:gap-40">
        <div className="flex w-432 max-w-full flex-col gap-28">
          <Heading
            align="left"
            tagline="Look Beneath the Surface"
            title={
              <>
                Clarity: The Flaws You <br />
                Can&rsquo;t See Matter
              </>
            }
            body="Clarity’s about what you can’t see. We’ll help you get the cleanest stone for your budget."
          />
          <OutlineButton>Learn More About Clarity</OutlineButton>
        </div>
        <img
          src={A('88-5657.png')}
          alt=""
          draggable={false}
          className="pointer-events-none absolute z-0 block max-w-none max-md:hidden"
          style={{ left: u(469.9), top: u(170.2), width: u(255.8), height: u(273.9) }}
        />
        <div className="relative z-10 h-412 w-480 shrink-0 pt-6 max-md:h-[calc(412px*0.7)] max-md:w-[calc(480px*0.7)] max-md:pt-0">
          <Chart bands={bands} labels={labels} className="h-400 w-480 shadow-none max-md:origin-top-left max-md:scale-[0.7]" />
        </div>
      </div>
    </div>
  )
}
