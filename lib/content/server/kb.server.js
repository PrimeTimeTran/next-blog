import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'

import { bundle } from '@/lib/server/bundle'
import { extractTOC } from '@/lib/mdx/extractTOC'
import { normalizeFile } from '@/lib/content/core/normalize'

const ROOT = process.cwd()

export async function getKbFileBySlug(slug) {
  if (Array.isArray(slug)) {
    slug = slug.join('/')
  }

  const basePath = path.join(ROOT, 'data/kb')

  const mdxPath = path.join(basePath, `${slug}.mdx`)
  const mdPath = path.join(basePath, `${slug}.md`)

  const exists = fs.existsSync(mdxPath) || fs.existsSync(mdPath)

  if (!exists) {
    console.warn(`[getKbFileBySlug] Missing file: kb/${slug}`)
    return null
  }

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath
  const source = fs.readFileSync(filePath, 'utf8')

  const { code, frontmatter } = await bundle(source)

  return {
    mdxSource: code,
    frontMatter: {
      ...(frontmatter || {}),
      slug: normalizeFile(filePath),
      readingTime: readingTime(code),
    },
    rawSource: source, // 👈 IMPORTANT for TOC step later
  }
}

export async function resolveKbItem(slug) {
  const file = await getKbFileBySlug(slug)

  if (!file) return null

  const toc = extractTOC(file.rawSource)

  return {
    mdxSource: file.mdxSource,
    frontMatter: file.frontMatter,
    toc,
  }
}
