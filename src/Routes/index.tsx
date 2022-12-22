import { Switch, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Product } from "../Pages/Product";
import { DashboardUser } from "../Pages/ProfileViewUser";


export const Routes = () => {
  return (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route path="/product/:productId">
      <Product />
    </Route>
    <Route path="/dashboard">
      <DashboardUser />
    </Route>
  </Switch>
  );
};