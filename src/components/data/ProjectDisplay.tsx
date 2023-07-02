import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component, For } from "solid-js";
import { Project } from "../../types/data";
import { Classes } from "../../utils/styles";
import TechnologyIcon from "../common/TechnologyIcon";

// TODO: Investigate why optional props here are never typed as undefined
const ProjectDisplay: Component<Project> = ({
  name,
  description,
  links,
  tech,
}) => {
  return (
    <div>
      <h4 class={classNames(Classes.TEXT_MEDIUM, "text-xl")}>{name}</h4>
      {description && <p class="mt-1">{description}</p>}
      {links?.length && (
        <ul class="mt-3 space-y-1 text-sm">
          <For each={links}>
            {(link) => (
              <li>
                <a
                  class={classNames(
                    "hover:text-blue-600",
                    "dark:hover:text-white"
                  )}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class={classNames(
                      "hover:underline underline-offset-[6px]",
                      "space-x-2"
                    )}
                  >
                    <Icon inline icon={link.icon} />
                    <span>{link.label}</span>
                  </span>
                </a>
              </li>
            )}
          </For>
        </ul>
      )}
      {tech?.length && (
        <div
          class={classNames(
            "text-3xl text-center",
            "flex flex-wrap gap-2",
            "mt-4"
          )}
        >
          <For each={tech}>
            {(techItem) => (
              <TechnologyIcon
                withTooltip
                tooltipPosition="bottom"
                tech={techItem}
              />
            )}
          </For>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
