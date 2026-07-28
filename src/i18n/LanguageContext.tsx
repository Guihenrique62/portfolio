import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { content, siteUrl, type Lang, type SiteContent } from '../data/content'

const STORAGE_KEY = 'lang'

function pathFor(lang: Lang) {
  return lang === 'en' ? '/en' : '/'
}

function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pt'
}

function resolveInitialLang(): Lang {
  const path = window.location.pathname
  if (path === '/en' || path.startsWith('/en/')) return 'en'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function applyDocumentLang(lang: Lang) {
  const meta = content[lang].meta
  document.documentElement.lang = meta.htmlLang
  document.title = meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute('href', lang === 'en' ? `${siteUrl}en` : siteUrl)
}

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: SiteContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(resolveInitialLang)

  useEffect(() => {
    // Alinha a URL com o idioma resolvido na primeira visita (ex.: preferência
    // salva ou navegador em inglês abrindo "/") sem criar entrada no histórico.
    if (langFromPath(window.location.pathname) !== lang) {
      window.history.replaceState(null, '', pathFor(lang) + window.location.hash)
    }
    applyDocumentLang(lang)

    const onPopState = () => {
      const urlLang = langFromPath(window.location.pathname)
      setLangState(urlLang)
      applyDocumentLang(urlLang)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
    if (langFromPath(window.location.pathname) !== next) {
      window.history.pushState(null, '', pathFor(next) + window.location.hash)
    }
    applyDocumentLang(next)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used within LanguageProvider')
  return value
}
