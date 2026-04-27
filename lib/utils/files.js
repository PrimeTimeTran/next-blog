import fs from 'fs'
import path from 'path'

export default function getAllFilesRecursively(dir) {
  let results = []

  const list = fs.readdirSync(dir)

  list.forEach((file) => {
    // ❌ ignore junk/system files
    if (
      file.startsWith('.') || // .gitkeep, .DS_Store, etc.
      file.startsWith('_') // optional convention
    ) {
      return
    }

    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      results = results.concat(getAllFilesRecursively(fullPath))
    } else {
      // ✅ only allow real content files
      if (file.endsWith('.md') || file.endsWith('.mdx')) {
        results.push(fullPath)
      }
    }
  })

  return results
}
