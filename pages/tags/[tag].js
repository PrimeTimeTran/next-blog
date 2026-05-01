import fs from 'fs'
import path from 'path'

import { TagSEO } from '@/components/SEO'
import generateRss from '@/lib/generate-rss'
import kebabCase from '@/lib/utils/kebabab-case'
import ListLayout from '@/layouts/ListLayout'
import siteMetadata from '@/data/site-metadata'

const root = process.cwd()

export async function getStaticPaths() {
  const { getAllTags } = await import('@/lib/tags')
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { getAllBlogPosts } = await import('@/lib/content/server')
  const allPosts = await getAllBlogPosts('blog')
  const filteredPosts = allPosts.filter((post) => {
    if (post.draft) return false
    if (!Array.isArray(post.tags)) return false

    return post.tags.map((t) => kebabCase(t)).includes(params.tag)
  })

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`)
    const rssPath = path.join(root, 'public', 'tags', params.tag)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, tag: params.tag } }
}

export default function Tag({ posts, tag }) {
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <ListLayout type2="pages/blog/page/[page].js" type="tag" posts={posts} title={title} />
    </>
  )
}
