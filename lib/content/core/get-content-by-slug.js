import { loadContent } from '@/lib/content/core/load-content'
import { transformAuthor, transformBlog, transformKB } from '@/lib/content/core/transformers'

const transformers = {
  kb: transformKB,
  blog: transformBlog,
  authors: transformAuthor,
}

export async function getContentBySlug(type, slug) {
  const file = await loadContent(type, slug)
  if (!file) return null

  const transform = transformers[type]

  if (!transform) {
    throw new Error(`Unknown content type: ${type}`)
  }

  return transform(file)
}
