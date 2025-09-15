import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

import { tech, frameworks, databases, devops, finance, dsa, security, tools } from './constants'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <div>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold text-green-600">Programming</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (!tech.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
          <h1 className="text-2xl font-bold text-green-600">Data Structures & Algorithms</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (!dsa.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
          <h1 className="text-2xl font-bold text-green-600">Frameworks</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (!frameworks.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
          <h1 className="text-2xl font-bold text-green-600">Databases</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (!databases.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
          <h1 className="text-2xl font-bold text-green-600">DevOps</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (!devops.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
          <h1 className="text-2xl font-bold text-green-600">Security</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (!security.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
          <h1 className="text-2xl font-bold text-green-600">Tools</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (!tools.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
          <h1 className="text-2xl font-bold text-green-600">Finance</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              if (!finance.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
          <h1 className="text-2xl font-bold text-green-600">Misc</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {sortedTags.map((t) => {
              const used = [
                ...tech,
                ...frameworks,
                ...databases,
                ...devops,
                ...finance,
                ...dsa,
                ...security,
                ...tools,
                // 'blog',
                // 'project,
                // 'info-sec',
                // 'cheat-sheet',
                // 'guide',
              ]
              if (used.includes(t.toLowerCase())) {
                return null
              }
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
