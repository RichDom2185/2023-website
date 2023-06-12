import classNames from "classnames";
import { ParentComponent } from "solid-js";

type Props = {
  to: string;
  hoverClass?: string;
};

const ExternalLink: ParentComponent<Props> = ({ to, hoverClass, children }) => {
  return (
    <a
      class={classNames(
        "transition-colors duration-100",
        "text-black dark:text-stone-400"
      )}
      classList={{
        "hover:text-blue-600": !hoverClass,
        [hoverClass]: !!hoverClass,
      }}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
