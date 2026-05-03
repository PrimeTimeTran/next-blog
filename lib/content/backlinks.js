import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getContentFiles } from './core/get-content.js'
import { buildTermsRegistry } from './terms/buildTermsRegistry.js'

// export function buildBacklinks(files, terms) {
//   const links = {}

//   for (const { file, type } of files) {
//     const raw = fs.readFileSync(file, 'utf8')
//     const { content, data } = matter(raw)

//     const text = content.toLowerCase()
//     const isDraft = Boolean(data.draft)

//     for (const [slug, term] of Object.entries(terms)) {
//       const variants = [term.term, ...(term.aliases || [])].map((v) => v.toLowerCase())

//       let count = 0

//       for (const v of variants) {
//         count += text.split(v).length - 1
//       }

//       if (count > 0) {
//         if (!links[slug]) links[slug] = []

//         links[slug].push({
//           file,
//           type,
//           count,
//           draft: isDraft, // ✅ NEW FIELD
//         })
//       }
//     }
//   }

//   // rank results
//   for (const slug in links) {
//     links[slug].sort((a, b) => b.count - a.count)
//   }

//   return links
// }
const ROOT = path.resolve(process.cwd())

function canonicalSlug(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/\.md$/, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

function normalizeTerm(T) {
  const term = typeof T === 'string' ? T : T.term || T.slug

  return {
    term,
    slug: canonicalSlug(T.slug || term),
    aliases: T.aliases || [],
  }
}

function countMatches(text, term) {
  const safe = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`\\b${safe}\\b`, 'g')
  return (text.match(regex) || []).length
}

export function buildBacklinks(files, terms) {
  const links = {}

  for (const f of files) {
    const filePath = typeof f === 'string' ? f : f.file
    const type = typeof f === 'string' ? 'unknown' : f.type

    const raw = fs.readFileSync(filePath, 'utf8')
    const { content, data } = matter(raw)

    const text = content.toLowerCase()
    const isDraft = Boolean(data.draft)

    // FIX: iterate values, not entries
    for (const T of Object.values(terms)) {
      const term = normalizeTerm(T)

      const slug = term.slug
      if (!slug) continue

      if (!links[slug]) {
        links[slug] = []
      }

      const variants = [term.term, ...(term.aliases || [])]
        .filter(Boolean)
        .map((v) => v.toLowerCase())

      let count = 0

      for (const v of variants) {
        count += countMatches(text, v)
      }

      if (count > 0) {
        links[slug].push({
          file: filePath,
          type,
          count,
          draft: isDraft,
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
  const terms = buildTermsRegistry()
  const files = getContentFiles()
  return buildBacklinks(files, terms)
}
