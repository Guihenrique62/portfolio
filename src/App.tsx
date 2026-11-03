import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import type { Lang } from './data/content'
import type { Route } from './router'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { LegalPage } from './pages/LegalPage'

function Page() {
  const { route } = useLanguage()
  if (route === 'projects') return <ProjectsPage />
  if (route === 'privacy' || route === 'terms') return <LegalPage doc={route} />
  return <HomePage />
}

interface AppProps {
  /** Idioma/rota usados pelo pré-render (servidor). */
  initialLang?: Lang
  initialRoute?: Route
}

export default function App({ initialLang, initialRoute }: AppProps) {
  return (
    <LanguageProvider initialLang={initialLang} initialRoute={initialRoute}>
      <Page />
    </LanguageProvider>
  )
}
