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
  misc,
  maths,
  tools,
  devops,
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
    Finance: finance,
    Tech: tech,
    Databases: databases,
    DevOps: devops,
    Security: security,
    Frameworks: frameworks,
    Maths: maths,
    DSA: dsa,
    // Misc: misc,
    Tools: tools,
    // All: [
    //   ...finance,
    //   ...tech,
    //   ...databases,
    //   ...devops,
    //   ...security,
    //   ...frameworks,
    //   ...maths,
    //   ...dsa,
    //   ...misc,
    //   ...tools,
    // ],
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
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-14">
            Topics
          </h1>
          <div className="my-1 mb-6 flex justify-around space-x-2 text-primary-500">
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
