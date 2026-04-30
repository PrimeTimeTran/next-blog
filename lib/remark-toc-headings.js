import { visit } from 'unist-util-visit'

export default function remarkTocHeading() {
  return (tree) => {
    const headings = []

    // 1. collect
    visit(tree, 'heading', (node) => {
      const text = node.children
        ?.filter((c) => c.type === 'text')
        .map((c) => c.value)
        .join(' ')

      if (!text) return

      headings.push({
        depth: node.depth,
        value: text,
      })
    })

    // 2. attach AFTER traversal (safe)
    tree.data = tree.data || {}
    tree.data.toc = headings
  }
}
