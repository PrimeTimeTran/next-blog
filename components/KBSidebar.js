import { useEffect, useMemo, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SidebarNode({ node = {} }) {
  if (!node || typeof node !== 'object') return null

  return (
    <ul className="pl-3">
      {Object.entries(node).map(([key, value]) => (
        <SidebarItem key={key} nodeKey={key} value={value} />
      ))}
    </ul>
  )
}

export function SidebarItem({ nodeKey, value }) {
  const router = useRouter()

  const hasChildren = value?.__children && Object.keys(value.__children).length > 0

  const meta = value?.__meta

  const slug = meta?.slug || meta?.frontMatter?.slug || null
  const href = slug ? `/kb/${slug}` : null

  // --- route matching (fixed)
  const currentSegments = router.asPath.split('/').filter(Boolean)
  const itemSegments = useMemo(() => href?.split('/').filter(Boolean), [href])

  const isInPath = itemSegments && itemSegments.every((seg, i) => currentSegments[i] === seg)

  const isActive = href === router.asPath

  // --- open state
  const [open, setOpen] = useState(isInPath)

  useEffect(() => {
    if (isInPath) setOpen(true)
  }, [isInPath])

  return (
    <li className="select-none">
      <div className="flex items-center gap-2 py-1">
        {/* EXPAND BUTTON + ICON */}
        {hasChildren ? (
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1 text-xs text-zinc-500"
          >
            <span className="text-[10px]">{open ? '▾' : '▸'}</span>
            <span>📁</span>
          </button>
        ) : (
          <span className="text-xs text-zinc-400">📄</span>
        )}

        {/* LINK OR LABEL */}
        {href ? (
          <Link href={href}>
            <span
              className={`text-sm hover:text-blue-600 ${
                isActive ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {meta?.frontMatter?.title || nodeKey}
            </span>
          </Link>
        ) : (
          <span className="text-sm font-medium">{meta?.frontMatter?.title || nodeKey}</span>
        )}
      </div>

      {/* CHILDREN */}
      {hasChildren && open && (
        <div className="ml-4 border-l border-zinc-200 pl-3">
          <SidebarNode node={value.__children} />
        </div>
      )}
    </li>
  )
}
