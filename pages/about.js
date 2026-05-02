import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getContentBySlug } from '@/lib/content/core/get-content-by-slug'

const DEFAULT_LAYOUT = 'AuthorLayout'

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
  return <div>fofofo</div>
  // return (
  //   <MDXLayoutRenderer
  //     layout={authorDetails.frontMatter?.layout || DEFAULT_LAYOUT}
  //     mdxSource={authorDetails.mdxSource}
  //     frontMatter={authorDetails.frontMatter}
  //   />
  // )
}
