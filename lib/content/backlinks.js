import fs from 'fs'
import matter from 'gray-matter'

import { getContentFiles } from './core/get-content.js'

export function buildBacklinks(files, terms) {
  const links = {}

  for (const { file, type } of files) {
    const raw = fs.readFileSync(file, 'utf8')
    const { content, data } = matter(raw)

    const text = content.toLowerCase()
    const isDraft = Boolean(data.draft)

    for (const [slug, term] of Object.entries(terms)) {
      const variants = [term.term, ...(term.aliases || [])].map((v) => v.toLowerCase())

      let count = 0

      for (const v of variants) {
        count += text.split(v).length - 1
      }

      if (count > 0) {
        if (!links[slug]) links[slug] = []

        links[slug].push({
          file,
          type,
          count,
          draft: isDraft, // ✅ NEW FIELD
        })
      }
    }
  }

  // rank results
  for (const slug in links) {
    links[slug].sort((a, b) => b.count - a.count)
  }

  return links
}

export function getBacklinks() {
  const files = getContentFiles()
  return buildBacklinks(files)
}
