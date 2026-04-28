import { remark } from 'remark'
import remarkParse from 'remark-parse'
import matter from 'gray-matter'

export function extractTOC(source) {
  const { content } = matter(source)

  const tree = remark().use(remarkParse).parse(content)

  const headings = []

  function walk(node) {
    if (node.type === 'heading') {
      const text = node.children?.map((child) => child.value || '').join('') || ''

      headings.push({
        depth: node.depth,
        value: text,
        url: '#' + text.toLowerCase().replace(/[^\w]+/g, '-'),
      })
    }

    if (node.children) {
      node.children.forEach(walk)
    }
  }

  walk(tree)

  return headings
}
