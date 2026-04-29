import { processFile } from '../runner.js'

export const debugPlugin = {
  beforeTokenize(ctx) {
    console.log('TOKENIZING:', ctx.file)
  },
}
