import type { Lang } from './data/content'

/**
 * Roteamento mínimo do site (sem biblioteca): quatro rotas por idioma.
 *   home     → "/"            | "/en"
 *   projects → "/projetos"    | "/en/projects"
 *   privacy  → "/privacidade" | "/en/privacy"
 *   terms    → "/termos"      | "/en/terms"
 * As páginas são pré-renderizadas no build; no cliente a troca é por
 * pushState com o mesmo bundle.
 */
export type Route = 'home' | 'projects' | 'privacy' | 'terms'

export const routes: Route[] = ['home', 'projects', 'privacy', 'terms']

export const routeSlugs: Record<Route, Record<Lang, string>> = {
  home: { pt: '', en: '' },
  projects: { pt: 'projetos', en: 'projects' },
  privacy: { pt: 'privacidade', en: 'privacy' },
  terms: { pt: 'termos', en: 'terms' },
}

export const isRoute = (value: unknown): value is Route =>
  typeof value === 'string' && (routes as string[]).includes(value)

const trim = (pathname: string) => pathname.replace(/\/+$/, '').replace(/^\/+/, '')

export function parsePath(pathname: string): { lang: Lang; route: Route } {
  const parts = trim(pathname).split('/').filter(Boolean)
  const lang: Lang = parts[0] === 'en' ? 'en' : 'pt'
  const rest = lang === 'en' ? parts.slice(1) : parts
  const slug = rest[0] ?? ''
  const route = routes.find((r) => r !== 'home' && routeSlugs[r][lang] === slug) ?? 'home'
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
