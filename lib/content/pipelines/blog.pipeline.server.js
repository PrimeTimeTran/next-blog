import fs from 'fs'
import path from 'path'

import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'
import { bundle } from '@/lib/mdx/bundle'
import { formatSlug } from '@/lib/content/core/slug'
import getAllFilesRecursively from '@/lib/server/files'
import { normalizeFile } from '@/lib/content/core/normalize'

const ROOT = process.cwd()

export async function getBlogFileBySlug(slug) {
  const mdxPath = path.join(ROOT, 'data/blog', `${slug}.mdx`)
  const mdPath = path.join(ROOT, 'data/blog', `${slug}.md`)

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  const source = fs.readFileSync(filePath, 'utf8')

  const { code, frontmatter } = await bundle(source)
  console.log({
    code,
    frontmatter,
  })

  return {
    mdxSource: code,
    frontMatter: {
      ...frontmatter,
      readingTime: readingTime(code),
      slug,
    },
  }
}

export async function getFileBySlug(slug) {
  const mdxPath = path.join(ROOT, 'data/blog', `${slug}.mdx`)
  const mdPath = path.join(ROOT, 'data/blog', `${slug}.md`)

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  const source = fs.readFileSync(filePath, 'utf8')

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(ROOT, 'components'),
  })

  return {
    mdxSource: code,
    frontMatter: {
      ...frontmatter,
      slug: normalizeFile(filePath),
    },
  }
}

export function getFiles(type) {
  if (type !== 'blog') return []

  const basePath = path.join(ROOT, 'data', 'blog')

  const files = getAllFilesRecursively(basePath)

  if (!Array.isArray(files)) return []

  return files
    .filter(Boolean)
    .map((file) => {
      const slug = formatSlug(file)

      return {
        slug,
        filePath: file,
      }
    })
    .filter((f) => f.slug)
}
