import generateRss from '@/lib/generate-rss'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFiles } from '@/lib/content/server/blog.server'

import { getAuthorBySlug } from '@/lib/content/server/getFileBySlug'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug.replace(/^blog\//, '').split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { getAllBlogPosts, getBlogFileBySlug } = await import('@/lib/content/server/blog.server')
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug

  const allPosts = getAllBlogPosts()
  const postIndex = allPosts.findIndex((p) => p.slug === slug)

  const post = await getBlogFileBySlug(slug)

  if (!post) {
    return { notFound: true }
  }

  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const authorDetails = await getAuthorBySlug('default')

  return {
    props: {
      post,
      prev,
      next,
      authorDetails: [authorDetails],
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
