import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

const ROOT = process.cwd()

export async function bundle(source) {
  if (typeof source !== 'string') {
    throw new Error(`[bundle] Invalid source: expected string, got ${typeof source}`)
  }

  const { content, data } = matter(source)

  const result = await bundleMDX({
    source: content,
    cwd: ROOT,
  })

  return {
    ...result,
    frontMatter: data,
    mdxSource: result.code,
  }
}
