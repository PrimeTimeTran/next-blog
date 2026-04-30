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
        {/* OPTION A — slightly narrower TOC */}
        {/* <div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[1fr_3fr_0.9fr]"> */}
        {/* OPTION B — balanced classic blog layout */}
        {/* <div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[1.2fr_4fr_1fr]"> */}
        {/* OPTION C — tighter TOC (recommended) */}
        {/* <div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[14rem_1fr_11rem]"> */}
        {/* OPTION D — more content-focused */}
        {/* <div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[12rem_5fr_10rem]"> */}
        {/* OPTION E — very centered reading experience */}
        {/* <div className="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[10rem_6fr_9rem]"> */}
        {/* ACTIVE (example current choice) */}
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
