import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import Placeholder from "../../components/Placeholder";
import ContactForm from "../../components/forms/ContactForm";
import Section from "../../components/ui/Section";
import { Classes } from "../../utils/styles";

const ContactSection: Component = () => {
  return (
    <Section>
      <div class={classNames(Classes.SECTION_BODY_RESPONSIVE, "space-y-10")}>
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
    </Section>
  );
};

export default ContactSection;
