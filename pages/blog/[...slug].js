import generateRss from '@/lib/generate-rss'

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFiles, getFileBySlug } from '@/lib/content/server/blog.server'

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

  const authorList = post.frontMatter?.authors || ['default']

  const authorDetails = await Promise.all(
    authorList.map((author) => getFileBySlug('authors', author))
  )

  return {
    props: {
      post,
      prev,
      next,
      authorDetails,
    },
  }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      toc={toc}
      frontMatter={frontMatter}
      authorDetails={authorDetails}
      prev={prev}
      next={next}
    />
  )
}
