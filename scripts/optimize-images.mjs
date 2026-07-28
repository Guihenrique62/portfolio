import sharp from 'sharp'
import { stat } from 'node:fs/promises'

const source = 'public/foto-perfil.png'

const outputs = [
  { file: 'public/foto-perfil.avif', width: 854, format: 'avif', options: { quality: 55 } },
  { file: 'public/foto-perfil-480.avif', width: 480, format: 'avif', options: { quality: 55 } },
  { file: 'public/foto-perfil.webp', width: 854, format: 'webp', options: { quality: 75 } },
  { file: 'public/foto-perfil-480.webp', width: 480, format: 'webp', options: { quality: 75 } },
]

for (const { file, width, format, options } of outputs) {
  await sharp(source).resize(width, width)[format](options).toFile(file)
  const { size } = await stat(file)
  console.log(`${file} — ${(size / 1024).toFixed(1)} KiB`)
}
