import { LanguageProvider } from './i18n/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Feedback } from './components/Feedback'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Projects />
        <section className="border-t border-line">
          <div className="mx-auto grid max-w-360 grid-cols-1 gap-12 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-16">
            <Services />
            <Process />
            <Feedback />
          </div>
        </section>
        <Experience />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
