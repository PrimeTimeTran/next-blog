import { visit } from 'unist-util-visit'

function processMeta(metaString) {
  // Default state
  const result = {
    highlight: [],
    cleanString: metaString || '',
    showLineNumbers: false,
  }

  if (typeof metaString !== 'string') return result

  // 1. Check for showLineNumbers flag
  result.showLineNumbers = /\bshowLineNumbers\b/.test(metaString)

  // 2. Find and extract the braces portion: e.g., "{5-7}"
  const braceRegex = /\{(.*?)\}/
  const match = metaString.match(braceRegex)

  if (match) {
    const inner = match[1] // The stuff inside: "5-7"

    // Generate the array of numbers
    result.highlight = inner.split(',').flatMap((range) => {
      const part = range.trim()
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(Number)
        return Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i)
      }
      return [Number(part)]
    })

    // 3. STRIP the braces from the string
    // This replaces the "{...}" and any surrounding extra whitespace with a single space
    result.cleanString = metaString.replace(braceRegex, '').replace(/\s\s+/g, ' ').trim()
  }

  return result
}

function parseCodeMeta(lang = '', node) {
  const meta = {
    lang,
    fileName: null,
    highlight: [],
    showLineNumbers: false,
  }

  if (lang.includes(':')) {
    const [l, ...rest] = lang.split(':')
    meta.lang = l
    meta.fileName = rest.join(':')
  }

  const hl = lang.match(/\{([^}]+)\}/)
  if (hl) {
    meta.highlight = hl[1].split(',').flatMap((p) => {
      if (p.includes('-')) {
        const [a, b] = p.split('-').map(Number)
        return Array.from({ length: b - a + 1 }, (_, i) => a + i)
      }
      return [Number(p)]
    })
  }
  meta.lang = lang.includes(':') ? lang.split(':')[0] : lang
  meta.showLineNumbers = /\bshowLineNumbers\b/.test(node.meta)

  return { ...meta, ...processMeta(node.meta) }
}

export function remarkCodeMeta() {
  return (tree) =>
    visit(tree, 'code', (node) => {
      const meta = parseCodeMeta(node.lang || '', node)
      node.lang = meta.lang || 'text'
      node.data = node.data || {}
      // 🔥 THIS is what MDX actually reads
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        codeMeta: JSON.stringify(meta),
      }
    })
}
