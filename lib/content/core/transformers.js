import readingTime from 'reading-time'
import { extractTOC } from '@/lib/mdx/extractTOC'
import { buildContentUrl } from './url'
import { normalizeFile, normalizeFrontMatter } from '@/lib/content/core/normalize'

export function transformBlog(file) {
  return {
    slug: file.slug,
    url: file.slug,
    mdxSource: file.mdxSource,
    toc: extractTOC(file.source),

    frontMatter: {
      ...normalizeFrontMatter(file.frontMatter, file.slug),
      readingTime: readingTime(file.mdxSource),
    },
  }
}

export function transformKB(file) {
  return {
    mdxSource: file.mdxSource,
    toc: extractTOC(file.source),
    rawSource: file.source,
    frontMatter: {
      ...file.frontMatter,
      slug: normalizeFile(file.filePath),
      readingTime: readingTime(file.mdxSource),
    },
  }
}

export function transformAuthor(file) {
  return {
    mdxSource: file.mdxSource,
    frontMatter: file.frontMatter,
  }
}
