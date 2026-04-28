#!/usr/bin/env node
// - Preview
// node scripts/fix-mdx.js --dry
// - Fix
// node scripts/fix-mdx.js
// - Verbose diff preview
// node scripts/fix-mdx.js --dry --verbose
// - Validator
// node scripts/fix-mdx.js && next build

// # 😀 Note
// New build errors from MDX after updating the file filter logic.
// > Build error occurred
// Error: Export encountered errors on following paths:
//         /kb/[...slug]: /kb/atom/CS/AI/knowledge-agents
//         /kb/[...slug]: /kb/atom/CS/AI/stable-diffusion/SD Model Prompting Examples
//         /kb/[...slug]: /kb/atom/CS/AI/transformers
//         /kb/[...slug]: /kb/atom/CS/dsa/Leet Code/dp-python
//         /kb/[...slug]: /kb/atom/CS/software-engineering/SQL/2.where
//         /kb/[...slug]: /kb/atom/CS/software-engineering/SQL/3.filter
//         /kb/[...slug]: /kb/atom/CS/software-engineering/scripts/create-cron-job
//         /kb/[...slug]: /kb/atom/math/calc/review/calc-3-multivariable
//         /kb/[...slug]: /kb/hub/finance
//         /kb/[...slug]: /kb/hub/linear-algebra
//         /kb/[...slug]: /kb/pattern/integration-strategy-selection
//         /kb/[...slug]: /kb/reference/math/integration-process
//         /kb/[...slug]: /kb/tool/git/commands
//         /kb/[...slug]: /kb/tool/latex/shortcuts-obsidian

// # 😀 Note
// Output of `node scripts/fix-mdx.js --dry`
// future in ~/Documents/work/blog (master●master)
// $ node scripts/fix-mdx.js --dry
// 🧼 data/kb/atom/CS/dsa/Leet Code/0-arrays.md
// 🧼 data/kb/atom/CS/dsa/Leet Code/3-sliding-windows.md
// 🧼 data/kb/atom/CS/dsa/Leet Code/4-trees.md
// 🧼 data/kb/atom/CS/dsa/Leet Code/6-linked-list.md
// 🧼 data/kb/atom/CS/dsa/Leet Code/dp-python.md
// 🧼 data/kb/atom/CS/dsa/Leet Code/dp.md
// 🧼 data/kb/atom/CS/hardware-engineering/Arudino/Cheat Sheet.md
// 🧼 data/kb/atom/CS/software-engineering/language/Python/Python.md
// 🧼 data/kb/atom/CS/software-engineering/language/Python/python-problems-with-dsa.md
// 🧼 data/kb/atom/math/calc/calc-2-fundamentals.md
// 🧼 data/kb/atom/math/calc/core/derivative/antiderivative.md
// 🧼 data/kb/atom/math/calc/core/derivative/definition-of-derivative.md
// 🧼 data/kb/atom/math/calc/core/derivative/integral-identity-map.md
// 🧼 data/kb/atom/math/calc/core/derivative.md
// 🧼 data/kb/atom/math/calc/core/implicit-differentiation.md
// 🧼 data/kb/atom/math/calc/core/integral/basic-integration-rules.md
// 🧼 data/kb/atom/math/calc/core/integral/indefinite-integral.md
// 🧼 data/kb/atom/math/calc/core/integral/integration-techniques.md
// 🧼 data/kb/atom/math/calc/core/integral/integration.md
// 🧼 data/kb/atom/math/calc/core/integral/techniques-of-integration.md
// 🧼 data/kb/atom/math/calc/core/integral/u-substitution.md
// 🧼 data/kb/atom/math/calc/core/limit/evaluating-limits.md
// 🧼 data/kb/atom/math/calc/core/limit/lhopitals-rule.md
// 🧼 data/kb/atom/math/calc/core/limit.md
// 🧼 data/kb/atom/math/calc/core/partial-derivative.md
// 🧼 data/kb/atom/math/calc/core/series/convergence-tests/integral.md
// 🧼 data/kb/atom/math/calc/core/series/convergence-tests/limit-comparison.md
// 🧼 data/kb/atom/math/calc/core/series/harmonic.md
// 🧼 data/kb/atom/math/calc/meta/multivariable.md
// 🧼 data/kb/atom/math/calc/review/calc-1-differential.md
// 🧼 data/kb/atom/math/calc/review/calc-2-integral.md
// 🧼 data/kb/atom/math/concepts/unit-circle.md
// 🧼 data/kb/hub/math/calc/definite-and-indefinite-integrals.md
// 🧼 data/kb/hub/math/calc/limits.md
// 🧼 data/kb/hub/math/calculus.md
// 🧼 data/kb/pattern/convergence-recognition.md
// 🧼 data/kb/pattern/differentiation.md
// 🧼 data/kb/reference/calc/formula/indefinite-integral.md
// 🧼 data/kb/reference/calc/notation/derivative.md
// 🧼 data/kb/reference/calc/symbols-verbose.md
// 🧼 data/kb/reference/calc/symbols.md
// 🧼 data/kb/reference/calc/theorems.md
// 🧼 data/kb/reference/list/top-10-must-knows-limits.md
// 🧼 data/kb/reference/math/antiderivative-cheatsheet.md
// 🧼 data/kb/reference/math/integration-cheatsheet.md
// 🧼 data/kb/tool/latex/shortcuts-obsidian.md
// 🧼 data/kb/tool/linux/tools.md
// 🧼 data/kb/tool/obsidian/preview/latex.md

