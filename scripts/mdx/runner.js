const fs = require('fs')
const path = require('path')

const { render } = require('./render')
const { diff, section } = require('./logs')
const { tokenize } = require('./tokenize')
const { sanitize } = require('./sanitize')
const { runRules } = require('./runRules')
const { walk, getContext } = require('./fs')
const { DEBUG, DRY_RUN, TARGET_DIR } = require('./config')

/* -------------------------
 * FIX ENGINE
 * ------------------------ */

function applyFixes(content, fixes) {
  let out = content

  for (const fix of fixes) {
    if (fix.type === 'replace-line') {
      out = out.replace(fix.original, fix.replacement)
    }
  }

  return out
}

/* -------------------------
 * PIPELINE
 * ------------------------ */

function processFile(file) {
  const original = fs.readFileSync(file, 'utf8')

  // 1. TOKENIZE
  const regions = tokenize(file, original)

  // 2. INITIAL RENDER (baseline)
  const rebuilt = render(regions)

  if (DEBUG.diff) {
    diff(original, rebuilt)
  }

  const fixes = []
  const diagnostics = []

  // 3. RULES
  const processed = regions.map((r) => {
    const result = runRules(r, file, original)

    if (result.diagnostics?.length) {
      diagnostics.push(
        ...result.diagnostics.map((d) => ({
          file,
          ...d,
          context: getContext(original, d.line || 1),
        }))
      )
    }

    if (result.fixes?.length) {
      fixes.push(...result.fixes)
    }

    return sanitize(result.region)
  })

  // 4. RENDER AFTER RULE PROCESSING
  let updated = render(processed)

  // 5. APPLY FIXES (IMPORTANT: apply to UPDATED, not original)
  if (fixes.length) {
    updated = applyFixes(updated, fixes)
  }

  // 6. DIFF STATE
  const changed = original !== updated

  if (changed) {
    section(`FILE: ${file}`)
    console.log('🧼 modified')

    if (!DRY_RUN) {
      fs.writeFileSync(file, updated, 'utf8')
    }
  }

  // 7. DIAGNOSTICS OUTPUT
  if (diagnostics.length) {
    section(`RULE VIOLATIONS: ${file}`)

    if (DEBUG.verbose) {
      for (const d of diagnostics) {
        console.log('\n-------------------------')
        console.log(`Rule: ${d.rule}`)
        console.log(`Message: ${d.message}`)
        console.log(`Line: ${d.line}`)
        console.log('\nContext:\n')
        console.log(d.context)
      }
    } else {
      for (const d of diagnostics) {
        console.log({
          rule: d.rule,
          message: d.message,
          snippet: d.snippet,
          line: d.line,
        })
      }
    }
  }

  console.log('REGIONS:', regions.length)
  console.log('FIXES:', fixes.length)
  console.log('DIAGNOSTICS:', diagnostics.length)

  return changed
}

/* -------------------------
 * RUNNER
 * ------------------------ */

function run() {
  const files = walk(TARGET_DIR)

  let changed = 0

  for (const file of files) {
    if (processFile(file)) changed++
  }

  section('DONE')
  console.log({ changed, mode: DRY_RUN ? 'dry' : 'write' })
}

run()
