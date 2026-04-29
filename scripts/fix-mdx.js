const fs = require('fs')
const path = require('path')
const { extractMathBlocks, restoreMathBlocks } = require('./mdx-lint/utils/protectMath')

const ROOT = process.cwd()

const args = process.argv.slice(2)
const targetPath = args.find((arg) => !arg.startsWith('--'))
/* -------------------------
 * CONFIG
 * ------------------------ */

const DRY_RUN = process.argv.includes('--dry')
const VERBOSE = args.includes('--verbose')

const KB_PATH = targetPath
  ? path.isAbsolute(targetPath)
    ? targetPath
    : path.join(ROOT, targetPath)
  : path.join(ROOT, 'data', 'kb')
/* -------------------------
 * FILE WALK
 * ------------------------ */

function walk(dir) {
  let results = []
  const list = fs.readdirSync(dir)

  for (const file of list) {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)

    if (stat.isDirectory()) {
      results = results.concat(walk(full))
    } else if (full.endsWith('.md') || full.endsWith('.mdx')) {
      results.push(full)
    }
  }

  return results
}

/* -------------------------
 * PROTECTED BLOCK SYSTEM
 * ------------------------ */

/* -------------------------
 * SANITIZER (TEXT ONLY)
 * ------------------------ */

function sanitize(content) {
  let s = content

  s = s.replace(/<br>/g, '<br />')

  s = s.replace(/\\int\s+([^,]+),\s*dx/g, '\\int $1 \\, dx')

  s = s.replace(/(?<!\w){\s*}(?!\w)/g, '')

  s = s.replace(/\|\s*\$\\ln\s*\|/g, '| $\\ln x$ |')

  s = s.replace(/\\frac\s*\{([^}]+)\}\s*\{([^}]+)\}/g, '\\frac{$1}{$2}')

  return s
}

/* -------------------------
 * DIFF HELPERS
 * ------------------------ */

function safeLines(str) {
  return (str || '').split('\n')
}

function diffLines(original, updated) {
  const a = original.split('\n')
  const b = updated.split('\n')

  const max = Math.max(a.length, b.length)

  const changes = []

  for (let i = 0; i < max; i++) {
    if (a[i] !== b[i]) {
      changes.push({
        line: i + 1,
        before: a[i] ?? '',
        after: b[i] ?? '',
      })
    }
  }

  return changes
}

/* -------------------------
 * MAIN
 * ------------------------ */

function run() {
  const files = walk(KB_PATH)

  let changed = 0

  for (const file of files) {
    console.log('PIPELINE FILE:', file)
    const original = fs.readFileSync(file, 'utf8')

    // STEP 1: extract math
    const result = extractMathBlocks(original)

    const content = result?.content ?? original
    const blocks = result?.blocks ?? []
    // STEP 2: sanitize ONLY safe text
    let safe = sanitize(content)
    let updated = restoreMathBlocks(safe, blocks)

    if (!original || original.trim().length === 0) {
      console.log('⚠️ EMPTY FILE:', file)
      continue
    }

    const originalSize = original.length

    const mathTokens = (content.match(/__MATH_\d+__/g) || []).length

    console.log({
      file,
      hasMath: original.includes('$$'),
      extracted: blocks.length,
      tokens: mathTokens,
      restoredMatches: (updated.match(/\$\$/g) || []).length,
    })

    if (original !== updated) {
      console.log(`🧼 ${file}`)
      changed++

      const changes = diffLines(original, updated)

      console.log('\n📍 LINE CHANGES:')

      for (const c of changes.slice(0, 30)) {
        console.log(`\nLine ${c.line}`)
        console.log(`- BEFORE: ${c.before}`)
        console.log(`+ AFTER : ${c.after}`)
      }

      if (changes.length > 30) {
        console.log(`\n... +${changes.length - 30} more changes`)
      }

      if (!DRY_RUN) {
        fs.writeFileSync(file, updated, 'utf8')
      }
    }
  }

  console.log('\n✅ Done')
  console.log(`Files changed: ${changed}`)
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'WRITE'}`)
}

run()
