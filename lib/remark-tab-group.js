import { visit } from 'unist-util-visit'

function getLineNumbers(tokens) {
  const meta = {
    highlight: [],
  }
  for (const t of tokens) {
    if (t.startsWith('{') && t.endsWith('}')) {
      const inner = t.slice(1, -1)

      meta.highlight = inner.split(',').flatMap((p) => {
        if (p.includes('-')) {
          const [a, b] = p.split('-').map(Number)
          return Array.from({ length: b - a + 1 }, (_, i) => a + i)
        }
        return [Number(p)]
      })
    }
    return meta
  }
}

function parseHeader(lang, rest = '') {
  const meta = {
    lang,
    showLineNumbers: false,
    highlight: [],
  }

  // IMPORTANT: preserve grouped tokens like "{1-5,5-10}"
  const tokens = rest.match(/\{[^}]+\}|showLineNumbers|\S+/g) || []

  for (const t of tokens) {
    if (t === 'showLineNumbers') {
      meta.showLineNumbers = true
      continue
    }

    if (t.startsWith('{') && t.endsWith('}')) {
      const inner = t.slice(1, -1)

      meta.highlight = inner.split(',').flatMap((p) => {
        if (p.includes('-')) {
          const [a, b] = p.split('-').map(Number)
          return Array.from({ length: b - a + 1 }, (_, i) => a + i)
        }
        return [Number(p)]
      })
    }
  }

  return meta
}

export function remarkTabGroup() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'tabgroup') return
      if (!parent || index == null) return
      const lines = node.value.split(/\r?\n/)
      const tabs = []
      let currentTab = null
      let buffer = []

      let currentMeta = {}
      let groupMeta = {
        showLineNumbers: false,
        highlight: [],
      }

      const flush = () => {
        if (!currentTab) return
        const mergedMeta = {
          showLineNumbers: currentMeta.showLineNumbers ?? groupMeta.showLineNumbers,

          highlight: Array.from(
            new Set([...(groupMeta.highlight || []), ...(currentMeta.highlight || [])])
          ),
        }

        tabs.push({
          lang: currentTab,
          label: currentTab,
          content: buffer.join('\n'),
          ...mergedMeta,
          showLineNumbers: true,
        })

        buffer = []
        currentTab = null
        currentMeta = {}
      }

      for (const raw of lines) {
        const line = raw // IMPORTANT: DO NOT TRIM

        // -------------------------
        // GROUP HEADER (only once)
        // -------------------------
        const groupMatch =
          line.match(/^!{3,}tabgroup(?:\s+(.*))?$/) || line.match(/^```tabgroup(?:\s+(.*))?$/)

        if (groupMatch) {
          groupMeta = parseHeader('tabgroup', groupMatch[1] || '')
          continue
        }

        // -------------------------
        // TAB START
        // -------------------------
        const startMatch = line.match(/^!{5,}([a-zA-Z0-9+-]+)\s*([^]*)$/)

        if (startMatch) {
          flush()

          const meta = parseHeader(startMatch[1], startMatch[2])

          currentTab = meta.lang
          currentMeta = meta

          continue
        }

        // -------------------------
        // TAB END
        // -------------------------
        const endMatch = line.match(/^([a-zA-Z0-9+-]+)!{5,}$/)

        if (endMatch) {
          flush()
          continue
        }

        // -------------------------
        // CODE CONTENT
        // -------------------------
        if (!currentTab) continue

        buffer.push(raw)
      }

      flush()

      console.log(tabs)

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'TabGroup',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'tabs',
            value: JSON.stringify(tabs),
          },
        ],
        children: [],
        data: { _xdmExplicitJsx: true },
      }
    })
  }
}
