import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import Upper from "./components/Upper";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Upper />
    </ThemeProvider>
  );
}
