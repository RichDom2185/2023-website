import { ParentComponent } from "solid-js";

type Props = {
  to: string;
  hoverClass?: string;
};

const ExternalLink: ParentComponent<Props> = ({ to, hoverClass, children }) => {
  return (
    <a
      class="transition-colors duration-100"
      classList={{
        "hover:text-blue-600": !hoverClass,
        "dark:hover:text-blue-300": !hoverClass,
        [hoverClass]: !!hoverClass,
      }}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="underline decoration-dotted hover:decoration-solid underline-offset-4">
        {children}
      </span>
    </a>
  );
};

export default ExternalLink;
