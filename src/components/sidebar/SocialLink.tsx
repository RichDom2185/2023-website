import { Icon } from "@iconify-icon/solid";
import { Component } from "solid-js";
import {
  Social,
  socialToColorClassMap,
  socialToIconMap,
} from "../../types/social";
import ExternalLink from "../common/ExternalLink";

type Props = {
  type: Social;
  to: string;
};

const SocialLink: Component<Props> = ({ type, to }) => {
  return (
    <ExternalLink to={to} hoverClass={socialToColorClassMap[type]}>
      <Icon icon={socialToIconMap[type]} />
    </ExternalLink>
  );
};

export default SocialLink;
