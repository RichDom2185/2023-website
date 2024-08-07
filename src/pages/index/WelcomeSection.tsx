import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import avatarUrl from "../../assets/svg/avatar.svg";
import { Social } from "../../types/social";
import { SOCIAL_LINKEDIN_URL } from "../../utils/constants";
import { Classes } from "../../utils/styles";

const WelcomeSection: Component = () => {
  return (
    <div
      class={classNames(
        Classes.BACKGROUND_DYNAMIC_COLOR,
        Classes.TEXT_DYNAMIC_COLOR,
        "min-h-screen px-5 py-6 dark:tracking-wide",
        "flex flex-col justify-center",
        Classes.TEXT_NORMAL
      )}
    >
      <div class="h-full place-items-center flex flex-wrap-reverse md:flex-nowrap gap-x-5 gap-y-6 justify-center px-10 md:px-20">
        <div class="w-full space-y-10 font-display leading-loose">
          <h1 class={classNames("text-4xl", Classes.TEXT_BOLD)}>
            <Icon
              inline
              icon="fluent-emoji-flat:globe-showing-asia-australia"
            />{" "}
            Hello World!
          </h1>
          <p class="text-3xl italic font-light tracking-wide">
            I am Richard Dominick.
          </p>
          <p class="text-xl tracking-wide">
            Year 4 undergraduate @ NUS Computing & Business, Singapore. Loves
            coding, learning and just exploring new things.
          </p>
          <div class="flex flex-wrap gap-x-6 gap-y-10 items-center select-none">
            <a
              href={SOCIAL_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              class={classNames(
                "bg-sky-50 hover:bg-sky-100",
                "dark:bg-sky-800 dark:hover:bg-sky-700",

                "shadow-md dark:shadow hover:shadow",
                "shadow-sky-100 hover:shadow-sky-300",
                "dark:shadow-sky-950 dark:hover:shadow-sky-950",

                "text-sky-600 dark:text-sky-200",
                "w-fit transition tracking-wide px-3 py-2 rounded space-x-2 flex items-center",
                Classes.TEXT_MEDIUM
              )}
            >
              <Icon
                inline
                icon="ant-design:linkedin-outlined"
                class="text-xl"
              />
              <span>Visit me on {Social.LINKEDIN}</span>
            </a>
            <a href="#contact">Contact me</a>
            <span class="italic text-neutral-400">
              Note: some parts of this website are still under construction.
            </span>
          </div>
        </div>
        <div class="w-3/4 sm:w-1/2 lg:w-full flex justify-center items-center select-none">
          <img
            src={avatarUrl}
            loading="lazy"
            alt="avatar"
            class="w-full lg:w-3/4 xl:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
