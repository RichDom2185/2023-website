import classNames from "classnames";
import { Component, For } from "solid-js";
import ProjectDisplay from "../../components/data/ProjectDisplay";
import Page from "../../components/ui/Page";
import Section from "../../components/ui/Section";
import { allProjects, projectYears } from "../../data/projects";
import { Classes } from "../../utils/styles";
import IntroSection from "./IntroSection";

// Sort the years in descending (reverse chronological) order
const sortedYears = [...projectYears].sort((a, b) => b - a);

const ExperimentsPage: Component = () => {
  return (
    <Page withHeader withSidebar>
      <IntroSection />
      <Section>
        <div class={classNames(Classes.SECTION_BODY_RESPONSIVE, "space-y-10")}>
          <For each={sortedYears}>
            {(year) => (
              <div class="space-y-4">
                <h2
                  class={classNames(
                    "text-3xl font-display tracking-wider",
                    Classes.TEXT_MEDIUM
                  )}
                >
                  {year}
                </h2>
                <div
                  class={classNames(
                    "divide-y divide-neutral-300 dark:divide-stone-800"
                    // "px-3 py-3",
                    // "border rounded-lg border-dashed border-stone-500"
                  )}
                >
                  <For each={allProjects[year]}>
                    {(project) => (
                      <div
                        class={classNames(
                          "pt-3 pb-4 px-4", // change to px-3 if above border is used
                          Classes.HOVER_DYNAMIC_BACKGROUND
                        )}
                      >
                        <ProjectDisplay {...project} />
                      </div>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </Section>
    </Page>
  );
};

export default ExperimentsPage;
