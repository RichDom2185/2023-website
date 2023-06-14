import classNames from "classnames";
import { ParentComponent } from "solid-js";
import { Classes } from "../../utils/styles";

const Section: ParentComponent = ({ children }) => {
  return (
    <div
      class={classNames(
        Classes.BACKGROUND_DYNAMIC_COLOR,
        "text-zinc-900 dark:text-stone-400",
        "px-5 py-10 dark:tracking-wide",
        "px-10 md:px-20",
        Classes.TEXT_NORMAL
      )}
    >
      {children}
    </div>
  );
};

export default Section;
