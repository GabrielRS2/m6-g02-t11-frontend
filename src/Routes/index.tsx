import { Switch, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { ProductPage } from "../Pages/Product/";
import { DashboardUser } from "../Pages/ProfileViewUser";
import { Recover } from "../Pages/Recover";
import { Register } from "../Pages/Register";
import { RecoverPassword } from "../Pages/NewPassword";
import { Examples } from "../Pages/examples";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/examples/">
        <Examples />
      </Route>
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
      <Route exact path="/recoverPassword">
        <Recover />
      </Route>
      <Route path="/recoverPassword/:id/:token">
        <RecoverPassword />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
