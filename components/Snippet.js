import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Snippet({
  fileName = '',
  code = '',
  language = 'python',
  showLineNumbers = true,
}) {
  return (
    <div className="tab-group">
      <div className="tab">
        <button id={language} className="tablinks">
          {language}
        </button>
      </div>
      <div id={language} className="tabcontent">
        {fileName && (
          <div style={{ fontSize: '0.9em', marginBottom: '0.5em', color: '#888' }}>{fileName}</div>
        )}
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
