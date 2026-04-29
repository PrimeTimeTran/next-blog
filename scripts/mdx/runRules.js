import { createRuleContext } from './rules/createRuleContext.js'

import noH2 from './rules/no-h2.js'
import { DIAG } from './logs.js'

const RULES = [noH2]

export function runRules(lines, file) {
  const diagnostics = []

  for (const rule of RULES) {
    const ctx = createRuleContext({ file, lines })

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      const result = rule(line, i, ctx)

      if (!result) continue
      DIAG.emit('rules', result)
      diagnostics.push(...result)
    }
  }

  return diagnostics
}
