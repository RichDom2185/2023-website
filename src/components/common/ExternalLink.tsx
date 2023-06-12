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
