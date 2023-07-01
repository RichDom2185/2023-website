import { Icon } from "@iconify-icon/solid";
import { Component, For } from "solid-js";
import { Project } from "../../types/data";

// TODO: Investigate why optional props here are never typed as undefined
const ProjectDisplay: Component<Project> = ({ name, description, links }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <ul>
        <For each={links}>
          {(link) => (
            <li>
              <Icon inline icon={link.icon} />
              <a href={link.url}>{link.label}</a>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default ProjectDisplay;
