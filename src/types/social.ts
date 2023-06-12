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

export const socialToColorClassMap = Object.freeze({
  [Social.GITHUB]: "hover:text-[#8250DF]",
  [Social.GITLAB]: "hover:text-[#FC6D26]",
  [Social.LINKEDIN]: "hover:text-[#0B66C2]",
}) satisfies { [key in Social]: string };
