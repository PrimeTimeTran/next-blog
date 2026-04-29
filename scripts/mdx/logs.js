import { DEBUG, DRY_RUN } from './config.js'
import { STAGES } from './src/stages.js'

export function log(key, ...args) {
  if (DEBUG[key]) console.log(...args)
}

export function section(title) {
  if (DEBUG.summary) console.log(`\n=== ${title} ===`)
}

export const DIAG = {
  events: [],
  enabled: true,
  mode: 'stages',
  view: {
    stage: false,
    rules: false,
    render: false,
    regions: false,
  },
  buffer: {
    fixes: [],
    render: [],
    runRules: [],
    tokenizer: [],
  },
  emit(type, payload) {
    if (!this.enabled) return

    this.events.push({ type, ...payload })

    const group =
      type === 'stage_run'
        ? 'stage'
        : type.includes('rules')
        ? 'rules'
        : type.includes('regions')
        ? 'regions'
        : type.includes('render')
        ? 'render'
        : null

    if (group && !this.view[group]) return

    // stage output
    if (type === 'stage_run' && this.view.stage) {
      console.log('--- STAGE_RUN ---')
      console.log(payload)
    }

    // generic output fallback (trace mode)
    if (this.mode === 'trace') {
      console.log(`--- ${type.toUpperCase()} ---`)
      console.log(payload)
    }
  },
  groupByType() {
    const map = {}

    for (const e of this.events) {
      if (!map[e.type]) map[e.type] = []
      map[e.type].push(e)
    }

    return map
  },
  summarizePipeline() {
    if (!this.enabled) return

    const emitted = new Set(this.events.filter((e) => e.type === 'stage_run').map((e) => e.stage))

    console.log('\n--- STAGES ---')
    Object.values(STAGES).forEach((stage) => {
      console.log(emitted.has(stage) ? '✔' : '✖', stage)
    })

    const grouped = this.groupByType()

    for (const [type, logs] of Object.entries(grouped)) {
      if (!logs.length) continue

      const group =
        type === 'stage_run'
          ? 'stage'
          : type.includes('rules')
          ? 'rules'
          : type.includes('regions')
          ? 'regions'
          : type.includes('render')
          ? 'render'
          : null

      if (group && !this.view[group]) continue

      console.log(`\n--- ${type.toUpperCase()} (${logs.length}) ---`)
      logs.slice(0, 10).forEach((l) => console.log(l))
    }
  },
  summarize(regions, fixes, diagnostics) {
    section('SUMMARY')
    console.log('REGIONS:', regions.length)
    console.log('FIXES:', fixes.length)
    console.log('DIAGNOSTICS:', diagnostics.length)
  },
  summarizeFileViolations(file, diagnostics) {
    if (!diagnostics.length) return
    section(`⚠️ RULE VIOLATIONS: ${file}`)
    if (DEBUG.verbose) {
      for (const d of diagnostics) {
        console.log('\n-------------------------')
        console.log(`📛 Rule: ${d.rule}`)
        console.log(`📝 Message: ${d.message}`)
        console.log(`#️⃣  Line: ${d.location.startLine}`)

        console.log('\n🔍 Context Window:\n')

        const window = d.context?.window || []

        // compute padding for alignment
        const maxLine = Math.max(...window.map((w) => String(w.lineNumber).length))
        const maxType = Math.max(...window.map((w) => w.type.length))

        for (const w of window) {
          const marker = w.isTarget ? '👉' : '  '

          const lineNum = String(w.lineNumber).padStart(maxLine, ' ')
          const type = w.type.padEnd(maxType, ' ')

          const raw = w.raw ?? ''

          console.log(`${marker} ${lineNum}: ${type} | ${raw}`)
        }
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
  },

  summarizeScriptRun(changed) {
    section('DONE')
    console.log({ changed, mode: DRY_RUN ? 'dry' : 'write' })
  },

  clear() {
    for (const key in this.buffer) {
      this.buffer[key] = []
    }
  },
}

export function diff(original, rebuilt) {
  if (!DEBUG.diff) return

  section('DIFF')

  console.log({
    lossless: original === rebuilt,
    originalLen: original.length,
    rebuiltLen: rebuilt.length,
  })

  if (original === rebuilt) return

  for (let i = 0; i < Math.min(original.length, rebuilt.length); i++) {
    if (original[i] !== rebuilt[i]) {
      console.log({
        index: i,
        original: original.slice(i, i + 40),
        rebuilt: rebuilt.slice(i, i + 40),
      })
      break
    }
  }
}
