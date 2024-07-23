import classNames from "classnames";
import { Component, For, createMemo, createSignal } from "solid-js";
import ProjectDisplay from "../../components/data/ProjectDisplay";
import Page from "../../components/ui/Page";
import Section from "../../components/ui/Section";
import { allProjects, projectYears } from "../../data/projects";
import { Classes } from "../../utils/styles";
import { matchesQuery } from "../../utils/text";
import IntroSection from "./IntroSection";

// Sort the years in descending (reverse chronological) order
const sortedYears = [...projectYears].sort((a, b) => b - a);

const ExperimentsPage: Component = () => {
  const [searchQuery, setSearchQuery] = createSignal("");

  const filteredYears = createMemo(() => {
    if (!searchQuery()) {
      return sortedYears;
    }
    return sortedYears.filter((year) =>
      allProjects[year].some((project) =>
        matchesQuery(project.name, searchQuery())
      )
    );
  });

  return (
    <Page withHeader withSidebar>
      <div
        // Auto-padded against header
        class={Classes.BACKGROUND_DYNAMIC_COLOR}
      />
      <IntroSection />
      <Section>
        <div class={classNames(Classes.SECTION_BODY_RESPONSIVE, "space-y-10")}>
          <div class="w-full">
            <input
              type="text"
              placeholder="Search projects..."
              onInput={(e) => setSearchQuery(e.currentTarget.value)}
              value={searchQuery()}
              class={classNames(
                "w-full",
                "px-3 py-6",
                "outline-none",
                "border-b border-stone-500",
                "dark:bg-stone-800 dark:border-stone-700",
                // Adapted from Classes.HOVER_DYNAMIC_BACKGROUND,
                "hover:bg-black/10 dark:hover:bg-white/10",
                "bg-black/5 dark:bg-white/5"
              )}
            />
          </div>
          <For each={filteredYears()}>
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
                  <For
                    each={allProjects[year].filter((p) =>
                      matchesQuery(p.name, searchQuery())
                    )}
                  >
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
