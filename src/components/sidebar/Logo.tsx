import classNames from "classnames";
import { Component } from "solid-js";

const Logo: Component = () => {
  return (
    <div class="text-center">
      <a
        href="/#"
        class={classNames(
          "text-stone-500 hover:text-black",
          "dark:text-stone-400 dark:hover:text-stone-300",

          "select-none",
          "inline-block w-[2.0625rem] md:w-[2.5rem]",
          "font-normal hover:font-black",
          "transition-[color,font-weight]"
        )}
      >
        RD
      </a>
    </div>
  );
};

export default Logo;
