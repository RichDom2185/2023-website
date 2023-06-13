import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component, createMemo, createSignal } from "solid-js";

type Props = {
  label: string | (() => string);
  onClick: () => void;
  isEnabled?: () => boolean;
  leftIcon?: string;
};

const Button: Component<Props> = ({ label, onClick, isEnabled, leftIcon }) => {
  // Override default hover styles when useEnabledState is true
  const [useEnabledState, setUseEnabledState] = createSignal(false);

  const text = createMemo(() => (typeof label === "string" ? label : label()));

  return (
    <button
      classList={{
        [classNames(
          "!text-stone-900 dark:!text-stone-200",
          "!bg-zinc-200 dark:!bg-zinc-600",
          "!bg-opacity-95 dark:!bg-opacity-90",
          "!shadow-none"
        )]: isEnabled?.() && useEnabledState(),
        [classNames(
          "text-stone-900 dark:text-stone-200",
          "bg-zinc-200 dark:bg-zinc-600",
          "bg-opacity-95 dark:bg-opacity-90",
          "shadow-none"
        )]: isEnabled?.() && !useEnabledState(),
      }}
      class={classNames(
        "px-2 py-1 transition duration-100",
        "select-none rounded",
        "hover:shadow-md",
        "hover:text-white dark:hover:text-stone-900",
        "hover:bg-blue-600 dark:hover:bg-zinc-100"
      )}
      // Force enabled/disabled state immediately after clicking,
      // to show feedback to user even when the mouse is still
      // hovering over the button
      onClick={() => {
        setUseEnabledState(true);
        onClick();
      }}
      // Reset enabled/disabled state when mouse leaves the button,
      // thus the next time the user hovers over the button, the
      // default hover styles will take precedence instead of the
      // enabled/disabled styles
      onMouseLeave={() => setUseEnabledState(false)}
    >
      {leftIcon && <Icon inline icon={leftIcon} />}
      {leftIcon && " "}
      {text()}
    </button>
  );
};

export default Button;
