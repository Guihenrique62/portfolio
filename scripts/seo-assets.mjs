// Gera os assets de SEO/identidade a partir do design system do protótipo:
//   public/og-image.png        1200×630 (Open Graph / Twitter)
//   public/favicon.svg         monograma "GP"
//   public/favicon.ico         32×32 (PNG embutido em contêiner ICO)
//   public/apple-touch-icon.png 180×180
//   public/icon-192.png, public/icon-512.png (manifest)
//   public/site.webmanifest
// Rodar sob demanda: `npm run assets:seo`. Usa satori (texto com as fontes
// Poppins/Urbanist do @fontsource) + resvg (SVG → PNG) + sharp (otimização).
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pub = (file) => resolve(root, 'public', file)
const font = (pkg, file) => readFileSync(resolve(root, 'node_modules/@fontsource', pkg, 'files', file))

const BLUE = '#2563EB'
const INK = '#171717'
const SLATE = '#344054'
const MUTED = '#667085'

const fonts = [
  { name: 'Urbanist', data: font('urbanist', 'urbanist-latin-700-normal.woff'), weight: 700, style: 'normal' },
  { name: 'Urbanist', data: font('urbanist', 'urbanist-latin-600-normal.woff'), weight: 600, style: 'normal' },
  { name: 'Poppins', data: font('poppins', 'poppins-latin-500-normal.woff'), weight: 500, style: 'normal' },
  { name: 'Poppins', data: font('poppins', 'poppins-latin-400-normal.woff'), weight: 400, style: 'normal' },
]

/** Elemento no formato aceito pelo satori (sem JSX). */
const h = (type, props = {}, ...children) => ({
  type,
  props: { ...props, children: children.length === 1 ? children[0] : children },
})

const toPng = (svg, width) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng()

/* ----------------------------------------------------------------------------
 * OG image 1200×630
 * ------------------------------------------------------------------------- */
const photoPng = await sharp(resolve(root, 'assets-src/hero/foto-perfil.png'))
  .resize(560, 560)
  .png()
  .toBuffer()
const photoDataUrl = `data:image/png;base64,${photoPng.toString('base64')}`

const og = h(
  'div',
  {
    style: {
      width: 1200,
      height: 630,
      display: 'flex',
      background: '#ffffff',
      fontFamily: 'Poppins',
      position: 'relative',
      overflow: 'hidden',
    },
  },
  // Semicírculo azul + foto (como no hero)
  h('div', {
    style: {
      position: 'absolute',
      right: -40,
      bottom: -300,
      width: 700,
      height: 700,
      borderRadius: 350,
      background: BLUE,
    },
  }),
  h('img', {
    src: photoDataUrl,
    width: 560,
    height: 560,
    style: { position: 'absolute', right: 30, bottom: 0 },
  }),
  // Texto
  h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 0 0 80px',
        width: 640,
        height: 630,
      },
    },
    h(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 96,
          height: 44,
          borderRadius: 40,
          border: `2px solid ${INK}`,
          color: INK,
          fontSize: 20,
          fontWeight: 500,
          marginBottom: 28,
        },
      },
      'Olá!',
    ),
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column', fontFamily: 'Urbanist', fontWeight: 600, fontSize: 76, lineHeight: 1, color: INK, letterSpacing: -1.5 } },
      h('span', {}, 'Guilherme'),
      h('span', { style: { color: BLUE } }, 'Porto'),
    ),
    h(
      'div',
      { style: { marginTop: 28, fontSize: 30, fontWeight: 500, color: SLATE, letterSpacing: -0.5 } },
      'Desenvolvedor Web e Automações',
    ),
    h(
      'div',
      { style: { marginTop: 14, fontSize: 22, fontWeight: 400, color: MUTED } },
      'Sites · Sistemas web · Agentes de IA',
    ),
    h(
      'div',
      { style: { marginTop: 44, fontSize: 22, fontWeight: 500, color: BLUE } },
      'guilherme-porto.dev.br',
    ),
  ),
)

const ogSvg = await satori(og, { width: 1200, height: 630, fonts })
const ogPng = await sharp(toPng(ogSvg, 1200)).png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer()
writeFileSync(pub('og-image.png'), ogPng)
console.log(`public/og-image.png — ${(ogPng.length / 1024).toFixed(1)} KiB`)

/* ----------------------------------------------------------------------------
 * Favicon: monograma "GP" em quadrado azul (cantos 22%)
 * ------------------------------------------------------------------------- */
const icon = (size) =>
  h(
    'div',
    {
      style: {
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: BLUE,
        borderRadius: size * 0.22,
        color: '#ffffff',
        fontFamily: 'Urbanist',
        fontWeight: 700,
        fontSize: size * 0.5,
        letterSpacing: -size * 0.02,
      },
    },
    'GP',
  )

const iconSvg = await satori(icon(512), { width: 512, height: 512, fonts })
writeFileSync(pub('favicon.svg'), iconSvg)

for (const [file, size] of [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  const png = await sharp(toPng(iconSvg, size)).png({ compressionLevel: 9 }).toBuffer()
  writeFileSync(pub(file), png)
  console.log(`public/${file} — ${(png.length / 1024).toFixed(1)} KiB`)
}

// favicon.ico: contêiner ICO com um único PNG de 32×32 (formato aceito pelos
// navegadores modernos e pelo Google).
const png32 = await sharp(toPng(iconSvg, 32)).png({ compressionLevel: 9 }).toBuffer()
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0) // reservado
header.writeUInt16LE(1, 2) // tipo: ícone
header.writeUInt16LE(1, 4) // quantidade de imagens
const entry = Buffer.alloc(16)
entry.writeUInt8(32, 0) // largura
entry.writeUInt8(32, 1) // altura
entry.writeUInt8(0, 2) // paleta
entry.writeUInt8(0, 3) // reservado
entry.writeUInt16LE(1, 4) // planos
entry.writeUInt16LE(32, 6) // bits por pixel
entry.writeUInt32LE(png32.length, 8) // tamanho dos dados
entry.writeUInt32LE(22, 12) // offset dos dados (6 + 16)
writeFileSync(pub('favicon.ico'), Buffer.concat([header, entry, png32]))
console.log(`public/favicon.ico — ${((22 + png32.length) / 1024).toFixed(1)} KiB`)

/* ----------------------------------------------------------------------------
 * Manifest
 * ------------------------------------------------------------------------- */
const manifest = {
  name: 'Guilherme Porto — Desenvolvedor Web',
  short_name: 'Guilherme Porto',
  description: 'Criação de sites, sistemas web, automações e agentes de IA.',
  start_url: '/',
  display: 'browser',
  background_color: '#ffffff',
  theme_color: INK,
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
}
writeFileSync(pub('site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n')
console.log('public/site.webmanifest')
