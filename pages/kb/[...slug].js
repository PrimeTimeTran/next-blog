import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getAllKbSlugs } from '@/lib/content/kb'
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

  if (!kbItem) {
    return { notFound: true }
  }

  return {
    props: {
      kbItem,
    },
  }
}

export default function Page({ kbItem, sidebarData, ...rest }) {
  console.log({ kbItem })
  if (!kbItem) return null

  const layout = kbItem?.frontMatter?.layout || 'KBLayout'

  return (
    <MDXLayoutRenderer
      layout={layout}
      mdxSource={kbItem.mdxSource}
      sidebarData={sidebarData}
      toc={kbItem.toc}
      {...kbItem.frontMatter}
      {...rest}
    />
  )
}
