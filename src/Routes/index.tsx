import { Switch, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Product } from "../Pages/Product";


export const Routes = () => {
  return (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route path="/product/:productId">
      <Product />
    </Route>
  </Switch>
  );
};