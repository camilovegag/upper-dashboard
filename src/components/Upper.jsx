import React, { useState } from "react";
import { Grid, Hidden } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import ProductsCreate from "./ProductsCreate";

export default function App() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <Switch>
        <Grid container component="main">
          <Nav onClick={openDrawer} />
          <Grid item xs={0}>
            <Hidden lgDown>
              <Sidebar variant="permanent" open={true} />
            </Hidden>
          </Grid>
          <Grid item xs={0}>
            <Hidden xlUp>
              <Sidebar variant="temporary" open={open} onClose={openDrawer} />
            </Hidden>
          </Grid>
          <Grid item xs={12}>
            <Route component={Dashboard} path="/" exact />
            <Route component={Products} path="/productos" exact />
            <Route component={ProductsCreate} path="/productos/crear" exact />
          </Grid>
        </Grid>
      </Switch>
    </Router>
  );
}
