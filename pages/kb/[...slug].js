import { getKbTree } from '@/lib/content/core/kb'
import { getAllKbSlugs } from '@/lib/content/core/kb'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

export async function getStaticPaths() {
  const slugs = await getAllKbSlugs()

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug.split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(ctx) {
  const { getContentBySlug } = await import('@/lib/content/core/getContentBySlug')
  const kbItem = await getContentBySlug('kb', ctx.params.slug)
  const kbOutline = getKbTree()

  if (!kbItem) return { notFound: true }

  return {
    props: {
      kbItem,
      kbOutline,
    },
  }
}

export default function Page({ kbItem, kbOutline, ...rest }) {
  if (!kbItem) return null

  const layout = kbItem?.frontMatter?.layout || 'KBLayout'

  return (
    <MDXLayoutRenderer
      layout={layout}
      mdxSource={kbItem.mdxSource}
      sidebarData={kbOutline}
      toc={kbItem.toc}
      {...kbItem.frontMatter}
      {...rest}
    />
  )
}
