import { Component } from "solid-js";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import WelcomeSection from "./WelcomeSection";

const IndexPage: Component = () => {
  return (
    <div class="flex transition-colors duration-100">
      <Sidebar />
      <div class="grid grid-cols-1">
        <Header />
        <WelcomeSection />
        {!false && <ContactSection />}
        <FooterSection />
      </div>
    </div>
  );
};

export default IndexPage;
