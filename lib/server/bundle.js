import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'

const ROOT = process.cwd()

export async function bundle(source) {
  // 1. ALWAYS parse frontmatter here (single source of truth)
  const { content, data } = matter(source)

  // 2. bundle MDX ONLY from markdown body
  const result = await bundleMDX({
    source: content,
    cwd: path.join(ROOT, 'components'),

    xdmOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkMath]

      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug, rehypeKatex]

      return options
    },
  })

  return {
    ...result,

    frontMatter: {
      ...data,
    },
  }
}
