import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  direction: "ltr",
  palette: {
    primary: {
      light: "#db62c7",
      main: "#d33bba",
      dark: "#932982",
    },
    secondary: {
      light: "#9361eb",
      main: "#783ae7",
      dark: "#5428a1",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: ["Manrope", "serif"].join(","),
  },
};

export default lightThemeOptions;
