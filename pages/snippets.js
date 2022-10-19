import SyntaxHighlighter from 'react-syntax-highlighter'
import { useTheme } from 'next-themes'
import { docco, dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function Snippets(params) {
  const { theme } = useTheme()

  return (
    <div className="">
      <div className="flex flex-row">
        <div className={`m-5 w-2/4 border border-${theme === 'dark' ? 'white' : 'black'}`}>
          <SyntaxHighlighter language="javascript" style={theme == 'dark' ? dark : docco}>
            {`console.log('Hi')`}
          </SyntaxHighlighter>
        </div>
        <div className="m-5 w-2/4">
          <SyntaxHighlighter language="javascript" style={theme == 'dark' ? docco : dark}>
            {`console.log('Hi')`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
