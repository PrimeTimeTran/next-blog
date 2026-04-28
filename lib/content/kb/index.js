import fs from 'fs'
import path from 'path'
import { bundleMDX } from '@/lib/server/bundle'
import getAllFilesRecursively from '@/lib/server/files'
import { normalizeFilePath } from '@/lib/content/core/normalize'
import { normalizeTree } from '@/lib/content/kb/normalizeTree'

const ROOT = process.cwd()
const KB_DIR = path.join(ROOT, 'data/kb')

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
          slug: pathSoFar, // ✅ ALWAYS FULL PATH (critical fix)
        }
      }

      // mark file node
      if (isFile) {
        current[part].isFile = true
        current[part].slug = pathSoFar
      }

      current = current[part].children
    }
  }

  return normalizeTree(tree)
}
