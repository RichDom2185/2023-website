import { parse } from "yaml";
import { Project } from "../../types/data";
import projects_2022 from "./2022.yml?raw";

export const projectYears = [2022] as const;

export const allProjects: {
  [key in (typeof projectYears)[number]]: Project[];
} = {
  2022: parse(projects_2022),
};
