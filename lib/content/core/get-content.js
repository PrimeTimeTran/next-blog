import path from 'path'

import { getAllFiles } from '../server/files.js'

export function getContentFiles() {
  const root = process.cwd()

  const kbFiles = getAllFiles(path.join(root, 'data/kb'))
  const blogFiles = getAllFiles(path.join(root, 'data/blog'))

  return [
    ...kbFiles.map((f) => ({ file: f, type: 'kb' })),
    ...blogFiles.map((f) => ({ file: f, type: 'blog' })),
  ]
}
