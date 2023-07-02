import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component, For } from "solid-js";
import Placeholder from "../../components/Placeholder";
import ExperienceDisplay from "../../components/data/ExperienceDisplay";
import Section from "../../components/ui/Section";
import { workExperiences } from "../../data/experience";
import { Classes } from "../../utils/styles";

const ExperienceSection: Component = () => {
  return (
    <>
      <Section>
        <div class="w-full lg:w-5/6 space-y-10 mx-auto underline-offset-4 dark:tracking-wide">
          <h1
            class={classNames(
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
        <div class="w-full lg:w-5/6 space-y-20 mx-auto underline-offset-4 dark:tracking-wide">
          <div class="space-y-4">
            <h2
              class={classNames(
                "text-2xl text-center font-display tracking-wider",
                Classes.TEXT_MEDIUM
              )}
            >
              Work
            </h2>
            <div class="space-y-1">
              <For each={workExperiences}>
                {(experience, i) => (
                  <div class="w-full px-6 py-4 bg-stone-500 bg-opacity-5">
                    <ExperienceDisplay {...experience} />
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
      </Section>
      <Placeholder />
    </>
  );
};

export default ExperienceSection;
