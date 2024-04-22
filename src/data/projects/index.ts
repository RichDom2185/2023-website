import { Project } from "../../types/data";

import projects_2022 from "./2022.yml";
import projects_2023 from "./2023.yml";

export const projectYears = [2022, 2023] as const;

export const allProjects: {
  [key in (typeof projectYears)[number]]: Project[];
} = {
  2022: projects_2022,
  2023: projects_2023,
};
