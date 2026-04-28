import generateRss from '@/lib/generate-rss'

import PageTitle from '@/components/PageTitle'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFiles, getFileBySlug } from '@/lib/content/pipelines/blog.pipeline.server'
import { getBlogFileBySlug } from '@/lib/content/pipelines/blog.pipeline.server'
import { formatSlug } from '@/lib/content/core/slug'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug
  const allPosts = []
  const postIndex = allPosts.findIndex((p) => p.slug === slug)
  const post = await getBlogFileBySlug(slug)

  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null

  const authorList = post?.frontMatter?.authors || ['default']

  const authorDetails = await Promise.all(
    authorList.map(async (author) => {
      const res = await getFileBySlug('authors', [author])
      return res?.frontMatter || null
    })
  )

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = post

  if (frontMatter.draft === true) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>Under Construction 🚧</PageTitle>
      </div>
    )
  }

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      authorDetails={authorDetails}
      prev={prev}
      next={next}
      toc={toc}
    />
  )
}
