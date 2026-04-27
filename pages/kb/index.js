export async function getStaticProps() {
  const { getFileBySlug } = await import('@/lib/mdx')

  const kbItem = await getFileBySlug('kb', 'kb') // maps kb.md

  return {
    props: {
      kbItem,
    },
  }
}

export default function KBIndex({ kbItem }) {
  return (
    <div>
      {/* render your kb.md */}
      <h1>{kbItem.frontMatter.title}</h1>
    </div>
  )
}
