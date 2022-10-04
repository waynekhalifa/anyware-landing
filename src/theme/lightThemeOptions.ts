import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  direction: "ltr",
  palette: {
    primary: {
      light: "#ab5357",
      main: "#97282D",
      dark: "#691c1f",
    },
    secondary: {
      light: "#33bfff",
      main: "#00b0ff",
      dark: "#007bb2",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    text: {
      primary: "#8B0F14",
      secondary: "#0B416A",
    },
  },
  // shape: {
  //   borderRadius: 0,
  // },
  typography: {
    fontFamily: ["Manrope", "serif"].join(","),
  },
};

export default lightThemeOptions;
