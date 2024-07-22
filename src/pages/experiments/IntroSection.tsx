import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import Section from "../../components/ui/Section";
import { Classes } from "../../utils/styles";

const IntroSection: Component = () => {
  return (
    <Section>
      <div class={classNames(Classes.SECTION_BODY_RESPONSIVE, "space-y-10")}>
        <h1
          class={classNames(
            "text-4xl font-display text-center",
            Classes.TEXT_BOLD
          )}
        >
          <Icon inline icon="twemoji:alembic" /> Experiments
        </h1>
        <div class="w-full max-w-lg space-y-6 mx-auto">
          <p
            class={classNames(
              "text-md md:text-lg text-justify",
              "italic",
              Classes.TEXT_NORMAL
            )}
          >
            An archive of my personal projects and experiments. These projects
            are mostly for fun, learning and/or exploration purposes. They may
            not be polished or complete, but they are a great way for me to
            learn new things and try out new ideas.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
