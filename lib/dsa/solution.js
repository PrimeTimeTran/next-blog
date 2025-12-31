import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/theme-monokai'

export default function Solution({ solution }) {
  return (
    <div>
      <div className="p-2">
        <h1>{solution.title}</h1>
        <p>{solution.body}</p>
      </div>
      <AceEditor
        mode="python"
        theme="monokai"
        value={solution.code}
        height="300px"
        width="100%"
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
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
