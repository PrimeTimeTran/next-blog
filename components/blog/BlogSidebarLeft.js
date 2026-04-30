import { TagBlock, NavBlock, BackToBlog, AuthorBlock } from './blocks'

export default function BlogSidebarLeft({ authorDetails, tags, prev, next, slug, fileName }) {
  return (
    <aside className="hidden border-r xl:sticky xl:top-0 xl:block xl:h-screen xl:overflow-y-auto">
      <div className="p-6">
        <AuthorBlock authors={authorDetails} />

        <TagBlock tags={tags} />

        <NavBlock prev={prev} next={next} />

        <BackToBlog />
      </div>
    </aside>
  )
}
