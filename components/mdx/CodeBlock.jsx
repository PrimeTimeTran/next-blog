export function CodeBlock({ node, children }) {
  return (
    <div className="code-wrapper">
      {node?.data?.title && <div className="remark-code-title">{node.data.title}</div>}

      <pre>{children}</pre>
    </div>
  )
}
