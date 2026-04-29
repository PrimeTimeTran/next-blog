function createRegion(type, value, startLine, endLine, startIndex, endIndex) {
  return {
    type,
    value,
    startLine,
    endLine,
    startIndex,
    endIndex,
    lines: value.split('\n').map((text, i) => ({
      text,
      lineNumber: startLine + i,
    })),
  }
}

export function tokenize(content) {
  const regions = []

  let i = 0
  let line = 1

  let buffer = ''
  let regionStartLine = 1

  const flushText = (endIndex = null) => {
    if (!buffer) return

    regions.push(createRegion('text', buffer, regionStartLine, line, null, endIndex))

    buffer = ''
    regionStartLine = line
  }

  const readWhile = (predicate) => {
    const start = i
    while (i < content.length && predicate(content[i])) {
      if (content[i] === '\n') line++
      i++
    }
    return content.slice(start, i)
  }

  const matchAhead = (str) => content.startsWith(str, i)

  while (i < content.length) {
    const c = content[i]

    /* -------------------------
     * CODE BLOCK (``` fenced)
     * ------------------------ */
    if (matchAhead('```')) {
      flushText()

      const start = i
      const startLine = line

      i += 3

      const bodyStart = i

      // IMPORTANT: line-aware search (NOT indexOf on full string)
      while (i < content.length && !content.startsWith('```', i)) {
        if (content[i] === '\n') line++
        i++
      }

      if (i >= content.length) {
        const slice = content.slice(start)
        regions.push(createRegion('code', slice, startLine, line, start, content.length))
        break
      }

      // include closing ```
      i += 3
      const endLine = line

      const slice = content.slice(start, i)

      regions.push(createRegion('code', slice, startLine, endLine, start, i))

      continue
    }

    /* -------------------------
     * BLOCK MATH ($$ ... $$)
     * ------------------------ */
    if (matchAhead('$$')) {
      flushText()

      const start = i
      const startLine = line

      i += 2

      while (i < content.length && !content.startsWith('$$', i)) {
        if (content[i] === '\n') line++
        i++
      }

      if (i >= content.length) {
        const slice = content.slice(start)
        regions.push(createRegion('math-block', slice, startLine, line, start, content.length))
        break
      }

      i += 2
      const endLine = line

      const slice = content.slice(start, i)

      regions.push(createRegion('math-block', slice, startLine, endLine, start, i))

      continue
    }

    /* -------------------------
     * INLINE MATH ($...$)
     * ------------------------ */
    if (c === '$') {
      flushText()

      const start = i
      const startLine = line

      i++

      let found = false

      while (i < content.length) {
        if (content[i] === '\n') line++

        if (content[i] === '$') {
          found = true
          break
        }

        i++
      }

      if (!found) {
        buffer += content.slice(start)
        break
      }

      i++ // consume closing $

      const slice = content.slice(start, i)

      regions.push(createRegion('math-inline', slice, startLine, line, start, i))

      continue
    }

    /* -------------------------
     * DEFAULT TEXT MODE
     * ------------------------ */
    if (c === '\n') line++

    buffer += c
    i++
  }

  flushText()

  return regions
}
