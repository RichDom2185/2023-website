import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import Placeholder from "../../components/Placeholder";
import Section from "../../components/ui/Section";
import { Classes } from "../../utils/styles";

const IntroSection: Component = () => {
  return (
    <Section>
      <div class="w-full lg:w-5/6 space-y-10 mx-auto underline-offset-4 dark:tracking-wide">
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
            <Placeholder />
          </p>
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
