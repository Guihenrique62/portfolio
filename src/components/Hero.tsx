import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto max-w-360 px-6 pt-4 md:px-12">
        <div className="relative">
          {/* Palavra gigante — scaleY reproduz o stretch vertical do protótipo */}
          <div className="animate-fade-down pb-[13vw] lg:pb-[14.5vw] 2xl:pb-[13rem]">
            <h1 className="origin-top scale-y-[1.6] select-none whitespace-nowrap text-center font-display text-[22vw] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary-bright via-primary to-primary-deep lg:text-[24vw] 2xl:text-[21.5rem]">
              <span className="sr-only">{t.hero.seoH1}</span>
              <span aria-hidden="true">PORTFOLIO</span>
            </h1>
          </div>

          {/* Foto sobreposta — flush com a base do hero no desktop */}
          <picture>
            <source
              type="image/avif"
              srcSet="/foto-perfil-480.avif 480w, /foto-perfil.avif 854w"
              sizes="(min-width: 1024px) 40vw, 80vw"
            />
            <source
              type="image/webp"
              srcSet="/foto-perfil-480.webp 480w, /foto-perfil.webp 854w"
              sizes="(min-width: 1024px) 40vw, 80vw"
            />
            <img
              src="/foto-perfil.png"
              alt="Guilherme Porto"
              width={854}
              height={854}
              fetchPriority="high"
              decoding="async"
              className="pointer-events-none relative z-10 mx-auto -mt-[26vw] h-auto w-[80%] max-w-105 lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[97%] lg:w-auto lg:max-w-none lg:-translate-x-1/2"
            />
          </picture>

          {/* Conteúdo inferior: intro à esquerda, stats à direita */}
          <div className="grid grid-cols-1 gap-8 pb-8 pt-6 lg:min-h-[26vw] lg:grid-cols-[minmax(0,1fr)_minmax(0,30%)_minmax(0,1fr)] lg:gap-6 lg:pb-10 lg:pt-1 2xl:min-h-95">
            <div className="animate-fade-up max-w-110 [animation-delay:150ms]">
              <h2 className="font-display text-4xl uppercase leading-[1.08] tracking-wide sm:text-5xl lg:text-[3.75rem]">
                Guilherme
                <br />
                Porto
              </h2>
              <p className="mt-3 text-lg font-bold text-primary-bright lg:text-xl">{t.hero.role}</p>
              <p className="mt-4 max-w-95 text-sm leading-relaxed text-muted">
                {t.hero.description}
              </p>
            </div>

            {/* espaço central reservado para a foto no desktop */}
            <div className="hidden lg:block" />

            <div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-6 lg:flex lg:flex-col lg:items-end lg:justify-center lg:gap-5 lg:border-t-0 lg:pt-2">
              {t.hero.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  style={{ animationDelay: `${250 + index * 100}ms` }}
                  className="animate-fade-up lg:w-full lg:max-w-66 lg:border-b lg:border-white/25 lg:pb-4"
                >
                  <div className="flex flex-col items-center gap-1.5 lg:flex-row lg:justify-end lg:gap-4">
                    <span className="text-3xl font-extrabold leading-none text-primary-bright sm:text-4xl lg:text-6xl">
                      {stat.value}
                    </span>
                    <span className="whitespace-pre-line text-center text-[10px] font-bold uppercase tracking-wider leading-tight sm:text-[11px] lg:w-24 lg:text-left">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
