import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';

const Editor = ({ value, fontSize = 14, onChange, onLoad }) => {
  return (
    <AceEditor
      placeholder="Editor"
      mode="javascript"
      theme="github"
      name="playground-editor"
      onLoad={onLoad}
      onChange={onChange}
      value={value}
      fontSize={fontSize}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      width="auto"
      editorProps={{
        $blockScrolling: Infinity,
      }}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default Editor;
