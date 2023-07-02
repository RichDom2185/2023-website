import { Component } from "solid-js";
import Page from "../../components/ui/Page";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import FooterSection from "./FooterSection";
import WelcomeSection from "./WelcomeSection";

const IndexPage: Component = () => {
  return (
    <Page withHeader withSidebar>
      <WelcomeSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </Page>
  );
};

export default IndexPage;
