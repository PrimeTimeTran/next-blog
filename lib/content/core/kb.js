import fs from 'fs'
import path from 'path'

import getAllFilesRecursively from '@/lib/content/server/files'
import { normalizeTree } from '@/lib/content/core/normalize'
import { KB_DIR } from '@/lib/content/core/constants'

export function buildKbIndex(files, rootDir = 'data/kb') {
  const index = new Map()

  for (const file of files) {
    const relative = file
      .replace(/\\/g, '/')
      .replace(new RegExp(`^.*${rootDir}/`), '')
      .replace(/\.mdx?$/, '')

    const slug = path.basename(relative)
    index.set(slug, relative)
  }

  return index
}

const files = getAllFilesRecursively(KB_DIR)

export const kbIndex = buildKbIndex(files)

export function getAllKbSlugs() {
  const walk = (dir, base = '') => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    let slugs = []

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        slugs = slugs.concat(walk(fullPath, path.join(base, entry.name)))
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const slug = path
          .join(base, entry.name)
          .replace(/\.(md|mdx)$/, '')
          .replace(/\\/g, '/')

        slugs.push(slug)
      }
    }

    return slugs
  }

  return walk(KB_DIR)
}

export function getKbTree() {
  const files = getAllFilesRecursively(KB_DIR)

  const tree = {}

  for (const filePath of files) {
    const relative = filePath
      .replace(/\\/g, '/')
      .replace(KB_DIR.replace(/\\/g, '/'), '')
      .replace(/\.(md|mdx)$/, '')
      .replace(/^\//, '')

    const parts = relative.split('/')

    let current = tree
    let pathSoFar = ''

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1

      pathSoFar = pathSoFar ? `${pathSoFar}/${part}` : part

      if (!current[part]) {
        current[part] = {
          name: part,
          children: {},
          isFile: false,
          slug: pathSoFar,
        }
      }

      if (isFile) {
        current[part].isFile = true
        current[part].slug = pathSoFar
      }

      current = current[part].children
    }
  }

  return normalizeTree(tree)
}
