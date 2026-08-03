import type { Project } from '../data/content'

interface ProjectImageProps {
  project: Project
  sizes: string
  className?: string
  loading?: 'lazy' | 'eager'
}

// Espera variantes geradas por scripts/optimize-images.mjs a partir de
// `project.image` (base sem extensão): -480.avif, .avif, -480.webp, .webp
export function ProjectImage({ project, sizes, className, loading }: ProjectImageProps) {
  if (!project.image) return null
  const base = project.image

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${base}-480.avif 480w, ${base}.avif 960w`}
        sizes={sizes}
      />
      <img
        src={`${base}.webp`}
        srcSet={`${base}-480.webp 480w, ${base}.webp 960w`}
        sizes={sizes}
        alt={project.imageAlt ?? project.name}
        width={project.imageWidth ?? 960}
        height={project.imageHeight ?? 448}
        loading={loading}
        decoding="async"
        className={className}
      />
    </picture>
  )
}
