import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { bundle } from '@/lib/server/bundle'
import { normalizeSlug } from './normalize'

const ROOT = process.cwd()

export async function loadContentFile(type, slug) {
  if (Array.isArray(slug)) slug = slug.join('/')

  const basePath = path.join(ROOT, 'data', type)

  const mdxPath = path.join(basePath, `${slug}.mdx`)
  const mdPath = path.join(basePath, `${slug}.md`)

  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null

  if (!filePath) return null

  const source = fs.readFileSync(filePath, 'utf8')

  const parsed = matter(source)
  const { code } = await bundle(parsed.content)

  return {
    filePath,
    slug: normalizeSlug(slug),
    source,
    code,
    frontMatter: parsed.data, // 👈 FIX
  }
}
