import generateRss from '@/lib/generate-rss'

import { MDXLayoutRenderer } from '@/components/MDXComponents'

const DEFAULT_LAYOUT = 'PostLayout'

const sanitize = (post) => ({
  ...post,
  frontMatter: {
    ...post.frontMatter,
    date: post.frontMatter?.date ? new Date(post.frontMatter.date).toISOString() : null,
  },
})
export async function getStaticPaths() {
  console.log('getStaticPaths')
  // const { getFiles } = await import('@/lib/content/server')
  const { getAllBlogPosts } = await import('@/lib/content/server')

  const posts = await getAllBlogPosts()
  console.log(posts.map((p) => p.slug))
  console.log('POST KEYS:', Object.keys(posts[0]))
  console.log({ post: posts[0] })

  return {
    paths: posts
      .filter((p) => !p.draft)
      .map((p) => ({
        params: {
          slug: p.slug.split('/'),
        },
      })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log('getStaticProps')
  const { getContentBySlug } = await import('@/lib/content/core/getContentBySlug')
  const { getAllBlogPosts } = await import('@/lib/content/server')
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

  const post = await getContentBySlug('blog', slug)
  console.log('POST KEYS:', Object.keys(post))
  console.log({ post })

  if (!post) return { notFound: true }

  const posts = getAllBlogPosts()
  const index = posts.findIndex((p) => p.slug === slug)
  const prev = posts[index + 1] || null
  const next = posts[index - 1] || null

  return {
    props: {
      post: sanitize(post),
      prev: prev ? sanitize(prev) : null,
      next: next ? sanitize(next) : null,
      authorDetails: [await getContentBySlug('authors', 'default')],
    },
  }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <MDXLayoutRenderer
      toc={toc}
      prev={prev}
      next={next}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      authorDetails={authorDetails}
      layout={frontMatter.layout || DEFAULT_LAYOUT}
    />
  )
}
