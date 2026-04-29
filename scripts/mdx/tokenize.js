const { DEBUG } = require('./config')
const { log, section } = require('./logs')

function tokenize(file, content) {
  const regions = []

  let i = 0
  let buffer = ''

  const flush = () => {
    if (buffer) {
      regions.push({
        type: 'text',
        value: buffer,
      })
      buffer = ''
    }
  }

  if (DEBUG.tokenizer) {
    log('tokenizer', `start: ${file}`)
  }

  while (i < content.length) {
    const c = content[i]
    const next2 = content.slice(i, i + 2)
    const next3 = content.slice(i, i + 3)

    /* CODE BLOCK */
    if (next3 === '```') {
      flush()

      const start = i
      i += 3

      const end = content.indexOf('```', i)

      if (end === -1) {
        regions.push({ type: 'code', value: content.slice(start) })
        break
      }

      regions.push({
        type: 'code',
        value: content.slice(start, end + 3),
      })

      i = end + 3
      continue
    }

    /* BLOCK MATH */
    if (next2 === '$$') {
      flush()

      const start = i
      i += 2

      const end = content.indexOf('$$', i)

      if (end === -1) {
        buffer += content.slice(start)
        break
      }

      regions.push({
        type: 'math-block',
        value: content.slice(start, end + 2),
      })

      i = end + 2
      continue
    }

    /* INLINE MATH */
    if (c === '$') {
      flush()

      const start = i
      i++

      const end = content.indexOf('$', i)

      if (end === -1) {
        buffer += content.slice(start)
        break
      }

      regions.push({
        type: 'math-inline',
        value: content.slice(start, end + 1),
      })

      i = end + 1
      continue
    }

    buffer += c
    i++
  }

  flush()

  if (DEBUG.tokenizer) {
    const summary = regions.reduce((a, r) => {
      a[r.type] = (a[r.type] || 0) + 1
      return a
    }, {})

    log('tokenizer', {
      file,
      summary,
      regionCount: regions.length,
    })
  }

  return regions
}

module.exports = {
  tokenize,
}
