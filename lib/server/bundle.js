import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export async function bundle(source) {
  if (typeof source !== 'string') {
    throw new Error(`[bundle] expected string, got ${typeof source}`)
  }

  const { content, data } = matter(source)
  console.log('RAW SOURCE START:', source.slice(0, 200))
  const parsed = matter(source)
  console.log('MATER RESULT:', parsed.data)

  const result = await bundleMDX({
    source: content,
    cwd: path.join(process.cwd(), 'components'),
  })

  return {
    ...result,
    frontMatter: {
      ...data, // IMPORTANT: always spread
    },
    mdxSource: result.code,
  }
}
