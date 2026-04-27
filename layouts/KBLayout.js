import { useState, useEffect } from 'react'
import TableOfContents from '@/components/TOC'
import KBSidebar from '@/components/KBSidebar'

const STORAGE_KEY = 'kb-sidebar-open-map'

export default function KBLayout({ children, toc, sidebarData }) {
  const [hydrated, setHydrated] = useState(false)
  const [openMap, setOpenMap] = useState({})

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved) {
      setOpenMap(JSON.parse(saved))
    }

    setHydrated(true)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(openMap))
  }, [openMap])

  return (
    <div className="min-h-screen w-full">
      <div className="grid w-full grid-cols-1 lg:grid-cols-12">
        {/* LEFT SIDEBAR */}
        <aside className="col-span-3 hidden lg:block">
          <div className="sticky top-0 h-screen overflow-y-auto border-r border-zinc-200 bg-white">
            {hydrated && (
              <div className="animate-in fade-in duration-200">
                <KBSidebar node={sidebarData} openMap={openMap} setOpenMap={setOpenMap} />
              </div>
            )}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-span-1 lg:col-span-6">
          <div className="prose prose-lg max-w-none bg-white p-6">{children}</div>
        </main>

        {/* RIGHT TOC */}
        <aside className="hidden border-l border-zinc-200 bg-white pl-12 xl:col-span-3 xl:block">
          <div className="sticky top-0 h-screen">
            <TableOfContents toc={toc ?? []} />
          </div>
        </aside>
      </div>
    </div>
  )
}
