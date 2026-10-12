import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'

interface CarouselProps {
  /** Rótulo acessível do carrossel (ex.: "Serviços"). */
  label: string
  /** Rótulo da navegação por página, com `{n}` substituído pelo número. */
  pageLabel: string
  children: ReactNode
  /** Classes do slide (largura por breakpoint). */
  slideClassName?: string
  /** Classes do trilho (gap, padding). */
  trackClassName?: string
  className?: string
  /** Cor dos dots inativos: clara em fundo escuro, cinza em fundo claro. */
  dotsTone?: 'light' | 'dark'
  /** Alinhamento do snap: início (padrão) ou centro (feedbacks). */
  align?: 'start' | 'center'
}

/**
 * Carrossel sem biblioteca: trilho com `scroll-snap`, dots por "página"
 * (quantos slides cabem no viewport do trilho) e navegação por teclado.
 * O dot ativo é a pílula azul 60×15 do protótipo; os demais são 15×15.
 */
export function Carousel({
  label,
  pageLabel,
  children,
  slideClassName = '',
  trackClassName = '',
  className = '',
  dotsTone = 'light',
  align = 'start',
}: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [pages, setPages] = useState(1)
  const [active, setActive] = useState(0)
  const slides = Children.toArray(children)

  // Uma "página" = quantos slides cabem no trilho. Mede o primeiro slide e o
  // gap real para não depender das classes de largura.
  const metrics = useCallback(() => {
    const track = trackRef.current
    const first = track?.firstElementChild as HTMLElement | null
    if (!track || !first) return null
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step = first.offsetWidth + gap
    const perView = Math.max(1, Math.floor((track.clientWidth + gap + 1) / step))
    return { track, step, perView }
  }, [])

  const measure = useCallback(() => {
    const m = metrics()
    if (!m) return
    const count = Math.max(1, Math.ceil(m.track.children.length / m.perView))
    const pageWidth = m.step * m.perView
    setPages(count)
    setActive(Math.min(count - 1, Math.round(m.track.scrollLeft / pageWidth)))
  }, [metrics])

  useEffect(() => {
    measure()
    const track = trackRef.current
    if (!track) return
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [measure, slides.length])

  const goTo = (page: number) => {
    const m = metrics()
    if (!m) return
    m.track.scrollTo({ left: page * m.step * m.perView, behavior: 'smooth' })
  }

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(Math.min(pages - 1, active + 1))
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(Math.max(0, active - 1))
    }
  }

  return (
    <div className={className} role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={trackRef}
        tabIndex={0}
        onScroll={measure}
        onKeyDown={onKeyDown}
        className={`flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${trackClassName}`}
      >
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`shrink-0 ${align === 'center' ? 'snap-center' : 'snap-start'} ${slideClassName}`}
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${slides.length}`}
          >
            {slide}
          </li>
        ))}
      </ul>

      {pages > 1 && (
        <div className="mt-[26px] flex items-center justify-center gap-[7px]" role="tablist">
          {Array.from({ length: pages }, (_, page) => (
            <button
              key={page}
              type="button"
              role="tab"
              aria-selected={active === page}
              aria-label={pageLabel.replace('{n}', String(page + 1))}
              onClick={() => goTo(page)}
              className="group/dot flex h-11 cursor-pointer items-center px-0.5"
            >
              <span
                aria-hidden="true"
                className={`block h-[15px] rounded-pill transition-[width,background-color] duration-300 ${
                  active === page
                    ? 'w-[60px] bg-primary'
                    : `w-[15px] ${dotsTone === 'light' ? 'bg-line group-hover/dot:bg-white' : 'bg-line group-hover/dot:bg-muted'}`
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
