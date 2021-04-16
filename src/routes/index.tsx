import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from 'pages/NotFound';
import HomePage from 'pages/Home';
import CreateParty from 'pages/CreateParty';
import SigninPage from 'pages/Signin';
import RegisterPage from 'pages/Register';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} exact path={['/', '/home']} component={HomePage} />
        <PrivateRoute exact path="/create-party" component={CreateParty} />
        <PublicRoute restricted={false} path="/signin" component={SigninPage} />
        <PublicRoute restricted={false} path="/register" component={RegisterPage} />
        <PublicRoute restricted={false} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
