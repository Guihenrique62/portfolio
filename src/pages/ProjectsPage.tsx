import { useState } from 'react'
import { type Project } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Button } from '../components/Button'
import { Cta } from '../components/Cta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProjectCard, ProjectFilters, availableFilters } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'

const cardSizes = '(min-width: 1024px) 416px, (min-width: 640px) 50vw, 90vw'

/**
 * Página "/projetos" ("/en/projects"): todos os projetos em grade de 3 colunas
 * (2 no tablet, 1 no mobile), com os mesmos cards, filtros e modal da home.
 */
export function ProjectsPage() {
  const { t, linkTo } = useLanguage()
  const { projects, projectsPage } = t
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const all = projects.items
  const visible = filter === 'all' ? all : all.filter((p) => p.category === filter)
  const filters = availableFilters(projects.filters, all)

  return (
    <>
      <Header />
      <main>
        <section className="pb-16 pt-28 md:pb-[97px] md:pt-[150px]" aria-labelledby="projetos-page-titulo">
          <div className="container-site">
            <Reveal className="flex flex-col gap-5 md:max-w-[860px]">
              <Button
                {...linkTo('home')}
                variant="outline"
                size="custom"
                className="w-fit gap-2 px-6 py-3 text-base font-semibold md:px-7 md:py-3.5 md:text-lg"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
                </svg>
                {projectsPage.backLabel}
              </Button>
              <SectionTitle as="h1" text={projectsPage.title} />
              <span id="projetos-page-titulo" className="sr-only">
                {projectsPage.title.replace(/[{}]/g, '')}
              </span>
              <p className="text-body-lg text-muted">{projectsPage.intro}</p>
            </Reveal>

            <Reveal delay={100} className="mt-8 flex flex-col gap-4 md:mt-12 md:flex-row md:items-center md:justify-between">
              <ProjectFilters filters={filters} value={filter} onChange={setFilter} />
              <p className="text-base text-muted-strong" aria-live="polite">
                {projectsPage.countLabel.replace('{n}', String(visible.length))}
              </p>
            </Reveal>

            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
              {visible.map((project, index) => (
                <Reveal as="li" key={project.name} delay={Math.min(index, 5) * 80}>
                  <ProjectCard project={project} onOpen={setSelected} sizes={cardSizes} nameSize="compact" />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
        <Cta />
      </main>
      <Footer />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
