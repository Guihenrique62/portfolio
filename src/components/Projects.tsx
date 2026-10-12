import { useState } from 'react'
import { type Project } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Button } from './Button'
import { Carousel } from './Carousel'
import { ProjectCard, ProjectFilters, availableFilters } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

const cardSizes = '(min-width: 1024px) 633px, (min-width: 640px) 60vw, 90vw'

/**
 * "Vamos dar uma olhada no meu Portfólio" (Figma node 61:658): cabeçalho com
 * "Ver tudo" (→ página /projetos), carrossel 2 por vista com os projetos em
 * destaque, dots e pills de filtro por categoria.
 */
export function Projects() {
  const { t, linkTo } = useLanguage()
  const { projects } = t
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const featured = projects.items.filter((p) => p.featured)
  const visible = filter === 'all' ? featured : featured.filter((p) => p.category === filter)
  const filters = availableFilters(projects.filters, featured)

  return (
    <section id="projetos" className="cv-auto py-16 md:py-[97px]" aria-labelledby="projetos-titulo">
      <div className="container-site">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionTitle as="h2" text={projects.title} className="max-w-[961px]" />
          <span id="projetos-titulo" className="sr-only">
            {projects.title.replace(/[{}]/g, '')}
          </span>
          <Button {...linkTo('projects')} className="shrink-0 self-start md:self-auto">
            {projects.viewAll}
          </Button>
        </Reveal>

        <Carousel
          key={filter}
          className="mt-10 md:mt-12"
          label={projects.carouselLabel}
          pageLabel={projects.pageLabel}
          dotsTone="dark"
          trackClassName="gap-4 sm:gap-6"
          slideClassName="w-[90%] sm:w-[calc((100%-24px)/2)]"
        >
          {visible.map((project) => (
            <ProjectCard key={project.name} project={project} onOpen={setSelected} sizes={cardSizes} />
          ))}
        </Carousel>

        <ProjectFilters
          filters={filters}
          value={filter}
          onChange={setFilter}
          className="mt-10 md:mt-12 md:justify-center"
        />
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
