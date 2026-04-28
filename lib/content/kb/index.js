import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from '../../mdx/bundle'
import { normalizeFilePath } from '../core/normalize'

export function normalizeKBFile(input) {
  if (!input) return null

  const filePath = input.filePath || input

  if (!filePath) return null

  const slug = normalizeFilePath(filePath)

  const frontMatter = input.frontMatter || input.frontmatter || input.data || {}

  return {
    slug,
    filePath,
    frontMatter,
  }
}

export async function kbPipeline(file) {
  const source = fs.readFileSync(file, 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(process.cwd(), 'components'),
  })

  const slug = normalizeFilePath(file)

  return {
    mdxSource: code,
    frontMatter: {
      ...frontmatter,
      slug,
    },
  }
}
