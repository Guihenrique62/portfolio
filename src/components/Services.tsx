import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Services() {
  const { t } = useLanguage()

  return (
    <div id="servicos">
      <Reveal as="h2" className="text-xl font-extrabold tracking-wide">
        {t.services.title}
      </Reveal>
      <ul className="mt-8 space-y-7">
        {t.services.items.map((service, index) => (
          <Reveal
            as="li"
            key={service.title}
            delay={index * 90}
            className="group flex items-start gap-4"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-primary/60 text-primary-bright transition-all duration-300 group-hover:scale-110 group-hover:border-primary">
              <service.icon className="size-6" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary-bright">
                {service.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{service.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
