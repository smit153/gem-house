import { Intro } from './four-cs/Intro'
import { Cut } from './four-cs/Cut'
import { Clarity } from './four-cs/Clarity'
import { Color } from './four-cs/Color'
import { Carat } from './four-cs/Carat'

export default function FourCs() {
  return (
    <section className="relative w-full overflow-x-clip bg-white">
      <div className="page flex flex-col gap-20 pb-80 max-md:gap-0 max-md:pb-0">
        <Intro />
        <div className="flex flex-col gap-10 max-md:gap-0">
          <Cut />
          <Clarity />
          <Color />
          <Carat />
        </div>
      </div>
      {/* full-bleed band behind icon row lives inside Intro (absolute, relative to .page) */}
    </section>
  )
}
