import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

export function Process() {
  const { t } = useLanguage()
  const steps = t.process.steps

  return (
    <div id="processo">
      <Reveal as="h2" className="text-xl font-extrabold tracking-wide">
        {t.process.title}
      </Reveal>
      <ol className="mt-8">
        {steps.map((step, index) => (
          <Reveal as="li" key={step.number} delay={index * 110} className="group flex gap-5">
            <span className="w-10 shrink-0 pt-1 text-right text-3xl font-extrabold text-primary-bright lg:w-14 lg:text-4xl">
              {step.number}
            </span>
            <div className="flex flex-col items-center">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/60 text-primary-bright transition-all duration-300 group-hover:scale-110 group-hover:border-primary">
                <step.icon className="size-5" strokeWidth={1.5} />
              </span>
              {index < steps.length - 1 && <span className="w-px flex-1 bg-primary/40" />}
            </div>
            <div className={index < steps.length - 1 ? 'pb-9' : ''}>
              <h3 className="pt-2 text-sm font-bold uppercase tracking-wider text-primary-bright">
                {step.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
