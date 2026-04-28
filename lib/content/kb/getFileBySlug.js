import fs from 'fs'
import path from 'path'
import { bundleMDX } from '@/lib/server/bundle'
import { normalizeFilePath } from '../core/normalize'

const root = process.cwd()

export async function getFileBySlug(slug) {
  const mdxPath = path.join(root, 'data/kb', `${slug}.mdx`)
  const mdPath = path.join(root, 'data/kb', `${slug}.md`)

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  const source = fs.readFileSync(filePath, 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(root, 'components'),
  })

  return {
    mdxSource: code,
    frontMatter: {
      ...frontmatter,
      slug: normalizeFilePath(filePath),
    },
  }
}
