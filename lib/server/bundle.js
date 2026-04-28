import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'

export async function bundle(source) {
  if (typeof source !== 'string') {
    throw new Error(`[bundle] expected string, got ${typeof source}`)
  }

  const { content, data } = matter(source)

  const result = await bundleMDX({
    source: content,
    cwd: path.join(process.cwd(), 'components'),

    xdmOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkMath]

      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug, rehypeKatex]

      return options
    },
  })

  return {
    ...result,
    mdxSource: result.code,
    frontMatter: data,
  }
}
