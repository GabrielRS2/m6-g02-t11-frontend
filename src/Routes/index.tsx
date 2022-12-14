import { Switch, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

export const Routes = () => {

  return (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
  </Switch>
  );
};