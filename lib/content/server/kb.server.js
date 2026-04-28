import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import { bundle } from '@/lib/mdx/bundle'
import { normalizeFile } from '@/lib/content/core/normalize'

const ROOT = process.cwd()

const KB_DIR = path.join(ROOT, 'data/kb')

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

import { remark } from 'remark'
import remarkParse from 'remark-parse'

export function extractTOC(source) {
  const tree = remark().use(remarkParse).parse(source)

  const headings = []

  for (const node of tree.children) {
    if (node.type === 'heading') {
      headings.push({
        depth: node.depth,
        value: node.children?.[0]?.value || '',
      })
    }
  }

  return headings
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
