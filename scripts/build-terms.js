import fs from 'fs'
import path from 'path'
import { getAllFiles } from '../lib/content/server/files.js'
import { buildTermsGraph, buildTermsRegistry } from '../lib/content/terms/buildTermsRegistry.js'
import { KB_DIR, BLOG_DIR } from '../lib/content/core/constants.js'

function build() {
  const registry = buildTermsRegistry()

  const files = [
    ...getAllFiles(KB_DIR).map((f) => ({ file: f, type: 'kb' })),
    ...getAllFiles(BLOG_DIR).map((f) => ({ file: f, type: 'blog' })),
  ]

  const { terms, backlinks } = buildTermsGraph(files)

  fs.writeFileSync(
    path.join(process.cwd(), 'data/generated/terms.js'),
    `export const terms = ${JSON.stringify(terms, null, 2)};`
  )

  fs.writeFileSync(
    path.join(process.cwd(), 'data/generated/backlinks.js'),
    `export const termBacklinks = ${JSON.stringify(backlinks, null, 2)};`
  )

  console.log(`✅ Built ${Object.keys(registry).length} terms`)
}

build()
