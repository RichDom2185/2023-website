import classNames from "classnames";
import HCaptcha from "solid-hcaptcha";
import { Component, createSignal, onMount } from "solid-js";
import { HCAPTCHA_SITE_KEY } from "../../utils/constants";

type Props = {
  handleVerify: (token: string, eKey: string) => void;
};

const darkMode = window.matchMedia("(prefers-color-scheme:dark)");

const Captcha: Component<Props> = ({ handleVerify }) => {
  const [getTheme, setTheme] = createSignal<"light" | "dark">(
    darkMode.matches ? "dark" : "light"
  );

  onMount(() => {
    darkMode?.addEventListener?.("change", (e) => {
      setTheme(e.matches ? "dark" : "light");
    });
  });

  // Reversed engineered from iframe:
  // Size of iframe is 303x78
  return (
    <div
      class={classNames(
        "overflow-clip flex justify-center items-center rounded shadow-md",
        // Shrink iframe to hide borders
        "w-[296px] h-[72px]"
      )}
    >
      <HCaptcha
        theme={getTheme()}
        sitekey={HCAPTCHA_SITE_KEY}
        onVerify={handleVerify}
      />
    </div>
  );
};

export default Captcha;
