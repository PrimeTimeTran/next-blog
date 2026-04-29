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

function getContext(content, line, radius = 2) {
  const lines = content.split('\n')

  const idx = line - 1

  const start = Math.max(0, idx - radius)
  const end = Math.min(lines.length - 1, idx + radius)

  const out = []

  for (let i = start; i <= end; i++) {
    const prefix = i === idx ? '❌' : '  '
    out.push(`${prefix} ${String(i + 1).padStart(4)} | ${lines[i]}`)
  }

  return out.join('\n')
}

module.exports = {
  walk,
  getContext,
}
