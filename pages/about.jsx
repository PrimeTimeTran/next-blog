// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getContentBySlug } from '@/lib/content/core/get-content-by-slug'
import MDXRenderer from '@/mdx/Renderer'
import { createMDXComponents } from '@/mdx'

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
      // baseComponents={baseComponents}
      components={createMDXComponents({}, false)}
      mdxSource={authorDetails.mdxSource}
      frontMatter={authorDetails.frontMatter}
    />
  )
}
