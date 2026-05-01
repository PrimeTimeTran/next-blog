import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkFootnotes from 'remark-footnotes'

import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import remarkImgToJsx from '@/lib/remark-img-to-jsx'
import remarkCodeTitles from '@/lib/remark-code-title'
import remarkTocHeadings from '@/lib/remark-toc-headings'
import { remarkTabGroup } from '@/lib/remark-tab-group'
import remarkExtractFrontmatter from '@/lib/remark-extract-frontmatter'

import { ROOT } from '@/lib/content/core/constants'
import { kbIndex } from '@/lib/content/core/kb'
import { preprocessWikiLinks } from '@/lib/content/core/transformers'

export async function bundle(source) {
  if (typeof source !== 'string') {
    throw new Error(`[bundle] expected string, got ${typeof source}`)
  }

  const { data } = matter(source)
  let toc = []

  const result = await bundleMDX({
    source: preprocessWikiLinks(source, kbIndex),
    cwd: path.join(ROOT, 'components'),

    xdmOptions(options, frontmatter) {
      // -------------------
      // Remark pipeline
      // -------------------
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),

        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],

        remarkGfm,
        remarkTabGroup,
        remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
        remarkImgToJsx,
      ]

      // -------------------
      // Rehype pipeline
      // -------------------
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypePrismPlus, { ignoreMissing: true }],

        rehypePresetMinify,
      ]

      return options
    },

    esbuildOptions(options) {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  })

  return {
    ...result,
    mdxSource: result.code,
    frontMatter: {
      ...data,
      date: data.date ? new Date(data.date).toISOString() : null,
    },
    toc,
  }
}
