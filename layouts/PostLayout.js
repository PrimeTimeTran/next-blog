import { useEffect } from 'react'
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
    <div className="flex w-full w-screen justify-between">
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />

      <ScrollTopAndComment />

      {/* PAGE CONTAINER */}
      <div className="flex w-full">
        {/* MAIN CONTENT */}
        <div className="mx-auto w-full px-4 sm:px-6 xl:max-w-7xl xl:px-0">
          <main className="min-w-0 flex-1">
            <article>
              <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                  <div className="space-y-1 text-center">
                    <dl className="space-y-10">
                      <div>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>
                            {new Date(date).toLocaleDateString(
                              siteMetadata.locale,
                              postDateTemplate
                            )}
                          </time>
                        </dd>
                      </div>
                    </dl>
                    <div>
                      <PageTitle>{title}</PageTitle>
                    </div>
                  </div>
                </header>
                <div
                  className="items-start divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
                  style={{ gridTemplateRows: 'auto 1fr' }}
                >
                  {/* LEFT RAIL (shared sticky container) */}
                  <div className="space-y-8 xl:sticky xl:top-24 xl:col-span-1 xl:row-span-2">
                    {/* AUTHORS (unchanged behavior, just moved into rail) */}
                    <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
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

                    {/* FOOTER (unchanged behavior) */}
                    <footer className="text-sm font-medium leading-5">
                      <div className="divide-gray-200 dark:divide-gray-700 xl:divide-y">
                        {tags && (
                          <div className="py-4 xl:py-8">
                            <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                              Tags
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                        )}

                        {(next || prev) && (
                          <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
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

                  {/* MAIN CONTENT (unchanged) */}
                  <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:pb-0">
                    <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>

                    <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                      <Link href={discussUrl(slug)} rel="nofollow">
                        Discuss on Twitter
                      </Link>
                      {' • '}
                      <Link href={editUrl(fileName)}>View on GitHub</Link>
                    </div>

                    <Comments frontMatter={frontMatter} />
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>

        {/* TOC SIDEBAR */}
        <aside className="mr-32 hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24">
            <TableOfContents toc={toc ?? []} />
          </div>
        </aside>
      </div>
    </div>
  )
}
