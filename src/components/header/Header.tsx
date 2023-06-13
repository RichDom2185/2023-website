import classNames from "classnames";
import { Component, createSignal } from "solid-js";
import { getResume } from "../../api/resume";
import { BLOG_URL } from "../../utils/constants";
import { Classes } from "../../utils/styles";
import Placeholder from "../Placeholder";
import Captcha from "../captcha/Captcha";
import Button from "../common/Button";

const Header: Component = () => {
  const [isCaptchaVisible, setIsCaptchaVisible] = createSignal(false);
  const toggleIsCaptchaVisible = () => setIsCaptchaVisible((old) => !old);

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
      <div class="relative">
        <Button
          label="Resume"
          onClick={() => toggleIsCaptchaVisible()}
          isEnabled={isCaptchaVisible}
        />
        {isCaptchaVisible() && (
          // TODO: Possible refactor to own component
          // TODO: Close popover on outside click
          <div
            class={classNames(
              "w-min h-max",
              "mt-10 p-4 space-y-4",
              "absolute top-0 right-0",
              "select-none bg-white dark:bg-zinc-600",
              "bg-opacity-95 shadow-lg dark:bg-opacity-90",
              "text-black dark:text-white",
              // FIXME: Blur isn't working for some reason
              "backdrop-blur rounded-lg"
            )}
          >
            <p class="font-sans">
              To access my resume, please verify that you are not a bot:
            </p>
            <Placeholder>
              <Captcha
                handleVerify={async (token) => {
                  const pdf = await getResume(token);
                  const url = window.URL.createObjectURL(pdf);
                  window.open(url, "_blank");
                }}
              />
            </Placeholder>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
