export default function noH2(line, index, ctx) {
  if (!line.trim().startsWith('##')) return null

  return [
    {
      rule: 'no-h2',
      message: 'H2 headings are not allowed',
      location: {
        startLine: index + 1,
        endLine: index + 1,
      },
      snippet: line,

      fix: {
        type: 'replace-range',
        startLine: index + 1,
        endLine: index + 1,
        replacement: '# ' + line.slice(2).trim(),
      },
      context: {
        window: ctx.getWindow(index, 2),
      },
    },
  ]
}
