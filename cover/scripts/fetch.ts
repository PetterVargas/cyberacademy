import 'dotenv/config'
import { existsSync } from 'node:fs'
import fs from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'
import { ofetch } from 'ofetch'

interface Photo {
  id: string
  description: string | null
  user: {
    name: string
    links: { html: string }
  }
  links: { html: string }
  urls: { full: string }
}

const BASE_URL = 'https://api.unsplash.com'
const DIR_DOWNLOADS = 'downloads'
const DIR_PUBLIC = 'public'
const USE_CACHE = true
const PER_PAGE = 30

const { UNSPLASH_ACCESS_KEY, UNSPLASH_COLLECTION_ID } = process.env

if (!UNSPLASH_ACCESS_KEY)
  throw new Error('UNSPLASH_ACCESS_KEY is required')
if (!UNSPLASH_COLLECTION_ID)
  throw new Error('UNSPLASH_COLLECTION_ID is required')

await fs.mkdir(DIR_DOWNLOADS, { recursive: true })
await fs.mkdir(DIR_PUBLIC, { recursive: true })

const cachePath = join(DIR_DOWNLOADS, 'raw.json')
const photos: Photo[] = []

if (USE_CACHE && existsSync(cachePath)) {
  console.log('Reading cache...')
  photos.push(...JSON.parse(await fs.readFile(cachePath, 'utf8')))
}
else {
  for (let page = 1; ; page++) {
    console.log('Page:', page)
    const newPhotos = await ofetch<Photo[]>(`${BASE_URL}/collections/${UNSPLASH_COLLECTION_ID}/photos`, {
      query: { client_id: UNSPLASH_ACCESS_KEY, per_page: PER_PAGE, page },
    })
    photos.push(...newPhotos)
    if (newPhotos.length < PER_PAGE)
      break
  }
  await fs.writeFile(cachePath, JSON.stringify(photos, null, 2), 'utf8')
}

console.log('Collection:', `https://unsplash.com/collections/${UNSPLASH_COLLECTION_ID}`)
console.log('Total photos:', photos.length)

for (const photo of photos) {
  await fs.writeFile(join(DIR_PUBLIC, `${photo.id}.md`), [
    `Photo by [${photo.user.name}](${photo.user.links.html})`,
    '',
    photo.description ?? '',
    '',
    `[![${photo.id}](./${photo.id}.webp)](${photo.links.html})`,
  ].join('\n'), 'utf8')
}

for (const photo of photos) {
  const target = join(DIR_DOWNLOADS, `${photo.id}.png`)
  if (existsSync(target)) {
    console.log(`Skip: ${photo.id}`)
    continue
  }
  console.log(`Download: ${photo.id}`)
  try {
    const blob = await ofetch(photo.urls.full, { responseType: 'blob' })
    await fs.writeFile(target, Buffer.from(await blob.arrayBuffer()))
  }
  catch (error) {
    console.error(`Failed to download: ${photo.id}`)
    console.error(error)
  }
}
