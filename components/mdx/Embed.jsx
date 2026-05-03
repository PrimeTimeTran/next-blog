import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { createMDXComponents } from '@/mdx'
import { useRegistry } from '@/lib/hooks/useRegistry'

export function Embed({ id, depth = 0, visited = new Set() }) {
  const registry = useRegistry()

  const key = id
    .replace(/\.mdx?$/, '')
    .split('/')
    .pop()

  const doc = registry?.[key]

  const MAX_DEPTH = 2

  // 🔒 derive safety flags BEFORE render logic
  const isCircular = visited.has(key)
  const isTooDeep = depth >= MAX_DEPTH
  const missing = !doc?.mdxSource

  const Component = useMemo(() => {
    if (!doc?.mdxSource) return null
    return getMDXComponent(doc.mdxSource)
  }, [doc?.mdxSource])

  const nextVisited = useMemo(() => {
    const next = new Set(visited)
    next.add(key)
    return next
  }, [visited, key])

  const components = useMemo(() => {
    return createMDXComponents(registry, true, depth + 1, nextVisited)
  }, [registry, depth, nextVisited])

  // 🔒 safe early returns AFTER hooks
  if (missing) {
    return <div className="text-xs opacity-50">Missing embed: {key}</div>
  }

  if (isCircular) {
    return <div className="text-xs opacity-50">Circular embed blocked: {key}</div>
  }

  if (isTooDeep) {
    return <div className="text-xs opacity-50">Max embed depth reached</div>
  }

  return (
    <div className="my-2 rounded-lg border bg-zinc-50 p-3 dark:bg-zinc-900">
      <Component components={components} />
    </div>
  )
}
