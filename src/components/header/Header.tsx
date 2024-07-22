import { useLocation } from "@solidjs/router";
import classNames from "classnames";
import { Component, createSignal } from "solid-js";
import { getResume } from "../../api/resume";
import { Social } from "../../types/social";
import {
  BLOG_URL,
  SOCIAL_EMAIL_URL,
  SOCIAL_GITHUB_URL,
  SOCIAL_GITLAB_URL,
  SOCIAL_LINKEDIN_URL,
} from "../../utils/constants";
import { Classes } from "../../utils/styles";
import Captcha from "../captcha/Captcha";
import Button from "../common/Button";
import LinkButton from "../common/LinkButton";
import Logo from "../sidebar/Logo";
import SocialLink from "../sidebar/SocialLink";

const Header: Component = () => {
  const [isCaptchaVisible, setIsCaptchaVisible] = createSignal(false);
  const toggleIsCaptchaVisible = () => setIsCaptchaVisible((old) => !old);
  const location = useLocation();

  return (
    <header
      class={classNames(
        "header",
        Classes.BACKGROUND_DYNAMIC_COLOR,
        Classes.TEXT_DYNAMIC_COLOR,
        "bg-opacity-70 dark:bg-opacity-50",
        "backdrop-blur",
        "sticky top-0 w-full h-[--header-height]",
        "flex items-center",
        "gap-x-1 md:gap-x-5 lg:gap-x-6",
        "px-3 md:px-5",
        "py-4 text-sm font-display justify-end",
        Classes.TEXT_MEDIUM
      )}
    >
      <div class="text-xl grow flex sm:hidden">
        {/* TODO: Remove coupling between Header and Sidebar social links */}
        <Logo />
      </div>
      <LinkButton
        label="Experiments"
        href="/experiments"
        isActive={() => location.pathname === "/experiments"}
      />
      <Button
        label="Blog"
        rightIcon="heroicons-outline:external-link"
        onClick={() => window.open(BLOG_URL, "_blank")}
      />
      {/* TODO: Enable the following buttons when ready */}
      {/* <Button label="Apps" onClick={() => alert("apps")} /> */}
      <div class="relative">
        <Button
          label="Resume"
          onClick={() => toggleIsCaptchaVisible()}
          getEnabledState={isCaptchaVisible}
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
              [Classes.TEXT_STATIC_BLACK, "dark:text-white"],
              // FIXME: Blur isn't working for some reason
              "backdrop-blur rounded-lg"
            )}
          >
            <p class="font-sans">
              To access my resume, please verify that you are not a bot:
            </p>
            <Captcha
              handleVerify={async (token) => {
                const pdf = await getResume(token);
                const url = window.URL.createObjectURL(pdf);
                window.open(url, "_blank");
                toggleIsCaptchaVisible();
              }}
            />
          </div>
        )}
      </div>
      <div
        class={classNames(
          "sm:hidden text-lg space-x-2",
          // FIXME: Hacky divider implementation
          "pl-4 border-l border-solid",
          "border-zinc-900/50 dark:border-stone-400/60"
        )}
      >
        {/* TODO: Remove coupling between Header and Sidebar social links */}
        <SocialLink inline type={Social.GITHUB} to={SOCIAL_GITHUB_URL} />
        <SocialLink inline type={Social.GITLAB} to={SOCIAL_GITLAB_URL} />
        <SocialLink inline type={Social.LINKEDIN} to={SOCIAL_LINKEDIN_URL} />
        <SocialLink inline type={Social.EMAIL} to={SOCIAL_EMAIL_URL} />
      </div>
    </header>
  );
};

export default Header;
