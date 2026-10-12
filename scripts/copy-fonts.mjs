// Copia os woff2 (subset latin) do @fontsource para public/fonts/ com nomes
// estáveis, para permitir @font-face próprio, preload no index.html e cache
// imutável na Vercel. Rodar após atualizar as fontes: `npm run fonts`.
import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = resolve(root, 'public/fonts')
mkdirSync(out, { recursive: true })

const fonts = [
  ['poppins', [400, 500, 600, 700]],
  ['urbanist', [500, 600, 700]],
]

for (const [family, weights] of fonts) {
  for (const weight of weights) {
    const file = `${family}-latin-${weight}-normal.woff2`
    copyFileSync(resolve(root, 'node_modules/@fontsource', family, 'files', file), resolve(out, file))
    console.log(`public/fonts/${file}`)
  }
}
