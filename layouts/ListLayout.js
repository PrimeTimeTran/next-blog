import { useState, useMemo } from 'react'

import Tag from '@/components/Tag'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formate-date'
import Pagination from '@/components/Pagination'
import { buildContentUrl } from '@/lib/content/core/url'

export default function ListLayout({
  title,
  topics,
  subtitle,
  pagination,
  posts = [],
  initialDisplayPosts = [],
}) {
  const [searchValue, setSearchValue] = useState('')

  const safePosts = useMemo(() => {
    return posts.map((post) => ({
      ...post,
      date: post.date || null,
      title: post.title || '',
      summary: post.summary || '',
      tags: Array.isArray(post.tags) ? post.tags : [],
    }))
  }, [posts])

  const filteredBlogPosts = useMemo(() => {
    const term = searchValue.toLowerCase()

    return safePosts.filter((post) => {
      if (!term) return true

      const searchContent = post.title + ' ' + post.summary + ' ' + post.tags.join(' ')

      return searchContent.toLowerCase().includes(term)
    })
  }, [safePosts, searchValue])

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const sortedPosts = useMemo(() => {
    return [...displayPosts].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
  }, [displayPosts])

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            {title}
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400">{subtitle}</p>

          {topics}

          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>

        <ul>
          {!sortedPosts.length && <p className="py-6 text-gray-500">No posts found.</p>}

          {sortedPosts.map((post) => {
            const { slug, date, title, summary, tags = [] } = post

            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dd className="text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>

                  <div className="space-y-3 xl:col-span-3">
                    <h3 className="text-2xl font-bold tracking-tight">
                      <Link
                        href={buildContentUrl('blog', slug)}
                        className="text-gray-900 dark:text-gray-100"
                      >
                        {title}
                      </Link>
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>

                    <p className="text-gray-500 dark:text-gray-400">{summary}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {pagination?.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
