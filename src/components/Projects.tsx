import { ArrowRight } from 'lucide-react'
import { links } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projetos" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-360 px-6 py-12 md:px-12 md:py-16">
        <Reveal className="flex items-center justify-between gap-4 sm:gap-6">
          <h2 className="shrink-0 text-xl font-extrabold tracking-wide sm:text-2xl md:text-3xl">
            {t.projects.title}
          </h2>
          <div className="hidden h-px flex-1 bg-line sm:block" />
          <a
            href="#projetos"
            className="flex shrink-0 items-center gap-3 text-xs font-bold tracking-widest text-muted transition-colors hover:text-white"
          >
            {t.projects.viewAll}
            <ArrowRight className="size-5" strokeWidth={1.5} />
          </a>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-3 md:gap-8">
          {t.projects.items.map((project, index) => (
            <Reveal as="article" key={project.number} delay={index * 120} className="group">
              <div className="aspect-[4/3] w-full rounded-sm border border-line bg-card transition-colors group-hover:border-primary/40">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="size-full rounded-sm object-cover"
                  />
                )}
              </div>
              <div className="mt-5 flex items-center gap-4">
                <span className="text-3xl font-extrabold text-primary-bright lg:text-4xl">
                  {project.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold tracking-wider">{project.name.toUpperCase()}</h3>
                  <p className="text-xs uppercase tracking-wider text-muted">{project.description}</p>
                </div>
                <ArrowRight
                  className="size-6 text-muted transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center md:mt-14">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-lg font-extrabold tracking-wide transition-opacity hover:opacity-80 sm:gap-4 sm:text-xl md:text-2xl"
          >
            {t.projects.quote}
            <ArrowRight className="size-7" strokeWidth={2} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
