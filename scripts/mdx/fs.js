const fs = require('fs')
const path = require('path')

const { log } = require('./logs')

function walk(dir) {
  const out = []
  const entries = fs.readdirSync(dir)

  for (const e of entries) {
    const full = path.join(dir, e)
    const stat = fs.statSync(full)

    if (stat.isDirectory()) {
      out.push(...walk(full))
    } else if (full.endsWith('.md') || full.endsWith('.mdx')) {
      out.push(full)
    }
  }

  log('walk', 'found files:', out.length)
  return out
}

function getContext(fileContent, line, radius = 3) {
  const lines = fileContent.split('\n')

  const start = Math.max(0, line - radius - 1)
  const end = Math.min(lines.length, line + radius)

  const slice = lines.slice(start, end)

  return slice
    .map((l, i) => {
      const lineNo = start + i + 1
      const marker = lineNo === line ? '❌' : '  '
      return `${marker} ${lineNo.toString().padStart(4)} | ${l}`
    })
    .join('\n')
}

module.exports = {
  walk,
  getContext,
}
