export function buildKbTree(files) {
  const root = { __children: {} }

  for (const file of files) {
    if (!file?.slug) continue

    const parts = file.slug.split('/').filter(Boolean)

    let current = root.__children
    let pathSoFar = []

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      pathSoFar.push(part)

      const nodeId = pathSoFar.join('/')

      if (!current[part]) {
        current[part] = {
          __id: nodeId,
          __children: {},
          __meta: null,
        }
      }

      if (i === parts.length - 1) {
        current[part].__meta = file
      }

      current = current[part].__children
    }
  }

  return root.__children
}
