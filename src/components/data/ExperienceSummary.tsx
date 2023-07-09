import { Component } from "solid-js";
import { Experience } from "../../types/data";

// TODO: Investigate why optional props here are never typed as undefined
const ExperienceSummary: Component<Experience> = ({
  company,
  position,
  from,
  to,
  link,
}) => {
  return (
    <div class="font-display space-y-1">
      <p class="text-xs text-stone-600">
        {company} | {from} - {to}
      </p>
      <h4 class="italic">{position}</h4>
    </div>
  );
};

export default ExperienceSummary;
