import Tag from '@/components/Tag'
import Link from '@/components/Link'
import Image from '@/components/Image'
import PageTitle from '@/components/PageTitle'

import { discussUrl, editUrl } from '@/lib/utils'

/* -----------------------------
   Blog Header
------------------------------ */
export function BlogHeader({ title, date, shrunk }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-white p-2 transition-all duration-300 dark:bg-gray-900">
      <PageTitle
        style={{ color: '#E6DB74' }}
        className={[
          'transition-[font-size,line-height,opacity,transform] duration-300 ease-in-out',
          'darl:text-green-300 text-green-600',

          shrunk
            ? 'text-xl font-bold leading-7 opacity-90'
            : 'text-2xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14',
        ].join(' ')}
      >
        {title}
      </PageTitle>

      <div
        className={[
          'overflow-hidden transition-all duration-300 ease-in-out',
          shrunk ? 'max-h-0 -translate-y-1 opacity-0' : 'mt-2 max-h-10 translate-y-0 opacity-100',
        ].join(' ')}
      >
        <time className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(date).toDateString()}
        </time>
      </div>
    </header>
  )
}

/* -----------------------------
   Blog Footer
------------------------------ */
export function BlogFooter({ slug, fileName }) {
  return (
    <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
      <Link href={discussUrl(slug)}>Discuss</Link>
      {' • '}
      <Link href={editUrl(fileName)}>Edit on GitHub</Link>
    </div>
  )
}

/* -----------------------------
   Author Block
------------------------------ */
export function AuthorBlock({ authors = [] }) {
  return (
    <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
      <dt className="sr-only">Authors</dt>
      <dd>
        <ul className="space-y-6 xl:block">
          {authors.map((author, idx) => (
            <li key={idx} className="flex items-center space-x-3">
              {author.frontMatter?.avatar && (
                <Image
                  src={author.frontMatter.avatar}
                  width={38}
                  height={38}
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
              )}
              <div className="text-sm">
                <div className="font-medium text-gray-900 dark:text-gray-100">{author.name}</div>
                {author.twitter && (
                  <Link href={author.twitter} className="text-primary-500">
                    @{author.twitter.split('/').pop()}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  )
}

/* -----------------------------
   Tag Block
------------------------------ */
export function TagBlock({ tags = [] }) {
  if (!tags.length) return null

  return (
    <div className="xl:py-8">
      <h2 className="text-xs uppercase tracking-wide text-gray-500">Tags</h2>
      <div className="flex flex-wrap">
        {tags.filter(Boolean).map((tag, idx) => (
          <Tag key={idx} text={tag} />
        ))}
      </div>
    </div>
  )
}

/* -----------------------------
   Nav Block (prev/next)
------------------------------ */
export function NavBlock({ prev, next }) {
  if (!prev && !next) return null

  return (
    <div className="space-y-6 xl:py-8">
      {prev && (
        <div>
          <h2 className="text-xs uppercase text-gray-500">Previous</h2>
          <Link href={`/blog/${prev.slug}`} className="text-primary-500">
            {prev.title}
          </Link>
        </div>
      )}

      {next && (
        <div>
          <h2 className="text-xs uppercase text-gray-500">Next</h2>
          <Link href={`/blog/${next.slug}`} className="text-primary-500">
            {next.title}
          </Link>
        </div>
      )}
    </div>
  )
}

/* -----------------------------
   Back To Blog
------------------------------ */
export function BackToBlog() {
  return (
    <div className="pt-4 xl:pt-8">
      <Link href="/blog" className="text-primary-500">
        ← Back to blog
      </Link>
    </div>
  )
}
