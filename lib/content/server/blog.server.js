import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ROOT } from '@/lib/content/core/constants'
import getAllFilesRecursively from '@/lib/server/files'
import { isPublished } from '@/lib/content/core/isPublished'
import { normalizeSlug } from '@/lib/content/core/normalize'
import { loadContent } from '@/lib/content/core/loadContent'

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  let files = []

  for (const entry of entries) {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files = files.concat(walk(full))
    } else if (entry.isFile() && /\.(mdx?|md)$/.test(entry.name)) {
      files.push(full)
    }
  }

  return files
}

export function getAllSlugs(type) {
  const dir = path.join(process.cwd(), 'data', type)

  return walk(dir).map((filePath) =>
    filePath.replace(path.join(dir, ''), '').replace(/\.mdx?$/, '')
  )
}

export async function getFiles(type) {
  const slugs = getAllSlugs(type)

  console.log({ slugs })

  return Promise.all(slugs.map((slug) => loadContent(type, slug)))
}

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

// export function getFiles(type) {
//   if (type !== 'blog') return []

//   const basePath = path.join(ROOT, 'data')
//   const files = getAllFilesRecursively(basePath)

//   if (!Array.isArray(files)) return []

//   return files
//     .filter(Boolean)
//     .map((file) => {
//       const slug = normalizeSlug(file)
//       return {
//         slug,
//         filePath: file,
//       }
//     })
//     .filter((f) => f.slug)
// }
