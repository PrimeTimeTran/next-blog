import { BlogHeader, BlogFooter } from './blocks'
import Comments from '@/components/comments'

export default function BlogContent({ frontMatter, children, shrunk }) {
  const { title, date } = frontMatter

  return (
    <main className="min-w-0">
      <BlogHeader title={title} date={date} shrunk={shrunk} />

      <article className="p-4">
        <div className="prose max-w-none dark:prose-dark">{children}</div>

        <BlogFooter />
        <Comments />
      </article>
    </main>
  )
}
