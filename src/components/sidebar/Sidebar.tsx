import { Component } from "solid-js";
import { Social } from "../../types/social";
import {
  SOCIAL_GITHUB_URL,
  SOCIAL_GITLAB_URL,
  SOCIAL_LINKEDIN_URL,
} from "../../utils/constants";
import SocialLink from "./SocialLink";

const Sidebar: Component = () => {
  return (
    <div>
      <SocialLink type={Social.GITHUB} to={SOCIAL_GITHUB_URL} />
      <SocialLink type={Social.GITLAB} to={SOCIAL_GITLAB_URL} />
      <SocialLink type={Social.LINKEDIN} to={SOCIAL_LINKEDIN_URL} />
    </div>
  );
};

export default Sidebar;
