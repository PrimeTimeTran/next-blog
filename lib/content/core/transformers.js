import readingTime from 'reading-time'
import { extractTOC } from '@/lib/content/server/extractTOC'
import { normalizeFile, normalizeFrontMatter } from '@/lib/content/core/normalize'

export function preprocessEmbeds(source, kbIndex) {
  return source.replace(/!\[\[(.+?)\]\]/g, (_, raw) => {
    const clean = raw.replace(/\.md$/, '')
    const key = clean.split('/').pop() // 👈 THIS IS THE FIX
    const resolved = kbIndex.get(key) ?? key
    return `<Embed id="${resolved}" />`
  })
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function preprocessWikiLinks(source, kbIndex, currentSlug = '') {
  return source.replace(/\[\[(.+?)\]\]/g, (_, raw) => {
    const [left, alias] = raw.split('|')

    const display = alias?.trim()

    // -------------------------------
    // split file + anchors
    // -------------------------------
    const [filePart, ...anchors] = left.split('#')

    const cleanFile = filePart.replace(/\.mdx?$/, '').toLowerCase()
    const resolvedPath = kbIndex.get(cleanFile) ?? cleanFile

    // -------------------------------
    // detect same-page link ✅
    // -------------------------------
    const isSamePage = !filePart || resolvedPath === currentSlug.split('/').pop()

    let url = ''

    if (isSamePage) {
      // ✅ same page → only anchor
      if (anchors.length) {
        const last = anchors[anchors.length - 1]
        url = `#${slugify(last)}`
      } else {
        url = '' // or '#'
      }
    } else {
      // ✅ different page
      url = `/kb/${resolvedPath}`

      if (anchors.length) {
        const last = anchors[anchors.length - 1]
        url += `#${slugify(last)}`
      }
    }

    const label = display || left.replace(/\.mdx?$/, '').replace(/#/g, ' › ')

    return `[${label}](${url})`
  })
}

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
