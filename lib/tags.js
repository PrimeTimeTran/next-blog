import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllTags(type) {
  const files = await getFiles(type)
  const tagCount = {}

  files.forEach((file) => {
    const possiblePaths = [
      path.join(root, 'data', type, file),
      path.join(root, 'data', type, `${file}.md`),
      path.join(root, 'data', type, `${file}.mdx`),
    ]

    const fullPath = possiblePaths.find((p) => {
      try {
        return fs.existsSync(p) && fs.lstatSync(p).isFile()
      } catch {
        return false
      }
    })

    if (!fullPath) {
      console.warn(`Skipping invalid file/folder: ${file}`)
      return
    }

    const source = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(source)

    if (data?.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        tagCount[formattedTag] = (tagCount[formattedTag] || 0) + 1
      })
    }
  })

  return tagCount
}
