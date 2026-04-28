import { MDXLayoutRenderer } from '@/components/MDXComponents'

function serialize(obj) {
  return JSON.parse(JSON.stringify(obj))
}
function clean(obj) {
  return JSON.parse(JSON.stringify(obj, (_, v) => (v === undefined ? null : v)))
}

/* -----------------------
 * STATIC PATHS
 * ---------------------- */

export async function getStaticPaths() {
  // const { getPublishedFiles } = await import('@/lib/mdx')
  // const { toSlug, normalizeSlug } = await import('@/lib/server/files')
  // // const { normalizeSlug } = await import('@/lib/server/files')
  // const kbFiles = getPublishedFiles('kb')
  // const paths = kbFiles.map((file) => {
  //   const slug = normalizeSlug(file)
  //   return {
  //     params: {
  //       slug: slug.split('/'),
  //     },
  //   }
  // })
  // return {
  //   paths: paths,
  //   fallback: false,
  // }
}

/* -----------------------
 * STATIC PROPS
 * ---------------------- */
export async function getStaticProps({ params }) {
  // // const { safeMath } = await import('@/lib/mdx/safeMath')
  // const { toSlug, normalizeSlugFromSlug } = await import('@/lib/server/files')
  // const { buildKbTree, getFileBySlug, getAllFilesFrontMatter } = await import('@/lib/mdx')
  // const slugArray = Array.isArray(params.slug)
  //   ? params.slug
  //   : typeof params.slug === 'string'
  //   ? params.slug.split('/')
  //   : []
  // const slug = slugArray.join('/')
  // const safeSlug = normalizeSlugFromSlug(slug)
  // const rawKB = await getAllFilesFrontMatter('kb')
  // const allKB = rawKB
  //   .filter(Boolean)
  //   .filter((item) => item.filePath)
  //   .map((item) => ({
  //     ...item,
  //     slug: normalizeSlugFromSlug(toSlug(item.filePath)),
  //   }))
  //   .filter((item) => item.slug)
  // const sidebarData = buildKbTree(allKB)
  // const index = allKB.findIndex((item) => item.slug === safeSlug)
  // let kbItem = await getFileBySlug('kb', safeSlug)
  // // kbItem = safeMath(kbItem)
  // if (!kbItem) {
  //   return { notFound: true }
  // }
  // const prev = index >= 0 ? allKB[index + 1] || null : null
  // const next = index >= 0 ? allKB[index - 1] || null : null
  // return {
  //   props: {
  //     kbItem: clean(kbItem),
  //     prev: serialize(prev),
  //     next: serialize(next),
  //     sidebarData: serialize(sidebarData),
  //   },
  // }
}

/* -----------------------
 * PAGE
 * ---------------------- */
export default function Page({ kbItem, sidebarData, ...rest }) {
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
