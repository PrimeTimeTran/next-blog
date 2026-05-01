import generateRss from '@/lib/generate-rss'

import { MDXLayoutRenderer } from '@/components/MDXComponents'

const DEFAULT_LAYOUT = 'BlogLayout'

const sanitize = (post) => ({
  ...post,
  frontMatter: {
    ...post.frontMatter,
    date: post.frontMatter?.date ? new Date(post.frontMatter.date).toISOString() : null,
  },
})
export async function getStaticPaths() {
  const { getAllBlogPosts } = await import('@/lib/content/server')

  const posts = await getAllBlogPosts()

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
  const { getContentBySlug } = await import('@/lib/content/core/get-content-by-slug')
  const { getAllBlogPosts } = await import('@/lib/content/server')
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

  const post = await getContentBySlug('blog', slug)

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
