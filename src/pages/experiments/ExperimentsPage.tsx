import { Component } from "solid-js";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Section from "../../components/ui/Section";

const ExperimentsPage: Component = () => {
  return (
    <div class="flex transition-colors duration-100">
      <Sidebar />
      <div class="grid grid-cols-1">
        <Header />
        <Section>
          <h1>Experiments Page coming soon!</h1>
        </Section>
      </div>
    </div>
  );
};

export default ExperimentsPage;
