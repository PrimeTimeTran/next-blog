import { useScrollSpy } from '@/lib/hooks/useScrollSpy'

function TOCItem({ item, activeId }) {
  const isActive = activeId === item.url

  return (
    <div style={{ marginLeft: `${(item.depth - 2) * 24}px` }}>
      <a
        href={item.url}
        className={
          'block py-1 transition ' + (isActive ? 'font-semibold text-blue-500' : 'text-gray-500')
        }
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
