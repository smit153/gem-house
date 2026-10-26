import { Img } from '../components/ui/Img'
import { Tagline, H1, Body } from '../components/ui/Typography'

export default function HeroBanner() {
  return (
    <section
      className="relative w-full h-691 overflow-visible bg-white max-md:h-auto max-md:pb-32"
    >
      <div className="page relative h-full max-md:flex max-md:flex-col">
        <div className="absolute left-160 top-0 flex w-498 flex-col items-center gap-16 pt-260 max-md:static max-md:w-full max-md:items-start max-md:px-16 max-md:pt-48">
          <div className="flex w-full flex-col gap-8">
            <Tagline>The Sparkle Starts Here</Tagline>
            <H1>Welcome to the Diamond Playbook</H1>
          </div>
          <Body className="w-full">
            No fluff, just the glow-up guide you actually need to buy a diamond like a pro.
          </Body>
        </div>
        <Img
          src="/assets/03-hero-banner/88-5523.png"
          alt="Diamond"
          className="absolute left-808 top-63 size-632 max-w-none max-md:static max-md:mt-32 max-md:h-auto max-md:w-full"
        />
      </div>
    </section>
  )
}
