import readingTime from 'reading-time'
import { extractTOC } from '@/lib/content/server/extractTOC'
import { normalizeFile, normalizeFrontMatter } from '@/lib/content/core/normalize'

function parseWikiTarget(raw) {
  const [pathPart, label] = raw.split('|')

  return {
    raw: pathPart.trim(),
    label: label?.trim(),
  }
}

function getLinkType(raw) {
  if (raw.startsWith('#')) return 'heading'
  if (raw.endsWith('.md') || raw.endsWith('.mdx')) return 'file'
  return 'file'
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function preprocessWikiLinks(source, kbIndex) {
  return source.replace(/\[\[(.+?)\]\]/g, (_, raw) => {
    const [left, alias] = raw.split('|')

    const display = alias?.trim()

    // -----------------------------------
    // split into: path + optional anchors
    // theme2#A#B
    // -----------------------------------
    const [filePart, ...anchors] = left.split('#')

    // -----------------------------------
    // resolve file
    // -----------------------------------
    const cleanFile = filePart.replace(/\.mdx?$/, '').toLowerCase()

    const resolvedPath = kbIndex.get(cleanFile) ?? cleanFile

    // -----------------------------------
    // build final URL
    // -----------------------------------
    let url = `/kb/${resolvedPath}`

    // add heading anchors if present
    if (anchors.length) {
      const last = anchors[anchors.length - 1]
      url += `#${slugify(last)}`
    }

    // -----------------------------------
    // display text rules
    // -----------------------------------
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
