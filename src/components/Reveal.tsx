import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'

interface RevealProps {
  children: ReactNode
  /** atraso da transição em ms, para efeito de cascata */
  delay?: number
  /** tag renderizada, para preservar semântica (li, article, h2...) */
  as?: ElementType
  className?: string
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Já visível no viewport ao montar (ou IO indisponível): revela direto,
    // sem depender do observer — que fica só para o conteúdo abaixo da dobra.
    const rect = el.getBoundingClientRect()
    if (
      typeof IntersectionObserver === 'undefined' ||
      (rect.top < window.innerHeight && rect.bottom > 0)
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // O delay só vale para a entrada; depois de visível é removido para não
  // atrasar transições de hover no mesmo elemento.
  const style: CSSProperties | undefined =
    delay && !visible ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
