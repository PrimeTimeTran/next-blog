import { CodeBlock } from '@/components/mdx/CodeBlock'
import { TabGroup } from '@/components/mdx/TabGroup'

export function CodeOrTab({ node }) {
  if (node.data?.tabGroup) {
    return <TabGroup tabs={node.data.tabGroup} />
  }

  return <CodeBlock node={node} />
}
