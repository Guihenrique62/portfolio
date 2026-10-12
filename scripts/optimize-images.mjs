import sharp from 'sharp'
import { mkdir, stat } from 'node:fs/promises'
import { dirname } from 'node:path'
import { images } from './images.config.mjs'

const defaultQuality = { avif: 55, webp: 75 }

for (const { source, out, widths, square = false, quality = {} } of images) {
  await mkdir(dirname(out), { recursive: true })
  const q = { ...defaultQuality, ...quality }
  const largest = Math.max(...widths)

  for (const width of widths) {
    for (const format of ['avif', 'webp']) {
      const targets = [`${out}-${width}.${format}`]
      if (width === largest) targets.push(`${out}.${format}`)

      for (const file of targets) {
        await sharp(source)
          .resize(width, square ? width : null, { withoutEnlargement: true })
          [format]({ quality: q[format] })
          .toFile(file)
        const { size } = await stat(file)
        console.log(`${file} — ${(size / 1024).toFixed(1)} KiB`)
      }
    }
  }
}
