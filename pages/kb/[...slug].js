import { getFiles, formatSlug } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

export async function getStaticPaths() {
  const kbFiles = getFiles('kb')

  return {
    paths: kbFiles.map((file) => ({
      params: {
        slug: formatSlug(file).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { getAllFilesFrontMatter, getFileBySlug, buildKbTree, formatSlug } = await import(
    '@/lib/mdx'
  )

  const slug = params.slug.join('/')

  const allKB = await getAllFilesFrontMatter('kb')

  console.log('ALL KB:', allKB)

  const sidebarData = buildKbTree(allKB)

  function serialize(obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  const index = allKB.findIndex((item) => formatSlug(item.slug) === slug)

  const prev = allKB[index + 1] || null
  const next = allKB[index - 1] || null

  const kbItem = await getFileBySlug('kb', slug)

  // Optional: authors (if you want same system)
  const authorList = kbItem.frontMatter.authors || []
  const authorDetails = await Promise.all(
    authorList.map(async (author) => {
      const res = await getFileBySlug('authors', [author])
      return res.frontMatter
    })
  )

  // Optional: generate RSS for KB (usually not needed)
  // You can remove this if KB isn't blog-like
  // if (allKB.length > 0) {
  //   const rss = generateRss(allKB)
  //   fs.writeFileSync('./public/kb-feed.xml', rss)
  // }

  return {
    props: {
      kbItem,
      authorDetails,
      prev,
      next,
      sidebarData: serialize(sidebarData), // Ensure it's serializable
    },
  }
}

export default function Page({ kbItem, sidebarData, ...rest }) {
  console.log('KB Item Front Matter:', kbItem)
  const layout = kbItem.frontMatter.layout || 'KBLayout'

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
