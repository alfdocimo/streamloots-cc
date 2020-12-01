import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CardDetails from "./pages/CardDetails/CardDetails";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/card-details/:id">
          <CardDetails />
        </Route>
      </Switch>
    </Router>
  );
}
