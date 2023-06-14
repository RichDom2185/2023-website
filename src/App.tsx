import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import IndexPage from "./pages/index";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={IndexPage} />
    </Routes>
  );
};

export default App;
