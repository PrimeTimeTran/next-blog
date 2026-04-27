import slugify from 'slugify'
import { remark } from 'remark'
import remarkParse from 'remark-parse'
import { visit } from 'unist-util-visit'

export function buildTree(headings) {
  const root = []
  const stack = []

  for (const h of headings) {
    const node = { ...h, children: [] }

    while (stack.length && stack[stack.length - 1].level >= node.level) {
      stack.pop()
    }

    if (stack.length === 0) {
      root.push(node)
      stack.push(node)
    } else {
      stack[stack.length - 1].children.push(node)
      stack.push(node)
    }
  }

  return root
}

export function extractHeadings(markdown) {
  const tree = remark().use(remarkParse).parse(markdown)

  const headings = []

  visit(tree, 'heading', (node) => {
    const text = node.children
      .filter((n) => n.type === 'text')
      .map((n) => n.value)
      .join('')

    headings.push({
      level: node.depth,
      text,
      id: slugify(text, { lower: true, strict: true }),
    })
  })

  return buildTree(headings)
}
