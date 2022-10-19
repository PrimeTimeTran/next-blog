import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function Snippets(params) {
  return (
    <div className="bg-pink-50">
      <div className="flex flex-row">
        <div className="m-5 w-2/4">
          <SyntaxHighlighter language="javascript" style={docco}>
            {`console.log('Hi')`}
          </SyntaxHighlighter>
        </div>
        <div className="m-5 w-2/4">
          <SyntaxHighlighter language="javascript" style={docco}>
            {`console.log('Hi')`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
