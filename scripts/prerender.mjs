// Pré-render nos dois idiomas: gera um bundle SSR do App, renderiza o HTML de
// cada idioma e injeta no dist/index.html já buildado, ajustando <html lang>,
// title, description, canonical, Open Graph, Twitter e JSON-LD por idioma.
// Saída: dist/index.html (pt-BR) e dist/en/index.html (en). Também gera o
// sitemap.xml com lastmod. Não usa navegador headless.
import { build } from 'vite'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ssrOutDir = resolve(root, 'dist-ssr')
const indexPath = resolve(root, 'dist/index.html')
const siteUrl = 'https://guilherme-porto.dev.br/'

// 1. Bundle SSR isolado (não emite assets do cliente).
await build({
  root,
  logLevel: 'error',
  build: {
    ssr: resolve(root, 'src/entry-server.tsx'),
    outDir: 'dist-ssr',
    emptyOutDir: true,
    rollupOptions: {
      output: { entryFileNames: 'entry-server.mjs', format: 'es' },
    },
  },
})

const { render, getSeo, pathFor } = await import(
  pathToFileURL(resolve(ssrOutDir, 'entry-server.mjs')).href
)

let template = readFileSync(indexPath, 'utf8')

// CSS crítico = todo o CSS (9 KB gzip): inline no HTML elimina a requisição
// render-blocking na primeira visita. O arquivo continua em dist/assets.
template = template.replace(
  /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/,
  (_, href) => `<style>${readFileSync(resolve(root, 'dist', href.slice(1)), 'utf8')}</style>`,
)
const marker = '<div id="root"></div>'
if (!template.includes(marker)) {
  throw new Error(`Marcador ${marker} não encontrado em dist/index.html`)
}

const escapeAttr = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

/** Substitui o atributo `content`/`href` de uma tag identificada pelo seletor. */
function setTag(html, tagRegex, attr, value) {
  if (!tagRegex.test(html)) throw new Error(`Tag não encontrada: ${tagRegex}`)
  return html.replace(tagRegex, (tag) =>
    tag.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${escapeAttr(value)}"`),
  )
}

const meta = (name) => new RegExp(`<meta\\s+name="${name}"[^>]*>`)
const prop = (name) => new RegExp(`<meta\\s+property="${name}"[^>]*>`)

function buildHtml(lang, route) {
  const seo = getSeo(lang, route)
  let html = template

  html = html.replace(/<html lang="[^"]*">/, `<html lang="${seo.htmlLang}" data-route="${route}">`)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(seo.title)}</title>`)
  html = setTag(html, meta('description'), 'content', seo.description)
  html = setTag(html, meta('keywords'), 'content', seo.keywords)
  html = setTag(html, /<link\s+rel="canonical"[^>]*>/, 'href', seo.canonical)
  html = setTag(html, /<link\s+rel="alternate"\s+hreflang="pt-BR"[^>]*>/, 'href', seo.alternates.pt)
  html = setTag(html, /<link\s+rel="alternate"\s+hreflang="en"[^>]*>/, 'href', seo.alternates.en)
  html = setTag(html, /<link\s+rel="alternate"\s+hreflang="x-default"[^>]*>/, 'href', seo.alternates.pt)
  html = setTag(html, prop('og:url'), 'content', seo.url)
  html = setTag(html, prop('og:title'), 'content', seo.title)
  html = setTag(html, prop('og:description'), 'content', seo.description)
  html = setTag(html, prop('og:locale'), 'content', seo.ogLocale)
  html = setTag(html, prop('og:locale:alternate'), 'content', seo.ogLocaleAlternate)
  html = setTag(html, prop('og:image:alt'), 'content', seo.ogImageAlt)
  html = setTag(html, meta('twitter:title'), 'content', seo.title)
  html = setTag(html, meta('twitter:description'), 'content', seo.description)

  const jsonLd = JSON.stringify(seo.jsonLd).replaceAll('</', '<\\/')
  html = html.replace(
    /<script type="application\/ld\+json" id="seo-jsonld">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="seo-jsonld">${jsonLd}</script>`,
  )

  return html.replace(marker, `<div id="root">${render(lang, route)}</div>`)
}

// 2. Gera um HTML estático por página × idioma.
const pages = []
for (const route of ['home', 'projects']) {
  for (const lang of ['pt', 'en']) {
    const path = pathFor(lang, route) // "/", "/en", "/projetos", "/en/projects"
    const dir = resolve(root, 'dist', path.replace(/^\//, ''))
    mkdirSync(dir, { recursive: true })
    writeFileSync(resolve(dir, 'index.html'), buildHtml(lang, route))
    pages.push({ route, lang, path })
  }
}

// 3. Sitemap com lastmod = data do build e alternates por página.
const lastmod = new Date().toISOString().slice(0, 10)
const abs = (path) => new URL(path.replace(/^\//, ''), siteUrl).href
const entries = pages
  .map(({ route, path }) => {
    const pt = abs(pathFor('pt', route))
    const en = abs(pathFor('en', route))
    return `  <url>
    <loc>${abs(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${pt}" />
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${pt}" />
  </url>`
  })
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`
writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap)

// 4. Limpa o bundle SSR temporário.
rmSync(ssrOutDir, { recursive: true, force: true })

console.log(`✓ Pré-render: ${pages.map((p) => p.path).join(", ")} + sitemap.xml`)
