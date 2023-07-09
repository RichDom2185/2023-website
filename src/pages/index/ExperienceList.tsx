import classNames from "classnames";
import { Component, For } from "solid-js";
import ExperienceDisplay from "../../components/data/ExperienceDisplay";
import { Experience } from "../../types/data";
import { Classes } from "../../utils/styles";

type Props = {
  category: string;
  items: Experience[];
};

const ExperienceList: Component<Props> = ({ category, items }) => {
  return (
    <div class="space-y-4">
      <h2
        class={classNames(
          "text-2xl text-center font-display tracking-wider",
          Classes.TEXT_MEDIUM
        )}
      >
        {category}
      </h2>
      <div class="space-y-1">
        <For each={items}>
          {(experience, i) => (
            <div class="w-full px-6 py-4 bg-stone-500 bg-opacity-5">
              <ExperienceDisplay {...experience} />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default ExperienceList;
