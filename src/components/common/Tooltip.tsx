import classNames from "classnames";
import { ParentComponent } from "solid-js";

type Props = {
  position: "top" | "bottom" | "left" | "right";
};

// Credit to https://stackoverflow.com/a/23384995
// for this trick to center the tooltips without a
// fixed tooltip content width.
const positionClasses = {
  bottom: ["top-full left-1/2", "-translate-x-1/2"],
  top: ["bottom-full left-1/2", "-translate-x-1/2"],
  // TODO: Fix hardcoded 0.2em offset
  left: ["top-1/2 right-full", "-translate-y-[calc(50%+0.2em)]"],
  right: ["top-1/2 left-full", "-translate-y-[calc(50%+0.2em)]"],
} satisfies {
  [key in Props["position"]]: classNames.Argument;
};

const Tooltip: ParentComponent<Props> = ({ position, children }) => {
  return (
    <span
      class={classNames(
        // Tooltip styles
        "select-none",
        "box-border",
        "py-[6px] px-[8px]",
        "bg-black",
        "rounded-[6px]",
        "text-white text-xs",
        "not-italic",
        "text-center",
        // Tooltip positioning and alignment
        "w-fit",
        "absolute z-50",
        positionClasses[position],
        // Tooltip visibility
        "invisible opacity-0 transition-opacity duration-50",
        "group-hover:opacity-100 group-hover:visible"
      )}
    >
      {children}
    </span>
  );
};

export default Tooltip;
