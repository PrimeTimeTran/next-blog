export function formatSlug(input) {
  if (!input) return ''

  const raw = typeof input === 'string' ? input : input.slug || input.filePath || ''

  return raw
    .replace(/\\/g, '/')
    .replace(/^.*\/data\//, '') // ✅ strip absolute path
    .replace(/\.(md|mdx)$/, '') // ✅ strip extension
}
