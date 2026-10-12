import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outline' | 'light'
type Size = 'md' | 'lg' | 'custom'

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-sans transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  // Azul sólido (Home ativo, "Ver tudo", "Enviar", "Contratar" do footer)
  primary: 'bg-primary text-white hover:bg-primary-bright active:bg-primary-deep',
  // Transparente em fundo escuro ("Contratar" no grupo do hero)
  ghost: 'bg-transparent text-white hover:bg-white/10',
  // Contorno escuro em fundo claro ("Contratar" em "Por que me contratar")
  outline:
    'border border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
  // Pill clara (filtros do portfólio)
  light: 'bg-surface text-ink hover:bg-line',
}

const sizes: Record<Size, string> = {
  md: 'px-8 py-4 text-base font-bold md:px-10 md:py-5 md:text-xl',
  lg: 'px-10 py-6 text-xl font-semibold md:px-[59px] md:py-[33px] md:text-[2rem]',
  // Sem padding/fonte: o chamador define tudo via className
  custom: '',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  /** pill (padrão) ou cantos de 32px (botão outline de "Por que me contratar"). */
  shape?: 'pill' | 'rounded'
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

/** Botão pill do design system. Vira `<a>` quando recebe `href`. */
export function Button({
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${shape === 'pill' ? 'rounded-pill' : 'rounded-[32px]'} ${variants[variant]} ${sizes[size]} ${className}`

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest as ButtonAsLink
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...anchor}
      >
        {children}
      </a>
    )
  }

  const { type = 'button', ...button } = rest as ButtonAsButton
  return (
    <button type={type} className={classes} {...button}>
      {children}
    </button>
  )
}
