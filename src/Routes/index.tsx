import { Switch, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { ProductPage } from "../Pages/Product/";
import { DashboardUser } from "../Pages/ProfileViewUser";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/product/:productId">
        <ProductPage />
      </Route>
      <Route path="/dashboard">
        <DashboardUser />
      </Route>
    </Switch>
  );
};
