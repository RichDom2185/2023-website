import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import {
  Technology,
  technologyToColorClassMap,
  technologyToIconMap,
} from "../../types/general";
import Tooltip from "./Tooltip";

type Props = {
  tech: Technology;
  withTooltip?: boolean;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
};

const TechnologyIcon: Component<Props> = ({
  tech,
  withTooltip = false,
  tooltipPosition = "bottom",
}) => {
  return (
    <div class="leading-none relative">
      <Icon
        inline
        class={classNames(
          "dark:grayscale hover:grayscale-0 transition-all",
          "peer", // Used for tooltips
          technologyToColorClassMap[tech]
        )}
        icon={technologyToIconMap[tech]}
      />
      {withTooltip && (
        <Tooltip mode="peer" position={tooltipPosition}>
          {tech}
        </Tooltip>
      )}
    </div>
  );
};

export default TechnologyIcon;
