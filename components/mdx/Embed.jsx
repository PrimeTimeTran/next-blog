import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { createMDXComponents } from '@/mdx'
import { useRegistry } from '@/lib/hooks/useRegistry'

export function Embed({ id, depth = 0 }) {
  const registry = useRegistry()

  const key = id
    .replace(/\.mdx?$/, '')
    .split('/')
    .pop()
  const doc = registry?.[key]

  if (!doc?.mdxSource) {
    return <div className="text-xs opacity-50">Missing embed: {key}</div>
  }

  const Component = useMemo(() => getMDXComponent(doc.mdxSource), [doc.mdxSource])

  const components = createMDXComponents(registry, true, depth + 1)

  return (
    <div className="my-2 rounded-lg border bg-zinc-50 p-3 dark:bg-zinc-900">
      <Component components={components} />
    </div>
  )
}
