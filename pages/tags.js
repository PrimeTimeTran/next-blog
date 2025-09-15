import Tag from '@/components/Tag'
import Link from '@/components/Link'
import { getAllTags } from '@/lib/tags'
import { PageSEO } from '@/components/SEO'
import kebabCase from '@/lib/utils/kebabCase'
import siteMetadata from '@/data/siteMetadata'

import {
  dsa,
  tech,
  misc,
  tools,
  devops,
  finance,
  security,
  databases,
  frameworks,
} from '../lib/constants'

function renderTags(tags, t) {
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
}

function renderCategory(title, tags, sortedTags, filter) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-green-600">{title}</h1>
      <div className="mb-6 flex max-w-lg flex-wrap">
        {sortedTags.map((t) => {
          if (!filter.includes(t.toLowerCase())) {
            return null
          }
          return renderTags(tags, t)
        })}
      </div>
    </div>
  )
}

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
        <div>
          {renderCategory('Tech', tags, sortedTags, tech)}
          {renderCategory('Data Structures & Algorithms', tags, sortedTags, dsa)}
          {renderCategory('Frameworks', tags, sortedTags, frameworks)}
          {renderCategory('Databases', tags, sortedTags, databases)}
          {renderCategory('DevOps', tags, sortedTags, devops)}
          {renderCategory('Security', tags, sortedTags, security)}
          {renderCategory('Tools', tags, sortedTags, tools)}
          {renderCategory('Finance', tags, sortedTags, finance)}
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
