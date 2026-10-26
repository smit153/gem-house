import { A } from './assets'

const cards = [
  { icon: '88-5579.svg', title: 'Cut', desc: ['Proportions and craftsmanship.', 'Determines how brilliantly light is returned.'], active: true },
  { icon: '88-5585.svg', title: 'Clarity', desc: ['Natural inclusions or their absence.', 'Impacts purity, sparkle, and value.'] },
  { icon: '88-5589.svg', title: 'Color', desc: ['The diamond’s tint on the D–Z scale.', 'The closer to colorless, the rarer.'] },
  { icon: '88-5595.svg', title: 'Carat', desc: ['The diamond’s weight and presence.', 'Bigger is more valuable.'] },
]

export function Intro() {
  return (
    <div className="flex w-full flex-col items-center px-52 pt-80 pb-258 max-md:px-16 max-md:pt-48 max-md:pb-32">
      <div className="flex w-full flex-col items-center gap-24 text-center">
        <div className="flex flex-col items-center gap-8">
          <p className="h-17 font-sans font-semibold fs-12 leading-[1.4] tracking-[0.05em] text-ink">Breaking Down the 4Cs</p>
          <h2 className="font-serif font-medium fs-32 leading-[1.2] tracking-[-0.02em] text-ink">
            Understanding <br />
            Diamond Quality
          </h2>
        </div>
        <p className="font-sans fs-14 leading-[1.4] tracking-[0.05em] text-ink">Behind every breathtaking diamond is a checklist.</p>
      </div>

      {/* icon row: full-bleed band, 1440 inner */}
      <div className="absolute top-240 left-0 h-252 w-full border-b border-line pt-96 max-md:static max-md:mt-32 max-md:h-auto max-md:border-0 max-md:pt-0">
        <div className="page h-156 border-b border-grey-99 bg-white px-52 max-md:h-auto max-md:border-0 max-md:px-0">
          <div className="flex h-full items-center justify-between max-md:grid max-md:grid-cols-2 max-md:gap-x-16 max-md:gap-y-32">
            {cards.map((c) => (
              <a key={c.title} href="#" className="group flex w-319 flex-col items-center gap-16 text-ink max-md:w-auto">
                <img src={A(c.icon)} alt="" className="block size-48" draggable={false} />
                <div className="flex flex-col items-center gap-16">
                  <div className="flex flex-col items-center gap-8 text-center">
                    <span className="font-serif font-semibold fs-18 leading-[1.4]">{c.title}</span>
                    <span className="font-sans fs-14 leading-[1.4] tracking-[0.05em] max-md:fs-12">
                      {c.desc[0]}
                      <br />
                      {c.desc[1]}
                    </span>
                  </div>
                  <span className={`block h-3 bg-wine transition-all duration-300 ${c.active ? 'w-319 max-md:w-full' : 'w-0 group-hover:w-319 max-md:group-hover:w-full'}`} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
