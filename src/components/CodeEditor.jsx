import { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import SideBar from "./SideBar";
const CodeEditor = () => {
  console.log("created");
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          {/* sidebar  */}
          <SideBar />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flexDirection: "column", display: "flex",width:"50%" }}>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
          <div>
            {/* Output */}
            <Output editorRef={editorRef} language={language} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CodeEditor;
