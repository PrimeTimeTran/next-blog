import { getAllFiles } from '../server/files.js'
import { buildTermsGraph, buildTermsRegistry } from '../terms/buildTermsRegistry.js'

import { KB_DIR, BLOG_DIR } from '../core/constants.js'

export function buildPipeline() {
  const registry = buildTermsRegistry()

  const files = [
    ...getAllFiles(KB_DIR).map((f) => ({ file: f, type: 'kb' })),
    ...getAllFiles(BLOG_DIR).map((f) => ({ file: f, type: 'blog' })),
  ]

  const { terms, backlinks } = buildTermsGraph(files)

  return {
    registry,
    terms,
    backlinks,
  }
}
