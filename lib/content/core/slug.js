export function formatSlug(input) {
  if (!input) return ''

  const slug = typeof input === 'string' ? input : input.slug || input.filePath || ''

  return slug.replace(/\\/g, '/').replace(/\.mdx?$/, '')
}
