import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component, createMemo } from "solid-js";

type Props = {
  label: string | (() => string);
  href?: string;
  isActive?: () => boolean;
  leftIcon?: string;
  rightIcon?: string;
};

const LinkButton: Component<Props> = ({
  label,
  href,
  isActive,
  leftIcon,
  rightIcon,
}) => {
  const text = createMemo(() => (typeof label === "string" ? label : label()));

  return (
    <a
      class={classNames(
        "px-2 py-1 transition",
        "select-none rounded",
        "hover:shadow-md",
        "hover:text-white dark:hover:text-stone-900",
        "hover:bg-blue-600 dark:hover:bg-zinc-100",
        isActive?.() &&
          classNames(
            "text-stone-900 dark:text-stone-200",
            "bg-zinc-200 dark:bg-zinc-600",
            "bg-opacity-95 dark:bg-opacity-90",
            "shadow-none"
          )
      )}
      href={href}
      title={text()}
    >
      {leftIcon && <Icon inline icon={leftIcon} />}
      {leftIcon && " "}
      {text()}
      {rightIcon && " "}
      {rightIcon && <Icon inline icon={rightIcon} />}
    </a>
  );
};

export default LinkButton;
