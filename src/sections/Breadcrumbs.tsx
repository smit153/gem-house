const crumb = 'fs-12 leading-[1.5] font-sans text-ink'

export default function Breadcrumbs() {
  return (
    <section className="flex w-full justify-center px-52 py-20 max-md:px-16">
      <nav aria-label="Breadcrumb" className="flex w-full flex-wrap items-start gap-8">
        <a href="#" className={`group flex flex-col opacity-60 ${crumb}`}>
          Education
          <span className="h-1 w-0 bg-ink transition-all group-hover:w-full" />
        </a>
        <span className={`opacity-60 font-semibold ${crumb}`}>/</span>
        <a href="#" className={`group flex flex-col opacity-60 ${crumb}`}>
          Diamond Education
          <span className="h-1 w-0 bg-ink transition-all group-hover:w-full" />
        </a>
        <span className={`font-semibold ${crumb}`}>/</span>
        <a href="#" aria-current="page" className={`flex flex-col ${crumb}`}>
          Overview
          <span className="h-1 w-full bg-ink" />
        </a>
      </nav>
    </section>
  )
}
