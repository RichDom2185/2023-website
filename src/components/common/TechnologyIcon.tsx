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
    <div
      class={classNames(
        "leading-none",
        "relative group" // Used for tooltips
      )}
    >
      <Icon
        inline
        class={classNames(
          "dark:grayscale group-hover:grayscale-0 transition-all",
          technologyToColorClassMap[tech]
        )}
        icon={technologyToIconMap[tech]}
      />
      {withTooltip && <Tooltip position={tooltipPosition}>{tech}</Tooltip>}
    </div>
  );
};

export default TechnologyIcon;
