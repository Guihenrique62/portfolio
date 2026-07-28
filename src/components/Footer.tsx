import { Instagram, Linkedin } from 'lucide-react'
import { contacts, links } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { TikTokIcon, WhatsAppIcon } from './BrandIcons'
import { Reveal } from './Reveal'

export function Footer() {
  const { t } = useLanguage()
  const [footerTitleLine1, footerTitleLine2] = splitTitle(t.footer.title)

  return (
    <footer id="contato" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-10 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)_minmax(0,0.9fr)] lg:gap-16">
        {/* Chamada + botão WhatsApp */}
        <Reveal>
          <h2 className="text-xl font-extrabold leading-tight tracking-wide sm:text-2xl md:text-3xl">
            {footerTitleLine1}
            <br />
            {footerTitleLine2}
          </h2>
          <p className="mt-5 max-w-90 text-xs leading-relaxed text-muted">{t.footer.text}</p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-whatsapp px-5 py-3.5 text-xs font-bold tracking-wider text-white transition-[opacity,transform] duration-300 hover:scale-[1.03] hover:opacity-90 active:scale-95 sm:w-auto sm:py-3"
          >
            {t.footer.whatsappButton}
            <WhatsAppIcon className="size-5" />
          </a>
        </Reveal>

        {/* Contatos */}
        <Reveal as="ul" delay={100}>
          {contacts.map((contact) => (
            <li key={contact.label} className="border-b border-line">
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-5 py-6 transition-[opacity,transform] duration-300 hover:translate-x-1 hover:opacity-80"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/70">
                  <contact.icon className="size-5" strokeWidth={1.5} />
                </span>
                <span className="text-sm text-white/90">{contact.label}</span>
              </a>
            </li>
          ))}
        </Reveal>

        {/* Redes sociais */}
        <Reveal delay={200}>
          <h2 className="text-lg font-extrabold leading-tight tracking-wide lg:text-xl">
            {t.footer.followTitle}
          </h2>
          <ul className="mt-6">
            <li className="border-b border-line">
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 transition-[opacity,transform] duration-300 hover:translate-x-1 hover:opacity-80"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
                  <Instagram className="size-5" strokeWidth={2} />
                </span>
                <span className="text-sm text-white/90">@guilhermeporto.dev</span>
              </a>
            </li>
            <li className="border-b border-line">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row-reverse items-center justify-end gap-4 py-4 transition-[opacity,transform] duration-300 hover:translate-x-1 hover:opacity-80 lg:flex-row lg:hover:-translate-x-1"
              >
                <span className="text-sm text-white/90">@guihenriqueporto</span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0a66c2] text-white">
                  <Linkedin className="size-5" strokeWidth={2} />
                </span>
              </a>
            </li>
            <li className="border-b border-line">
              <a
                href={links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 transition-[opacity,transform] duration-300 hover:translate-x-1 hover:opacity-80"
              >
                <span className="flex size-9 shrink-0 items-center justify-center text-white">
                  <TikTokIcon className="size-6" />
                </span>
                <span className="text-sm text-white/90">@guilhermeporto.dev</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </footer>
  )
}

// Quebra o título em duas linhas na última palavra, como no protótipo
// ("VAMOS TRABALHAR / JUNTOS", "LET'S WORK / TOGETHER").
function splitTitle(title: string): [string, string] {
  const lastSpace = title.lastIndexOf(' ')
  if (lastSpace === -1) return [title, '']
  return [title.slice(0, lastSpace), title.slice(lastSpace + 1)]
}
