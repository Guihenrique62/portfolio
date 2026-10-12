import { links } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import starIcon from '../assets/icons/star-badge.svg'
import shieldIcon from '../assets/icons/shield-tick.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'

/**
 * "Tem uma ideia de projeto incrível? Vamos Construir" (Figma node 61:698):
 * título centralizado, botão "Entrar em contato" que abre o WhatsApp com a
 * mensagem pronta e selos abaixo.
 */
export function Cta() {
  const { t } = useLanguage()
  const { cta } = t
  const href = `${links.whatsapp}?text=${encodeURIComponent(cta.whatsappMessage)}`

  return (
    <section id="contato" className="cv-auto py-16 md:py-[98px]" aria-labelledby="contato-titulo">
      <div className="container-site flex flex-col items-center gap-8 md:gap-10">
        <Reveal>
          <SectionTitle as="h2" align="center" text={cta.title} className="mx-auto max-w-[912px]" />
          <span id="contato-titulo" className="sr-only">
            {cta.title.replace(/[{}]/g, '')}
          </span>
        </Reveal>

        <Reveal delay={120} className="flex w-full max-w-[832px] flex-col items-center gap-6">
          <Button
            href={href}
            size="custom"
            className="w-full max-w-[420px] gap-3 px-10 py-5 text-xl font-semibold md:w-auto md:px-14 md:py-6 md:text-2xl"
          >
            <img src={whatsappIcon} alt="" aria-hidden="true" width={24} height={24} className="size-7" />
            {cta.button}
          </Button>

          <ul className="flex w-full max-w-[770px] flex-wrap items-center justify-center gap-x-10 gap-y-2 text-base text-black">
            <li className="flex items-center">
              <img src={starIcon} alt="" width={24} height={24} className="size-6" />
              <span>{cta.badges.rating}</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={shieldIcon} alt="" width={24} height={24} className="size-6" />
              <span>{cta.badges.certified}</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
