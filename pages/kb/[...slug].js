import { getAllKbSlugs } from '@/lib/content/kb'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

import { getKbTree } from '@/lib/content/kb'
import { resolveKbItem } from '@/lib/content/kb/resolveKbItem'

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
  const kbItem = await resolveKbItem(ctx.params.slug)
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
