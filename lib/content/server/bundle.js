import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypePrism from 'rehype-prism-plus'

import remarkCodeTitles from '@/lib/remark-code-title'
import remarkExtractFrontMatter from '@/lib/remark-extract-frontmatter'
import remarkImgToJsx from '@/lib/remark-img-to-jsx'
import remarkTocHeading from '@/lib/remark-toc-headings'

export async function bundle(source) {
  if (typeof source !== 'string') {
    throw new Error(`[bundle] expected string, got ${typeof source}`)
  }

  const { data } = matter(source)

  const result = await bundleMDX({
    source,
    cwd: path.join(process.cwd(), 'components'),

    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),

        remarkGfm,
        remarkMath,

        // your custom remark plugins
        remarkCodeTitles,
        remarkImgToJsx,
        remarkTocHeading,
        remarkExtractFrontMatter,
      ]

      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeKatex,
        rehypePrism,
      ]

      return options
    },
  })

  return {
    ...result,
    mdxSource: result.code,
    frontMatter: data,
  }
}
