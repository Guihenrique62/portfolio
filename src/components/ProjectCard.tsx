import type { Project } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { ProjectImage } from './ProjectImage'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
  /** `sizes` da imagem conforme o layout (carrossel 2 colunas ou grade 3 colunas). */
  sizes: string
  /** Tamanho do nome: grande no carrossel da home, compacto na grade. */
  nameSize?: 'large' | 'compact'
}

const arrowPath =
  'M18.4167 5.66667C18.4167 4.88426 17.7824 4.25 17 4.25C16.2176 4.25 15.5833 4.88426 15.5833 5.66667V25.6215L8.7934 18.8316C8.24016 18.2784 7.34317 18.2784 6.78993 18.8316C6.23669 19.3848 6.23669 20.2818 6.78993 20.8351L14.9965 29.0417C16.103 30.1482 17.897 30.1482 19.0035 29.0417L27.2101 20.8351C27.7633 20.2818 27.7633 19.3848 27.2101 18.8316C26.6568 18.2784 25.7598 18.2784 25.2066 18.8316L18.4167 25.6215V5.66667Z'

/**
 * Card de projeto (Figma "Frame 26", 633×371): foto com overlay, nome e botão
 * circular azul. O card inteiro é um botão que abre o modal de detalhes.
 */
export function ProjectCard({ project, onOpen, sizes, nameSize = 'large' }: ProjectCardProps) {
  const { t } = useLanguage()

  const nameClass =
    nameSize === 'compact'
      ? '[font-size:clamp(1.5rem,1rem+1.6vw,2.25rem)]'
      : project.name.length > 12
        ? '[font-size:clamp(1.75rem,0.9rem+2.6vw,3.25rem)]'
        : '[font-size:clamp(2rem,1rem+3.5vw,4.375rem)]'

  return (
    <article className="group relative aspect-[633/371] w-full overflow-hidden rounded-project bg-white">
      <ProjectImage
        project={project}
        sizes={sizes}
        loading="lazy"
        className="absolute inset-0 size-full rounded-project object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-project bg-[linear-gradient(196.75deg,rgba(0,0,0,0)_47.4%,rgba(0,0,0,0.36)_76.4%,rgba(0,0,0,0.5)_89.2%)]"
      />

      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-haspopup="dialog"
        aria-label={t.projects.openLabel.replace('{project}', project.name)}
        className="absolute inset-0 flex cursor-pointer flex-col justify-between p-2.5 text-left"
      >
        <span className="flex w-full justify-end">
          <span
            className={`flex items-center justify-center rounded-full border border-primary text-primary transition-colors group-hover:bg-primary group-hover:text-white ${
              nameSize === 'compact' ? 'size-11 p-2' : 'size-12 p-2.5 md:size-16 md:p-[15px]'
            }`}
          >
            {/* Seta "arrow_down/light" do Figma, rotacionada para a direita */}
            <svg viewBox="0 0 34 34" aria-hidden="true" className="size-full -rotate-90" fill="currentColor">
              <path d={arrowPath} />
            </svg>
          </span>
        </span>
        <span
          className={`flex items-end p-2.5 ${nameSize === 'compact' ? 'min-h-[3.5rem]' : 'min-h-[4.5rem] md:min-h-[138px]'}`}
        >
          <span className={`font-bold leading-[1.1] tracking-[-0.015em] text-cream ${nameClass}`}>
            {project.name}
          </span>
        </span>
      </button>
      <p className="sr-only">{project.description}</p>
    </article>
  )
}

/** Pills de filtro por categoria (compartilhadas pela home e pela página). */
export function ProjectFilters({
  filters,
  value,
  onChange,
  className = '',
}: {
  filters: { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
  className?: string
}) {
  const { t } = useLanguage()
  return (
    <div
      className={`flex gap-3.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      role="group"
      aria-label={t.projects.filterLabel}
    >
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={() => onChange(f.id)}
          aria-pressed={value === f.id}
          className={`shrink-0 cursor-pointer rounded-card px-8 py-[15px] text-lg transition-colors md:text-xl ${
            value === f.id ? 'bg-ink text-white' : 'bg-surface text-ink hover:bg-line'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

/** Filtros com pelo menos um projeto na lista dada (+ "Todos"). */
export function availableFilters(
  filters: { id: string; label: string }[],
  items: Project[],
) {
  return filters.filter((f) => f.id === 'all' || items.some((p) => p.category === f.id))
}
