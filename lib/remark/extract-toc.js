import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import GithubSlugger from 'github-slugger'

export function extractTOC() {
  return (tree, _) => {
    const headings = []
    const slugger = new GithubSlugger()

    visit(tree, 'heading', (node) => {
      const value = toString(node)

      if (!value) return

      const depth = Math.max(0, node.depth - 1)

      headings.push({
        depth,
        value,
        url: `#${slugger.slug(value)}`,
      })
    })

    tree.data = tree.data || {}
    tree.data.toc = headings
  }
}
