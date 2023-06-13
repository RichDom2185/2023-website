import classNames from "classnames";
import { Component, createSignal } from "solid-js";
import { Classes } from "../../utils/styles";
import Button from "../common/Button";

const formComponentClasses = classNames("w-full flex gap-x-6 items-center");
const labelClasses = classNames(
  "w-1/5 text-right text-sm leading-tight",
  "hidden md:block",
  Classes.TEXT_MEDIUM
);
const inputClasses = classNames(
  "w-full rounded px-3 py-2",
  "bg-white dark:bg-slate-700 dark:bg-opacity-20",
  "shadow-none",
  "text-black dark:text-stone-300 font-normal"
);

// TODO: Refactor into form components
const ContactForm: Component = () => {
  const [emailValue, setEmailValue] = createSignal("");
  const [telegramValue, setTelegramValue] = createSignal("");
  const [messageValue, setMessageValue] = createSignal("");

  const shouldWarn = () => !emailValue() && !telegramValue() && messageValue();

  return (
    <div class="w-full lg:w-2/3 mx-auto">
      <form action="">
        <div
          class={classNames(
            "flex flex-col gap-y-4",
            "px-4 py-4",
            "bg-slate-100 dark:bg-slate-700",
            "bg-opacity-95 shadow-md dark:bg-opacity-20",
            "text-black dark:text-stone-400",
            "rounded-lg"
          )}
        >
          <div class="flex flex-col gap-y-1">
            {/* email */}
            <div class={formComponentClasses}>
              <div class={labelClasses}>
                <label for="email">
                  Your Email
                  <br />
                  <span class={classNames("text-xs", Classes.TEXT_NORMAL)}>
                    (optional)
                  </span>
                </label>
              </div>
              <div class="w-full">
                <input
                  class={classNames(inputClasses)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={emailValue()}
                  onInput={(e) => setEmailValue(e.currentTarget.value)}
                />
              </div>
            </div>
            {/* telegram username */}
            <div class={formComponentClasses}>
              <div class={labelClasses}>
                <label for="telegram">
                  Telegram ID
                  <br />
                  <span class={classNames("text-xs", Classes.TEXT_NORMAL)}>
                    (optional)
                  </span>
                </label>
              </div>
              <div class="w-full">
                <input
                  class={classNames(inputClasses)}
                  type="text"
                  name="telegram"
                  id="telegram"
                  placeholder="Telegram ID"
                  value={telegramValue()}
                  onInput={(e) => setTelegramValue(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
          {/* message */}
          <div class={formComponentClasses}>
            <div class={labelClasses}>
              <label for="message">
                Message<sup class="text-red-500">*</sup>
              </label>
            </div>
            <div class="w-full">
              <textarea
                class={classNames(inputClasses, "h-64 resize-y")}
                required
                name="message"
                id="message"
                placeholder="Message"
                value={messageValue()}
                onInput={(e) => setMessageValue(e.currentTarget.value)}
              />
            </div>
          </div>
          {shouldWarn() && (
            // TODO: Refactor into generic "modal" component
            <div
              class={classNames(
                "bg-orange-50 dark:bg-yellow-800 dark:bg-opacity-20",
                "outline outline-orange-600",
                "dark:text-stone-300",
                "px-4 py-3 space-y-2",
                "rounded"
              )}
            >
              <p class="text-justify">
                <strong class="text-2xl text-orange-700 dark:text-orange-400">
                  Note:
                </strong>
                <br />
                You seem to be sending a message without providing any contact
                details. Without any contact details, I will not be able to
                reply to your message!
              </p>
              <p>Please ensure that either:</p>
              <ul>
                <li class="list-disc list-inside">
                  You{" "}
                  <strong
                    class={classNames(Classes.TEXT_BOLD, "tracking-wide")}
                  >
                    do not require a response
                  </strong>{" "}
                  in return, or
                </li>
                <li class="list-disc list-inside">
                  You have included a{" "}
                  <strong
                    class={classNames(Classes.TEXT_BOLD, "tracking-wide")}
                  >
                    means of contact
                  </strong>{" "}
                  in the message body.
                </li>
              </ul>
            </div>
          )}
          <div class="mx-auto">
            <Button
              leftIcon="fluent:send-32-filled"
              label={() =>
                shouldWarn()
                  ? "I have checked my message, proceed to send"
                  : "Send Message"
              }
              onClick={() => alert("Coming soon!")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
