import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FiClipboard } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { docco, dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { snippets } from './code-snippets.js'

const LanguagePicker = ({ selectedLanguage, onLanguageChange }) => {
  const languages = ['python', 'javascript']

  return (
    <div className="mb-4 flex space-x-4">
      {languages.map((lang) => (
        <button
          key={lang}
          className={`rounded px-4 py-2 ${
            selectedLanguage === lang ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => onLanguageChange(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Snippets(params) {
  const { theme } = useTheme()
  const [language, setLanguage] = useState('python')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const borderColor = theme === 'dark' ? 'white' : 'black'
  const snippetStyle = theme === 'dark' ? dark : docco
  const snippetContainerStyle = {
    borderColor: borderColor,
    height: '300px',
    width: '400px',
    overflow: 'auto',
    backgroundColor: snippetStyle.hljs.background || 'inherit',
  }

  return (
    <div className="">
      <LanguagePicker selectedLanguage={language} onLanguageChange={setLanguage} />
      <h1>Sorting Algorithms</h1>
      <div className="flex flex-row">
        <div className="m-3 flex-1 rounded border" style={snippetContainerStyle}>
          <CopyToClipboard text={snippets[language].bubbleSort.code} onCopy={handleCopy}>
            <button className="absolute top-2 right-2 rounded bg-gray-200 p-2 hover:bg-gray-300">
              <FiClipboard size={20} />
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language={language} style={snippetStyle}>
            {snippets[language].bubbleSort.code}
          </SyntaxHighlighter>
        </div>
        <div className="m-3 flex-1 rounded border" style={snippetContainerStyle}>
          <SyntaxHighlighter language={language} style={snippetStyle}>
            {snippets[language].selectionSort.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="m-3 flex-1 overflow-auto rounded border" style={snippetContainerStyle}>
          <SyntaxHighlighter language={language} style={snippetStyle}>
            {snippets[language].insertionSort.code}
          </SyntaxHighlighter>
        </div>
        <div className="m-3 flex-1 overflow-auto rounded border" style={snippetContainerStyle}>
          <SyntaxHighlighter language={language} style={snippetStyle}>
            {snippets[language].mergeSort.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <h1>BFS & DFS</h1>
      <div className="flex flex-row">
        <div className="m-3 flex-1 overflow-auto rounded border" style={snippetContainerStyle}>
          <SyntaxHighlighter language={language} style={snippetStyle}>
            {snippets[language].bfs.code}
          </SyntaxHighlighter>
        </div>
        <div className="m-3 flex-1 overflow-auto rounded border" style={snippetContainerStyle}>
          <SyntaxHighlighter language={language} style={snippetStyle}>
            {snippets[language].dfs.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
