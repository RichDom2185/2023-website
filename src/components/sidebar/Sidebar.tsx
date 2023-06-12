import { Component } from "solid-js";
import { Social } from "../../types/social";
import {
  SOCIAL_EMAIL_URL,
  SOCIAL_GITHUB_URL,
  SOCIAL_GITLAB_URL,
  SOCIAL_LINKEDIN_URL,
} from "../../utils/constants";
import SocialLink from "./SocialLink";

const Sidebar: Component = () => {
  return (
    <div class="min-h-screen flex flex-col justify-between text-2xl md:text-3xl leading-none px-3 py-4 md:px-5 md:py-6">
      <div class="text-center">
        <a
          href="/"
          class="inline-block w-[2.0625rem] md:w-[2.5rem] font-normal hover:font-black transition-[color,font-weight] text-zinc-500 hover:text-black"
        >
          RD
        </a>
      </div>
      <div class="flex flex-col gap-y-2 md:gap-y-3 items-center">
        <span class="text-xs uppercase vertical-lr select-none text-zinc-500">
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
