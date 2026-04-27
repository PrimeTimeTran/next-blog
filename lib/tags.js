import fs from 'fs'
import matter from 'gray-matter'

import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

export async function getAllTags(type) {
  const files = await getFiles(type)
  const tagCount = {}

  for (const file of files) {
    if (!file?.filePath) continue

    const fullPath = file.filePath

    let source
    try {
      source = fs.readFileSync(fullPath, 'utf8')
    } catch (err) {
      console.warn(`Skipping unreadable file: ${fullPath}`)
      continue
    }

    const { data } = matter(source)

    if (data?.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        tagCount[formattedTag] = (tagCount[formattedTag] || 0) + 1
      })
    }
  }

  return tagCount
}
