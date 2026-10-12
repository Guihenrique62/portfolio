import { renderToString } from 'react-dom/server'
import App from './App'
import type { Lang } from './data/content'
import type { Route } from './router'

export { getSeo } from './seo/meta'
export { pathFor, routeSlugs } from './router'
export type { Lang, Route }

/**
 * Renderiza o App para HTML no build (pré-render), no idioma e rota pedidos.
 * Usado por scripts/prerender.mjs para gerar os HTMLs estáticos de cada
 * página/idioma, de modo que crawlers vejam o texto sem executar JS.
 */
export function render(lang: Lang, route: Route = 'home'): string {
  return renderToString(<App initialLang={lang} initialRoute={route} />)
}
