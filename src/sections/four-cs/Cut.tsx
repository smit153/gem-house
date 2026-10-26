import { OutlineButton } from '../../components/ui/Button'
import { A } from './assets'
import { Heading } from './shared'

const items = [
  { src: '88-5617.svg', title: 'Ideal', desc: ['Perfect proportions.', 'All light is captured and thrown back.'] },
  { src: '88-5627.svg', title: 'Too Deep', narrow: true, desc: ['Proportions too deep.', 'Light is lost through the sides.'] },
  { src: '88-5639.svg', title: 'Too Shallow', narrow: true, desc: ['Light is lost through girdles facets.'] },
]

export function Cut() {
  return (
    <div className="flex w-full flex-col items-center px-221 py-80 max-md:px-16 max-md:py-48">
      <div className="flex w-998 max-w-full flex-col items-center gap-80 max-md:gap-40">
        <Heading
          tagline="Cut = Maximum Sparkle"
          title="Why Cut Is Queen"
          body={
            <>
              The better the cut, the brighter the bling. <br />
              And lucky for you, we&rsquo;ve got the best cuts for the best price.
            </>
          }
          className="w-447 max-w-full"
        />
        <div className="flex w-full items-start gap-20 max-md:flex-col max-md:gap-32">
          {items.map((it) => (
            <div key={it.title} className="flex w-319 flex-col items-center gap-16 max-md:w-full">
              <div className="relative size-113 shrink-0">
                <img src={A(it.src)} alt="" draggable={false} className="absolute top-0 left-1/2 block max-w-none -translate-x-1/2" />
              </div>
              <div className="flex flex-col items-center gap-8 text-center text-ink">
                <span className="font-serif font-semibold fs-18 leading-[1.4]">{it.title}</span>
                <span className={`font-sans fs-14 leading-[1.4] tracking-[0.05em] ${it.narrow ? 'w-222 max-w-full' : ''}`}>
                  {it.desc.map((d, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {d}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
        <OutlineButton>Learn More About Cut</OutlineButton>
      </div>
    </div>
  )
}
