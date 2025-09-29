import Tag from '@/components/Tag'
import Link from '@/components/Link'
import { getAllTags } from '@/lib/tags'
import { PageSEO } from '@/components/SEO'
import kebabCase from '@/lib/utils/kebabCase'
import siteMetadata from '@/data/siteMetadata'

import React from 'react'
import {
  dsa,
  tech,
  misc,
  maths,
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

function Category({ title, tags, sortedTags, filter }) {
  const [open, setOpen] = React.useState(true)
  const categoryTags = sortedTags.filter((t) => {
    return filter.includes(t.toLowerCase())
  })
  return (
    <div className="w-full">
      <button className="w-full text-left" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <h1 className="flex w-full justify-between text-2xl font-bold text-green-600">
          {title}{' '}
          <span className="ml-2 text-lg text-gray-600">
            ({categoryTags.length}) {open ? '▼' : '▲'}
          </span>
        </h1>
      </button>
      {open && (
        <div className="mb-6 flex flex-wrap">
          {categoryTags.map((t) => {
            return renderTags(tags, t)
          })}
        </div>
      )}
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
      <div
        className="flex flex-col items-start justify-start divide-y 
          divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center 
        "
      >
        <div className="w-full">
          <Category title="Maths" tags={tags} sortedTags={sortedTags} filter={maths} />
          <Category title="Finance" tags={tags} sortedTags={sortedTags} filter={finance} />
          <Category title="Frameworks" tags={tags} sortedTags={sortedTags} filter={frameworks} />
          <Category title="Tech" tags={tags} sortedTags={sortedTags} filter={tech} />
          <Category title="Databases" tags={tags} sortedTags={sortedTags} filter={databases} />
          <Category title="DevOps" tags={tags} sortedTags={sortedTags} filter={devops} />
          <Category
            title="Data Structures & Algorithms"
            tags={tags}
            sortedTags={sortedTags}
            filter={dsa}
          />
          <Category title="Security" tags={tags} sortedTags={sortedTags} filter={security} />
          <Category title="Tools" tags={tags} sortedTags={sortedTags} filter={tools} />
          <h1 className="text-2xl font-bold text-green-600">Misc</h1>
          <div className="mb-6 flex max-w-lg flex-wrap">
            {sortedTags.map((t) => {
              if (misc.includes(t.toLowerCase())) return null
              return renderTags(tags, t)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
