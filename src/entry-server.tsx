import { renderToString } from 'react-dom/server'
import App from './App'

/**
 * Renderiza o App para uma string de HTML no build (pré-render).
 * Usado por scripts/prerender.mjs para injetar o conteúdo da home no
 * dist/index.html, de modo que crawlers vejam o texto sem executar JS.
 */
export function render(): string {
  return renderToString(<App />)
}
