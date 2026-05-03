import { useState, useMemo } from 'react'

import { Link } from '@/components/mdx'
import { PageSEO } from '@/components/SEO'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/site-metadata'
import NewsletterForm from '@/components/NewsletterForm'
import SectionContainer from '@/components/SectionContainer'

import { TOPICS, MAX_DISPLAY } from '@/data/constants'

export async function getStaticProps() {
  const { getAllBlogPosts } = await import('@/lib/content/server/blog.server')
  const posts = await getAllBlogPosts()

  return {
    props: {
      posts: posts || [],
    },
  }
}

export default function Home({ posts }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTopic, setActiveTopic] = useState(null)

  // Topic filter
  const filteredPosts = useMemo(() => {
    let result = posts
    if (activeTopic) {
      const topicTags = (TOPICS[activeTopic] ?? []).map((tag) =>
        tag.replace(' ', '-').toLowerCase()
      )

      result = (result ?? [])?.filter(
        (post) =>
          post.tags &&
          post.tags.some((tag) => topicTags.includes(tag.replace(' ', '-').toLowerCase()))
      )
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()

      result = (result ?? [])?.filter(
        (post) =>
          (post.title && post.title.toLowerCase().includes(term)) ||
          (post.summary && post.summary.toLowerCase().includes(term)) ||
          (post.tags && post.tags.join(' ').toLowerCase().includes(term)) ||
          (post.body && post.body.toLowerCase().includes(term))
      )
    }

    return result
  }, [posts, searchTerm, activeTopic])

  return (
    <SectionContainer>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* Posts */}
      <ListLayout
        type2="pages/index.js"
        pagination={1}
        title="Latest"
        posts={filteredPosts}
        initialDisplayPosts={[]}
        subtitle={siteMetadata.description}
        topics={
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              Topics
            </h1>

            <div className="my-1 mb-6 flex space-x-2 overflow-x-auto text-primary-500">
              {(Object.entries(TOPICS) ?? []).map(([topicName, topics]) => (
                <button
                  key={topicName}
                  onClick={() => setActiveTopic(activeTopic === topicName ? null : topicName)}
                  className={activeTopic === topicName ? 'font-bold underline' : ''}
                >
                  {topicName} <span className="text-gray-500">({topics.length})</span>
                </button>
              ))}
            </div>
          </div>
        }
      />

      {/* Footer */}
      <div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium">
            <Link href="/blog" className="text-3xl text-primary-500 hover:text-primary-600">
              All Posts →
            </Link>
          </div>
        )}

        {siteMetadata.newsletter.provider !== '' && (
          <div className="flex justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
