import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { bundle } from '@/lib/server/bundle'
import { extractTOC } from '@/lib/mdx/extractTOC'
import { formatSlug } from '@/lib/content/core/slug'
import getAllFilesRecursively from '@/lib/server/files'
import { isPublished } from '@/lib/content/core/publish'
import { normalizeFile } from '@/lib/content/core/normalize'

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
      if (slug[0] != 'kb') {
        console.log('slug getFiles', slug)
      }
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

  const { code, frontmatter } = await bundle(source)

  const toc = extractTOC(source)

  return {
    mdxSource: code,
    toc, // ✅ THIS must exist
    frontMatter: {
      ...frontmatter,
      slug,
      readingTime: readingTime(code),
    },
  }
}

export async function getFileBySlug(type, slug) {
  if (Array.isArray(slug)) {
    slug = slug.join('/')
  }
  const basePath = path.join(ROOT, 'data', type)

  const mdxPath = path.join(basePath, `${slug}.mdx`)
  const mdPath = path.join(basePath, `${slug}.md`)

  const exists = fs.existsSync(mdxPath) || fs.existsSync(mdPath)

  console.log('LOOKUP:', { mdxPath, mdPath })
  console.log('EXISTS:', {
    mdx: fs.existsSync(mdxPath),
    md: fs.existsSync(mdPath),
  })

  if (!exists) {
    console.warn(`[getFileBySlug] Missing file: ${type}/${slug}`)
    return null
  }

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  const source = fs.readFileSync(filePath, 'utf8')

  if (typeof source !== 'string') {
    console.error(`[getFileBySlug] Invalid source: ${filePath}`)
    return null
  }

  const { code, frontmatter } = await bundle(source)

  return {
    mdxSource: code,
    frontMatter: {
      ...(frontmatter || {}),
      slug: normalizeFile(filePath),
    },
  }
}
