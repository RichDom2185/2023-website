import classNames from "classnames";
import { Component, For, createMemo } from "solid-js";
import ExperienceDisplay from "../../components/data/ExperienceDisplay";
import ExperienceSummary from "../../components/data/ExperienceSummary";
import { workExperiences } from "../../data/experience";
import { Experience } from "../../types/data";
import { Classes } from "../../utils/styles";

type Props = {
  category: string;
  items: Experience[];
  currentIndex: () => number;
  onIndexChange: (newIndex: number) => void;
};

const ExperienceShowcase: Component<Props> = ({
  category,
  items,
  currentIndex,
  onIndexChange,
}) => {
  const getCurrentDescription = createMemo(() => {
    // If we destructure without first assigning to the `props`
    // variable, we lose reactivity. For more info, see:
    // https://github.com/solidjs/solid/discussions/287
    const props = workExperiences[currentIndex()];
    return <ExperienceDisplay {...props} />;
  });

  return (
    <div class="flex gap-x-8 justify-between">
      <div class="w-[100%]">
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
                <div
                  class={classNames(
                    "py-2 px-3",
                    "rounded-lg",
                    "transition-all duration-50",
                    "cursor-pointer",
                    // Adapted from Classes.HOVER_DYNAMIC_BACKGROUND,
                    // TODO: Match the colors to the description
                    "hover:bg-black/10 dark:hover:bg-white/10",
                    currentIndex() === i() && "bg-black/5 dark:bg-white/5"
                  )}
                  onClick={() => onIndexChange(i())}
                >
                  <ExperienceSummary {...experience} />
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
      <div class="w-[200%] px-6 py-4 bg-stone-500 bg-opacity-5">
        {getCurrentDescription()}
      </div>
    </div>
  );
};

export default ExperienceShowcase;
