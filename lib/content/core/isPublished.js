export function isPublished(p) {
  return p?.frontMatter?.draft !== true
}
