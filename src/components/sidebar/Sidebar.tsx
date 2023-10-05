import classNames from "classnames";
import { Component } from "solid-js";
import { Social } from "../../types/social";
import {
  SOCIAL_EMAIL_URL,
  SOCIAL_GITHUB_URL,
  SOCIAL_GITLAB_URL,
  SOCIAL_LINKEDIN_URL,
} from "../../utils/constants";
import { Classes } from "../../utils/styles";
import Logo from "./Logo";
import SocialLink from "./SocialLink";

const Sidebar: Component = () => {
  return (
    <div
      class={classNames(
        "h-screen sticky top-0 flex flex-col justify-between",
        "text-2xl md:text-3xl",
        "leading-none px-3 py-4 md:px-5 md:py-6",
        "bg-white dark:bg-zinc-800"
      )}
    >
      <Logo />
      <div
        class={classNames(
          "flex flex-col gap-y-2 md:gap-y-3 items-center",
          Classes.TEXT_DYNAMIC_COLOR
        )}
      >
        <span
          class={classNames(
            "mb-2 text-xs uppercase vertical-lr select-none",
            "text-stone-500"
          )}
        >
          Contact me:
        </span>
        <SocialLink type={Social.GITHUB} to={SOCIAL_GITHUB_URL} />
        <SocialLink type={Social.GITLAB} to={SOCIAL_GITLAB_URL} />
        <SocialLink type={Social.LINKEDIN} to={SOCIAL_LINKEDIN_URL} />
        <SocialLink type={Social.EMAIL} to={SOCIAL_EMAIL_URL} />
      </div>
    </div>
  );
};

export default Sidebar;
