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
