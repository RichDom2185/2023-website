import classNames from "classnames";

export enum Technology {
  // Used in either main codebase or data files
  PYTHON = "Python",
  TYPESCRIPT = "TypeScript",
  REACT = "React",
  R = "R",
  GOLANG = "Golang",
  JAVASCRIPT = "JavaScript",
  POSTGRESQL = "PostgreSQL",
  JEKYLL = "Jekyll",
  JAVA = "Java",
  TAILWINDCSS = "TailwindCSS",
  // Only used in data files
  CHAKRAUI = "Chakra UI",
  VITE = "Vite",
  IONIC = "Ionic",
  GITLAB = "GitLab",
  GITHUB = "GitHub",
  C = "C",
  LINUX = "Linux",
  SHELL = "Shell Scripting",
  AWS = "Amazon Web Services",
  LIGHTSAIL = "AWS Lightsail",
  ELIXIR = "Elixir",
  DOCKER = "Docker",
}

export const technologyToIconMap = Object.freeze({
  [Technology.PYTHON]: "devicon:python",
  [Technology.TYPESCRIPT]: "devicon:typescript",
  [Technology.REACT]: "devicon:react",
  [Technology.R]: "devicon:r",
  [Technology.GOLANG]: "devicon:go-wordmark",
  [Technology.JAVASCRIPT]: "devicon:javascript",
  [Technology.POSTGRESQL]: "devicon:postgresql",
  [Technology.JEKYLL]: "devicon:jekyll",
  [Technology.JAVA]: "devicon:java",
  [Technology.TAILWINDCSS]: "devicon:tailwindcss",
  [Technology.CHAKRAUI]: "simple-icons:chakraui",
  [Technology.VITE]: "devicon:vitejs",
  [Technology.IONIC]: "logos:ionic-icon",
  [Technology.GITLAB]: "devicon:gitlab",
  [Technology.GITHUB]: "simple-icons:github",
  [Technology.C]: "devicon:c",
  [Technology.LINUX]: "devicon:linux",
  [Technology.SHELL]: "devicon:bash",
  [Technology.AWS]: "devicon:amazonwebservices-wordmark",
  [Technology.LIGHTSAIL]: "logos:aws-lightsail",
  [Technology.ELIXIR]: "devicon:elixir",
  [Technology.DOCKER]: "logos:docker-icon",
}) satisfies { [key in Technology]: string };

export const technologyToColorClassMap = Object.freeze({
  [Technology.CHAKRAUI]: "text-[#319795]",
  [Technology.GITHUB]: "text-[#8250DF]",
  // FIXME: Hacky workaround
  [Technology.SHELL]: classNames(
    "before:transition-all",
    "before:rounded-full",
    "before:bg-[#F5F5F5]/80",
    "before:-z-10",
    "before:blur-sm",

    "before:absolute",
    "before:top-[2px]",
    "before:right-[3px]",
    "before:left-[3px]",
    "before:bottom-[2px]"
  ),
  [Technology.AWS]: classNames(
    "dark:invert",
    "dark:hover:invert-0",

    "dark:hover:before:bg-[#F5F5F5]/80",

    "dark:before:rounded-full",
    "dark:before:-z-10",
    "dark:before:blur-sm",

    "before:absolute",
    "before:-top-[3px]",
    "before:-right-[4px]",
    "before:-left-[4px]",
    "before:-bottom-[3px]"
  ),
}) satisfies { [key in Technology]?: string };
