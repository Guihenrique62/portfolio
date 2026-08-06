// Pré-render da home: gera um bundle SSR do App, renderiza para HTML e injeta
// o resultado dentro de <div id="root"></div> no dist/index.html já buildado.
// Assim o Googlebot recebe o conteúdo textual (H1, textos, nome) direto no HTML,
// sem depender da execução de JavaScript. Não usa navegador headless.
import { build } from 'vite'
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const ssrOutDir = resolve(root, 'dist-ssr')
const indexPath = resolve(root, 'dist/index.html')

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

// 2. Renderiza o App para string.
const { render } = await import(pathToFileURL(resolve(ssrOutDir, 'entry-server.mjs')).href)
const appHtml = render()

// 3. Injeta no HTML já buildado pelo cliente.
const marker = '<div id="root"></div>'
let html = readFileSync(indexPath, 'utf8')
if (!html.includes(marker)) {
  throw new Error(`Marcador ${marker} não encontrado em dist/index.html`)
}
html = html.replace(marker, `<div id="root">${appHtml}</div>`)
writeFileSync(indexPath, html)

// 4. Limpa o bundle SSR temporário.
rmSync(ssrOutDir, { recursive: true, force: true })

console.log('✓ Home pré-renderizada em dist/index.html')
