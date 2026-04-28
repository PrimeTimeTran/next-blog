import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/content/server/getFileBySlug'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', 'default')

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
    <MDXLayoutRenderer
      layout={authorDetails.frontMatter?.layout || DEFAULT_LAYOUT}
      mdxSource={authorDetails.mdxSource}
      frontMatter={authorDetails.frontMatter}
    />
  )
}
