import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated, getToken } from "./services/auth";

import routes from "./routes/index.js"

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

const Padrao = ({ component: Component, params: params, privated: privated, ...rest}) => {
    if(privated){
      return (
        <Route
          {...rest}
          render={props =>
            isAuthenticated() ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
          }
        />
      )
    }else{

        return (

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

          )

      }
}



let data = {
  view: false,
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
        {routes.map((item, i) => {
          return <Padrao path={item.path} component={item.component} privated={item.private} key={i} params={data} />
          }
        )}      
    </Switch>
  </BrowserRouter>
);

export default Routes;
