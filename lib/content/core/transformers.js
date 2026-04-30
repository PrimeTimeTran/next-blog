import readingTime from 'reading-time'
import { extractTOC } from '@/lib/content/server/extractTOC'
import { normalizeFile, normalizeFrontMatter } from '@/lib/content/core/normalize'

export function transformBlog(file) {
  const source = file.source || file.body || file.content

  return {
    slug: file.slug,
    filePath: file.filePath,

    mdxSource: file.mdxSource || source,
    toc: extractTOC(source),

    frontMatter: {
      ...normalizeFrontMatter(file.frontMatter, file.slug),
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
