import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/site-metadata'
import useScrollShrink from '@/lib/hooks/useScrollShrink'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

import { BlogSidebarLeft, BlogContent, BlogSidebarRight } from '@/components/blog'

export default function BlogLayout({ toc, next, prev, children, frontMatter, authorDetails }) {
  const { slug, fileName, tags } = frontMatter

  const shrunk = useScrollShrink(40)

  return (
    <div className="flex w-screen justify-between">
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />

      <ScrollTopAndComment />

      <div className="min-h-screen">
        <div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[1fr_3fr_1fr]">
          <BlogSidebarLeft
            authorDetails={authorDetails}
            tags={tags}
            prev={prev}
            next={next}
            slug={slug}
            fileName={fileName}
          />

          <BlogContent frontMatter={frontMatter} toc={toc} shrunk={shrunk}>
            {children}
          </BlogContent>

          <BlogSidebarRight toc={toc} />
        </div>
      </div>
    </div>
  )
}
