import classNames from "classnames";
import { Component } from "solid-js";
import { BLOG_URL } from "../../utils/constants";
import { Classes } from "../../utils/styles";
import Button from "../common/Button";

const Header: Component = () => {
  return (
    <header
      class={classNames(
        "header",
        "bg-white dark:bg-zinc-900",
        "text-black dark:text-stone-400",
        "bg-opacity-70 dark:bg-opacity-50",
        "backdrop-blur",
        "sticky top-0 w-full h-[--header-height]",
        "flex gap-x-6 items-center",
        "py-4 px-5 text-sm font-display justify-end",
        Classes.TEXT_MEDIUM
      )}
    >
      {/* TODO: Enable the following buttons when ready */}
      <Button label="Blog" onClick={() => window.open(BLOG_URL, "_blank")} />
      {/* <Button label="Apps" onClick={() => alert("apps")} /> */}
      {/* <Button label="Experiments" onClick={() => alert("experiments")} /> */}
      {/* <Button label="Resume" onClick={() => alert("resume")} /> */}
    </header>
  );
};

export default Header;
