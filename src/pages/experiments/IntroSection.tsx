import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import Placeholder from "../../components/Placeholder";
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
            <Placeholder disableOverlay>
              <div class="space-y-6">
                <p>This page is coming soon!</p>
                <p class="text-sm">
                  Congrats, you found a hidden page! This page is not quite
                  ready yet, as it is missing the main bulk of its content. In
                  the meantime, as a reward for finding this page, enjoy some
                  test data below:
                </p>
              </div>
            </Placeholder>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
