import { Switch, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { ProductPage } from "../Pages/Product/";
import { DashboardUser } from "../Pages/ProfileViewUser";
import { Recover } from "../Pages/Recover";
import { Register } from "../Pages/Register";

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
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/recoverPassword">
        <Recover />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
