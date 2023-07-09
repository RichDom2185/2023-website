import { Component, createMemo } from "solid-js";
import { Experience } from "../../types/data";

// TODO: Investigate why optional props here are never typed as undefined
const ExperienceSummary: Component<Experience> = ({
  company,
  position,
  from,
  to,
}) => {
  const yearDisplay = createMemo(() => {
    // Only get years in from and to
    const parsedFrom = from.replaceAll(/[^0-9]/g, "");
    const parsedTo = to.replaceAll(/[^0-9]/g, "");
    return to === "Present"
      ? `since ${parsedFrom}`
      : parsedFrom === parsedTo
      ? parsedFrom
      : `${parsedFrom}-${parsedTo}`;
  });

  return (
    <div class="font-display space-y-1">
      <p class="text-xs text-stone-600">
        {company}, {yearDisplay()}
      </p>
      <h4 class="italic">{position}</h4>
    </div>
  );
};

export default ExperienceSummary;
