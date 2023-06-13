import { Component } from "solid-js";
import Sidebar from "../../components/sidebar/Sidebar";
import FooterSection from "./FooterSection";
import WelcomeSection from "./WelcomeSection";

const IndexPage: Component = () => {
  return (
    <div class="flex transition-colors duration-100">
      <Sidebar />
      <div class="grid grid-cols-1">
        <WelcomeSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default IndexPage;
