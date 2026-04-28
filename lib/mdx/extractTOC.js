import { remark } from 'remark'
import GithubSlugger from 'github-slugger'
import remarkParse from 'remark-parse'
import { toString } from 'mdast-util-to-string'

const slugger = new GithubSlugger()

export function extractTOC(source) {
  const tree = remark().use(remarkParse).parse(source)

  return tree.children
    .filter((n) => n.type === 'heading')
    .map((node) => {
      const value = toString(node)

      return {
        depth: node.depth,
        value,
        url: `#${slugger.slug(value)}`,
      }
    })
}
