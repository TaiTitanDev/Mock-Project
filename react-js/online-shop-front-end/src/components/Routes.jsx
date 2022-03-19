import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Products from "../pages/Products";
import { Logout } from "../pages/Logout";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/register" component={Register} />
      <Route path="/customers" component={Customers} />
      <Route path="/products" component={Products} />
    </Switch>
  );
};

export default Routes;
