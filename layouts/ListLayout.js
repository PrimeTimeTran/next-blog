import { useState, useMemo } from 'react'

import Tag from '@/components/Tag'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import Pagination from '@/components/Pagination'

function normalizePost(post) {
  if (!post) return null

  return {
    ...post,
    frontMatter: {
      ...post.frontMatter,
      tags: Array.isArray(post.frontMatter?.tags) ? post.frontMatter.tags : [],
    },
  }
}

export default function ListLayout({
  title,
  posts = [],
  topics,
  tagMap,
  subtitle,
  tagCounts,
  pagination,
  initialDisplayPosts = [],
}) {
  const [searchValue, setSearchValue] = useState('')

  // 1. normalize once
  const safePosts = useMemo(() => {
    return posts.map(normalizePost).filter(Boolean)
  }, [posts])

  // 2. search filter
  const filteredBlogPosts = useMemo(() => {
    const q = searchValue.toLowerCase()

    return safePosts.filter((post) => {
      const fm = post.frontMatter || {}

      const searchContent = [fm.title, fm.summary, (fm.tags || []).join(' ')]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return searchContent.includes(q)
    })
  }, [safePosts, searchValue])

  // 3. final display logic
  let displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts
  displayPosts.sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date))
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            {title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{subtitle}</p>
          {topics}
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((post) => {
            const { slug, date, title, summary, tags = [] } = post.frontMatter || { tags: [] }

            if (title.includes('Opinion:')) {
              console.log({ post })
            }

            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900! dark:text-gray-100!">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags && tags.map((tag) => <Tag key={tag} text={tag} />)}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
