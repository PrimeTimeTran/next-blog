import { useState, useMemo } from 'react'

import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import NewsletterForm from '@/components/NewsletterForm'
import SectionContainer from '@/components/SectionContainer'
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

const MAX_DISPLAY = 300

const TOPICS = {
  Tech: tech,
  Finance: finance,
  Trading: trading,
  DSA: dsa,
  Frameworks: frameworks,
  Databases: databases,
  DevOps: devops,
  Security: security,
  Maths: maths,
  Tools: tools,
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTopic, setActiveTopic] = useState(null)

  const filteredPosts = useMemo(() => {
    let result = posts

    // Topic filter
    if (activeTopic) {
      const topicTags = TOPICS[activeTopic].map((tag) => tag.replace(' ', '-').toLowerCase())

      result = result.filter(
        (post) =>
          post.tags &&
          post.tags.some((tag) => topicTags.includes(tag.replace(' ', '-').toLowerCase()))
      )
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()

      result = result.filter(
        (post) =>
          (post.title && post.title.toLowerCase().includes(term)) ||
          (post.summary && post.summary.toLowerCase().includes(term)) ||
          (post.tags && post.tags.join(' ').toLowerCase().includes(term)) ||
          (post.body && post.body.toLowerCase().includes(term))
      )
    }

    return result
  }, [posts, searchTerm, activeTopic])

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <SectionContainer>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* Posts */}
      <ListLayout
        posts={filteredPosts}
        initialDisplayPosts={[]}
        pagination={1}
        title="Latest"
        subtitle={siteMetadata.description}
        topics={
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              Topics
            </h1>

            <div className="my-1 mb-6 flex space-x-2 overflow-x-auto text-primary-500">
              {Object.entries(TOPICS).map(([topicName, topics]) => (
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
