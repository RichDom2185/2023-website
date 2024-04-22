import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component, For, Show, createSignal } from "solid-js";
import Placeholder from "../../components/Placeholder";
import Section from "../../components/ui/Section";
import { Experience } from "../../types/data";
import { Classes } from "../../utils/styles";
import ExperienceList from "./ExperienceList";
import ExperienceShowcase from "./ExperienceShowcase";

const loadExperience = () => import("../../data/experience");

const ExperienceSection: Component = () => {
  const [workHistory, setWorkHistory] = createSignal<Experience[]>();
  const [educationHistory, setEducationHistory] = createSignal<Experience[]>();

  const categories: () => ReadonlyArray<
    [string, Experience[] | undefined]
  > = () => [
    ["Work", workHistory()],
    ["Education", educationHistory()],
  ];

  loadExperience().then((module) => {
    setWorkHistory(module.workExperiences);
    setEducationHistory(module.educationExperiences);
  });

  return (
    <>
      <Section>
        <div class={classNames(Classes.SECTION_BODY_RESPONSIVE, "space-y-10")}>
          <h1
            id="experience"
            class={classNames(
              "scroll-mt-[--header-height]",
              "text-4xl font-display text-center",
              Classes.TEXT_BOLD
            )}
          >
            <Icon inline icon="fluent-emoji-flat:seedling" /> My Experiences
          </h1>
          <div class="w-full space-y-6">
            <p
              class={classNames(
                "text-lg md:text-xl text-center italic font-display tracking-wide",
                Classes.TEXT_MEDIUM
              )}
            >
              Internships, school, projects, and more!
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div class={classNames(Classes.SECTION_BODY_RESPONSIVE, "space-y-20")}>
          <For each={categories()}>
            {([categoryName, categoryItems]) => (
              <Show
                when={categoryItems}
                fallback={
                  <h2
                    class={classNames(
                      "text-2xl text-center font-display tracking-wider",
                      Classes.TEXT_MEDIUM
                    )}
                  >
                    Loading {categoryName}&hellip;
                  </h2>
                }
              >
                <div class="lg:hidden">
                  <ExperienceList
                    category={categoryName}
                    items={categoryItems!}
                  />
                </div>
                <div class="hidden lg:block">
                  <ExperienceShowcase
                    category={categoryName}
                    items={categoryItems!}
                    initialIndex={0}
                  />
                </div>
              </Show>
            )}
          </For>
          <Placeholder disableOverlay>Other content coming soon!</Placeholder>
        </div>
      </Section>
    </>
  );
};

export default ExperienceSection;
