import { useScrollSpy } from '@/lib/hooks/useScrollSpy'
import { getHeadingClass } from '@/lib/theme'

function TOCItem({ item, activeId }) {
  const isActive = activeId === item.url

  const level = Math.max(0, (item.depth ?? 1) - 1)
  const colorClass = getHeadingClass(level)

  return (
    <div
      className={`
        min-w-0 border-l-2 transition
        ${isActive ? 'border-blue-500 bg-blue-500/10' : 'border-transparent'}
        hover:bg-white/5
      `}
      style={{ paddingLeft: `${level * 16}px` }}
    >
      <a
        href={item.url}
        className={`
          block w-full truncate px-2 py-1 transition

          ${colorClass}
          ${isActive ? 'font-bold' : 'opacity-70'}
        `}
      >
        {item.value}
      </a>
    </div>
  )
}
export default function TableOfContents({ toc = [] }) {
  const activeId = useScrollSpy(toc)

  if (toc.length === 0) {
    return <div className="text-sm text-gray-500">No table of contents available.</div>
  }

  return (
    <nav className="text-sm">
      {toc.map((item) => (
        <TOCItem key={item.url} item={item} activeId={activeId} />
      ))}
    </nav>
  )
}
