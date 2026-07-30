import { useCallback, useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { ProjectImage } from './ProjectImage'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

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
      { once: false },
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
      className="project-modal m-auto w-[min(92vw,40rem)] rounded-sm border border-line bg-card p-0 text-white backdrop:bg-black/70"
    >
      <div className="relative">
        <button
          type="button"
          onClick={closeWithAnimation}
          aria-label={t.projects.close}
          className="absolute right-3 top-3 cursor-pointer rounded-sm border border-line bg-background/80 p-2 text-muted transition-colors hover:border-primary/40 hover:text-white"
        >
          <X className="size-5" strokeWidth={1.5} />
        </button>

        <ProjectImage
          project={project}
          sizes="(min-width: 640px) 40rem, 92vw"
          className="h-auto w-full"
        />

        <div className="p-6 md:p-8">
          <span className="text-2xl font-extrabold text-primary-bright">{project.number}</span>
          <h3 id="project-modal-title" className="mt-2 text-xl font-extrabold tracking-wide md:text-2xl">
            {project.name.toUpperCase()}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {project.modalDescription ?? project.description}
          </p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-sm border border-line px-5 py-3 text-xs font-bold tracking-widest transition-colors hover:border-primary/40 hover:text-primary-bright"
            >
              {t.projects.visitSite}
              <ArrowUpRight className="size-5" strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </dialog>
  )
}
