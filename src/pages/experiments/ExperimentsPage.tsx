import classNames from "classnames";
import { Component, For } from "solid-js";
import ProjectDisplay from "../../components/data/ProjectDisplay";
import Page from "../../components/ui/Page";
import Section from "../../components/ui/Section";
import { allProjects, projectYears } from "../../data/projects";
import { Classes } from "../../utils/styles";
import IntroSection from "./IntroSection";

const ExperimentsPage: Component = () => {
  return (
    <Page withHeader withSidebar>
      <IntroSection />
      <Section>
        <div class="w-full lg:w-5/6 space-y-10 mx-auto underline-offset-4 dark:tracking-wide">
          <For each={projectYears}>
            {(year) => (
              <>
                <h2
                  class={classNames(
                    "text-3xl font-display tracking-wider",
                    Classes.TEXT_MEDIUM
                  )}
                >
                  {year}
                </h2>
                <For each={allProjects[year]}>
                  {(project) => <ProjectDisplay {...project} />}
                </For>
              </>
            )}
          </For>
        </div>
      </Section>
    </Page>
  );
};

export default ExperimentsPage;
