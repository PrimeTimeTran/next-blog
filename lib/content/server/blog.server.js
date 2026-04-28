import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import getAllFilesRecursively from '@/lib/server/files'
import { isPublished } from '@/lib/content/core/publish'
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
        .replace(/^.*data\/blog\//, '')
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

export function getBlogIndex(posts = []) {
  const safePosts = posts.filter(Boolean)

  const tagCounts = {}
  const tagMap = {}

  for (const post of safePosts) {
    const tags = post.frontMatter?.tags ?? []

    for (const tag of tags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
      ;(tagMap[tag] ||= []).push(post)
    }
  }

  return { posts: safePosts, tagCounts, tagMap }
}
