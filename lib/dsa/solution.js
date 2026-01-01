import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-github'

export default function Solution({ solution }) {
  const isDark = document.documentElement.classList.contains('dark')

  return (
    <div>
      <div className="p-2">
        <h3 className="text-lg font-bold">{solution.title}</h3>
        <hr />
        <p className="p-2">{solution.body}</p>
        {solution.bigOTime && <p className="p-2">Time: {solution.bigOTime}</p>}
        {solution.bigOSpace && <p className="p-2">Space: {solution.bigOSpace}</p>}
      </div>
      <AceEditor
        mode="python"
        // theme={isDark ? 'monokai' : 'github'}
        theme={'monokai'}
        value={solution.code}
        height="300px"
        width="100%"
        fontSize={14}
        showPrintMargin={false}
        // showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  )
}
