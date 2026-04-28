import { extractTOC } from '@/lib/content/kb/extractTOC'
import { getKbFileBySlug } from '@/lib/content/server/kb.server'

export async function resolveKbItem(slug) {
  const normalizedSlug = Array.isArray(slug) ? slug.join('/') : slug
  const file = await getKbFileBySlug(normalizedSlug)

  if (!file) return null

  const toc = file.rawSource ? extractTOC(file.rawSource) : []
  return {
    mdxSource: file.mdxSource,
    frontMatter: file.frontMatter,
    toc,
  }
}
