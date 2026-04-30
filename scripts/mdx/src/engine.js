export function applyFixes(content, fixes) {
  const lines = content.split('\n')

  fixes
    .sort((a, b) => b.startLine - a.startLine)
    .forEach((fix) => {
      const start = fix.startLine - 1
      const end = fix.endLine - 1

      lines.splice(start, end - start + 1, fix.replacement)
    })

  return lines.join('\n')
}
