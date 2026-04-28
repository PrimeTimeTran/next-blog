// lib/content/server/getPublishedFiles.js

if (typeof window !== 'undefined') {
  throw new Error('Server-only module imported on client')
}

import fs from 'fs'
import path from 'path'

import { isPublished } from '@/lib/content/core/publish'

import getAllFilesRecursively from '@/lib/server/files'

export function getPublishedFiles(folder) {
  const base = path.join(process.cwd(), 'data', folder)

  if (!fs.existsSync(base)) {
    console.error(`❌ Missing folder: ${base}`)
    return []
  }

  const files = getAllFilesRecursively(base)

  if (!Array.isArray(files)) {
    console.error('❌ getAllFilesRecursively returned invalid value:', files)
    return []
  }

  return files.filter(isPublished)
}
