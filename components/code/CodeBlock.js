import Pre from '../mdx/Pre'

export function CodeBlock({ code, lang }) {
  return <Pre className={`language-${lang}`}>{code}</Pre>
}
