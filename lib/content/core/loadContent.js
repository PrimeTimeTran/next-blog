import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundle } from '@/lib/server/bundle'
import { ROOT } from '@/lib/content/core/constants'

export async function loadContent(type, slug) {
  if (Array.isArray(slug)) slug = slug.join('/')

  const base = path.join(ROOT, 'data', type)

  const mdx = path.join(base, `${slug}.mdx`)
  const md = path.join(base, `${slug}.md`)

  const filePath = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null

  if (!filePath) return null

  const source = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(source)

  const { code } = await bundle(parsed.content)

  return {
    type,
    slug,
    source,
    filePath,
    mdxSource: code,
    frontMatter: parsed.data || {},
  }
}
