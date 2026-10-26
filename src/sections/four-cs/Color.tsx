import { OutlineButton } from '../../components/ui/Button'
import { A } from './assets'
import { designPx as u } from '../../utils/design'
import { Chart, Heading } from './shared'

const bands = [
  { src: '88-5688.svg', x: 0, y: 332, w: 478.9, h: 67.8 },
  { src: '88-5689.svg', x: 47, y: 257, w: 385.1, h: 67.8 },
  { src: '88-5690.svg', x: 94, y: 181, w: 291.5, h: 67.8 },
  { src: '88-5691.svg', x: 138, y: 106, w: 202.6, h: 67.8 },
  { src: '88-5692.svg', x: 180, y: 0, w: 118.8, h: 99.4 },
]
const labels = [
  { x: 214, y: 44, w: 51, gap: 2, title: 'D E F', sub: 'Colorless' },
  { x: 199, y: 119, w: 81, gap: 2, title: 'G H', sub: 'Near Colorless' },
  { x: 199, y: 195, w: 80, gap: 1, title: 'I J K L M', sub: 'Slightly Tinted' },
  { x: 188, y: 269, w: 102, gap: 2, title: 'N O P Q R', sub: 'Very Yellow White' },
  { x: 183, y: 345, w: 112, gap: 2, title: 'S T U V W X Y Z', sub: 'Light Yellow' },
]

export function Color() {
  return (
    <div className="flex w-full items-center justify-between gap-198 px-165 py-120 max-md:flex-col max-md:gap-40 max-md:px-16 max-md:py-48">
      <div className="relative h-412 w-480 shrink-0 pt-6 max-md:order-2 max-md:h-[calc(412px*0.62)] max-md:w-[calc(480px*0.62)] max-md:pt-0">
        <div className="relative h-412 w-480 max-md:origin-top-left max-md:scale-[0.62]">
          <Chart bands={bands} labels={labels} className="absolute top-6 left-1 h-400 w-478.9 max-md:top-0" />
          <img
            src={A('88-5708.png')}
            alt=""
            draggable={false}
            className="absolute block max-w-none"
            style={{ left: u(371), top: u(216), width: u(155), height: u(233), filter: 'drop-shadow(-10px 4px 4px rgba(0,0,0,0.25))' }}
          />
        </div>
      </div>
      <div className="flex w-432 max-w-full flex-col gap-28 max-md:order-1">
        <Heading
          align="left"
          tagline="Shade Impacts Cost"
          title={
            <>
              Color Isn&rsquo;t Just About Looks. <br />
              It&rsquo;s About $$$.
            </>
          }
          body="The less color, the higher the price. We help you find that sweet spot: looks icy, costs less."
        />
        <OutlineButton>Learn More About Color</OutlineButton>
      </div>
    </div>
  )
}
