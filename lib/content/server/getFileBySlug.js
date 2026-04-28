import fs from 'fs'
import path from 'path'
import { bundle } from '@/lib/server/bundle'

const ROOT = process.cwd()

export async function getFileBySlug(type, slug) {
  if (Array.isArray(slug)) slug = slug.join('/')

  const basePath = path.join(ROOT, 'data', type)

  const mdxPath = path.join(basePath, `${slug}.mdx`)
  const mdPath = path.join(basePath, `${slug}.md`)

  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null

  if (!filePath) {
    throw new Error(`[getFileBySlug] Missing file: ${type}/${slug}`)
  }

  const source = fs.readFileSync(filePath, 'utf8')

  return bundle(source)
}
