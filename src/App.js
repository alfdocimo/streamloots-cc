import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import CardDetails from "./pages/CardDetails/CardDetails";
import { analytics1, analytics2 } from "./analytics";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const allAnalytics = [analytics1, analytics2];

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.toElement.nodeName === "BUTTON") {
        allAnalytics.forEach((analytics) =>
          analytics.sendEvent(
            `Button clicked: [${e.toElement.getAttribute("tracking-id")}]`,
            e
          )
        );
      }
    });
    return () => {
      document.removeEventListener("click");
    };
  });

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </Route>
        <Route path="/card-details/:id">
          <ErrorBoundary>
            <CardDetails />
          </ErrorBoundary>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
