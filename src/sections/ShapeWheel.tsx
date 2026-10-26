import DiamondWheel from '../components/DiamondWheel'
import { Img } from '../components/ui/Img'

const A = '/assets/08-shape-wheel/'

const products = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  name: 'Silver, Vintage-Inspired Engagement Ring',
  img: A + 'fill-c88debd67e.png',
  was: '$1,450',
  price: '$1,200',
  note: 'Setting (Ex. VAT)',
}))

function ProductCard({ p }: { p: (typeof products)[number] }) {
  return (
    <div className="group relative flex w-full flex-col gap-12 overflow-hidden rounded-[calc(var(--spacing)*4)] bg-white">
      <div className="relative aspect-square w-full overflow-hidden bg-snow">
        <Img src={p.img} alt={p.name} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute top-11 left-8 flex h-18 items-center gap-4 font-sans fs-12 leading-[1.5] text-ink">
          <Img src={A + 'new-arrival.svg'} className="size-16" />
          New Arrivals
        </span>
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute top-8 right-8 z-10 size-24 transition-transform hover:scale-110"
        >
          <Img src={A + 'wishlist.svg'} className="size-24" />
        </button>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="font-serif font-normal fs-16 leading-[1.2] tracking-[-0.02em] text-ink"><a href="#" className="after:absolute after:inset-0">{p.name}</a></h3>
        <div className="flex items-center gap-4">
          <span className="font-serif fs-14 leading-[1.2] tracking-[-0.02em] text-ink opacity-60">{p.was}</span>
          <span className="font-serif fs-14 leading-[1.2] tracking-[-0.02em] text-ink">{p.price}</span>
          <span className="flex items-end justify-center pt-2 pl-10 font-sans fs-10 leading-[1.5] text-ink opacity-60">{p.note}</span>
        </div>
      </div>
    </div>
  )
}

export default function ShapeWheel() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="page relative h-1090 max-md:h-auto">
        {/* left column */}
        <div className="absolute top-96 left-52 flex w-658 flex-col gap-32 max-md:static max-md:w-full max-md:px-16 max-md:py-48">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
              <p className="font-sans font-semibold fs-12 leading-[1.4] tracking-[0.05em] text-ink">Every Shape Tells a Story</p>
              <h2 className="font-serif font-normal fs-32 leading-[1.2] tracking-[-0.02em] text-ink">What Your Diamond Shape Says About You</h2>
            </div>
            <p className="font-sans fs-14 leading-[1.4] tracking-[0.05em] text-ink">
              Oval is trending. Round is classic. Marquise? Baddie era. Choose what feels like you.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-20 gap-y-28 max-md:grid-cols-2 max-md:gap-x-12">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>

        {/* pagination + view all */}
        <div className="absolute top-897 left-52 flex w-658 items-center gap-19 max-md:static max-md:w-full max-md:flex-col max-md:gap-24 max-md:px-16 max-md:pb-48">
          <div className="relative h-48 w-320 shrink-0">
            <Img src={A + 'I88-5831_5407-131935.svg'} alt="" className="h-48 w-320" />
            <button type="button" aria-label="Previous" className="absolute top-0 left-0 size-48 cursor-pointer" />
            <button type="button" aria-label="Next" className="absolute top-0 right-0 size-48 cursor-pointer" />
          </div>
          <a
            href="#"
            className="flex h-48 w-319 items-center justify-center gap-16 rounded-[2px] outline outline-1 outline-ink font-sans font-semibold fs-14 leading-[1.5] text-ink transition-colors hover:bg-ink hover:text-white max-md:w-full"
          >
            <Img src={A + 'I88-5831_7828-230263_5715-238077.svg'} alt="" className="size-24 group-hover:invert" />
            View All
          </a>
        </div>

        <div className="max-md:h-[calc((100vw/651)*901)] max-md:overflow-hidden"><DiamondWheel /></div>
        <div className="absolute top-492 left-1245 flex w-90 flex-col items-center gap-16 max-md:hidden">
          <Img src={A + 'I88-5831_5407-131976.svg'} alt="" className="h-61 w-54.6" />
          <p className="w-90 text-center font-serif fs-12 leading-[1.2] tracking-[-0.02em] text-ink">Drag to Browse by Diamond Shape</p>
        </div>
      </div>
    </section>
  )
}
