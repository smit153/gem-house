const tabs = [
  ['01', 'Diamond Education'],
  ['02', 'Jewelry Education'],
  ['03', 'Ring Education'],
  ['04', 'Metal Education'],
  ['05', 'Gemstone Education'],
]
const links = [
  'Overview', 'Cut', 'Color', 'Clarity', 'Carat', 'Shape', 'Shape vs Price',
  'Certification', 'Colored Diamond', 'Buying Guide', 'Heart & Arrow', 'Lab Grown',
]

export default function TabNav() {
  return (
    <section
      className="sticky top-0 z-40 mb-3 w-full h-106 bg-mist shadow-[0_0_4px_rgba(0,0,0,0.25)] max-md:h-auto"
    >
      <nav className="flex h-full w-full flex-col items-start gap-16 overflow-x-auto px-24 py-16 min-[768px]:items-center min-[768px]:justify-center">
        <ul className="flex shrink-0 items-center gap-16">
          {tabs.map(([n, label], i) => (
            <li key={n} className="flex shrink-0 items-center gap-16">
              {i > 0 && <span className="h-32 w-px bg-grey-99" aria-hidden />}
              <a
                href="#"
                aria-current={i === 0 ? 'page' : undefined}
                className={`whitespace-nowrap font-serif font-medium fs-20 leading-[1.2] tracking-[-0.04em] hover:underline ${i === 0 ? 'text-ink' : 'text-grey-66'}`}
              >
                <span className="fs-24 font-normal">{n}</span> {label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex shrink-0 items-center gap-16">
          {links.map((l, i) => (
            <li key={l} className="shrink-0">
              <a
                href="#"
                aria-current={i === 0 ? 'true' : undefined}
                className={`block whitespace-nowrap border-b-2 pb-4 font-sans fs-14 leading-[1.4] hover:underline ${i === 0 ? 'border-wine text-ink' : 'border-transparent text-grey-66'}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
