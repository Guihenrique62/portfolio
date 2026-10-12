import { useEffect, useId, useRef, useState } from 'react'
import type { Lang } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { homeHash } from '../router'

const languages: { code: Lang; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

/**
 * Nav em pill flutuante (Figma node 61:586): fundo #171717, borda branca,
 * item ativo em pill azul. No mobile vira marca + hambúrguer com menu overlay.
 */
export function Header() {
  const { lang, route, setLang, t } = useLanguage()
  const items = t.nav.items
  const [active, setActive] = useState(items[0].id)
  // Fora da home, o item ativo é fixo ("Projetos" na página de projetos).
  const current = route === 'home' ? active : 'projetos'
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  // Scroll-spy: a seção que ocupa a faixa central do viewport fica ativa.
  useEffect(() => {
    if (route !== 'home' || typeof IntersectionObserver === 'undefined') return
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((section) => observer.observe(section))

    // No fim da página a última seção pode não alcançar a faixa central
    // (rodapé baixo): ativa o último item quando o scroll chega ao fundo.
    const lastId = sections[sections.length - 1].id
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) setActive(lastId)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [items, route])

  // Menu mobile: trava o scroll, fecha com Escape e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      toggleRef.current?.focus()
    }
  }, [open])

  // Fecha o menu ao cruzar o breakpoint desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 64rem)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const linkClass = (id: string) =>
    `rounded-pill px-6 py-3 text-lg transition-colors lg:px-5 lg:py-5 lg:text-lg xl:px-10 xl:text-xl ${
      current === id
        ? 'bg-primary font-bold text-white'
        : 'font-normal text-white hover:bg-white/10'
    }`

  const languageSwitch = (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className="flex items-center gap-0.5 rounded-pill bg-white/10 p-1 text-sm font-semibold"
    >
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => setLang(language.code)}
          aria-pressed={lang === language.code}
          lang={language.code === 'pt' ? 'pt-BR' : 'en'}
          className={`cursor-pointer rounded-pill px-3 py-1.5 transition-colors ${
            lang === language.code ? 'bg-white text-ink' : 'text-white/80 hover:text-white'
          }`}
        >
          {language.label}
        </button>
      ))}
    </div>
  )

  return (
    <header className="fixed inset-x-0 top-4 z-50 md:top-8">
      <div className="container-site">
        <nav
          aria-label="Principal"
          className="relative flex h-16 items-center justify-between rounded-pill border border-white bg-ink/95 px-2.5 backdrop-blur-[7.5px] lg:h-[86px]"
        >
          {/* Marca (mobile) */}
          <a
            href={homeHash(lang, 'inicio', route)}
            className="flex h-11 items-center px-4 font-display text-xl font-bold text-white lg:hidden"
            onClick={() => setOpen(false)}
          >
            {t.nav.brand}
          </a>

          {/* Itens (desktop) */}
          <ul className="hidden flex-1 items-center justify-between lg:flex">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={homeHash(lang, item.id, route)}
                  aria-current={current === item.id ? 'location' : undefined}
                  className={linkClass(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-4 hidden xl:block">{languageSwitch}</li>
          </ul>

          {/* Hambúrguer (mobile) */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="flex size-11 cursor-pointer items-center justify-center rounded-pill text-white hover:bg-white/10 lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded bg-current transition-transform duration-200 ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[7px] h-0.5 rounded bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-current transition-transform duration-200 ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          {/* Menu (mobile) */}
          <div
            id={menuId}
            data-open={open}
            hidden={!open}
            className="nav-menu absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-card border border-white/15 bg-ink p-3 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {items.map((item, index) => (
                <li key={item.id}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={homeHash(lang, item.id, route)}
                    onClick={() => setOpen(false)}
                    aria-current={current === item.id ? 'location' : undefined}
                    className={`block ${linkClass(item.id)}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex justify-end border-t border-white/10 pt-3">{languageSwitch}</div>
          </div>
        </nav>
      </div>
    </header>
  )
}
