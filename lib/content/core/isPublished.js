export function isPublished(p) {
  const draft = p?.frontMatter?.draft

  return String(draft) !== 'true'
}
