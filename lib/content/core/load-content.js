import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundle } from '@/lib/content/server/bundle'
import { ROOT } from '@/lib/content/core/constants'
import { log } from '@/lib/debug/logger'

export async function loadContent(type, slug) {
  if (Array.isArray(slug)) slug = slug.join('/')

  const base = path.join(ROOT, 'data', type)

  const mdx = path.join(base, `${slug}.mdx`)
  const md = path.join(base, `${slug}.md`)

  const filePath = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null
  if (!filePath) return null

  const source = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(source)
  log.bundle('6. Load content: ', slug, base)
  log.bundle('RAW FILE LENGTH:', source.length)
  log.bundle('PARSED CONTENT LENGTH:', parsed.content.length)
  log.bundle('HAS TABGROUP RAW:', source.includes('tabgroup'))
  log.bundle('HAS TABGROUP PARSED:', parsed.content.includes('tabgroup'))
  const { code } = await bundle(parsed.content, slug)

  return {
    type,
    slug,
    source,
    filePath,
    mdxSource: code,
    frontMatter: parsed.data || {},
  }
}
