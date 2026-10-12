import { useLanguage } from '../i18n/LanguageContext'
import star from '../assets/icons/star-marquee.svg'

/**
 * Faixa azul com fita branca inclinada (Figma "Component 11", node 61:717):
 * 147px de altura, cantos 24px (sup. esq. e inf. dir.), texto 48px separado
 * por estrelas azuis, rolando em loop contínuo (pausa no hover e com
 * prefers-reduced-motion).
 */
export function Marquee() {
  const { t } = useLanguage()
  const items = t.marquee

  const sequence = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-[15px] pr-[15px]"
    >
      {items.map((item, index) => (
        <li key={index} className="flex shrink-0 items-center gap-[15px]">
          <span className="whitespace-nowrap text-[clamp(1.5rem,1rem+2vw,3rem)] font-normal tracking-[-0.015em] text-black">
            {item}
          </span>
          <img src={star} alt="" width={34} height={34} className="size-6 md:size-[34px]" />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className="cv-auto relative my-0 h-24 overflow-hidden rounded-bl-none rounded-br-card rounded-tl-card rounded-tr-none bg-primary md:h-[147px]"
      role="marquee"
      aria-label={t.marqueeLabel}
    >
      <div className="marquee-band absolute left-[-2%] top-1/2 flex w-[104%] -translate-y-1/2 -rotate-[2.5deg] bg-white py-3 md:py-5">
        <div className="marquee-track flex">
          {sequence(false)}
          {sequence(true)}
        </div>
      </div>
    </div>
  )
}
