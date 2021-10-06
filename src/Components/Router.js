import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import Home from "../Routes/Home";
import Add from "../Routes/Add";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>;
        <Route path="/add/:id" component={Add}></Route>;
      </Switch>
    </Router>
  );
};
