export function classify(line) {
  const t = line.trim()

  if (!t) return 'empty'
  if (t.startsWith('```')) return 'code-fence'
  if (t === '$$') return 'math-fence'
  if (t.startsWith('##')) return 'h2'
  return 'text'
}
