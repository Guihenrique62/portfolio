import { content, links, siteUrl, type Lang } from '../data/content'
import { pathFor, type Route } from '../router'

/**
 * Fonte única das metas de SEO por idioma. Usada pelo pré-render
 * (scripts/prerender.mjs, via entry-server) e pela troca de idioma no cliente
 * (LanguageContext.applyDocumentLang).
 */
export interface Seo {
  lang: Lang
  route: Route
  htmlLang: string
  url: string
  /** URLs equivalentes por idioma (hreflang). */
  alternates: { pt: string; en: string }
  canonical: string
  title: string
  description: string
  keywords: string
  ogLocale: string
  ogLocaleAlternate: string
  ogImage: string
  ogImageAlt: string
  jsonLd: Record<string, unknown>
}

const keywords: Record<Lang, string> = {
  pt: 'desenvolvedor, desenvolvedor web, criação de sites, web design, sistemas web, desenvolvedor automação, automação de processos, agentes de IA, software engineer, landing pages, desenvolvedor full stack, Guilherme Porto',
  en: 'web developer, website creation, web design, web systems, automation developer, process automation, AI agents, software engineer, landing pages, full stack developer, Guilherme Porto',
}

const knowsAbout: Record<Lang, string[]> = {
  pt: [
    'Desenvolvimento web',
    'Criação de sites',
    'Web design',
    'Landing pages',
    'Sistemas web',
    'Automação de processos',
    'Agentes de IA',
    'UI/UX',
    'React',
    'Node.js',
    'Python',
  ],
  en: [
    'Web development',
    'Website creation',
    'Web design',
    'Landing pages',
    'Web systems',
    'Process automation',
    'AI agents',
    'UI/UX',
    'React',
    'Node.js',
    'Python',
  ],
}

const jobTitle: Record<Lang, string> = {
  pt: 'Desenvolvedor Web | Software Engineer',
  en: 'Web Developer | Software Engineer',
}

const serviceName: Record<Lang, string> = {
  pt: 'Guilherme Porto — Desenvolvimento Web e Automações',
  en: 'Guilherme Porto — Web Development & Automation',
}

const projectsListName: Record<Lang, string> = {
  pt: 'Projetos selecionados',
  en: 'Selected projects',
}

