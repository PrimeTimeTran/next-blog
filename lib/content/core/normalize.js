export function normalizeFile({ filePath, frontMatter = {} }) {
  if (typeof filePath !== 'string') return null

  const slug = filePath
    .replace(/\\/g, '/')
    .replace(/^.*data\/(blog|kb)\//, '')
    .replace(/\.(md|mdx)$/, '')

  if (!slug) return null
  return {
    slug,
    filePath,
    frontMatter: {
      tags: [],
      ...frontMatter,
    },
  }
}

export function normalizePost(post) {
  if (!post) return null

  const fm = post.frontMatter || {}

  return {
    slug: post.slug,
    title: fm.title || '',
    summary: fm.summary || '',
    date: fm.date || null,
    tags: Array.isArray(fm.tags) ? fm.tags : [],
  }
}
