import { createMDXComponents } from '@/components/MDXComponents'

function resolveId(id = '') {
  return id
    .replace(/\.mdx?$/, '')
    .split('/')
    .pop()
}

export function Embed({ id, registry, depth = 0 }) {
  const key = resolveId(id)
  const doc = registry?.[key]

  if (depth > 2) {
    return <div className="text-xs opacity-50">Max embed depth reached</div>
  }

  if (!doc?.mdxSource) {
    return <div className="text-xs opacity-50">Missing embed: {key}</div>
  }

  // IMPORTANT:
  // we assume MDX is already compiled upstream (bundleMDX)
  const EmbeddedContent = doc.CompiledMDX

  if (!EmbeddedContent) {
    return <div className="text-xs opacity-50">Embed not compiled: {key}</div>
  }

  const components = createMDXComponents(registry, true, depth + 1)

  return (
    <div className="my-2 rounded-lg border bg-zinc-50 p-3 dark:bg-zinc-900" data-embed="true">
      <EmbeddedContent components={components} />
    </div>
  )
}
