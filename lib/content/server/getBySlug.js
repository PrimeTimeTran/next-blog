import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { bundle } from '@/lib/server/bundle'
import { extractTOC } from '@/lib/mdx/extractTOC'

import { ROOT, getContentBySlug } from '@/lib/content/server/helpers'

export const getKbFileBySlug = (slug) => getContentBySlug('kb', slug)
export const getBlogFileBySlug = (slug) => getContentBySlug('blog', slug)

export async function getAuthorBySlug(slug) {
  const filePath = path.join(process.cwd(), 'data/authors', `${slug}.md`)

  const source = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(source)

  return {
    ...data,
    slug,
  }
}

export async function getFileBySlug(slug, type) {
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

export async function getKbItemBySlug(slug) {
  const normalizedSlug = Array.isArray(slug) ? slug.join('/') : slug

  const file = await getKbFileBySlug(normalizedSlug)

  if (!file) return null

  const toc = extractTOC(file.rawSource)
  return {
    toc,
    mdxSource: file.mdxSource,
    frontMatter: file.frontMatter,
  }
}
