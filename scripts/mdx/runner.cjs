const fs = require('fs')

const { walk } = require('./fs')
const { DIAG } = require('./logs')
const { render } = require('./render')
const { tokenize } = require('./tokenize')
const { runRules } = require('./runRules')
const { TARGET_DIR } = require('./config')

function assertRegion(r) {
  if (typeof r.value !== 'string') {
    console.log('❌ BAD REGION:', r)
    throw new Error('Region.value must be string')
  }
}

function applyFixes(content, fixes) {
  const lines = content.split('\n')

  // IMPORTANT: apply bottom-up to avoid shifting indices
  fixes
    .sort((a, b) => b.startLine - a.startLine)
    .forEach((fix) => {
      const start = fix.startLine - 1
      const end = fix.endLine - 1

      lines.splice(start, end - start + 1, fix.replacement)
    })

  return lines.join('\n')
}

function processFile(file) {
  const original = fs.readFileSync(file, 'utf8')

  const lines = original.split('\n')
  const diagnostics = runRules(lines)

  const fixes = diagnostics.filter((d) => d.fix).map((d) => d.fix)

  const fixed = applyFixes(original, fixes)

  const regions = tokenize(fixed)

  DIAG.emit('processFile:rules', {
    diagnostics,
    fixes,
  })

  regions.forEach(assertRegion)

  DIAG.emit('processFile:finalRegions', regions)

  const updated = render(regions)

  const changed = original !== updated

  if (changed) {
    fs.writeFileSync(file, updated, 'utf8')
  }

  DIAG.summarizeFileViolations(file, diagnostics)

  return changed
}

function run() {
  const files = walk(TARGET_DIR)

  let changed = 0

  for (const file of files) {
    if (processFile(file)) changed++
  }

  DIAG.summarizePipeline(changed)
  DIAG.summarizeScriptRun(changed)
}

run()
