import sharp from 'sharp'
import { stat } from 'node:fs/promises'

const jobs = [
  {
    source: 'public/foto-perfil.png',
    // Foto de perfil é quadrada: redimensiona para width x width
    square: true,
    outputs: [
      { file: 'public/foto-perfil.avif', width: 854, format: 'avif', options: { quality: 55 } },
      { file: 'public/foto-perfil-480.avif', width: 480, format: 'avif', options: { quality: 55 } },
      { file: 'public/foto-perfil.webp', width: 854, format: 'webp', options: { quality: 75 } },
      { file: 'public/foto-perfil-480.webp', width: 480, format: 'webp', options: { quality: 75 } },
    ],
  },
  {
    source: 'public/projects/cozinha-bussmeyer.png',
    outputs: [
      { file: 'public/projects/cozinha-bussmeyer.avif', width: 960, format: 'avif', options: { quality: 55 } },
      { file: 'public/projects/cozinha-bussmeyer-480.avif', width: 480, format: 'avif', options: { quality: 55 } },
      { file: 'public/projects/cozinha-bussmeyer.webp', width: 960, format: 'webp', options: { quality: 75 } },
      { file: 'public/projects/cozinha-bussmeyer-480.webp', width: 480, format: 'webp', options: { quality: 75 } },
    ],
  },
]

for (const { source, square, outputs } of jobs) {
  for (const { file, width, format, options } of outputs) {
    await sharp(source)
      .resize(width, square ? width : null, { withoutEnlargement: true })
      [format](options)
      .toFile(file)
    const { size } = await stat(file)
    console.log(`${file} — ${(size / 1024).toFixed(1)} KiB`)
  }
}
