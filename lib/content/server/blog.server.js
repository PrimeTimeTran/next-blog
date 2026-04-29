import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import getAllFilesRecursively from '@/lib/server/files'
import { isPublished } from '@/lib/content/core/isPublished'
import { normalizeSlug } from '@/lib/content/core/normalize'

const ROOT = process.cwd()

export function getAllBlogPosts() {
  const basePath = path.join(ROOT, 'data/blog')
  const files = getAllFilesRecursively(basePath)

  return files
    .map((filePath) => {
      const source = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(source)
      const slug = filePath
        .replace(/\\/g, '/')
        .replace(/^.*data\//, '')
        .replace(/\.(md|mdx)$/, '')
      return {
        slug,
        filePath,
        frontMatter: {
          tags: [],
          ...data,
          date: data.date ? new Date(data.date).toISOString() : null,
        },
      }
    })
    .filter(isPublished)
}

export function getFiles(type) {
  if (type !== 'blog') return []

  const basePath = path.join(ROOT, 'data')
  const files = getAllFilesRecursively(basePath)

  if (!Array.isArray(files)) return []

  return files
    .filter(Boolean)
    .map((file) => {
      const slug = normalizeSlug(file)
      return {
        slug,
        filePath: file,
      }
    })
    .filter((f) => f.slug)
}
