function noH2(region) {
  const lines = region.value.split('\n')

  const diagnostics = []
  const fixes = []

  lines.forEach((line, i) => {
    if (line.startsWith('## ')) {
      diagnostics.push({
        rule: 'no-h2',
        message: 'H2 headings are not allowed',
        line: i + 1,
        snippet: line,
      })

      fixes.push({
        type: 'replace-line',
        original: line,
        replacement: line.replace(/^## /, '# '),
      })
    }
  })

  return { region, diagnostics, fixes }
}

module.exports = noH2
