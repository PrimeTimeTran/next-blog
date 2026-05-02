import { getKbTree } from '@/lib/content/core/kb'
import { getAllKbSlugs } from '@/lib/content/core/kb'
import { buildKbRegistry } from '@/lib/content/core/kb'

import MDXRenderer from '@/components/MDXRenderer'
import { baseComponents } from '@/mdx'
import { layouts } from '@/layouts'

export async function getStaticPaths() {
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

export default function Page({ kbItem, registry, outline }) {
  if (!kbItem) return null

  return (
    <MDXRenderer
      mdxSource={kbItem.mdxSource}
      components={baseComponents}
      layout={'KBLayout'}
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
