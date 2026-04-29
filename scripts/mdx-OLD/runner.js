const fs = require('fs')
const path = require('path')

// -------------------------
// RULES
// -------------------------
const rawRules = [
  './rules/fix-html-comments',
  './rules/fix-latex-wrap',
  './rules/fix-jsx-tags',
  './rules/fix-inequalities',
  './rules/fix-unwrapped-latex-lim',
]

const rules = rawRules
  .map((rulePath) => {
    try {
      const mod = require(rulePath)

      // handle both CommonJS + ESM default export
      const fn = typeof mod === 'function' ? mod : mod?.default

      if (typeof fn !== 'function') {
        console.error(`❌ Rule invalid export: ${rulePath}`, mod)
        return null
      }

      console.log('LOAD:', rulePath)
      return fn
    } catch (err) {
      console.error(`❌ Failed to load rule: ${rulePath}`)
      console.error(err.message)
      return null
    }
  })
  .filter(Boolean)

// -------------------------
// APPLY RULES
// -------------------------
function applyRules(content, filePath) {
  let out = content

  for (const rule of rules) {
    if (typeof rule !== 'function') {
      continue
    }

    try {
      out = rule(out, filePath)
    } catch (err) {
      console.error(`❌ Rule crashed on file: ${filePath}`)
      console.error(err.message)
    }
  }

  return out
}

// -------------------------
// FILE WALKER
// -------------------------
function walk(dir) {
  let results = []

  const list = fs.readdirSync(dir)

  for (const file of list) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      results = results.concat(walk(filePath))
    } else if (filePath.endsWith('.md') || filePath.endsWith('.mdx')) {
      results.push(filePath)
    }
  }

  return results
}

// -------------------------
// RUNNER
// -------------------------
function run({ dir, dry }) {
  const files = walk(dir)

  let changed = 0

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8')
    const fixed = applyRules(original, file)

    if (original !== fixed) {
      changed++
      console.log(`🧼 ${file}`)

      if (!dry) {
        fs.writeFileSync(file, fixed)
      }
    }
  }

  console.log(`\n✅ Done`)
  console.log(`Files changed: ${changed}`)
  console.log(`Mode: ${dry ? 'DRY RUN' : 'WRITE'}`)
}

module.exports = { run }
