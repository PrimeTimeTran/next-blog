import fs from 'fs'
import path from 'path'

import { log } from '@/lib/debug/logger'

const root = process.cwd()

export function toSlug(filePath) {
  const base = path.join(root, 'data', 'kb')

  return filePath
    .replace(base, '')
    .replace(/\\/g, '/')
    .replace(/\.mdx?$/, '')
    .replace(/^\/+/, '')
}

export default async function getAllFilesRecursively(dir) {
  let results = []

  const list = fs.readdirSync(dir)

  for (const file of list) {
    if (file.startsWith('.') || file.startsWith('_')) continue

    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      const nested = await getAllFilesRecursively(fullPath)
      results = results.concat(nested)
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      results.push(fullPath)
    }
  }

  return results
}
