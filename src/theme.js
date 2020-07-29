import { createMuiTheme } from "@material-ui/core";
import "typeface-pacifico";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1920,
      xl: 2040,
    },
  },
  palette: {
    primary: {
      main: "#2bb2ff",
    },
    secondary: {
      contrastText: "white",
      main: "#ffb800",
    },
  },
  typography: {
    h1: {
      color: "#fff",
      fontFamily: "pacifico",
      fontSize: "1.5rem",
    },
    h2: {
      color: "#000",
      fontSize: "1rem",
      fontWeight: 400,
    },
    h3: {
      color: "#596d79",
      fontSize: "0.875rem",
      fontWeight: 600,
    },
    h4: {
      color: "#596d79",
      fontSize: "0.875rem",
      fontWeight: 300,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      color: "#596d79",
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "uppercase",
    },
    subtitle1: {
      color: "#000",
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      color: "#596d79",
      fontSize: "1rem",
    },
    body2: {
      color: "#596d79",
      fontSize: "0.875rem",
      fontWeight: 600,
    },
  },
});

export default theme;
