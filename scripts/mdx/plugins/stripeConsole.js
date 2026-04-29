import { processFile } from '../runner.js'

export const stripConsolePlugin = {
  name: 'strip-console',

  afterTokenize(ctx) {
    ctx.regions = ctx.regions.filter((r) => !r.value.includes('console.log'))
  },
}

processFile('file.mdx', [stripConsolePlugin])
