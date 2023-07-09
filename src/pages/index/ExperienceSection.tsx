import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import Placeholder from "../../components/Placeholder";
import Section from "../../components/ui/Section";
import { workExperiences } from "../../data/experience";
import { Classes } from "../../utils/styles";
import ExperienceList from "./ExperienceList";

const ExperienceSection: Component = () => {
  return (
    <>
      <Section>
        <div class={classNames(Classes.SECTION_BODY_RESPONSIVE, "space-y-10")}>
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
        <div class={classNames(Classes.SECTION_BODY_RESPONSIVE, "space-y-20")}>
          <ExperienceList category="Work" items={workExperiences} />
          <Placeholder disableOverlay>
            Education and other content coming soon!
          </Placeholder>
        </div>
      </Section>
    </>
  );
};

export default ExperienceSection;
