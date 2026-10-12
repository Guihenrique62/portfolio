import type { Lang } from './data/content'

/**
 * Roteamento mínimo do site (sem biblioteca): duas rotas por idioma.
 *   home     → "/"          | "/en"
 *   projects → "/projetos"  | "/en/projects"
 * As páginas são pré-renderizadas no build; no cliente a troca é por
 * pushState com o mesmo bundle.
 */
export type Route = 'home' | 'projects'

export const routeSlugs: Record<Route, Record<Lang, string>> = {
  home: { pt: '', en: '' },
  projects: { pt: 'projetos', en: 'projects' },
}

const trim = (pathname: string) => pathname.replace(/\/+$/, '').replace(/^\/+/, '')

export function parsePath(pathname: string): { lang: Lang; route: Route } {
  const parts = trim(pathname).split('/').filter(Boolean)
  const lang: Lang = parts[0] === 'en' ? 'en' : 'pt'
  const rest = lang === 'en' ? parts.slice(1) : parts
  const slug = rest[0] ?? ''
  const route: Route = slug === routeSlugs.projects[lang] ? 'projects' : 'home'
  return { lang, route }
}

export function pathFor(lang: Lang, route: Route): string {
  const base = lang === 'en' ? '/en' : ''
  const slug = routeSlugs[route][lang]
  const path = slug ? `${base}/${slug}` : base
  return path || '/'
}

/** Link para uma âncora da home a partir de qualquer página. */
export function homeHash(lang: Lang, id: string, route: Route): string {
  return route === 'home' ? `#${id}` : `${pathFor(lang, 'home')}#${id}`
}
