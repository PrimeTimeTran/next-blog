export function normalizeSlug(input) {
  if (!input) return ''

  const raw = typeof input === 'string' ? input : input.slug || input.filePath || ''

  return raw
    .replace(/\\/g, '/')
    .replace(/^.*\/data\//, '')
    .replace(/\.(md|mdx)$/, '')
}

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

export function normalizeFrontMatter(fm, slug) {
  return {
    slug,
    tags: fm?.tags ?? [],
    date: fm?.date ?? null,
    images: fm?.images ?? [],
    summary: fm?.summary ?? '',
    title: fm?.title ?? 'Untitled',
  }
}

export function normalizeTree(tree) {
  return Object.values(tree).map((node) => ({
    name: node.name,
    isFile: node.isFile,
    ...(node.slug ? { slug: node.slug } : {}), // ✅ key fix
    children: node.children ? normalizeTree(node.children) : [],
  }))
}
