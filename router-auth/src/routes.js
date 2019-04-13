import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated, getToken } from "./services/auth";

import Login from "./views/login";
import Register from "./views/register";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Padrao = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/app", state: { from: props.location } }} />
      )
    }
  />
);


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Padrao exact path="/" component={Login} />
      <Route path="/signup" component={Register} />
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
