export function runStage(stage, ctx, plugins = []) {
  for (const plugin of plugins) {
    const fn = plugin?.[stage]
    if (typeof fn === 'function') {
      fn(ctx)
    }
  }
}
