const { createRuleContext } = require('./rules/createRuleContext')
const noH2 = require('./rules/no-h2')

const RULES = [noH2]

function runRules(lines, file) {
  const diagnostics = []

  for (const rule of RULES) {
    // IMPORTANT: create a fresh context per rule pass
    const ctx = createRuleContext({ file, lines })

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      const result = rule.run(line, i, ctx)

      if (!result) continue

      diagnostics.push(...result)
    }
  }

  return diagnostics
}

module.exports = { runRules }
