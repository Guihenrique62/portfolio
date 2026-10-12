import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Experience } from '../components/Experience'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Marquee } from '../components/Marquee'
import { Feedback } from '../components/Feedback'
import { Cta } from '../components/Cta'
import { Footer } from '../components/Footer'

/**
 * Home — ordem das seções conforme o protótipo Figma "Desktop - 2":
 * Hero → Serviços → Experiência → Por que me contratar → Portfólio →
 * Marquee → Feedbacks → CTA → Footer.
 */
export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <About />
        <Projects />
        <Marquee />
        <Feedback />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
