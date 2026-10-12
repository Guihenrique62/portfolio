/**
 * Fundo das seções escuras do protótipo (Serviços e Feedbacks):
 * #171717 com a textura `imgFrame58` a 20% de opacidade.
 * Renderizado como <img> para permitir lazy loading e formatos modernos.
 */
export function DarkTexture({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden bg-ink ${className}`}>
      <picture>
        <source
          type="image/avif"
          srcSet="/bg/textura-escura-960.avif 960w, /bg/textura-escura-1440.avif 1440w, /bg/textura-escura-2160.avif 2160w"
          sizes="100vw"
        />
        <img
          src="/bg/textura-escura.webp"
          srcSet="/bg/textura-escura-960.webp 960w, /bg/textura-escura-1440.webp 1440w, /bg/textura-escura-2160.webp 2160w"
          sizes="100vw"
          alt=""
          width={1440}
          height={960}
          loading="lazy"
          decoding="async"
          className="size-full object-cover opacity-20"
        />
      </picture>
    </div>
  )
}
