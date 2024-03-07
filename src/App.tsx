import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import { sendHello } from "./api/hello";
import ExperimentsPage from "./pages/experiments";
import IndexPage from "./pages/index";

const App: Component = () => {
  // Warm up the API from idle state to prepare
  // for other incoming requests.
  sendHello();
  return (
    <Router>
      <Route path="/" component={IndexPage} />
      <Route path="/experiments" component={ExperimentsPage} />
    </Router>
  );
};

export default App;
