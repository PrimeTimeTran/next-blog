const fs = require('fs')
const path = require('path')

// raw MDX
//   ↓
// tokenizer (✔ working)
//   ↓
// regions AST (✔ stable)
//   ↓
// sanitizer (currently minimal)
//   ↓
// renderer (✔ lossless)

/* -------------------------
 * DEBUG CONFIG (TOGGLE HERE)
 * ------------------------ */

const DEBUG = {
  walk: false,
  tokenizer: false,
  sanitizer: false,
  render: false,
  diff: true,
  summary: true,
  files: false, // per-file metadata logs
}

/* -------------------------
 * HELPERS
 * ------------------------ */

function log(key, ...args) {
  if (DEBUG[key]) console.log(...args)
}

function section(title) {
  if (DEBUG.summary) console.log(`\n=== ${title} ===`)
}

/* -------------------------
 * CLI
 * ------------------------ */

const args = process.argv.slice(2)

const DRY_RUN = args.includes('--dry')
const VERBOSE = args.includes('--verbose')

const targetArg = args.find((a) => !a.startsWith('--'))

const ROOT = process.cwd()

const TARGET_DIR = targetArg
  ? path.isAbsolute(targetArg)
    ? targetArg
    : path.join(ROOT, targetArg)
  : path.join(ROOT, 'data', 'kb')

/* -------------------------
 * WALK
 * ------------------------ */

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

/* -------------------------
 * TOKENIZER
 * ------------------------ */

function tokenize(file, content) {
  const regions = []

  let i = 0
  let buffer = ''

  const flushText = () => {
    if (buffer) {
      regions.push({ type: 'text', value: buffer })
      buffer = ''
    }
  }

  log('tokenizer', `\n[${file}] starting tokenize`)

  while (i < content.length) {
    const char = content[i]
    const next3 = content.slice(i, i + 3)
    const next2 = content.slice(i, i + 2)

    /* -------------------------
     * CODE BLOCKS
     * ------------------------ */
    if (next3 === '```') {
      flushText()

      const start = i
      i += 3

      const end = content.indexOf('```', i)

      if (end === -1) {
        regions.push({ type: 'code', value: content.slice(start) })
        break
      }

      const block = content.slice(start, end + 3)
      regions.push({ type: 'code', value: block })

      i = end + 3
      continue
    }

    /* -------------------------
     * BLOCK MATH $$
     * ------------------------ */
    if (next2 === '$$') {
      flushText()

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

    /* -------------------------
     * INLINE MATH $
     * ------------------------ */
    if (char === '$') {
      flushText()

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

    buffer += char
    i++
  }

  flushText()

  const summary = regions.reduce((acc, r) => {
    acc[r.type] = (acc[r.type] || 0) + 1
    return acc
  }, {})

  if (DEBUG.tokenizer) {
    console.log('SUMMARY:', {
      file,
      summary,
      regionCount: regions.length,
      first: regions[0]?.type,
      last: regions.at(-1)?.type,
    })
  }

  return regions
}

/* -------------------------
 * SANITIZER
 * ------------------------ */

function sanitize(region) {
  if (region.type !== 'text') return region

  let v = region.value

  if (DEBUG.sanitizer) {
    console.log('[sanitizer input]', v.slice(0, 60))
  }

  v = v.replace(/<br>/g, '<br />')

  return { ...region, value: v }
}

/* -------------------------
 * RENDER
 * ------------------------ */

function render(regions) {
  const out = regions.map((r) => r.value).join('')

  log('render', 'rendered length:', out.length)

  return out
}

/* -------------------------
 * PIPELINE
 * ------------------------ */

function processFile(file) {
  const original = fs.readFileSync(file, 'utf8')

  const regions = tokenize(file, original)
  const rebuilt = render(regions)

  const lossless = original === rebuilt

  if (DEBUG.diff) {
    section(`FILE: ${file}`)
    console.log({
      lossless,
      originalLen: original.length,
      rebuiltLen: rebuilt.length,
    })

    if (!lossless) {
      for (let i = 0; i < Math.min(original.length, rebuilt.length); i++) {
        if (original[i] !== rebuilt[i]) {
          console.log({
            index: i,
            original: original.slice(i, i + 30),
            rebuilt: rebuilt.slice(i, i + 30),
          })
          break
        }
      }
    }
  }

  const sanitized = regions.map(sanitize)
  const updated = render(sanitized)

  const changed = original !== updated

  if (changed) {
    console.log(`🧼 ${file}`)

    if (!DRY_RUN) {
      fs.writeFileSync(file, updated, 'utf8')
    }
  }

  return changed
}

/* -------------------------
 * RUN
 * ------------------------ */

function run() {
  const files = walk(TARGET_DIR)

  let changed = 0

  for (const file of files) {
    if (processFile(file)) changed++
  }

  section('DONE')
  console.log('Changed:', changed)
  console.log('Mode:', DRY_RUN ? 'DRY RUN' : 'WRITE')
}

run()
