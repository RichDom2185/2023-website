import classNames from "classnames";
import { Component, createMemo } from "solid-js";
import { Experience } from "../../types/data";

// TODO: Investigate why optional props here are never typed as undefined
const ExperienceSummary: Component<Experience> = ({
  company: companyName,
  position,
  from,
  to,
  link,
}) => {
  const company = createMemo(() =>
    !link ? (
      companyName
    ) : (
      <a
        class={classNames("hover:text-blue-600", "dark:hover:text-white")}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          class={classNames(
            // Based on Classes.TEXT_DYNAMIC_COLOR
            "decoration-zinc-900/30 dark:decoration-stone-400/20",
            "underline hover:decoration-transparent decoration-dotted underline-offset-4"
          )}
        >
          <span>{companyName}</span>
        </span>
      </a>
    )
  );

  return (
    <div class="font-display space-y-1">
      <p class="text-xs text-stone-600">
        {company()} | {from} - {to}
      </p>
      <h4 class="italic">{position}</h4>
    </div>
  );
};

export default ExperienceSummary;
