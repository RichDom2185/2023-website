import HCaptcha from "solid-hcaptcha";
import { Component, createSignal, onMount } from "solid-js";
import { HCAPTCHA_SITE_KEY } from "../../utils/constants";

type Props = {
  handleVerify: (token: string, eKey: string) => void;
};

const darkMode = window.matchMedia("(prefers-color-scheme:dark)");

const Captcha: Component<Props> = ({ handleVerify }) => {
  const [theme, setTheme] = createSignal<"light" | "dark">(
    darkMode.matches ? "dark" : "light"
  );

  onMount(() => {
    darkMode?.addEventListener?.("change", (e) => {
      setTheme(e.matches ? "dark" : "light");
    });
  });

  return (
    <div class="mx-2 my-3">
      <HCaptcha
        theme={theme()}
        sitekey={HCAPTCHA_SITE_KEY}
        onVerify={handleVerify}
      />
    </div>
  );
};

export default Captcha;
