import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experiencias" className="border-t border-line">
      <div className="mx-auto max-w-360 px-6 py-12 md:px-12 md:py-16">
        <Reveal className="flex items-center gap-6">
          <h2 className="shrink-0 text-xl font-extrabold tracking-wide sm:text-2xl md:text-3xl">
            {t.experience.title}
          </h2>
          <div className="hidden h-px flex-1 bg-line sm:block" />
        </Reveal>
        <Reveal as="p" delay={100} className="mt-3 text-sm text-muted">
          {t.experience.subtitle}
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 lg:grid-cols-3 lg:gap-8">
          {t.experience.items.map((experience, index) => (
            <Reveal
              as="article"
              key={experience.title}
              delay={index * 120}
              className="group flex flex-col rounded-sm border border-line bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-primary/60 text-primary-bright transition-all duration-300 group-hover:scale-110 group-hover:border-primary">
                  <experience.icon className="size-6" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary-bright">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold tracking-wider text-muted">
                    {experience.period}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted">{experience.description}</p>

              {experience.highlight && (
                <p className="mt-4 text-xs font-bold tracking-wide text-white">
                  {experience.highlight}
                </p>
              )}

              {experience.technologies && (
                <div className="mt-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white">
                    {t.experience.techLabel}
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-primary/60 px-3 py-1 text-[11px] font-medium text-primary-bright"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.achievements && (
                <div className="mt-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white">
                    {experience.achievementsLabel}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2 text-xs leading-relaxed text-muted">
                        <span className="text-primary-bright">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.certifications && (
                <ul className="mt-5 space-y-3">
                  {experience.certifications.map((certification) => (
                    <li key={certification} className="flex gap-2 text-xs leading-relaxed text-muted">
                      <span className="text-primary-bright">•</span>
                      {certification}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
