import TableOfContents from '@/components/TOC'

export default function KBLayout({ children, toc }) {
  return (
    <div className="min-h-screen w-full bg-red-500">
      <div className="grid w-full grid-cols-1 lg:grid-cols-12">
        {/* LEFT SIDEBAR */}
        <aside className="hidden border-r border-zinc-200 bg-white lg:col-span-3 lg:block">
          <div className="sticky top-0 h-screen p-4">
            <p className="mb-2 font-semibold">Sidebar</p>
            {/* nav links */}
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
