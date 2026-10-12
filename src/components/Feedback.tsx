import type { Testimonial } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { DarkTexture } from './DarkTexture'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import scribble from '../assets/icons/scribble-feedback.svg'
import star from '../assets/icons/star-feedback.svg'
import quoteDown from '../assets/icons/quote-down.svg'

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

/** Segundos por depoimento na esteira (12 cards ≈ 2,5 min por volta). */
const SECONDS_PER_CARD = 12.5

function FeedbackCard({ item, ratingLabel }: { item: Testimonial; ratingLabel: string }) {
  return (
    <figure className="relative flex min-h-[265px] w-[88vw] flex-col gap-3.5 overflow-hidden rounded-card bg-white/[0.14] p-[21px] backdrop-blur-[7.5px] sm:w-[560px] md:w-[784px]">
      <figcaption className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex size-[55px] shrink-0 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-white"
        >
          {initials(item.name)}
        </span>
        <span className="flex flex-col">
          <span className="font-display text-[23.5px] font-bold leading-normal text-snow">{item.name}</span>
          <span className="font-display text-[18.3px] leading-normal text-snow/80">{item.role ?? '​'}</span>
        </span>
      </figcaption>

      <div className="flex items-center gap-[5px]" role="img" aria-label={ratingLabel}>
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src={star} alt="" width={32} height={32} className="size-8" />
        ))}
        <span className="text-[25.7px] font-medium tracking-[-0.015em] text-snow">5.0</span>
      </div>

      <blockquote className="flex min-h-[106px] max-w-[742px] items-center">
        <p className="text-body-lg text-snow-soft">{item.text}</p>
      </blockquote>

      <img
        src={quoteDown}
        alt=""
        aria-hidden="true"
        width={128}
        height={128}
        className="pointer-events-none absolute right-[14px] top-3 size-20 opacity-70 md:size-32"
      />
    </figure>
  )
}

/**
 * "Feedbacks que falam sobre meus Resultados" (Figma node 61:686): seção
 * escura com textura, título com rabisco e uma esteira de cards vidro que
 * rola sozinha, devagar, da direita para a esquerda, em loop contínuo
 * (conteúdo duplicado + animação CSS; pausa no hover).
 */
export function Feedback() {
  const { t } = useLanguage()
  const { feedback } = t
  const items = feedback.testimonials
  const duration = `${Math.round(items.length * SECONDS_PER_CARD)}s`

  return (
    <section
      id="feedback"
      className="cv-auto section-rounded relative mt-[22px] overflow-hidden py-16 md:py-[116px]"
      aria-labelledby="feedback-titulo"
    >
      <DarkTexture className="section-rounded" />

      <div className="relative">
        <Reveal className="container-site">
          <div className="relative mx-auto w-fit">
            <SectionTitle as="h2" size="h2-sm" tone="dark" align="center" text={feedback.title} />
            <img
              src={scribble}
              alt=""
              aria-hidden="true"
              width={28}
              height={29}
              className="pointer-events-none absolute -right-7 -top-3.5 hidden size-7 md:block"
            />
          </div>
          <span id="feedback-titulo" className="sr-only">
            {feedback.title.replace(/[{}]/g, '')}
          </span>
        </Reveal>

        <div
          className="feedback-marquee mt-10 overflow-hidden md:mt-[72px]"
          role="region"
          aria-label={feedback.carouselLabel}
          style={{ '--feedback-duration': duration } as React.CSSProperties}
        >
          <div className="feedback-track flex gap-4 pr-4 md:gap-6 md:pr-6">
            <ul className="flex shrink-0 gap-4 md:gap-6">
              {items.map((item) => (
                <li key={item.name}>
                  <FeedbackCard item={item} ratingLabel={feedback.ratingLabel} />
                </li>
              ))}
            </ul>
            {/* Cópia para o loop contínuo; oculta de leitores de tela */}
            <ul className="flex shrink-0 gap-4 md:gap-6" aria-hidden="true">
              {items.map((item) => (
                <li key={item.name}>
                  <FeedbackCard item={item} ratingLabel={feedback.ratingLabel} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
