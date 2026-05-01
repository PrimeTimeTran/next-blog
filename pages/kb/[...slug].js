import { getKbTree } from '@/lib/content/core/kb'
import { buildKbRegistry } from '@/lib/content/core/kb'
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
  const { getContentBySlug } = await import('@/lib/content/core/get-content-by-slug')

  const kbItem = await getContentBySlug('kb', ctx.params.slug)

  if (!kbItem) return { notFound: true }

  const outline = getKbTree()
  const registry = await buildKbRegistry()

  return {
    props: {
      kbItem,
      outline,
      registry: registry,
    },
  }
}

export default function Page({ kbItem, registry, outline, ...rest }) {
  if (!kbItem) return null

  const layout = kbItem?.frontMatter?.layout || 'KBLayout'

  return (
    <MDXLayoutRenderer
      layout={layout}
      registry={registry}
      mdxSource={kbItem.mdxSource}
      sidebarData={outline}
      toc={kbItem.toc}
      {...kbItem.frontMatter}
      {...rest}
    />
  )
}
