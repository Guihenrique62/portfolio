import { links } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

const photoSizes = '(min-width: 1024px) 524px, (min-width: 640px) 280px, 42vw'

/**
 * "Por que me contratar?" (Figma node 61:643): card #F2F4F7 de cantos 50px
 * com foto sobre um retângulo azul (cantos superiores 80px), título,
 * parágrafo, dois números e botão outline.
 */
export function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section
      id="sobre"
      className="cv-auto section-rounded bg-surface py-14 md:py-[103px]"
      aria-labelledby="sobre-titulo"
    >
      {/*
        Mobile/tablet: foto menor à esquerda com o título ao lado (centralizados),
        depois texto, números e botão centralizado. Desktop (lg+): grade de duas
        colunas do Figma — o wrapper vira `contents` e a foto ocupa a 1ª coluna.
      */}
      <div className="container-site grid grid-cols-1 gap-6 lg:grid-cols-[524px_minmax(0,1fr)] lg:items-start lg:gap-x-[79px] lg:gap-y-[47px]">
        <div className="flex items-center gap-4 sm:gap-8 lg:contents">
          {/* Foto + retângulo azul (proporções do Figma: 524×488 e 358×406) */}
          <Reveal className="relative w-[42%] max-w-[200px] shrink-0 sm:max-w-[280px] lg:row-span-4 lg:mt-16 lg:w-full lg:max-w-[524px]">
            <div className="relative aspect-[524/488]">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[8.5%] h-[83.2%] w-[68.3%] rounded-t-[15.3%] bg-primary"
              />
              <picture>
                <source
                  type="image/avif"
                  srcSet="/about/foto-contratar-400.avif 400w, /about/foto-contratar-524.avif 524w, /about/foto-contratar-1048.avif 1048w"
                  sizes={photoSizes}
                />
                <img
                  src="/about/foto-contratar.webp"
                  srcSet="/about/foto-contratar-400.webp 400w, /about/foto-contratar-524.webp 524w, /about/foto-contratar-1048.webp 1048w"
                  sizes={photoSizes}
                  alt={about.photoAlt}
                  width={524}
                  height={488}
                  loading="lazy"
                  decoding="async"
                  className="relative size-full rounded-[24px] object-cover object-[64%_50%] lg:rounded-[50px]"
                />
              </picture>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0 flex-1 lg:mt-12">
            <SectionTitle
              as="h2"
              text={about.title}
              className="max-lg:text-[clamp(1.625rem,1rem+2.6vw,2.5rem)] max-lg:leading-[1.1]"
            />
            <span id="sobre-titulo" className="sr-only">
              {about.title.replace(/[{}]/g, '')}
            </span>
          </Reveal>
        </div>

        <Reveal delay={160} as="p" className="max-w-[444px] text-body-lg text-muted">
          {about.text}
        </Reveal>

        <Reveal delay={200} as="dl" className="flex w-full gap-2.5">
          {about.stats.map((stat) => (
            <div key={stat.label} className="flex flex-1 flex-col gap-2.5">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-[clamp(1.75rem,1.3rem+1.5vw,2.25rem)] font-medium leading-normal text-slate-deep">
                {stat.value}
              </dd>
              <dd aria-hidden="true" className="text-body-lg text-muted-strong">
                {stat.label}
              </dd>
            </div>
          ))}
        </Reveal>

        <Reveal delay={240} className="flex justify-center lg:justify-start">
          <Button
            href={links.whatsapp}
            variant="outline"
            shape="rounded"
            size="custom"
            className="w-full max-w-[360px] px-10 py-5 text-[1.375rem] font-semibold md:px-[59px] md:py-[33px] md:text-[2rem] lg:w-auto lg:max-w-none"
          >
            {about.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
