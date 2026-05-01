import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { createMDXComponents } from '@/components/MDXComponents'

function resolveId(id) {
  return id.replace(/\.md$/, '').split('/').pop()
}

export function Embed({ id, registry, depth = 0 }) {
  const key = resolveId(id)
  const doc = registry?.[key]

  const MDXComponent = useMemo(() => {
    if (!doc?.mdxSource) return null

    const Comp = getMDXComponent(doc.mdxSource)

    return function Wrapped() {
      return <Comp components={createMDXComponents(registry, true, depth + 1)} />
    }
  }, [doc?.mdxSource, registry, depth])

  if (depth > 2) {
    return <div className="text-xs opacity-50">Max embed depth reached</div>
  }

  if (!doc?.mdxSource || !MDXComponent) {
    return <div className="text-xs opacity-50">Missing embed: {key}</div>
  }

  return (
    <div className="my-2 rounded-lg border bg-zinc-50 p-3 dark:bg-zinc-900" data-embed="true">
      <MDXComponent />
    </div>
  )
}
