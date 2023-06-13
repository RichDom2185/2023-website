import classNames from "classnames";
import { Component } from "solid-js";
import ExternalLink from "../../components/common/ExternalLink";
import { Social } from "../../types/social";
import { REPOSITORY_URL } from "../../utils/constants";

const FooterSection: Component = () => {
  return (
    <div
      class={classNames(
        "bg-white dark:bg-zinc-900",
        "text-neutral-400 dark:text-neutral-600",
        "px-10 py-6 text-center"
      )}
    >
      <p class="select-none">
        <span class="w-full text-sm">
          Copyright &copy; 2023 Richard Dominick
        </span>
        <br />
        <span>
          <span class="w-full text-xs">
            Built with{" "}
            <ExternalLink to="https://www.solidjs.com">SolidJS</ExternalLink>{" "}
            and{" "}
            <ExternalLink to="https://tailwindcss.com">Tailwind</ExternalLink>.
            View the source code on{" "}
            <ExternalLink to={REPOSITORY_URL}>{Social.GITHUB}</ExternalLink>.
          </span>
        </span>
      </p>
    </div>
  );
};

export default FooterSection;
