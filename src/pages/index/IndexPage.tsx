import { Component } from "solid-js";
import Sidebar from "../../components/sidebar/Sidebar";
import WelcomeSection from "./WelcomeSection";

const IndexPage: Component = () => {
  return (
    <div class="flex">
      <Sidebar />
      <WelcomeSection />
    </div>
  );
};

export default IndexPage;
