import { useEffect } from 'react'
import { PageSEO } from '@/components/SEO'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/siteMetadata'
import { normalizePost } from '@/lib/content/core/normalize'
import SectionContainer from '@/components/SectionContainer'

import { pageview } from '../lib/ga'

export const POSTS_PER_PAGE = 20

export async function getStaticProps() {
  const { getAllBlogPosts } = await import('@/lib/content/server')
  const rawPosts = getAllBlogPosts()
  const normalizedPosts = rawPosts.map(normalizePost).filter((p) => p && p.date)
  const initialDisplayPosts = normalizedPosts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(normalizedPosts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts: normalizedPosts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  useEffect(() => {
    pageview()
  }, [])

  return (
    <SectionContainer>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </SectionContainer>
  )
}
