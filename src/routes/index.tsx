import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={() => (<SignIn action="signin" />)} exact />
    <Route path="/dashboard" component={Dashboard} exact />
    <Route path="/signin" component={() => (<SignIn action="signin" />)} exact />
    <Route path="/new-account" component={() => (<SignIn action="new-account" />)} exact />
    <Route path="/forgot-password" component={() => (<SignIn action="forgot-password" />)} exact />
  </Switch>
);

export default Routes;