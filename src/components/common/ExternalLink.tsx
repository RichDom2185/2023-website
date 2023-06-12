import { ParentComponent } from "solid-js";

type Props = {
  to: string;
};

const ExternalLink: ParentComponent<Props> = ({ to, children }) => {
  return (
    <a
      class="hover:text-blue-600 transition-colors duration-100"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
