import kebabCase from './utils/kebabCase'
import { getFiles } from '@/lib/content/server/blog.server'

export async function getAllTags(type) {
  const files = await getFiles(type)

  const tagCount = {}

  for (const file of files) {
    const fm = file?.frontMatter
    if (!fm) continue

    const tags = fm.tags
    const draft = fm.draft

    if (!Array.isArray(tags) || draft === true) continue

    for (const tag of tags) {
      const formatted = kebabCase(tag)
      tagCount[formatted] = (tagCount[formatted] || 0) + 1
    }
  }

  return tagCount
}
