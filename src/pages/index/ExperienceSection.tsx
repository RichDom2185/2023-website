import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import Placeholder from "../../components/Placeholder";
import { Classes } from "../../utils/styles";

const ExperienceSection: Component = () => {
  return (
    <>
      {/* TODO: Refactor styles together with other sections */}
      <div
        class={classNames(
          "bg-white dark:bg-zinc-900",
          "text-zinc-900 dark:text-stone-400",
          "px-5 py-10 dark:tracking-wide",
          "px-10 md:px-20",
          Classes.TEXT_NORMAL
        )}
      >
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
      </div>
      <Placeholder />
    </>
  );
};

export default ExperienceSection;
