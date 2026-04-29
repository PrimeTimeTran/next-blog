const fs = require('fs')
const path = require('path')

const { log } = require('./helpers')

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

module.exports = {
  walk,
}
