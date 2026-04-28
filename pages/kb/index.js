export async function getStaticProps() {
  const { safeMath } = await import('@/lib/mdx/safeMath')
  const { getFileBySlug } = await import('@/lib/mdx')

  let kbItem = await getFileBySlug('kb', 'kb') // maps kb.md
  // kbItem = safeMath(kbItem)

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
