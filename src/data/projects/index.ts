import { parse } from "yaml";
import { Project } from "../../types/data";

import projects_2022 from "./2022.yml?raw";
import projects_2023 from "./2023.yml?raw";

export const projectYears = [2022, 2023] as const;

export const allProjects: {
  [key in (typeof projectYears)[number]]: Project[];
} = {
  2022: parse(projects_2022),
  2023: parse(projects_2023),
};
