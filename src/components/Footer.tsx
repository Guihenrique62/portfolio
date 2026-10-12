import { Github, Linkedin } from 'lucide-react'
import { links } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { homeHash } from '../router'
import { TikTokIcon } from './BrandIcons'
import arrowUpRight from '../assets/icons/arrow-up-right.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'

/**
 * Footer (Figma node 61:726): fundo #272727 com cantos superiores 24px,
 * "Vamos nos conectar" + botão "Contratar ↗", linha, três colunas
 * (texto + redes | Navegar | Contato), linha e rodapé com direitos.
 */
export function Footer() {
  const { t, lang, route } = useLanguage()
  const { footer, nav } = t

  const social = [
    { label: 'Instagram', href: links.instagram, icon: <img src={instagramIcon} alt="" width={24} height={24} className="size-6" /> },
    { label: 'LinkedIn', href: links.linkedin, icon: <Linkedin className="size-6" strokeWidth={1.75} /> },
    { label: 'TikTok', href: links.tiktok, icon: <TikTokIcon className="size-[22px]" /> },
    { label: 'GitHub', href: links.github, icon: <Github className="size-6" strokeWidth={1.75} /> },
    { label: 'WhatsApp', href: links.whatsapp, icon: <img src={whatsappIcon} alt="" width={24} height={24} className="size-6" /> },
  ]

  const contact = [
    { label: links.phone, href: `tel:${links.phoneHref}` },
    { label: links.email, href: `mailto:${links.email}` },
    { label: links.site, href: `https://${links.site}` },
  ]

  return (
    <footer className="rounded-t-card bg-footer text-snow">
      <div className="container-site flex flex-col gap-10 py-8 md:gap-12 md:py-[25px]">
        {/* Título + botão */}
        <div className="flex flex-col gap-6 md:min-h-[150px] md:flex-row md:items-center md:justify-between">
          <p className="text-h2 text-snow">{footer.title}</p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center gap-1 rounded-pill bg-primary px-5 py-2.5 text-[25.7px] font-medium text-white transition-colors hover:bg-primary-bright"
          >
            {footer.cta}
            <img src={arrowUpRight} alt="" aria-hidden="true" width={42} height={42} className="size-[42px]" />
          </a>
        </div>

        <hr className="border-0 border-t-2 border-[#475467]" />

        {/* Colunas */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-x-[147px]">
          <div className="flex flex-col justify-between gap-8 md:col-span-2 md:min-h-[239px] lg:col-span-1">
            <p className="max-w-[635px] text-body-lg text-snow">{footer.text}</p>
            <ul className="flex items-center gap-[5px]" aria-label={footer.socialLabel}>
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex size-11 items-center justify-center rounded-full text-snow transition-colors hover:bg-white/10 md:size-9"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={footer.navTitle} className="flex flex-col gap-7">
            <p className="text-xl font-semibold text-primary-soft">{footer.navTitle}</p>
            <ul className="flex flex-col gap-5 text-base">
              {nav.items.map((item) => (
                <li key={item.id}>
                  <a href={homeHash(lang, item.id, route)} className="transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="flex flex-col gap-7 not-italic">
            <p className="text-xl font-semibold text-primary-soft">{footer.contactTitle}</p>
            <ul className="flex flex-col gap-5 text-base">
              {contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-primary"
                    {...(item.href.startsWith('https') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>

        <hr className="border-0 border-t-2 border-[#475467]" />

        <p className="flex min-h-[30px] items-center text-sm text-snow/70">
          © {new Date().getFullYear()} Guilherme Porto. {footer.rights}
        </p>
      </div>
    </footer>
  )
}
