import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import SideBar from "./SideBar";
const CodeEditor = () => {
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
  <SideBar/>
<Box
  display="flex"
  flexDirection={{ base: "column", md: "row" }} // Stack in column for small screens
  justifyContent="center"
  alignItems="center"
>


  <Box w={{ base: "90vw", md: "50vw" }} mb={{ base: 4, md: 0 }}>
    {/* Language Selector and Editor */}
    <LanguageSelector language={language} onSelect={onSelect}/>
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
  </Box>

  <Box w={{ base: "90vw", md: "40vw" }}>
    {/* Output */}
    <Output editorRef={editorRef} language={language} />
  </Box>
</Box>


      </>
  );
};
export default CodeEditor;
