import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Feedback() {
  const { t } = useLanguage()

  return (
    <div id="feedback">
      <Reveal as="h2" className="text-xl font-extrabold tracking-wide">
        {t.feedback.title}
      </Reveal>
      <ul className="mt-8 space-y-9">
        {t.feedback.testimonials.map((testimonial, index) => (
          <Reveal as="li" key={testimonial.name} delay={index * 120}>
            <h3 className="text-sm font-bold text-primary-bright">{testimonial.name}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              <span className="mr-1 font-serif text-primary-bright">&ldquo;</span>
              {testimonial.text}
              <span className="ml-1 font-serif text-primary-bright">&rdquo;</span>
            </p>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
