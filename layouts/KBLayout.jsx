import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'

import KBSidebar from '@/components/KBSidebar'
import TableOfContents from '@/components/TableOfContents'

const SCROLL_KEY = 'kb-sidebar-scroll'
const STORAGE_KEY = 'kb-sidebar-open-map'

export default function KBLayout({ toc, children, embedded = false, outline }) {
  const router = useRouter()
  const [openMap, setOpenMap] = useState({})
  const [hydrated, setHydrated] = useState(false)
  const scrollRef = useRef(null)

  // restore scroll on mount / route change
  useEffect(() => {
    const saved = localStorage.getItem(SCROLL_KEY)
    if (!saved) return

    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = Number(saved)
      }
    })
  }, [router.asPath])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      localStorage.setItem(SCROLL_KEY, el.scrollTop)
    }

    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!router.isReady) return

    const saved = localStorage.getItem(STORAGE_KEY)
    const savedMap = saved ? JSON.parse(saved) : {}

    const path = router.asPath.replace('/kb/', '').split('/')?.filter(Boolean)

    const routeMap = {}

    let current = ''

    for (const segment of path) {
      current = current ? `${current}/${segment}` : segment
      routeMap[current] = true
    }

    setOpenMap({
      ...savedMap, // user overrides after
      ...routeMap, // route ALWAYS wins for expansion
    })

    setHydrated(true)
  }, [router.isReady, router.asPath])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(openMap))
  }, [openMap])

  return (
    <div className={`min-h-screen w-full ${embedded ? 'embedded' : ''}`}>
      <div className="grid w-full grid-cols-1 lg:grid-cols-12">
        {/* LEFT SIDEBAR */}
        {!embedded && (
          <aside className="col-span-2 hidden min-w-0 lg:block">
            <div className="sticky top-0 h-screen overflow-y-auto border-r border-zinc-200">
              {hydrated && (
                <div className="animate-in fade-in duration-200">
                  <KBSidebar node={outline} openMap={openMap} setOpenMap={setOpenMap} />
                </div>
              )}
            </div>
          </aside>
        )}

        {/* MAIN */}
        <main className="col-span-1 min-w-0 lg:col-span-7">
          <div className={`prose p-2 dark:prose-invert ${embedded ? 'kb-embed' : 'prose-md'} `}>
            {children}
          </div>
        </main>

        {/* RIGHT TOC */}
        {!embedded && (
          <aside className="hidden min-w-0 border-l border-zinc-200 text-zinc-900 dark:border-zinc-800 dark:text-zinc-100 xl:col-span-3 xl:block">
            <div className="sticky top-0 h-screen w-full overflow-y-auto overflow-x-hidden px-4 py-4">
              <TableOfContents toc={toc ?? []} />
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
