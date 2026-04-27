if (typeof window !== 'undefined') {
  throw new Error('mdx-bundler leaking into client!')
}

import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import getAllFilesRecursively from './utils/files'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'
import remarkExtractFrontmatter from './remark-extract-frontmatter'
import remarkCodeTitles from './remark-code-title'
import remarkTocHeadings from './remark-toc-headings'
import remarkImgToJsx from './remark-img-to-jsx'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'

const root = process.cwd()

export function formatSlug(input) {
  if (!input) return ''

  const slug = typeof input === 'string' ? input : input.slug || input.filePath || ''

  return slug.replace(/\\/g, '/').replace(/\.mdx?$/, '')
}

export function getFiles(type) {
  const basePath = path.join(root, 'data', type)
  const files = getAllFilesRecursively(basePath)

  return files
    .map((file) => {
      if (!file) return null

      const relative = file
        .slice(basePath.length + 1)
        .replace(/\\/g, '/')
        .replace(/\.(md|mdx)$/, '')

      return {
        slug: formatSlug(relative),
        filePath: file,
      }
    })
    .filter(Boolean)
}

export function buildKbTree(files) {
  const root = { __children: {} }

  for (const file of files) {
    const parts = file.slug.split('/').filter(Boolean)

    let current = root.__children
    let pathSoFar = []

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      pathSoFar.push(part)

      const nodeId = pathSoFar.join('/')

      if (!current[part]) {
        current[part] = {
          __id: nodeId, // ✅ IMPORTANT
          __children: {},
          __meta: null,
        }
      }

      if (i === parts.length - 1) {
        current[part].__meta = file
      }

      current = current[part].__children
    }
  }

  return root.__children
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`)
  const mdPath = path.join(root, 'data', type, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild')
  }

  let toc = []

  try {
    const { code, frontmatter } = await bundleMDX({
      source,
      // mdx imports can be automatically source from the components directory
      cwd: path.join(root, 'components'),
      xdmOptions(options, frontmatter) {
        // this is the recommended way to add custom remark/rehype plugins:
        // The syntax might look weird, but it protects you in case we add/remove
        // plugins in the future.

        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          remarkExtractFrontmatter,
          [remarkTocHeadings, { exportRef: toc }],
          remarkGfm,
          remarkCodeTitles,
          [remarkFootnotes, { inlineNotes: true }],
          remarkMath,
          remarkImgToJsx,
        ]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          rehypeAutolinkHeadings,
          rehypeKatex,
          [rehypeCitation, { path: path.join(root, 'data') }],
          [rehypePrismPlus, { ignoreMissing: true }],
          rehypePresetMinify,
        ]
        return options
      },
      esbuildOptions: (options) => {
        options.loader = {
          ...options.loader,
          '.js': 'jsx',
        }
        return options
      },
    })
    return {
      mdxSource: code,
      toc,
      frontMatter: {
        readingTime: readingTime(code),
        slug: slug || null,
        fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
        ...frontmatter,
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      },
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getAllFilesFrontMatter(folder) {
  const Paths = fs.realpathSync(path.join(root, 'data', folder))
  const files = getAllFilesRecursively(Paths)
  const prefixPaths = path.join(root, 'data', folder)
  const allFrontMatter = []

  files.forEach((file) => {
    const source = fs.readFileSync(file, 'utf8')
    const { data: fm } = matter(source)

    if (fm?.draft === true) return

    allFrontMatter.push({
      ...fm,
      date: fm.date ? new Date(fm.date).toISOString() : null,
      slug: file
        .replace(prefixPaths + '/', '')
        .replace(/\\/g, '/')
        .replace(/\.(md|mdx)$/, '')
        .replace(/\s+/g, '-')
        .toLowerCase(),
    })
  })

  allFrontMatter.sort((a, b) => {
    return new Date(b.date || 0) - new Date(a.date || 0)
  })

  return allFrontMatter
}
