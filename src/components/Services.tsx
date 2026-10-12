import { links } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Carousel } from './Carousel'
import { DarkTexture } from './DarkTexture'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import arrowService from '../assets/icons/arrow-service.svg'
import cardGlass from '../assets/icons/service-card-mask.svg'

/*
 * Forma do card (Figma "Rectangle 5", 416×508): retângulo com cantos de 37px
 * e um recorte no canto inferior direito onde fica o botão de seta.
 * Convertida para objectBoundingBox (÷416, ÷508) para escalar com o card.
 */
const CARD_CLIP_ID = 'service-card-clip'
const cardPath =
  'M0 37C0 16.5655 16.5655 0 37 0H379C399.435 0 416 16.5655 416 37V338.5C416 358.935 399.435 375.5 379 375.5H356.049C317.534 375.5 286.476 407.031 287.057 445.541L287.433 470.442C287.745 491.092 271.09 508 250.437 508H37C16.5655 508 0 491.435 0 471V37Z'

const mockupSizes = '(min-width: 1024px) 416px, (min-width: 640px) 50vw, 85vw'

/**
 * "Meus Serviços" (Figma node 61:596): seção escura com textura, três cards
 * recortados por vista e dots de carrossel. Os 6 serviços do site viram
 * 6 slides; mobile mostra 1 por vista, tablet 2, desktop 3.
 */
export function Services() {
  const { t } = useLanguage()
  const { services } = t

  return (
    <section
      id="servicos"
      className="cv-auto section-rounded relative overflow-hidden pb-12 pt-16 md:pb-14 md:pt-[116px]"
      aria-labelledby="servicos-titulo"
    >
      <DarkTexture className="section-rounded" />

      {/* clipPath compartilhado pelos cards */}
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id={CARD_CLIP_ID} clipPathUnits="objectBoundingBox">
            <path transform="scale(0.00240385 0.00196850)" d={cardPath} />
          </clipPath>
        </defs>
      </svg>

      <div className="container-site relative">
        <Reveal>
          <SectionTitle
            as="h2"
            size="h2-sm"
            tone="dark"
            align="center"
            text={services.title}
            className="[&>h2]:text-snow"
          />
        </Reveal>
        <span id="servicos-titulo" className="sr-only">
          {services.title.replace(/[{}]/g, '')}
        </span>

        <Carousel
          className="mt-12 md:mt-[96px]"
          label={services.carouselLabel}
          pageLabel={services.pageLabel}
          trackClassName="gap-4 sm:gap-6 lg:gap-[25px]"
          slideClassName="w-[85%] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-50px)/3)]"
        >
          {services.items.map((service, index) => (
            <article key={service.title} className="@container relative aspect-[416/508] w-full">
              {/* Corpo recortado do card */}
              <div
                className="absolute inset-0 overflow-hidden bg-[#3c3c3c]/20 backdrop-blur-[15px]"
                style={{ clipPath: `url(#${CARD_CLIP_ID})` }}
              >
                {/* Preenchimento a 20% + borda radial do protótipo (Rectangle 6) */}
                <img src={cardGlass} alt="" aria-hidden="true" width={416} height={508} className="absolute inset-0 size-full" />
                {/* Título + linha */}
                <div className="absolute inset-x-0 top-[10.6cqw] flex flex-col gap-[5.5cqw]">
                  <h3 className="px-[8.9cqw] text-[7.7cqw] font-medium leading-[1.25] tracking-[-0.015em] text-white">
                    {service.title}
                  </h3>
                  <div className="h-[2px] w-full bg-snow-soft/30" />
                </div>
                <p className="sr-only">{service.description}</p>

                {/* Mockup: duas camadas translúcidas + imagem */}
                <div className="absolute left-0 top-[38cqw] h-[108cqw] w-[132cqw]">
                  <div className="absolute left-[12.9cqw] top-[-0.5cqw] h-[79cqw] w-[78.8cqw] rounded-[8.4cqw] bg-[rgba(219,231,245,0.51)] opacity-50" />
                  <div className="absolute left-[7.8cqw] top-[4.1cqw] h-[79cqw] w-[89.9cqw] rounded-[8.4cqw] bg-[rgba(223,232,247,0.68)]" />
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={`/services/${service.image}-415.avif 415w, /services/${service.image}-830.avif 830w`}
                      sizes={mockupSizes}
                    />
                    <img
                      src={`/services/${service.image}.webp`}
                      srcSet={`/services/${service.image}-415.webp 415w, /services/${service.image}-830.webp 830w`}
                      sizes={mockupSizes}
                      alt={service.imageAlt}
                      width={415}
                      height={310}
                      loading="lazy"
                      decoding="async"
                      className="absolute left-[0.5cqw] top-[10cqw] h-[74cqw] w-[99.5cqw] rounded-[8.4cqw] object-cover"
                    />
                  </picture>
                </div>
              </div>

              {/* Botão-seta no recorte (fora do clip) */}
              <a
                href={`${links.whatsapp}?text=${encodeURIComponent(
                  services.whatsappMessage.replace('{service}', service.title),
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label={services.ctaLabel.replace('{service}', service.title)}
                className="absolute left-[calc(88.5cqw-max(5.9cqw,22px))] top-[calc(109.5cqw-max(5.9cqw,22px))] flex size-[max(11.8cqw,44px)] items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:outline-white"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <img src={arrowService} alt="" width={49} height={49} className="size-[11.8cqw]" />
              </a>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