// ✅ Done
// Files changed: 48
// Mode: DRY RUN

// # 😀 Note
// Files with errors after running `node scripts/fix-mdx.js`
// > Build error occurred
// Error: Export encountered errors on following paths:
//         /kb/[...slug]: /kb/atom/CS/AI/knowledge-agents
//         /kb/[...slug]: /kb/atom/CS/AI/stable-diffusion/SD Model Prompting Examples
//         /kb/[...slug]: /kb/atom/CS/AI/transformers
//         /kb/[...slug]: /kb/atom/CS/dsa/Leet Code/dp-python
//         /kb/[...slug]: /kb/atom/CS/software-engineering/SQL/2.where
//         /kb/[...slug]: /kb/atom/CS/software-engineering/SQL/3.filter
//         /kb/[...slug]: /kb/atom/CS/software-engineering/scripts/create-cron-job
//         /kb/[...slug]: /kb/atom/math/calc/review/calc-3-multivariable
//         /kb/[...slug]: /kb/hub/finance
//         /kb/[...slug]: /kb/hub/linear-algebra
//         /kb/[...slug]: /kb/pattern/integration-strategy-selection
//         /kb/[...slug]: /kb/reference/math/integration-process
//         /kb/[...slug]: /kb/tool/git/commands
//         /kb/[...slug]: /kb/tool/latex/shortcuts-obsidian

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const KB_PATH = path.join(ROOT, 'data', 'kb')

/* -------------------------
 * CONFIG
 * ------------------------ */

const DRY_RUN = process.argv.includes('--dry')
const VERBOSE = process.argv.includes('--verbose')

/* -------------------------
 * UTIL
 * ------------------------ */

function walk(dir) {
  let results = []
  const list = fs.readdirSync(dir)

  for (const file of list) {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)

    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full))
    } else if (full.endsWith('.md') || full.endsWith('.mdx')) {
      results.push(full)
    }
  }

  return results
}

/* -------------------------
 * SANITIZER (SAFE ONLY)
 * ------------------------ */

function sanitize(content) {
  let s = content

  // 1. Fix <br>
  s = s.replace(/<br>/g, '<br />')

  // 2. Fix integral commas: \int x , dx → \int x \, dx
  s = s.replace(/\\int\s+([^,]+),\s*dx/g, '\\int $1 \\, dx')

  // 3. Fix empty JSX braces
  s = s.replace(/{\s*}/g, '')

  // 4. Fix common broken ln table cells
  s = s.replace(/\|\s*\$\\ln\s*\|/g, '| $\\ln x$ |')

  // 5. Fix split LaTeX across table columns (basic)
  s = s.replace(
    /\|\s*\$\\ln\\left\s*\|\s*([^|]+)\|\s*([^$]+)\$/g,
    '| $\\\\ln\\\\left|$1/$2\\\\right|$'
  )

  // 6. Normalize spacing inside math (safe)
  s = s.replace(/\$\\frac\s*\{([^}]+)\}\s*\{([^}]+)\}\$/g, '$\\\\frac{$1}{$2}$')

  return s
}

/* -------------------------
 * MAIN
 * ------------------------ */

function run() {
  const files = walk(KB_PATH)

  let changed = 0

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8')
    const updated = sanitize(original)

    if (original !== updated) {
      changed++

      console.log(`🧼 ${path.relative(ROOT, file)}`)

      if (VERBOSE) {
        console.log('--- BEFORE ---')
        console.log(original.slice(0, 300))
        console.log('--- AFTER ---')
        console.log(updated.slice(0, 300))
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
