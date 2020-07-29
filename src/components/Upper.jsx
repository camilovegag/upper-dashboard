import React, { useState } from "react";
import { Grid, Hidden } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Finances from "./Finances";
import Clients from "./Clients";
import Products from "./Products";
import ProductsCreate from "./ProductsCreate";
import Orders from "./Orders";
import Invoices from "./Invoices";

export default function App() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <Grid container component="main">
        <Nav onClick={openDrawer} />
        <Grid item>
          <Hidden xlDown>
            <Sidebar variant="permanent" open={true} />
          </Hidden>
        </Grid>
        <Grid item>
          <Hidden xlUp>
            <Sidebar variant="temporary" open={open} onClose={openDrawer} />
          </Hidden>
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route component={Dashboard} path="/" exact />
            <Route component={Finances} path="/finanzas" />
            <Route component={Clients} path="/clientes" />
            <Route component={Products} path="/productos" exact />
            <Route component={ProductsCreate} path="/productos/crear" exact />
            <Route component={Orders} path="/pedidos" />
            <Route component={Invoices} path="/facturas" />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}
