import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { content, type Lang, type SiteContent } from '../data/content'
import { parsePath, pathFor, type Route } from '../router'
import { applySeo, getSeo } from '../seo/meta'

const STORAGE_KEY = 'lang'

/**
 * Preferência do visitante quando ele abre "/" sem escolher idioma:
 * última escolha salva ou idioma do navegador.
 */
function preferredLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

interface LanguageContextValue {
  lang: Lang
  route: Route
  setLang: (lang: Lang) => void
  /** Navegação interna (pushState) para outra rota, sem recarregar. */
  navigate: (route: Route) => void
  /** Handler para <a href> internos: intercepta cliques simples. */
  linkTo: (route: Route) => { href: string; onClick: (event: MouseEvent<HTMLAnchorElement>) => void }
  t: SiteContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

interface LanguageProviderProps {
  children: ReactNode
  /** Idioma/rota do pré-render (servidor). No cliente vêm do <html>. */
  initialLang?: Lang
  initialRoute?: Route
}

/** Estado inicial no cliente: o que o servidor entregou (<html lang data-route>). */
function initialFromDocument(): { lang: Lang; route: Route } {
  const html = document.documentElement
  const lang: Lang = html.lang.toLowerCase().startsWith('en') ? 'en' : 'pt'
  const dataRoute = html.dataset.route
  if (dataRoute === 'home' || dataRoute === 'projects') return { lang, route: dataRoute }
  // Dev (sem pré-render): deriva da URL.
  return { lang, route: parsePath(window.location.pathname).route }
}

export function LanguageProvider({ children, initialLang, initialRoute }: LanguageProviderProps) {
  const [state, setState] = useState<{ lang: Lang; route: Route }>(() =>
    typeof window === 'undefined'
      ? { lang: initialLang ?? 'pt', route: initialRoute ?? 'home' }
      : initialFromDocument(),
  )
  const { lang, route } = state

  const apply = useCallback((next: { lang: Lang; route: Route }) => {
    setState(next)
    document.documentElement.dataset.route = next.route
    applySeo(getSeo(next.lang, next.route))
  }, [])

  // Reconcilia URL + preferência salva depois de montar (sem divergir a hidratação).
  useEffect(() => {
    const fromUrl = parsePath(window.location.pathname)
    const preferred: Lang =
      window.location.pathname === '/' ? preferredLang() : fromUrl.lang
    const next = { lang: preferred, route: fromUrl.route }
    if (preferred !== fromUrl.lang) {
      window.history.replaceState(null, '', pathFor(preferred, next.route) + window.location.hash)
    }
    apply(next)

    const onPopState = () => apply(parsePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [apply])

  const setLang = useCallback(
    (next: Lang) => {
      localStorage.setItem(STORAGE_KEY, next)
      const target = pathFor(next, route)
      if (window.location.pathname !== target) {
        window.history.pushState(null, '', target + window.location.hash)
      }
      apply({ lang: next, route })
    },
    [apply, route],
  )

  const navigate = useCallback(
    (next: Route) => {
      if (next === route) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      window.history.pushState(null, '', pathFor(lang, next))
      apply({ lang, route: next })
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    },
    [apply, lang, route],
  )

  const linkTo = useCallback(
    (next: Route) => ({
      href: pathFor(lang, next),
      onClick: (event: MouseEvent<HTMLAnchorElement>) => {
        // Deixa o navegador agir em cliques com modificador (nova aba etc.).
        if (event.defaultPrevented || event.button !== 0) return
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        event.preventDefault()
        navigate(next)
      },
    }),
    [lang, navigate],
  )

  return (
    <LanguageContext.Provider value={{ lang, route, setLang, navigate, linkTo, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used within LanguageProvider')
  return value
}
