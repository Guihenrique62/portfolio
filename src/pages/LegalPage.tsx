import { legal } from '../data/legal'
import { useLanguage } from '../i18n/LanguageContext'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Header, MAIN_ID } from '../components/Header'
import { SectionTitle } from '../components/SectionTitle'

const slug = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

/**
 * Páginas legais ("/privacidade", "/termos" e equivalentes em /en): título,
 * data de atualização, índice com âncoras e seções em texto corrido.
 */
export function LegalPage({ doc: kind }: { doc: 'privacy' | 'terms' }) {
  const { t, lang, linkTo } = useLanguage()
  const doc = legal[lang][kind]
  const titleId = `${kind}-titulo`

  return (
    <>
      <Header />
      <main id={MAIN_ID} tabIndex={-1}>
        <article className="pb-16 pt-28 md:pb-[97px] md:pt-[150px]" aria-labelledby={titleId}>
          <div className="container-site">
          <div className="flex flex-col gap-8 md:max-w-[860px]">
            <header className="flex flex-col gap-5">
              <Button
                {...linkTo('home')}
                variant="outline"
                size="custom"
                className="w-fit gap-2 px-6 py-3 text-base font-semibold"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
                </svg>
                {t.legalPage.backLabel}
              </Button>
              <SectionTitle as="h1" text={doc.title} />
              <span id={titleId} className="sr-only">
                {doc.title.replace(/[{}]/g, '')}
              </span>
              <p className="text-sm text-muted-strong">{doc.updated}</p>
              <p className="text-body-lg text-slate">{doc.intro}</p>
            </header>

            <nav aria-label={t.legalPage.contentsLabel} className="rounded-card bg-surface p-6">
              <p className="mb-3 font-semibold text-ink">{t.legalPage.contentsLabel}</p>
              <ol className="flex flex-col gap-2 text-base">
                {doc.sections.map((section) => (
                  <li key={section.heading}>
                    <a href={`#${slug(section.heading)}`} className="text-primary underline-offset-4 hover:underline">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {doc.sections.map((section) => (
              <section key={section.heading} aria-labelledby={slug(section.heading)} className="flex flex-col gap-3">
                <h2 id={slug(section.heading)} className="text-2xl font-semibold text-slate md:text-[1.75rem]">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-slate md:text-lg">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="flex list-disc flex-col gap-2 pl-6 text-base leading-relaxed text-slate marker:text-primary md:text-lg">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
