import { parse } from "yaml";
import { Experience } from "../../types/data";

import workExperience from "./work.yml?raw";

export const workExperiences: Experience[] = parse(workExperience);
