import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import type { Lang } from './data/content'
import type { Route } from './router'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'

function Page() {
  const { route } = useLanguage()
  return route === 'projects' ? <ProjectsPage /> : <HomePage />
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
