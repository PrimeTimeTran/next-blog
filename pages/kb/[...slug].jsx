import MDXRenderer from '@/mdx/Renderer'
import { baseComponents } from '@/mdx'

export async function getStaticPaths() {
  const { getAllKbSlugs } = await import('@/lib/content/core/kb')

  const slugs = await getAllKbSlugs()

  return {
    paths: (slugs ?? []).map((slug) => ({
      params: {
        slug: slug.split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(ctx) {
  const { buildKbRegistry, getKbTree } = await import('@/lib/content/server/kb.server')
  const { getContentBySlug } = await import('@/lib/content/core/get-content-by-slug')

  const kbItem = await getContentBySlug('kb', ctx.params.slug)

  if (!kbItem) return { notFound: true }

  const outline = await getKbTree()
  const registry = await buildKbRegistry()

  return {
    props: {
      kbItem,
      outline,
      registry: registry,
    },
  }
}

export default function Page({ kbItem, registry, outline }) {
  if (!kbItem) return null

  return (
    <MDXRenderer
      mdxSource={kbItem.mdxSource}
      components={{
        ...baseComponents,
        __registry: registry,
      }}
      layout="KBLayout"
      layoutProps={{
        registry,
        outline,
        frontMatter: kbItem.frontMatter,
        toc: kbItem.toc,
        post: kbItem,
      }}
    />
  )
}

// export default function Page() {
//   return <div>hi</div>
// }
