import TableOfContents from '@/components/TableOfContents'

export default function BlogSidebarRight({ toc }) {
  return (
    <aside className="hidden border-l xl:sticky xl:top-0 xl:block xl:h-screen xl:overflow-y-auto">
      <div className="p-6">
        <TableOfContents toc={toc ?? []} />
      </div>
    </aside>
  )
}
