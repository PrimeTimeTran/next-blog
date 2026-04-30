import { useState } from 'react'
import Prism from 'prismjs'
// import Pre from './Pre'

import 'prismjs/components/prism-go'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-javascript'

const langMap = {
  go: 'go',
  py: 'python',
  js: 'javascript',
  ts: 'typescript',
}

function Pre({ lang, code }) {
  const resolvedLang = langMap[lang] || lang
  const grammar = Prism.languages[resolvedLang]
  const html = grammar ? Prism.highlight(code, grammar, resolvedLang) : code
  return (
    <pre className={`language-${resolvedLang}`}>
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  )
}

export function TabGroup({ tabs = '[]' }) {
  const parsed = typeof tabs === 'string' ? JSON.parse(tabs) : tabs

  const [active, setActive] = useState(0)

  if (!parsed.length) return null

  return (
    <div className="tab-group">
      <div className="tab flex gap-2">
        {parsed.map((tab, i) => {
          const isActive = i === active
          console.log(tab.label, isActive)
          return (
            <button
              key={tab.label}
              className={`tablinks ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="tab-panels">
        {parsed.map((tab, i) => (
          <div key={tab.label} style={{ display: i === active ? 'block' : 'none' }}>
            <Pre lang={tab.lang} code={tab.content} />
          </div>
        ))}
      </div>
    </div>
  )
}
