import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "#271033", // Set the background color
        // color: "white", // Optional: Set the text color for better contrast
        overflow:"hidden"
      },
    },
  },
});

export default theme;
