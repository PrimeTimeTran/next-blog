if (typeof window !== 'undefined') {
  throw new Error('mdx-bundler leaking into client!')
}

import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { visit } from 'unist-util-visit'
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

export function getFiles(type) {
  const Paths = path.join(root, 'data', type)
  const files = getAllFilesRecursively(Paths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => formatSlug(file.slice(Paths.length + 1).replace(/\\/g, '/')))
}

export function buildKbTree(files) {
  const root = {}

  for (const file of files) {
    const parts = file.slug.split('/')

    let current = root
    let pathSoFar = []

    for (const part of parts) {
      pathSoFar.push(part)

      if (!current[part]) {
        current[part] = {
          __children: {},
          __meta: {
            slug: pathSoFar.join('/'),
          },
        }
      }

      current = current[part].__children
    }

    // attach file metadata at leaf
    const leaf = parts[parts.length - 1]
    if (!current[leaf]) {
      current[leaf] = {
        __children: {},
        __meta: {},
      }
    }

    current[leaf].__meta = file
  }

  return root
}

export function formatSlug(slug) {
  return slug
    .replace(/\\/g, '/') // normalize windows paths
    .replace(/\.mdx?$/, '') // remove extension ONLY at end
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

    // ONLY FILTER
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

  return allFrontMatter
}
