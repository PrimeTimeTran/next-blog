import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SidebarNode({ node = {}, openMap, setOpenMap }) {
  if (!node || typeof node !== 'object') return null

  return (
    <ul className="pl-3">
      {Object.entries(node).map(([key, value]) => (
        <SidebarItem
          key={value?.__meta?.slug || key}
          nodeKey={key}
          value={value}
          openMap={openMap}
          setOpenMap={setOpenMap}
        />
      ))}
    </ul>
  )
}

export function SidebarItem({ nodeKey, value, openMap, setOpenMap }) {
  const router = useRouter()

  const hasChildren = value?.__children && Object.keys(value.__children).length > 0

  const meta = value?.__meta

  const slug = meta?.slug
  const href = slug ? `/kb/${slug}` : null

  const id = slug || nodeKey

  const normalize = (p = '') =>
    p
      .split('?')[0]
      .replace(/\/+$/, '')
      .replace(/^\/kb\//, '')

  const current = normalize(router.asPath)
  const target = slug || ''

  const isInPath = target && (current === target || current.startsWith(target + '/'))

  const open = openMap[id] ?? isInPath

  const toggle = () => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !(prev[id] ?? isInPath),
    }))
  }

  return (
    <li className="select-none">
      <div className="flex items-center gap-2 py-1">
        {hasChildren ? (
          <button onClick={toggle} className="flex items-center gap-1 text-xs text-zinc-500">
            <span className="text-[20px]">{open ? '▾' : '▸'}</span>
            <span>📁</span>
          </button>
        ) : (
          <span className="text-xs text-zinc-400">📄</span>
        )}

        {href ? (
          // eslint-disable-next-line @next/next/link-passhref
          <Link href={href}>
            <span
              className={`text-sm hover:text-blue-600 ${
                router.asPath === href ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {meta?.frontMatter?.title || nodeKey}
            </span>
          </Link>
        ) : (
          <span className="text-sm">{nodeKey}</span>
        )}
      </div>

      {hasChildren && open && (
        <div className="border-l border-zinc-200">
          <SidebarNode node={value.__children} openMap={openMap} setOpenMap={setOpenMap} />
        </div>
      )}
    </li>
  )
}
