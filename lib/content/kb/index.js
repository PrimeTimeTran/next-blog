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

export async function getStaticProps({ params }) {
  return {
    props: {
      kbItem: {},
    },
  }
}
const ROOT = process.cwd()
const KB_DIR = path.join(ROOT, 'data/kb')

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
