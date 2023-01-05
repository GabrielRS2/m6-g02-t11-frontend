import { Switch, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { ProductPage } from "../Pages/Product/";
import { DashboardUser } from "../Pages/ProfileViewUser";
import { Test } from "../Pages/Test";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product/:productId">
        <ProductPage />
      </Route>
      <Route path="/dashboard/:userId">
        <DashboardUser />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
    </Switch>
  );
};
