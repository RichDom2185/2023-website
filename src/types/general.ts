export enum Technology {
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
}) satisfies { [key in Technology]: string };
