import React, { useState } from 'react';
import {useLocation, Redirect, Switch, Route} from "react-router-dom";
import {withoutValidateRoutes, withValidateRoutes} from "./routes/app.routes";
import withAuthentication from "./common-wrapper/withAuthentication";
import withQuery from './common-wrapper/withQuery';
import useProgressBar from './hooks/useProgressBar';
import ProgressBar from './common-ui/ProgressBar/ProgressBar';

function App() {

  const location = useLocation();
  if ((location.pathname === "" || location.pathname === "/")) {
    return <Redirect to="/authentication/login"/>
  }
  return (
    <div className="App">
        {/*<ProgressBar/>*/}
      <Switch>
        {
          withoutValidateRoutes &&
          withoutValidateRoutes.length > 0 &&
          withoutValidateRoutes.map(({name, component, ...props}) => {
            return <Route key={name} {...props} render={() => component()}/>
          })
        }
        {
          withoutValidateRoutes &&
          withoutValidateRoutes.length > 0 &&
          withoutValidateRoutes.map(({name, component, ...props}) => {
            return <Route key={name} {...props} render={() => withAuthentication(component())}/>
          })
        }
      </Switch>

    </div>
  );
}

export default withQuery(App);
