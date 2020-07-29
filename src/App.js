import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact component={Auth} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
