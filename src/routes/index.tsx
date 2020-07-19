import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import { isAuthenticated } from '../auth';

const PrivateRouter = ({ component, ...rest }: any) => {
  const Component = component;
  return (
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
  )
}

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={() => (<SignIn action="signin" />)} />
    <Route exact path="/signin" component={() => (<SignIn action="signin" />)} />
    <Route exact path="/new-account" component={() => (<SignIn action="new-account" />)} />
    <Route exact path="/success-new-account" component={() => (<SignIn action="success-new-account" />)} />
    <Route exact path="/forgot-password" component={() => (<SignIn action="forgot-password" />)} />
    <PrivateRouter exact path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;