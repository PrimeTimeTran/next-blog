import readingTime from 'reading-time'

import { extractTOC } from '@/lib/mdx/extractTOC'
import { normalizeFile, normalizeFrontMatter } from '@/lib/content/core/normalize'

import { loadContentFile } from '@/lib/content/core/loadContent'

export const ROOT = process.cwd()

function enrichBlog(file) {
  const toc = extractTOC(file.source)

  return {
    mdxSource: file.code,
    toc,
    frontMatter: {
      ...normalizeFrontMatter(file.frontMatter || {}, file.slug),
      readingTime: readingTime(file.code),
    },
  }
}

function enrichKb(file) {
  const toc = extractTOC(file.source)

  return {
    mdxSource: file.code,
    toc,
    rawSource: file.source,
    frontMatter: {
      ...file.frontmatter,
      slug: normalizeFile(file.filePath),
      readingTime: readingTime(file.code),
    },
  }
}

export async function getContentBySlug(type, slug) {
  const file = await loadContentFile(type, slug)
  if (!file) return null

  if (type === 'blog') return enrichBlog(file)
  if (type === 'kb') return enrichKb(file)

  throw new Error(`Unknown type: ${type}`)
}
