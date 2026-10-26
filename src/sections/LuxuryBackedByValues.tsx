import { Img } from '../components/ui/Img'
import { Tagline, H2, Body } from '../components/ui/Typography'

const items = [
  { t: 'Seen It Cheaper? We’ll Beat It.', b: 'Why pay more when you don’t have to? Send us the link. We’ll do the rest.', bar: 'w-432' },
  { t: 'From "I Do" to "Still Do."', b: 'Trade up your diamond anytime. Bigger sparkle, same love story.', bar: 'w-0' },
  { t: 'No Drama. No Blood Diamonds. Ever.', b: 'At the core of Gem House are our ethics. Every diamond is ethically sourced. Period.', bar: 'w-0' },
]

export default function LuxuryBackedByValues() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-52 py-80 max-md:px-16 max-md:py-48">
      <div className="flex w-full flex-col items-center gap-48">
        <div className="flex w-full flex-col items-center gap-80 max-md:gap-40">
          <div className="flex flex-col items-center gap-24 text-center">
            <div className="flex flex-col items-center gap-8">
              <Tagline>What Sets Us Apart</Tagline>
              <H2>Luxury That’s Backed by Values</H2>
            </div>
            <Body wide>Here’s how we’ve got your back: </Body>
          </div>
          <div className="flex w-full justify-center gap-20 border-b border-grey-99 max-md:flex-col max-md:gap-32">
            {items.map((i) => (
              <div key={i.t} className="flex w-432 flex-col gap-16 max-md:w-full">
                <div className="flex flex-col gap-8">
                  <h3 className="font-serif font-semibold fs-18 leading-[1.4] text-center">{i.t}</h3>
                  <Body wide className="h-40 text-center max-md:h-auto">{i.b}</Body>
                </div>
                <div className={`h-3 bg-wine ${i.bar} max-md:hidden`} />
              </div>
            ))}
          </div>
        </div>
        <Img src="/assets/10-luxurybackedbyvalues/I88-5869_5715-237598.png" className="h-560 w-1110 max-w-full max-md:h-auto" />
      </div>
    </section>
  )
}
