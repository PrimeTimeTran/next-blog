import { useState } from 'react'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import NewsletterForm from '@/components/NewsletterForm'
import {
  dsa,
  tech,
  maths,
  tools,
  devops,
  trading,
  finance,
  security,
  databases,
  frameworks,
} from '../lib/constants'

const MAX_DISPLAY = 100

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const topics = {
    Trading: trading,
    Finance: finance,
    Tech: tech,
    Databases: databases,
    DevOps: devops,
    Security: security,
    Frameworks: frameworks,
    Maths: maths,
    DSA: dsa,
    Tools: tools,
  }
  const filteredByTopic = Object.entries(topics).reduce((acc, [topicName, topicTags]) => {
    topicTags = topicTags.map((tag) => tag.replace(' ', '-').toLowerCase())
    acc[topicName] = posts.filter(
      (post) =>
        post.tags &&
        post.tags.some((tag) => topicTags.includes(tag.replace(' ', '-').toLowerCase()))
    )
    return acc
  }, {})
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    const term = searchTerm.toLowerCase()
    const results = posts.filter((post) => {
      return (
        (post.title && post.title.toLowerCase().includes(term)) ||
        (post.summary && post.summary.toLowerCase().includes(term)) ||
        (post.tags && post.tags.join(' ').toLowerCase().includes(term)) ||
        (post.body && post.body.toLowerCase().includes(term))
      )
    })
    setFilteredPosts(results)
  }
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <form onSubmit={handleSearch}>
          <input
            placeholder="Search..."
            className="m-2 w-full rounded-md border border-gray-300 p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <div>
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
            Topics
          </h1>
          <div className="my-1 mb-6 flex justify-around space-x-2 overflow-x-auto text-primary-500">
            {Object.entries(filteredByTopic).map(([topicName, topicPosts]) => (
              <button key={topicName} onClick={() => setFilteredPosts(topicPosts)}>
                {topicName} <span className="text-gray-500">({topicPosts.length})</span>,
              </button>
            ))}
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredPosts.length && 'No posts found.'}
          {filteredPosts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-3">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags && tags.map((tag) => <Tag key={tag} text={tag} />)}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
