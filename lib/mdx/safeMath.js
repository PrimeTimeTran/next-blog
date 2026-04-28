export function safeMath(content = '') {
  return (
    content
      // ❌ Fix broken multline* (KaTeX doesn't support it)
      .replace(/\\begin\{multline\*\}/g, '\\begin{aligned}')
      .replace(/\\end\{multline\*\}/g, '\\end{aligned}')

      // ❌ Fix stray HTML breaks inside MDX math contexts
      .replace(/<br\s*\/?>/g, '\\\\')

      // ❌ Fix accidental JSX-style braces inside text math contexts
      .replace(/\{x\}/g, 'x')
      .replace(/\{y\}/g, 'y')

      // ❌ Normalize double escaped newlines in math
      .replace(/\\\\\\\\/g, '\\\\')
  )
}
