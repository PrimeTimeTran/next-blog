import { useState, useEffect } from 'react'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { BlogSEO } from '@/components/SEO'
import Comments from '@/components/comments'
import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import TableOfContents from '@/components/TOC'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ toc, frontMatter, authorDetails, next, prev, children }) {
  const [shrunk, setShrunk] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShrunk(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const { slug, fileName, date, title, images, tags } = frontMatter

  function focusLanguageTab(evt, language) {
    language = language + '-content'
    var i, tabcontent, tablinks, group

    group = document.getElementById(language).parentElement

    tabcontent = group.getElementsByClassName('tabcontent')
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }
    tablinks = group.getElementsByClassName('tablinks')
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
    }

    document.getElementById(language).style.display = 'block'
    evt.currentTarget.className += ' active'
  }

  function addIdToTabGroups() {
    var groups = document.getElementsByClassName('tab-group')
    for (let groupId = 0; groupId < groups.length; groupId++) {
      var group = groups[groupId]
      group.id = `tab-group-${groupId}`

      var buttonChildren = group.getElementsByClassName('tablinks')
      for (var j = 0; j < buttonChildren.length; j++) {
        var buttonChild = buttonChildren[j]
        buttonChild.id += `-${groupId}-${j}`
      }

      var children = group.getElementsByClassName('tabcontent')
      for (var k = 0; k < children.length; k++) {
        var child = children[k]
        child.id = `${groupId}-${k}-content`
      }

      var buttons = group.children[0].children
      for (var l = 0; l < buttons.length; l++) {
        var button = buttons[l]
        button.addEventListener('click', (e) => focusLanguageTab(e, `${groupId}-${l}`))
      }
    }
  }

  useEffect(() => {
    addIdToTabGroups()
  }, [])

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
          {/* LEFT SIDEBAR */}
          <aside className="hidden border-r border-gray-200 dark:border-gray-800 xl:sticky xl:top-0 xl:block xl:h-screen xl:overflow-y-auto">
            <div className="p-6">
              {' '}
              {/* AUTHORS (unchanged behavior, just moved into rail) */}
              <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    {authorDetails.map((author) => (
                      <li className="flex items-center space-x-2" key={author.name}>
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width="38px"
                            height="38px"
                            alt="avatar"
                            className="h-10 w-10 rounded-full"
                          />
                        )}
                        <dl className="whitespace-nowrap text-sm font-medium leading-5">
                          <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                          <dd>
                            {author.twitter && (
                              <Link
                                href={author.twitter}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              >
                                {author.twitter.replace('https://twitter.com/', '@')}
                              </Link>
                            )}
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
              {/* FOOTER */}
              <footer className="text-sm font-medium leading-5">
                <div className="divide-gray-200 dark:divide-gray-700 xl:divide-y">
                  {tags && (
                    <div className="xl:py-8">
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Tags
                      </h2>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <div key={tag}>
                            <span className="-mr-3">
                              <Tag text={tag} />
                            </span>
                            ,{' '}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(next || prev) && (
                    <div className="flex justify-between xl:block xl:space-y-8 xl:py-8">
                      {prev && (
                        <div>
                          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            Previous Article
                          </h2>
                          <Link href={`/blog/${prev.slug}`} className="text-primary-500">
                            {prev.title}
                          </Link>
                        </div>
                      )}

                      {next && (
                        <div>
                          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            Next Article
                          </h2>
                          <Link href={`/blog/${next.slug}`} className="text-primary-500">
                            {next.title}
                          </Link>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-4 xl:pt-8">
                    <Link href="/blog" className="text-primary-500">
                      ← Back to the blog
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </aside>
          {/* CENTER/MAIN */}
          <main className="min-w-0">
            <header
              className={[
                'sticky top-0 z-10 border-b border-gray-200 bg-white px-8 transition-all duration-300 dark:border-gray-800 dark:bg-gray-900',
                shrunk ? 'py-2' : 'py-6',
              ].join(' ')}
            >
              <PageTitle
                className={[
                  'transition-all duration-300 ease-in-out',
                  shrunk
                    ? 'text-xl font-bold leading-7 opacity-90'
                    : 'text-2xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14',
                ].join(' ')}
              >
                {title}
              </PageTitle>
              <dl>
                <dd className="text-right text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </dl>
            </header>

            {/* PAGE CONTENT */}
            <article className="p-4">
              <div className="prose max-w-none dark:prose-dark">{children}</div>

              {/* PAGE CONTENT FOOTER */}
              <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  Discuss on Twitter
                </Link>
                {' • '}
                <Link href={editUrl(fileName)}>View on GitHub</Link>
              </div>

              <Comments frontMatter={frontMatter} />
            </article>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden border-l border-gray-200 pl-2 dark:border-gray-800 xl:sticky xl:top-0 xl:block xl:h-screen xl:overflow-y-auto">
            <div className="p-6">
              <TableOfContents toc={toc ?? []} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
