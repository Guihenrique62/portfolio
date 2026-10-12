import { useCallback, useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Button } from './Button'
import { ProjectImage } from './ProjectImage'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/** Modal de detalhes do projeto (<dialog> nativo, tema claro do redesign). */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closingRef = useRef(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!project || !dialog) return
    closingRef.current = false
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = ''
    }
  }, [project])

  const closeWithAnimation = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog || closingRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close()
      return
    }
    closingRef.current = true
    dialog.classList.add('is-closing')
    dialog.addEventListener(
      'animationend',
      (event) => {
        if (event.animationName !== 'modal-collapse') return
        dialog.classList.remove('is-closing')
        dialog.close()
      },
      { once: true },
    )
  }, [])

  if (!project) return null

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault()
        closeWithAnimation()
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeWithAnimation()
      }}
      aria-labelledby="project-modal-title"
      className="project-modal m-auto w-[min(92vw,44rem)] rounded-card bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <button
          type="button"
          onClick={closeWithAnimation}
          aria-label={t.projects.close}
          className="absolute right-3 top-3 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow transition-colors hover:bg-primary hover:text-white"
        >
          <X className="size-5" strokeWidth={2} />
        </button>

        <ProjectImage
          project={project}
          sizes="(min-width: 704px) 44rem, 92vw"
          className="h-auto w-full rounded-t-card"
        />

        <div className="p-6 md:p-8">
          <h3 id="project-modal-title" className="text-h3 text-slate">
            {project.name}
          </h3>
          <p className="mt-1 text-base text-muted-strong">{project.description}</p>
          <p className="mt-4 text-body-lg text-muted">
            {project.modalDescription ?? project.description}
          </p>
          {project.url && (
            <Button href={project.url} className="mt-6">
              {t.projects.visitSite}
              <ArrowUpRight className="size-5" strokeWidth={2} />
            </Button>
          )}
        </div>
      </div>
    </dialog>
  )
}
