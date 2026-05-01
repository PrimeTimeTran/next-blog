import React from 'react'
import { useState } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-go'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-javascript'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const langMap = {
  go: 'go',
  py: 'python',
  js: 'javascript',
  ts: 'typescript',
}

function HighlightOverlay({ highlight, code }) {
  const lines = code.split('\n')

  return (
    <div className="pointer-events-none absolute inset-0 font-mono text-sm leading-6">
      {lines.map((_, i) => {
        const n = i + 1
        const isHL = highlight.includes(n)

        return (
          <div key={n} className={isHL ? 'bg-yellow-200/20' : ''} style={{ height: '1.5em' }} />
        )
      })}
    </div>
  )
}

export function CodeBlock(props) {
  return <pre>{props.children}</pre>
}

function extractText(node) {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (React.isValidElement(node)) return extractText(node.props.children)
  return ''
}
export function Pre(props) {
  const { code, children } = props

  const meta =
    props.codeMeta || props.children?.props?.codeMeta
      ? JSON.parse(props.codeMeta || props.children?.props?.codeMeta || '{}')
      : props

  const { lang, showLineNumbers, fileName: title, highlight = [] } = meta

  const rawCode = (code ?? extractText(children)).trim()
  const resolvedLang = langMap[lang || ''] || lang || 'text'
  const grammar = Prism.languages[resolvedLang]

  let html = grammar ? Prism.highlight(rawCode, grammar, resolvedLang) : rawCode

  // Split into lines
  const lines = html.split(/\r?\n/)

  // Create a helper to verify we actually have work to do
  const hasHighlights = Array.isArray(highlight) && highlight.length > 0

  const transformedHtml = lines
    .map((line, index) => {
      const lineNumber = index + 1

      // Only check includes if the array actually exists and has values
      const isHighlighted = hasHighlights && highlight.includes(lineNumber)

      // Using a template literal for the classes
      const bgClass = isHighlighted ? 'bg-blue-500/20 border-l-blue-500' : 'border-l-transparent'

      return `
      <div class="flex px-4 border-l-4 ${bgClass}">
        ${
          showLineNumbers
            ? `<span class="mr-4 w-8 shrink-0 text-right opacity-20 select-none font-mono">${lineNumber}</span>`
            : ''
        }
        <span class="flex-1 whitespace-pre">${line || ' '}</span>
      </div>`.trim()
    })
    .join('')

  return (
    <div className="not-prose my-5 overflow-hidden rounded-lg border border-slate-700 bg-[#0d1117] text-slate-200">
      {title && (
        <div className="border-b border-slate-700 bg-slate-800/50 px-4 py-2 font-mono text-xs text-slate-400">
          {title}
        </div>
      )}
      <pre className="!m-0 overflow-x-auto py-4 font-mono text-sm leading-relaxed">
        {/* 
            CRITICAL: We remove the 'language-xxx' class from the <code> tag 
            to prevent the Prism JS plugin from trying to "re-highlight" 
            what we already did.
        */}
        <code className="block min-w-full" dangerouslySetInnerHTML={{ __html: transformedHtml }} />
      </pre>
    </div>
  )
}

export function TabGroup({ tabs }) {
  const [active, setActive] = useState(0)

  const parsed = typeof tabs === 'string' ? JSON.parse(tabs) : tabs
  if (!parsed?.length) return null

  return (
    <div className="tab-group">
      <div className="tab mb-2 flex gap-2">
        {parsed.map((tab, i) => (
          <button
            key={tab.label}
            className={`tablinks ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-panels">
        {parsed.map((tab, i) => (
          <div key={tab.lang} style={{ display: i === active ? 'block' : 'none' }}>
            <Pre
              lang={tab.lang}
              code={tab.content}
              showLineNumbers={tab.showLineNumbers}
              highlight={tab.highlight}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
