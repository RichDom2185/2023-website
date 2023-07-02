export const Classes = Object.freeze({
  // For more information on why dark theme fonts have
  // thinner weights, see:
  // https://fonts.google.com/knowledge/choosing_type/exploring_typefaces_with_multiple_weights_or_grades#using-weights-or-grades-for-readability
  TEXT_BOLD: ["font-bold", "dark:font-semibold"],
  TEXT_NORMAL: ["font-normal", "dark:font-light"],
  TEXT_MEDIUM: ["font-medium", "dark:font-normal"],

  BACKGROUND_DYNAMIC_COLOR: "bg-white dark:bg-zinc-900",
  TEXT_DYNAMIC_COLOR: "text-zinc-900 dark:text-stone-400",
  TEXT_STATIC_BLACK: "text-zinc-900",

  SECTION_BODY_RESPONSIVE:
    "w-full lg:w-5/6 mx-auto underline-offset-4 dark:tracking-wide",

  MARKDOWN_CONTAINER: [
    "[&>ul_li]:list-disc [&>ul_li]:ml-4",
    "[&>*_a]:underline [&>*_a]:decoration-dotted [&>*_a]:hover:decoration-solid",
    "[&>*_a]:hover:text-blue-600 [&>*_a]:dark:hover:text-blue-300",
  ],

  HOVER_DYNAMIC_BACKGROUND: "hover:bg-black/5 dark:hover:bg-white/5",
});
