import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import useScrollShrink from '@/lib/hooks/useScrollShrink'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

import { BlogSidebarLeft, BlogContent, BlogSidebarRight } from '@/components/blog'

export default function BlogLayout({ toc, frontMatter, authorDetails, next, prev, children }) {
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[16rem_1fr_16rem]">
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
