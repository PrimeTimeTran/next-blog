import { visit } from 'unist-util-visit'

export function remarkEmbeds() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return

      const only = node.children?.[0]
      if (!only || only.type !== 'text') return

      const match = only.value?.trim().match(/^!\[\[(.+?)\]\]$/)
      if (!match) return

      const id = match[1].replace(/\.md$/, '')

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'Embed',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'hasEmbed',
            value: true,
          },
          {
            type: 'mdxJsxAttribute',
            name: 'id',
            value: id,
          },
        ],
        children: [],
      }
    })
  }
}
