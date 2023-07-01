import { Component, For } from "solid-js";
import Placeholder from "../../components/Placeholder";
import ProjectDisplay from "../../components/data/ProjectDisplay";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Section from "../../components/ui/Section";
import { allProjects, projectYears } from "../../data/projects";

const ExperimentsPage: Component = () => {
  return (
    <div class="flex transition-colors duration-100">
      <Sidebar />
      <div class="grid grid-cols-1">
        <Header />
        <Section>
          <Placeholder>
            <h1>Experiments Page coming soon!</h1>
            <For each={projectYears}>
              {(year) => (
                <For each={allProjects[year]}>
                  {(project) => <ProjectDisplay {...project} />}
                </For>
              )}
            </For>
          </Placeholder>
        </Section>
      </div>
    </div>
  );
};

export default ExperimentsPage;
