import { links } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import scribble from '../assets/icons/scribble-hello.svg'
import arrowCurve from '../assets/icons/arrow-curve.svg'
import quoteUp from '../assets/icons/quote-up.svg'
import star from '../assets/icons/star-hero.svg'
import arrowUpRight from '../assets/icons/arrow-up-right.svg'

const photoSizes = '(min-width: 1280px) 585px, (min-width: 768px) 50vw, 85vw'

/**
 * Hero (Figma nodes 61:585, 63:1163, 61:595).
 * Desktop: badge → H1 centralizado → três colunas (parágrafo | foto sobre
 * semicírculo azul | estrelas + anos) → grupo de botões sobre a foto.
 * Mobile: badge → H1 → foto → estrelas/anos → parágrafo → botões empilhados.
 */
export function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section id="inicio" className="relative overflow-hidden pb-12 pt-28 md:pt-[130px] lg:pb-0">
      <div className="container-site">
        {/* Badge + H1 */}
        <div className="relative mx-auto max-w-[973px] text-center">
          <div className="animate-fade-down relative inline-flex md:mt-[19px]">
            <span className="inline-flex h-[45px] items-center rounded-pill border-[1.275px] border-ink px-[25px] text-xl font-medium text-ink">
              {hero.badge}
            </span>
            <img
              src={scribble}
              alt=""
              aria-hidden="true"
              width={28}
              height={29}
              className="pointer-events-none absolute -right-8 -top-5 size-7"
            />
          </div>

          <h1 className="animate-fade-down mt-2.5 text-h1 text-ink [animation-delay:80ms] md:mt-[10px]">
            {hero.titlePrefix}
            <span className="text-primary">{hero.name}</span>
            {hero.titleSuffix}
          </h1>

          {/* Seta curva decorativa, à esquerda da segunda linha do título */}
          <img
            src={arrowCurve}
            alt=""
            aria-hidden="true"
            width={77}
            height={80}
            className="pointer-events-none absolute left-10 top-[calc(100%-40px)] hidden w-[77px] -rotate-[167.6deg] xl:block"
          />
        </div>

        {/* Três colunas (desktop) / empilhado (mobile) */}
        <div className="relative mt-6 grid grid-cols-1 items-start gap-8 md:mt-8 lg:-mt-2 lg:grid-cols-[250px_minmax(0,1fr)_250px] lg:gap-0 xl:grid-cols-[328px_minmax(0,1fr)_328px]">
          {/* Parágrafo com aspas */}
          <div className="animate-fade-up order-3 flex max-w-[328px] flex-col gap-6 [animation-delay:200ms] lg:order-1 lg:pt-[26px]">
            <img src={quoteUp} alt="" aria-hidden="true" width={36} height={36} className="size-9" />
            <p className="text-body-lg font-medium text-slate">{hero.description}</p>
          </div>

          {/* Foto sobre o semicírculo azul + botões */}
          <div className="relative order-1 mx-auto w-full max-w-[812px] lg:order-2">
            <div className="relative mx-auto aspect-square w-[85%] max-w-[585px] md:w-[72%] lg:w-full">
              {/* Semicírculo: 811.78 × 405.89 — ancorado à base da coluna */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 z-0 aspect-[2/1] w-[139%] max-w-[812px] -translate-x-1/2 rounded-t-full bg-primary"
              />
              <picture>
                <source
                  type="image/avif"
                  srcSet="/hero/foto-perfil-400.avif 400w, /hero/foto-perfil-585.avif 585w, /hero/foto-perfil-800.avif 800w, /hero/foto-perfil-1170.avif 1170w"
                  sizes={photoSizes}
                />
                <img
                  src="/hero/foto-perfil.webp"
                  srcSet="/hero/foto-perfil-400.webp 400w, /hero/foto-perfil-585.webp 585w, /hero/foto-perfil-800.webp 800w, /hero/foto-perfil-1170.webp 1170w"
                  sizes={photoSizes}
                  alt={hero.photoAlt}
                  width={585}
                  height={585}
                  {...{ fetchpriority: 'high' }}
                  decoding="async"
                  className="relative z-10 h-auto w-full object-cover"
                />
              </picture>

              {/* Grupo de botões (Figma "Frame 56") */}
              <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2.5 rounded-pill bg-white/10 p-2.5 backdrop-blur-[7.5px] md:flex lg:bottom-12">
                <a
                  href="#projetos"
                  className="inline-flex h-[62px] w-[208px] items-center justify-center gap-2 whitespace-nowrap rounded-pill border-[0.5px] border-line-soft bg-primary px-5 text-[25.7px] font-medium text-white transition-colors hover:bg-primary-bright"
                >
                  {hero.ctaPortfolio}
                  <img src={arrowUpRight} alt="" aria-hidden="true" width={42} height={42} />
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[62px] items-center justify-center whitespace-nowrap rounded-pill px-6 text-[25.7px] font-light text-white transition-colors hover:bg-white/10"
                >
                  {hero.ctaHire}
                </a>
              </div>
            </div>

            {/* Botões no mobile: empilhados, largura total, abaixo da foto */}
            <div className="mt-6 flex flex-col gap-3 md:hidden">
              <a
                href="#projetos"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-pill bg-primary text-xl font-medium text-white"
              >
                {hero.ctaPortfolio}
                <img src={arrowUpRight} alt="" aria-hidden="true" width={32} height={32} className="size-8" />
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-pill border border-ink text-xl font-medium text-ink"
              >
                {hero.ctaHire}
              </a>
            </div>
          </div>

          {/* Estrelas + anos de experiência */}
          <div className="animate-fade-up order-2 flex flex-col items-start gap-5 [animation-delay:300ms] lg:order-3 lg:items-end lg:pt-[33px]">
            <div className="flex" aria-label="5 de 5 estrelas" role="img">
              {Array.from({ length: 5 }, (_, index) => (
                <img key={index} src={star} alt="" width={32} height={32} className="size-8" />
              ))}
            </div>
            <div className="flex flex-col gap-[5px] lg:items-end">
              <span className="font-display text-[clamp(2rem,1.5rem+2vw,2.9375rem)] font-bold leading-none text-ink">
                {hero.years.value}
              </span>
              <span className="text-xl leading-none text-ink">{hero.years.label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
