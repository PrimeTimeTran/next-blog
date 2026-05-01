import { visit } from 'unist-util-visit'

export function remarkCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      const first = node.children?.[0]
      if (!first || first.type !== 'paragraph') return

      const firstText = first.children
        ?.map((c) => c.value || '')
        .join('')
        .trim()

      const match = firstText.match(/^\[!(\w+)\](-)?\s*(.*)$/)
      if (!match) return

      const [, type, collapsed, title] = match

      // ❗ REMOVE ONLY THE FIRST PARAGRAPH (callout header line)
      node.children = node.children.slice(1)

      node.data = node.data || {}

      node.data.hName = 'Callout'
      node.data.hProperties = {
        type,
        title: title || type,
        collapsible: Boolean(collapsed),
        collapsed: Boolean(collapsed),
      }
    })
  }
}
