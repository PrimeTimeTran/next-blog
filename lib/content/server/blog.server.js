import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { bundle } from '@/lib/server/bundle'
import { extractTOC } from '@/lib/mdx/extractTOC'
import { formatSlug } from '@/lib/content/core/slug'
import getAllFilesRecursively from '@/lib/server/files'
import { isPublished } from '@/lib/content/core/isPublished'
import { normalizeFrontMatter } from '@/lib/content/core/normalize'

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

export function getFiles(type) {
  if (type !== 'blog') return []

  const basePath = path.join(ROOT, 'data')
  const files = getAllFilesRecursively(basePath)

  if (!Array.isArray(files)) return []

  return files
    .filter(Boolean)
    .map((file) => {
      const slug = formatSlug(file)
      // if (slug[0] != 'kb') {
      //   console.log('slug getFiles', slug)
      // }
      return {
        slug,
        filePath: file,
      }
    })
    .filter((f) => f.slug)
}

export async function getBlogFileBySlug(slug) {
  const mdxPath = path.join(ROOT, 'data/blog', `${slug}.mdx`)
  const mdPath = path.join(ROOT, 'data/blog', `${slug}.md`)

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath
  const source = fs.readFileSync(filePath, 'utf8')

  const { content } = matter(source)
  const toc = extractTOC(content)

  const { code, frontMatter } = await bundle(source)
  const normalized = normalizeFrontMatter(frontMatter, slug)

  return {
    mdxSource: code,
    toc,
    frontMatter: {
      ...normalized,
      readingTime: readingTime(code),
    },
  }
}
