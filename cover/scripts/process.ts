import { existsSync } from 'node:fs'
import fs from 'node:fs/promises'
import { basename, join } from 'node:path'
import fg from 'fast-glob'
import sharp from 'sharp'

const DIR_DOWNLOADS = 'downloads'
const DIR_PUBLIC = 'public'

const files = await fg(`${DIR_DOWNLOADS}/*.png`, { onlyFiles: true })

await fs.mkdir(DIR_PUBLIC, { recursive: true })
await fs.writeFile(
  join(DIR_PUBLIC, 'index.json'),
  JSON.stringify(files.map(file => basename(file, '.png')), null, 2),
  'utf8',
)

for (const file of files) {
  const id = basename(file, '.png')
  const target = join(DIR_PUBLIC, `${id}.webp`)
  if (existsSync(target)) {
    console.log('Skipping:', target)
    continue
  }

  const info = await sharp(file)
    .resize(1920, 1080)
    .toFormat('webp', { quality: 80 })
    .toFile(target)

  console.log('Processed:', target, `(${bytesToHumanReadable(info.size)})`)
}

function bytesToHumanReadable(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB']
  let i = 0
  while (bytes > 1024) {
    bytes /= 1024
    i++
  }
  return `${bytes.toFixed(2)} ${units[i]}`
}
