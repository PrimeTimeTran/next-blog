import { DIAG } from '../logs.js'

export const STAGES = {
  BEFORE_READ: 'before_read',
  AFTER_READ: 'after_read',

  BEFORE_RULES: 'before_rules',
  AFTER_RULES: 'after_rules',

  BEFORE_FIXES: 'before_fixes',
  AFTER_FIXES: 'after_fixes',

  BEFORE_TOKENIZE: 'before_tokenize',
  AFTER_TOKENIZE: 'after_tokenize',

  BEFORE_RENDER: 'before_render',
  AFTER_RENDER: 'after_render',

  BEFORE_WRITE: 'before_write',
  AFTER_WRITE: 'after_write',
}

export function runStage(stage, ctx, plugins = []) {
  for (const plugin of plugins) {
    const fn = plugin?.[stage]

    if (typeof fn === 'function') {
      DIAG.emit('stage_run', {
        stage,
        plugin: plugin.name,
      })
      fn(ctx)
    }
  }
}
