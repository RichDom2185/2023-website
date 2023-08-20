import { parse } from "yaml";
import { Experience } from "../../types/data";

import educationExperience from "./education.yml?raw";
import workExperience from "./work.yml?raw";

export const educationExperiences: Experience[] = parse(educationExperience);
export const workExperiences: Experience[] = parse(workExperience);
