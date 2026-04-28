import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'

const SCROLL_KEY = 'kb-sidebar-scroll'

export default function SidebarNode({ node = [], openMap, setOpenMap }) {
  if (!Array.isArray(node)) return null

  return (
    <ul className="pl-1">
      {node.map((item) => (
        <SidebarItem
          key={item.slug || item.name}
          item={item}
          openMap={openMap}
          setOpenMap={setOpenMap}
        />
      ))}
    </ul>
  )
}

export function SidebarItem({ item, openMap, setOpenMap }) {
  const router = useRouter()

  const hasChildren = item.children?.length > 0
  const href = item.slug ? `/kb/${item.slug}` : null

  const id = item.slug || item.name
  const open = openMap[id] ?? false

  const toggle = () => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <li className="select-none">
      <div className="flex w-full items-center gap-2 rounded px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
        {/* expand/collapse */}
        {hasChildren ? (
          <button onClick={toggle} className="flex items-center gap-1 text-xs text-zinc-500">
            <span>{open ? '▾' : '▸'}</span>
            <span>📁</span>
          </button>
        ) : (
          <span className="text-xs text-zinc-400">📄</span>
        )}

        {/* full-width clickable link */}
        {href ? (
          <Link scroll={false} href={href} className="flex flex-1 items-center">
            <span
              className={`w-full text-sm ${
                router.asPath === href
                  ? 'font-semibold text-blue-600'
                  : 'text-zinc-700 dark:text-zinc-300'
              }`}
            >
              {item.name}
            </span>
          </Link>
        ) : (
          <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.name}</span>
        )}
      </div>

      {hasChildren && open && (
        <div className="ml-2 border-l border-zinc-200">
          <SidebarNode node={item.children} openMap={openMap} setOpenMap={setOpenMap} />
        </div>
      )}
    </li>
  )
}
