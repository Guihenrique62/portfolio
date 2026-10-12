/**
 * Lista declarativa de imagens otimizadas pelo scripts/optimize-images.mjs.
 *
 * - `source`: arquivo original (assets-src/ ou public/).
 * - `out`: caminho base de saída sem extensão; cada largura vira
 *   `<out>-<w>.avif` e `<out>-<w>.webp` (a maior largura também é gerada
 *   sem sufixo, para o `src` de fallback).
 * - `widths`: larguras finais em px (1× e 2× do tamanho de layout).
 * - `square`: força recorte quadrado (foto de perfil).
 * - `quality`: sobrescreve a qualidade padrão (avif 55 / webp 75).
 */
export const images = [
  // Hero — 585px no layout de 1440 (node 9:8), 2× para telas retina.
  {
    source: 'assets-src/hero/foto-perfil.png',
    out: 'public/hero/foto-perfil',
    widths: [400, 585, 800, 1170],
    square: true,
  },
  // "Por que me contratar" — 524×488 no layout.
  {
    source: 'assets-src/about/foto-contratar.png',
    out: 'public/about/foto-contratar',
    widths: [400, 524, 1048],
  },
  // Textura das seções escuras (usada a 20% de opacidade → qualidade baixa).
  {
    source: 'assets-src/bg/textura-escura.jpg',
    out: 'public/bg/textura-escura',
    widths: [960, 1440, 2160],
    quality: { avif: 35, webp: 55 },
  },
  // Mockups dos cards de serviço — ~415px no layout.
  { source: 'assets-src/services/uiux.jpg', out: 'public/services/uiux', widths: [415, 830] },
  { source: 'assets-src/services/sistemas.jpg', out: 'public/services/sistemas', widths: [415, 830] },
  { source: 'assets-src/services/web.jpg', out: 'public/services/web', widths: [415, 830] },
  // Capas dos projetos — 633×371 no layout (2× = 1266).
  { source: 'assets-src/projects/spider-man.png', out: 'public/projects/spider-man', widths: [480, 640, 1266] },
  { source: 'assets-src/projects/lumina-detail.png', out: 'public/projects/lumina-detail', widths: [480, 640, 1266] },
  {
    source: 'assets-src/projects/cozinha-bussmeyer.png',
    out: 'public/projects/cozinha-bussmeyer',
    widths: [480, 640, 1266],
  },
]
