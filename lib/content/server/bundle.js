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

import { extractTOC } from '@/lib/remark/extract-toc'
import { extractCodeMeta } from '@/lib/remark/extract-code-meta'
import { extractFrontMatter } from '@/lib/remark/extract-front-matter'

import { renderEmbeds } from '@/lib/remark/render-embeds'
import { renderCallOuts } from '@/lib/remark/render-callouts'
import { renderImgInJSX } from '@/lib/remark/render-img-in-jsx'
import { renderTabGroups } from '@/lib/remark/render-tab-groups'
import { renderCodeBlocks } from '@/lib/remark/render-codeblocks'

import { injectEmbedFlags } from '@/lib/remark/inject-embed-flags'

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
        extractCodeMeta,
        extractFrontMatter,
        [extractTOC, { exportRef: toc }],

        // 2. markdown normalization (must happen early)
        remarkGfm,
        remarkMath,
        [remarkFootnotes, { inlineNotes: true }],

        // 3. structural transforms (danger zone)
        renderCallOuts,
        renderTabGroups,

        // 4. safe annotations only (NO structure changes)
        renderEmbeds,
        renderImgInJSX,
        // renderCodeBlocks,
        // injectEmbedFlags,
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
