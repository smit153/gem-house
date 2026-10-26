import { Img } from '../components/ui/Img'
import { Tagline, Body } from '../components/ui/Typography'
import { SolidButton } from '../components/ui/Button'

export default function ReadyToMeet() {
  return (
    <section className="w-full bg-mist px-52 py-80 max-md:px-16 max-md:py-48">
      <div className="flex w-full items-center gap-414 max-lg:gap-48 max-md:flex-col max-md:items-start max-md:gap-24">
        <div className="flex w-432 shrink-0 flex-col gap-8 max-md:w-full">
          <Tagline>Start Your Diamond Journey</Tagline>
          <h2 className="font-serif font-medium fs-28 leading-[1.3]">Ready to Meet the One?</h2>
        </div>
        <div className="flex w-490 flex-col justify-center gap-28 max-md:w-full">
          <Body wide>Talk to our experts or browse our collection to find the diamond that feels like fate.</Body>
          <SolidButton icon={<Img src="/assets/11-ready-to-meet-the-one/I88-5877_5715-238022.svg" className="size-24" />}>Book a Consultation</SolidButton>
        </div>
      </div>
    </section>
  )
}
