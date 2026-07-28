import { links, type Lang } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { WhatsAppIcon } from './BrandIcons'

const languages: { code: Lang; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

export function Header() {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-4 px-6 py-4 md:px-12">
        <a href="#inicio" className="leading-tight">
          <span className="block whitespace-nowrap text-sm font-bold text-primary-bright">
            Guilherme Porto
          </span>
          <span className="hidden text-xs text-muted sm:block">{t.header.role}</span>
        </a>

        <div className="flex items-center gap-3 md:gap-8">
          <div className="flex items-center gap-1 text-[11px] font-bold tracking-wider">
            {languages.map((language, index) => (
              <span key={language.code} className="flex items-center gap-1">
                {index > 0 && <span className="text-line">|</span>}
                <button
                  type="button"
                  onClick={() => setLang(language.code)}
                  aria-pressed={lang === language.code}
                  className={`cursor-pointer px-1 py-0.5 transition-colors ${
                    lang === language.code ? 'text-primary-bright' : 'text-muted hover:text-white'
                  }`}
                >
                  {language.label}
                </button>
              </span>
            ))}
          </div>

          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex items-center gap-2 text-[11px] font-bold tracking-wider transition-opacity hover:opacity-80"
          >
            <span className="hidden sm:block">
              {t.header.whatsappPrefix} <span className="text-whatsapp">WHATSAPP</span>
            </span>
            <WhatsAppIcon className="size-5 text-whatsapp" />
          </a>
        </div>
      </div>
    </header>
  )
}
