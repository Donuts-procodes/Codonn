import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        // Use a linear gradient for the background
        bg: "linear-gradient(30deg, rgba(21,35,70,1) 0%, rgba(27,32,70,1) 20%, rgba(47,22,69,1) 40%, rgba(47,23,70,1) 60%, rgba(46,24,71,1) 80%, rgba(35,25,57,1) 100%)",
      },
    },
  },
});

export default theme;

// bg: "#271033",