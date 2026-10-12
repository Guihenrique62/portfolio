import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import dotBlue from '../assets/icons/timeline-dot-blue.svg'
import dotDark from '../assets/icons/timeline-dot-dark.svg'

/**
 * "Minha Experiência" (Figma node 61:611): título centralizado e timeline
 * vertical com linha tracejada, marcadores (azul, escuro, azul) e cargos.
 */
export function Experience() {
  const { t } = useLanguage()
  const { experience } = t

  return (
    <section id="experiencia" className="cv-auto py-16 md:py-[85px]" aria-labelledby="experiencia-titulo">
      <div className="container-site">
        <Reveal>
          <SectionTitle as="h2" align="center" text={experience.title} />
        </Reveal>
        <span id="experiencia-titulo" className="sr-only">
          {experience.title.replace(/[{}]/g, '')}
        </span>

        <ol className="mt-12 flex flex-col gap-12 md:mt-[85px] lg:ml-[24%]">
          {experience.items.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 120}
              className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-6 md:gap-[110px]"
            >
              {/* Linha tracejada até o próximo marcador */}
              {index < experience.items.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute -bottom-12 left-[23px] top-12 w-0.5 bg-[repeating-linear-gradient(to_bottom,var(--color-slate)_0_6px,transparent_6px_12px)]"
                />
              )}
              <img
                src={index % 2 === 0 ? dotBlue : dotDark}
                alt=""
                aria-hidden="true"
                width={48}
                height={48}
                className="relative z-10 size-12 shrink-0"
              />
              <div className="flex max-w-[621px] flex-col gap-3.5 pt-1">
                <h3 className="text-h3 text-slate">{item.title}</h3>
                {item.description && (
                  <p className="max-w-[444px] text-body-lg font-medium text-muted">
                    {item.description}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
