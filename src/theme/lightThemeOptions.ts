import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  direction: "ltr",
  palette: {
    primary: {
      light: "#d1b779",
      main: "#C6A658",
      dark: "#8a743d",
    },
    secondary: {
      light: "#868686",
      main: "#686868",
      dark: "#484848",
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