const absolute = (path: string) => new URL(path.replace(/^\//, ''), siteUrl).href

export function getSeo(lang: Lang, route: Route = 'home'): Seo {
  const t = content[lang]
  const url = absolute(pathFor(lang, route))
  const alternates = { pt: absolute(pathFor('pt', route)), en: absolute(pathFor('en', route)) }
  const ids = {
    website: `${siteUrl}#website`,
    webpage: `${url}#webpage`,
    person: `${siteUrl}#person`,
    service: `${siteUrl}#service`,
    projects: `${url}#projects`,
    breadcrumb: `${url}#breadcrumb`,
  }
  const isProjects = route === 'projects'
  const pageTitle = isProjects ? t.projectsPage.metaTitle : t.meta.title
  const pageDescription = isProjects ? t.projectsPage.metaDescription : t.meta.description
  // Home lista só os destaques; a página de projetos lista todos.
  const listedProjects = isProjects ? t.projects.items : t.projects.items.filter((p) => p.featured)
  const photo = absolute('/hero/foto-perfil-1170.webp')
  const ogImage = absolute('/og-image.png')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': ids.website,
        url: siteUrl,
        name: serviceName[lang],
        inLanguage: t.meta.htmlLang,
        publisher: { '@id': ids.person },
        author: { '@id': ids.person },
      },
      {
        '@type': isProjects ? 'CollectionPage' : 'WebPage',
        '@id': ids.webpage,
        url,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { '@id': ids.website },
        about: { '@id': ids.person },
        primaryImageOfPage: photo,
        inLanguage: t.meta.htmlLang,
        ...(isProjects ? { mainEntity: { '@id': ids.projects }, breadcrumb: { '@id': ids.breadcrumb } } : {}),
      },
      {
        '@type': 'Person',
        '@id': ids.person,
        name: 'Guilherme Porto',
        alternateName: 'Guilherme Henrique Porto',
        url: siteUrl,
        mainEntityOfPage: { '@id': ids.webpage },
        image: photo,
        jobTitle: jobTitle[lang],
        email: `mailto:${links.email}`,
        telephone: links.phoneHref,
        worksFor: { '@id': ids.service },
        knowsAbout: knowsAbout[lang],
        sameAs: [links.instagram, links.linkedin, links.tiktok, links.github],
      },
      {
        '@type': 'ProfessionalService',
        '@id': ids.service,
        name: serviceName[lang],
        url: siteUrl,
        image: ogImage,
        founder: { '@id': ids.person },
        description: t.meta.description,
        areaServed: lang === 'pt' ? 'Brasil' : 'Brazil',
        telephone: links.phoneHref,
        email: links.email,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.services.title.replace(/[{}]/g, ''),
          itemListElement: t.services.items.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              provider: { '@id': ids.person },
            },
          })),
        },
      },
      {
        '@type': 'ItemList',
        '@id': ids.projects,
        name: projectsListName[lang],
        itemListElement: listedProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.name,
            url: project.url,
            image: project.image ? absolute(`${project.image}.webp`) : undefined,
            description: project.modalDescription ?? project.description,
            creator: { '@id': ids.person },
            inLanguage: t.meta.htmlLang,
          },
        })),
      },
      ...(isProjects
        ? [
            {
              '@type': 'BreadcrumbList',
              '@id': ids.breadcrumb,
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: absolute(pathFor(lang, 'home')) },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: t.projectsPage.title.replace(/[{}]/g, ''),
                  item: url,
                },
              ],
            },
          ]
        : []),
    ],
  }

  return {
    lang,
    route,
    alternates,
    htmlLang: t.meta.htmlLang,
    url,
    canonical: url,
    title: pageTitle,
    description: pageDescription,
    keywords: keywords[lang],
    ogLocale: lang === 'en' ? 'en_US' : 'pt_BR',
    ogLocaleAlternate: lang === 'en' ? 'pt_BR' : 'en_US',
    ogImage,
    ogImageAlt:
      lang === 'en'
        ? 'Guilherme Porto — Web Developer & Automation Engineer'
        : 'Guilherme Porto — Desenvolvedor Web e Automações',
    jsonLd,
  }
}

/** Atualiza as metas do documento no cliente (troca de idioma sem reload). */
export function applySeo(seo: Seo) {
  const set = (selector: string, attr: string, value: string) =>
    document.querySelector(selector)?.setAttribute(attr, value)

  document.documentElement.lang = seo.htmlLang
  document.title = seo.title
  set('meta[name="description"]', 'content', seo.description)
  set('meta[name="keywords"]', 'content', seo.keywords)
  set('link[rel="canonical"]', 'href', seo.canonical)
  set('link[rel="alternate"][hreflang="pt-BR"]', 'href', seo.alternates.pt)
  set('link[rel="alternate"][hreflang="en"]', 'href', seo.alternates.en)
  set('link[rel="alternate"][hreflang="x-default"]', 'href', seo.alternates.pt)
  set('meta[property="og:url"]', 'content', seo.url)
  set('meta[property="og:title"]', 'content', seo.title)
  set('meta[property="og:description"]', 'content', seo.description)
  set('meta[property="og:locale"]', 'content', seo.ogLocale)
  set('meta[property="og:locale:alternate"]', 'content', seo.ogLocaleAlternate)
  set('meta[property="og:image:alt"]', 'content', seo.ogImageAlt)
  set('meta[name="twitter:title"]', 'content', seo.title)
  set('meta[name="twitter:description"]', 'content', seo.description)
  const script = document.getElementById('seo-jsonld')
  if (script) script.textContent = JSON.stringify(seo.jsonLd)
}
