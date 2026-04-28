import { useEffect } from 'react'
import { PageSEO } from '@/components/SEO'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/siteMetadata'
import { normalizePost } from '@/lib/content/core/normalize'
import SectionContainer from '@/components/SectionContainer'
import { getBlogIndex, getAllBlogPosts } from '@/lib/content/server/blog.server'

import { pageview } from '../lib/ga'

export const POSTS_PER_PAGE = 20

export async function getStaticProps() {
  const rawPosts = getAllBlogPosts()
  const normalized = rawPosts.map(normalizePost).filter((p) => p && p.date) // 🔥 important
  const { posts } = getBlogIndex(normalized)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
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
