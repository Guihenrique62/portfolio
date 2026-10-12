import type { ElementType, ReactNode } from 'react'

interface SectionTitleProps {
  /** Texto do título. Use `{{palavra}}` para destacar em azul. */
  text: string
  as?: ElementType
  /** Variante tipográfica: h2 (64px) ou h2-sm (48px). */
  size?: 'h2' | 'h2-sm'
  /** Cor base: slate em fundo claro, snow em fundo escuro. */
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

/**
 * Título de seção com destaque em azul, como no protótipo
 * ("Minha {{Experiência}}", "Meus {{Serviços}}").
 */
export function SectionTitle({
  text,
  as: Tag = 'h2',
  size = 'h2',
  tone = 'light',
  align = 'left',
  className = '',
  children,
}: SectionTitleProps) {
  const parts = text.split(/(\{\{.*?\}\}|\n)/g).filter(Boolean)

  return (
    <Tag
      className={`${size === 'h2' ? 'text-h2' : 'text-h2-sm'} ${
        tone === 'light' ? 'text-slate' : 'text-snow'
      } ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {parts.map((part, index) =>
        part === '\n' ? (
          <br key={index} />
        ) : part.startsWith('{{') ? (
          <span key={index} className="text-primary">
            {part.slice(2, -2)}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
      {children}
    </Tag>
  )
}
