import type { Project } from '../data/content'

interface ProjectImageProps {
  project: Project
  sizes: string
  className?: string
  loading?: 'lazy' | 'eager'
}

// Variantes geradas por scripts/optimize-images.mjs (scripts/images.config.mjs)
// a partir de `project.image` (base sem extensão): -480, -640 e -1266 em AVIF/WebP.
const widths = [480, 640, 1266]

export function ProjectImage({ project, sizes, className, loading }: ProjectImageProps) {
  if (!project.image) return null
  const base = project.image
  const srcSet = (format: 'avif' | 'webp') =>
    widths.map((w) => `${base}-${w}.${format} ${w}w`).join(', ')

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <img
        src={`${base}.webp`}
        srcSet={srcSet('webp')}
        sizes={sizes}
        alt={project.imageAlt ?? project.name}
        width={project.imageWidth ?? 1266}
        height={project.imageHeight ?? 742}
        loading={loading}
        decoding="async"
        className={className}
      />
    </picture>
  )
}
