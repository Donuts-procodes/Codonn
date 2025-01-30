import { useRef, useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useSearchParams } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [searchParams] = useSearchParams(); 

  useEffect(() => {
    // Set initial language based on the query parameter
    const selectedLanguage = searchParams.get("language") || "javascript";
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage] || "");
  }, [searchParams]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language] || "");
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          margin:"1rem"
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <div style={{display:"flex",flexDirection:"column"}}>

        <LanguageSelector language={language} onSelect={onSelect} />
          <div
            style={{ flexDirection: "column", display: "flex", width: "50vw", padding:"0",boxShadow:"5px 5px 10px #000",height:"75vh" }}
            >
            <Editor
              options={{ minimap: { enabled: false } }}
              height="75vh"
              theme="vs-dark"
              language={language}
              value={value}
              onMount={onMount}
              onChange={(value) => setValue(value)}
              
              />
          </div>
              </div>
          <div style={{ width: "40vw" }}>
            {/* Output */}
            <Output editorRef={editorRef} language={language} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
