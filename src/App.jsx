import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import IntroPage from "./components/IntroPage";
import SideBar from "./components/SideBar";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Flex
      minH="100vh"
      bg="linear-gradient(30deg, rgba(21,35,70,1) 0%, rgba(47,22,69,1) 25%, rgba(47,22,69,1) 75%, rgba(44,30,74,1) 100%)"
      // bg="#271033"
      // bg="rgb(21,35,70)"
      color="#A5C2FB"
      m={0}
      W="100vw"
      maxW="100vw"
      overflowY="hidden"
    >
      <IntroPage />
      {/* <CodeEditor /> */}
      {/* <SideBar/> */}
      {/* <SignupPage/> */}
      {/* <LoginPage/> */}
    </Flex>
  );
}

export default App;
