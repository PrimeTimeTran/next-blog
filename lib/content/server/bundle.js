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
import { remarkCallouts } from '@/lib/remark-callouts'
import { remarkEmbeds } from '@/lib/remark-embeds'
import { remarkCalloutEmbedFlag } from '@/lib/remark-callout-embed-flag'
import { remarkCodeMeta } from '@/lib/remark-code-meta'

import { kbIndex } from '@/lib/content/core/kb'
import { preprocessEmbeds, preprocessWikiLinks } from '@/lib/content/core/transformers'

import { ROOT } from '@/lib/content/core/constants'

export function debugAST() {
  return (tree) => {
    console.log(JSON.stringify(tree, null, 2))
  }
}

export async function bundle(source, slug) {
  if (typeof source !== 'string') {
    throw new Error(`[bundle] expected string, got ${typeof source}`)
  }

  const { data } = matter(source)
  let toc = []

  source = preprocessEmbeds(source, kbIndex)

  const result = await bundleMDX({
    source: preprocessWikiLinks(source, kbIndex, slug),
    cwd: path.join(ROOT, 'components'),

    xdmOptions(options, frontmatter) {
      // -------------------
      // Remark pipeline
      // -------------------
      options.remarkPlugins = [
        // 1. metadata / extraction
        remarkCodeMeta,
        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],

        // 2. markdown normalization (must happen early)
        remarkGfm,
        remarkMath,
        [remarkFootnotes, { inlineNotes: true }],

        // 3. structural transforms (danger zone)
        remarkCallouts,
        remarkTabGroup,

        // 4. safe annotations only (NO structure changes)
        remarkEmbeds,
        remarkImgToJsx,
        // remarkCodeTitles,
        // remarkCalloutEmbedEmbedFlag,
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
      ...result.frontmatter,
      date: data.date ? new Date(data.date).toISOString() : null,
    },
    toc,
  }
}
