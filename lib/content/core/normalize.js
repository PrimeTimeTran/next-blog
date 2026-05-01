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
  return {
    ...post,
    tags: post.tags || post.frontMatter?.tags || [],
    frontMatter: {
      ...post.frontMatter,
      tags: post.frontMatter?.tags || [],
      date: post.frontMatter?.date ? new Date(post.frontMatter.date).toISOString() : null,
    },
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

    // file can exist independently of children
    file: node.file ?? null,

    // always normalize children to array
    children: node.children ? normalizeTree(node.children) : [],

    // derived flag (useful for UI)
    isFolder: node.children && Object.keys(node.children).length > 0,
    isFile: Boolean(node.file),
  }))
}
