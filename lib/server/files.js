import fs from 'fs'
import path from 'path'

const root = process.cwd()

export function toSlug(filePath) {
  const base = path.join(root, 'data', 'kb')

  return filePath
    .replace(base, '')
    .replace(/\\/g, '/')
    .replace(/\.mdx?$/, '')
    .replace(/^\/+/, '') // 🔥 remove leading slash
}

export function normalizeSlug(filePath) {
  return filePath
    .split('/data/kb/')[1]
    .replace(/\.mdx?$/, '')
    .replace(/^\/+/, '')
    .trim()
}

export function normalizeSlugFromSlug(slug) {
  return slug.replace(/^\/+/, '').trim()
}

export default function getAllFilesRecursively(dir) {
  let results = []

  const list = fs.readdirSync(dir)

  list.forEach((file) => {
    if (file.startsWith('.') || file.startsWith('_')) return

    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      results = results.concat(getAllFilesRecursively(fullPath))
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      results.push(fullPath)
    }
  })

  return results
}
