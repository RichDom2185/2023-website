import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import Placeholder from "../../components/Placeholder";
import ContactForm from "../../components/forms/ContactForm";
import { Classes } from "../../utils/styles";

const ContactSection: Component = () => {
  return (
    <div
      class={classNames(
        "bg-white dark:bg-zinc-900",
        "text-zinc-900 dark:text-stone-400",
        "px-5 py-10 dark:tracking-wide",
        "px-10 md:px-20",
        Classes.TEXT_NORMAL
      )}
    >
      <div class="w-full lg:w-5/6 space-y-10 mx-auto underline-offset-4 dark:tracking-wide">
        <h1
          class={classNames(
            "text-4xl font-display text-center",
            Classes.TEXT_BOLD
          )}
        >
          <Icon inline icon="twemoji:left-speech-bubble" /> Send Me a Message
        </h1>
        <div class="w-full space-y-6">
          <p
            class={classNames(
              "text-md md:text-lg text-justify",
              Classes.TEXT_MEDIUM
            )}
          >
            I am currently looking for internship opportunities in areas of
            Software Engineering, Software Development, and/or Technical Product
            Management. If you are interested in finding out more, or even just
            to have a chat, please feel free to contact me either via my
            socials, or send me an instant message below!
          </p>
        </div>
        <Placeholder>
          <ContactForm />
        </Placeholder>
      </div>
    </div>
  );
};

export default ContactSection;
