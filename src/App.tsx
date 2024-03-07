import { Route, Router } from "@solidjs/router";
import { lazy, type Component } from "solid-js";
import { sendHello } from "./api/hello";

const ExperimentsPage = lazy(() => import("./pages/experiments"));
const IndexPage = lazy(() => import("./pages/index"));

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
