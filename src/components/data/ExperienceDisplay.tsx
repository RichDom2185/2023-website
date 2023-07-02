import classNames from "classnames";
import { Component, For } from "solid-js";
import SolidMarkdown from "solid-markdown";
import { Experience } from "../../types/data";
import { Classes } from "../../utils/styles";
import TechnologyIcon from "../common/TechnologyIcon";

// TODO: Investigate why optional props here are never typed as undefined
const ExperienceDisplay: Component<Experience> = ({
  company,
  position,
  from,
  to,
  description,
  tech,
}) => {
  return (
    <div class="font-sans">
      <p class={classNames("text-sm", "text-stone-600")}>
        {from} - {to}
      </p>
      <div class="flex flex-wrap items-baseline leading-none gap-x-2 gap-y-1">
        <h4 class={classNames(Classes.TEXT_MEDIUM, "text-xl")}>{position}</h4>
        <p class={classNames("text-sm", "text-stone-600")}>at {company}</p>
      </div>

      {description && (
        <SolidMarkdown
          linkTarget="_blank"
          class={classNames("mt-3 space-y-1", Classes.MARKDOWN_CONTAINER)}
          children={description}
        />
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

export default ExperienceDisplay;
