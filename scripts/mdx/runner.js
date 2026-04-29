import fs from 'fs'
import path from 'path'

import { walk } from './fs.js'
import { DIAG } from './logs.js'
import { render } from './render.js'
import { tokenize } from './tokenize.js'
import { runRules } from './runRules.js'
import { TARGET_DIR } from './config.js'
import { STAGES, runStage } from './src/stages.js'

let plugins = []
const targetDir = process.argv[3]
const pluginPath = process.argv[2]

if (pluginPath) {
  const resolved = path.resolve(pluginPath)
  const { plugin } = import(resolved)

  plugins = Array.isArray(plugin) ? plugin : [plugin]
}

const rootTarget = targetDir || TARGET_DIR

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

function processFile(file, plugins = []) {
  const ctx = {
    file,
    original: null,
    content: null,
    lines: null,
    diagnostics: [],
    fixes: [],
    regions: [],
    output: null,
  }

  // -------------------------
  // READ STAGE
  // -------------------------
  runStage(STAGES.BEFORE_READ, ctx, plugins)

  ctx.original = fs.readFileSync(file, 'utf8')
  ctx.content = ctx.original
  ctx.lines = ctx.content.split('\n')

  runStage(STAGES.AFTER_READ, ctx, plugins)

  // -------------------------
  // RULES STAGE
  // -------------------------
  runStage(STAGES.BEFORE_RULES, ctx, plugins)

  ctx.diagnostics = runRules(ctx.lines)

  runStage(STAGES.AFTER_RULES, ctx, plugins)

  // -------------------------
  // FIX STAGE
  // -------------------------
  runStage(STAGES.BEFORE_FIXES, ctx, plugins)

  ctx.fixes = ctx.diagnostics.filter((d) => d.fix).map((d) => d.fix)

  ctx.content = applyFixes(ctx.content, ctx.fixes)
  ctx.lines = ctx.content.split('\n')

  runStage(STAGES.AFTER_FIXES, ctx, plugins)

  // -------------------------
  // TOKENIZE STAGE (AST BUILD)
  // -------------------------
  runStage(STAGES.BEFORE_TOKENIZE, ctx, plugins)

  ctx.regions = tokenize(ctx.content)

  runStage(STAGES.AFTER_TOKENIZE, ctx, plugins)

  ctx.regions.forEach(assertRegion)

  // -------------------------
  // RENDER STAGE
  // -------------------------
  runStage(STAGES.BEFORE_RENDER, ctx, plugins)

  ctx.output = render(ctx.regions)

  runStage(STAGES.AFTER_RENDER, ctx, plugins)

  // -------------------------
  // WRITE STAGE
  // -------------------------
  const changed = ctx.original !== ctx.output

  runStage(STAGES.BEFORE_WRITE, ctx, plugins)

  if (changed) {
    fs.writeFileSync(file, ctx.output, 'utf8')
  }

  runStage(STAGES.AFTER_WRITE, ctx, plugins)

  // -------------------------
  // DIAGNOSTICS
  // -------------------------
  DIAG.emit('processFile:rules', {
    diagnostics: ctx.diagnostics,
    fixes: ctx.fixes,
  })

  DIAG.emit('processFile:finalRegions', ctx.regions)

  DIAG.summarizeFileViolations(file, ctx.diagnostics)

  return changed
}

function run() {
  const files = walk(rootTarget)

  let changed = 0

  for (const file of files) {
    if (processFile(file, plugins)) changed++
  }

  DIAG.summarizePipeline(changed)
  DIAG.summarizeScriptRun(changed)
}

run()
