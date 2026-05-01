import { visit } from 'unist-util-visit'

export function remarkTabGroup() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || index == null) return
      if (node.lang !== 'tabgroup') return

      const lines = node.value.split('\n')

      const tabs = []
      let currentTab = null
      let buffer = []

      const flush = () => {
        if (!currentTab) return

        tabs.push({
          label: currentTab,
          lang: currentTab,
          content: buffer.join('\n'),
        })

        currentTab = null
        buffer = []
      }

      for (const line of lines) {
        const trimmed = line.trim()

        const start = trimmed.match(/^:::\s*([a-zA-Z0-9]+)\s*$/)
        if (start) {
          flush()
          currentTab = start[1]
          continue
        }

        if (trimmed === ':::') {
          flush()
          continue
        }

        if (!currentTab) continue

        buffer.push(line)
      }

      flush()

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'TabGroup',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'tabs',
            value: JSON.stringify(tabs),
          },
          {
            type: 'mdxJsxAttribute',
            name: 'key',
            value: 'tabgroup-' + index,
          },
        ],
        children: [],
      }
    })
  }
}
