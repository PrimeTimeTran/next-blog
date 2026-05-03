// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getContentBySlug } from '@/lib/content/core/get-content-by-slug'
import MDXRenderer from '@/mdx/Renderer'

export async function getStaticProps() {
  const authorDetails = await getContentBySlug('authors', 'default')

  if (!authorDetails) {
    return { notFound: true }
  }

  return {
    props: {
      authorDetails,
    },
  }
}

export default function About({ authorDetails }) {
  if (!authorDetails) return null
  return (
    <MDXRenderer
      layout={'AuthorLayout'}
      mdxSource={authorDetails.mdxSource}
      frontMatter={authorDetails.frontMatter}
    />
  )
}
