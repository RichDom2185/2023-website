import classNames from "classnames";
import { ParentComponent } from "solid-js";
import { PLACEHOLDERS_ENABLED } from "../utils/constants";
import { Classes } from "../utils/styles";

type Props = {
  disableOverlay?: boolean;
};

const Placeholder: ParentComponent<Props> = ({
  disableOverlay = false,
  children,
}) => {
  if (!PLACEHOLDERS_ENABLED) {
    return <>{children}</>;
  }
  const enableOverlay = children && !disableOverlay;
  return (
    <div class="relative">
      <span
        class={classNames(
          "block mx-5 px-3",
          { "py-16": !enableOverlay, "py-3": !!enableOverlay },
          "text-center text-neutral-300 border-2 border-dashed",
          "select-none"
        )}
      >
        {children ?? "placeholder content"}
      </span>
      {enableOverlay && (
        <div
          class={classNames(
            "absolute top-1 right-1 bottom-1 left-1",
            "mx-5",
            Classes.BACKGROUND_DYNAMIC_COLOR,
            "bg-opacity-50 dark:bg-opacity-60"
          )}
        >
          <span
            class={classNames(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              Classes.TEXT_BOLD,
              "font-display tracking-wider text-center text-4xl italic select-none",
              "opacity-30 dark:opacity-60",
              "-rotate-[24deg]"
            )}
          >
            Coming soon!
          </span>
        </div>
      )}
    </div>
  );
};

export default Placeholder;
