import { remark } from 'remark'
import remarkParse from 'remark-parse'

export function extractTOC(source) {
  if (!source || typeof source !== 'string') return []

  const tree = remark().use(remarkParse).parse(source)

  const toc = []

  for (const node of tree.children) {
    if (node.type === 'heading') {
      const text =
        node.children
          ?.filter((c) => c.type === 'text')
          ?.map((c) => c.value)
          ?.join('') || ''

      const slug = slugify(text)

      toc.push({
        value: text,
        depth: node.depth,
        slug,
        url: `#${slug}`, // ✅ THIS FIXES YOUR ERROR
      })
    }
  }

  return toc
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}
