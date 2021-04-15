import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
import HomePage from "pages/Home";
import CreateParty from "pages/CreateParty";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";

const Routes: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "home"]} component={HomePage} />
        <Route path="/create-party" component={CreateParty} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
