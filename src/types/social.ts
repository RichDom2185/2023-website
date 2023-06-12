export enum Social {
  LINKEDIN = "LinkedIn",
  GITHUB = "GitHub",
  GITLAB = "Gitlab",
}

export const socialToIconMap = Object.freeze({
  [Social.LINKEDIN]: "ri:linkedin-box-line",
  [Social.GITHUB]: "ri:github-line",
  [Social.GITLAB]: "ri:gitlab-line",
}) satisfies { [key in Social]: string };
