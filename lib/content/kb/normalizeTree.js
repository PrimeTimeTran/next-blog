export function normalizeTree(tree) {
  return Object.values(tree).map((node) => ({
    name: node.name,
    isFile: node.isFile,
    ...(node.slug ? { slug: node.slug } : {}), // ✅ key fix
    children: node.children ? normalizeTree(node.children) : [],
  }))
}
