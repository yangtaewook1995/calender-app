import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import Home from "../Routes/Home/Home";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>;
        <Route path="/" component={Home}></Route>;
      </Switch>
    </Router>
  );
};
