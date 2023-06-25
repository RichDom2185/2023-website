import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import ExperimentsPage from "./pages/experiments";
import IndexPage from "./pages/index";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={IndexPage} />
      <Route path="/experiments" component={ExperimentsPage} />
    </Routes>
  );
};

export default App;
