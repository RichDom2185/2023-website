import { Component } from "solid-js";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import FooterSection from "./FooterSection";
import WelcomeSection from "./WelcomeSection";

const IndexPage: Component = () => {
  return (
    <div class="flex transition-colors duration-100">
      <Sidebar />
      <div class="grid grid-cols-1">
        <Header />
        <WelcomeSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default IndexPage;
