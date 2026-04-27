import { getFiles, formatSlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

function serialize(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/* -----------------------
 * STATIC PATHS
 * ---------------------- */
export async function getStaticPaths() {
  const kbFiles = getFiles('kb').filter(Boolean)

  const paths = kbFiles.map((file) => {
    const slug = formatSlug(file)

    return {
      params: {
        slug: slug.split('/'),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

/* -----------------------
 * STATIC PROPS
 * ---------------------- */
export async function getStaticProps({ params }) {
  const { getAllFilesFrontMatter, getFileBySlug, buildKbTree, formatSlug } = await import(
    '@/lib/mdx'
  )

  const slug = (params?.slug || []).join('/')

  const rawKB = await getAllFilesFrontMatter('kb')

  const allKB = rawKB.filter(Boolean).map((item) => ({
    ...item,
    slug: formatSlug(item.slug || item.filePath),
  }))

  const sidebarData = buildKbTree(allKB)

  const index = allKB.findIndex((item) => item.slug === slug)

  const kbItem = await getFileBySlug('kb', slug)

  const prev = index >= 0 ? allKB[index + 1] || null : null
  const next = index >= 0 ? allKB[index - 1] || null : null

  const authorList = kbItem?.frontMatter?.authors || []

  const authorDetails = await Promise.all(
    authorList.map(async (author) => {
      const res = await getFileBySlug('authors', [author])
      return res.frontMatter
    })
  )

  return {
    props: {
      kbItem,
      authorDetails,
      prev,
      next,
      sidebarData: serialize(sidebarData),
    },
  }
}

/* -----------------------
 * PAGE
 * ---------------------- */
export default function Page({ kbItem, sidebarData, ...rest }) {
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
