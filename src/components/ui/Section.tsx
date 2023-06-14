import classNames from "classnames";
import { ParentComponent } from "solid-js";
import { Classes } from "../../utils/styles";

const Section: ParentComponent = ({ children }) => {
  return (
    <div
      class={classNames(
        "bg-white dark:bg-zinc-900",
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
