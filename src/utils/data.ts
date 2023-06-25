import { parse } from "yaml";
import projectsYaml from "../data/projects.yml?raw";

type ProjectLink = {
  icon: string;
  url: string;
  label: string;
};

export type Project = {
  name: string;
  description?: string;
  links: ProjectLink[];
};

export const loadProjects = () => {
  const projects: Project[] = parse(projectsYaml);
  return projects;
};
