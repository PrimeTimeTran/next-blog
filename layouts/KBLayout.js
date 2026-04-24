import TableOfContents from '@/components/TOC'
import SidebarNode from '@/components/KBSidebar'

export default function KBLayout({ children, toc, sidebarData }) {
  console.log('SIDEBAR DATA:', JSON.stringify(sidebarData, null, 2))
  return (
    <div className="min-h-screen w-full">
      <div className="grid w-full grid-cols-1 lg:grid-cols-12">
        {/* LEFT SIDEBAR */}
        <aside className="col-span-3 hidden lg:block">
          <div className="sticky top-0 h-screen overflow-y-auto border-r border-zinc-200 bg-white p-4">
            <SidebarNode node={sidebarData} />
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-span-1 lg:col-span-6">
          <div className="prose prose-lg max-w-none bg-white p-6">{children}</div>
        </main>

        {/* RIGHT TOC */}
        <aside className="hidden border-l border-zinc-200 bg-white xl:col-span-3 xl:block">
          <div className="sticky top-0 h-screen p-4">
            <TableOfContents toc={toc ?? []} />
          </div>
        </aside>
      </div>
    </div>
  )
}
