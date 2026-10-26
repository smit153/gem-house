import { Img } from '../components/ui/Img'

export default function WhatsNext() {
  return (
    <section className="flex w-full justify-center bg-white px-391 py-80 max-md:px-16 max-md:py-48">
      <a href="#" className="flex w-658 max-w-full items-center justify-center border-b border-grey-99 bg-white px-228 py-18 max-md:px-0">
        <div className="flex flex-col gap-8">
          <span className="font-sans font-semibold fs-14 leading-[1.5]">Next</span>
          <div className="flex items-center gap-16">
            <span className="font-serif font-medium fs-24 leading-[1.2] tracking-[-0.02em]">Diamond Cut</span>
            <span aria-hidden="true" className="size-48 rounded-full transition-opacity hover:opacity-70">
              <Img src="/assets/12-what-s-next/I88-5879_5715-237723.svg" className="size-48" />
            </span>
          </div>
        </div>
      </a>
    </section>
  )
}
