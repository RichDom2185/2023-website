import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import { Social } from "../../types/social";
import { SOCIAL_LINKEDIN_URL } from "../../utils/constants";
import { Classes } from "../../utils/styles";

const WelcomeSection: Component = () => {
  return (
    <div
      class={classNames(
        "min-h-screen px-5 py-6 bg-white dark:bg-gray-900 text-black dark:text-stone-400 dark:tracking-wide",
        Classes.TEXT_NORMAL
      )}
    >
      <div class="h-full place-items-center flex flex-wrap-reverse md:flex-nowrap gap-x-5 justify-center px-10 md:px-20">
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
            Year 3 undergraduate @ NUS Computing & Business, Singapore. Loves
            coding, learning and just exploring new things.
          </p>
          <div class="flex flex-wrap gap-x-6 gap-y-10 items-center">
            <a
              href={SOCIAL_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              class={classNames(
                "w-fit transition bg-sky-50 hover:bg-sky-100 text-sky-600 tracking-wide px-3 py-2 rounded space-x-2 flex items-center shadow-md hover:shadow shadow-sky-100 hover:shadow-sky-300",
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
            <span class="italic text-neutral-400">
              Rest of the website is coming soon!
            </span>
          </div>
        </div>
        <div class="w-1/2 lg:w-full flex justify-center items-center">
          <span class="w-2/3 px-3 py-16 text-center text-neutral-300 outline-2 outline-dashed">
            placeholder avatar
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
