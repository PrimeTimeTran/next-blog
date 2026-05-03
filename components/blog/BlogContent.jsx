import Comments from '@/components/comments'
import { BlogHeader, BlogFooter } from './blocks'

export default function BlogContent({ frontMatter, children, shrunk }) {
  const { title, date } = frontMatter
  return (
    <main className="min-w-0">
      <BlogHeader title={title} date={date} shrunk={shrunk} />

      <article className="p-4">
        <div className="prose p-2 dark:prose-invert">{children}</div>
        <BlogFooter />
        <Comments />
      </article>
    </main>
  )
}
