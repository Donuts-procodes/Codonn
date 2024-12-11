import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import IntroPage from "./components/IntroPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Flex
      minH="100vh"
      // bg="linear-gradient(60deg, rgba(21,35,70,1) 15%, rgba(47,22,69,1) 38%, rgba(44,30,74,1) 94%)"
      bg="#271033"
      color="#A5C2FB"
      m={0}
      W="100vw"
    >
      <IntroPage />
      {/* <CodeEditor /> */}
      {/* <SideBar/> */}
    </Flex>
  );
}

export default App;
