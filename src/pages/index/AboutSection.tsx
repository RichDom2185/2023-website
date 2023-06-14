import { Icon } from "@iconify-icon/solid";
import classNames from "classnames";
import { Component } from "solid-js";
import ExternalLink from "../../components/common/ExternalLink";
import Section from "../../components/ui/Section";
import { Classes } from "../../utils/styles";

const AboutSection: Component = () => {
  return (
    <Section>
      <div class="w-full lg:w-5/6 space-y-10 mx-auto underline-offset-4 dark:tracking-wide">
        <h1
          class={classNames(
            "text-4xl font-display text-center",
            Classes.TEXT_BOLD
          )}
        >
          <Icon inline icon="fluent-emoji-flat:waving-hand" /> About Me
        </h1>
        <div class="flex flex-wrap md:flex-nowrap gap-x-12 gap-y-6 text-justify">
          <div class="w-full space-y-6">
            <p class={classNames("text-md md:text-lg", Classes.TEXT_MEDIUM)}>
              Hi there! I am a young, aspiring full-stack developer who likes to
              write{" "}
              <u>
                <em>fast</em>, clean ✨, and <strong>extensible</strong>
              </u>{" "}
              code. I am currently a Year 3 Computer Science and Business
              Administration double-degree student at the{" "}
              <ExternalLink to="https://nus.edu.sg">
                National University of Singapore
              </ExternalLink>
              .
            </p>
            <p>
              Currently the Chief Technology Officer at{" "}
              <ExternalLink to="https://github.com/source-academy">
                Source Academy
              </ExternalLink>
              , I am responsible for full-stack project management, and beyond
              that, I am also involved in efforts to integrate Large Language
              Models (LLMs) into the educational platform.
            </p>
          </div>
          <div class="w-full space-y-6">
            <p>
              I am a <strong>very fast learner</strong>, and although primarily
              a web developer, as a programmer, I have gained many
              language-agnostic skills.
            </p>
            <p>
              These, together with my endless curiosity to create apps and
              scripts that work together to deliver great User and Developer
              Experiences. Some of the technologies I am most familiar with
              include:
            </p>
            {/* TODO: Refactor into custom component */}
            <ul class="grid grid-cols-2 leading-relaxed">
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:python" /> Python
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:typescript" /> TypeScript
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:react" /> React
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:r" /> R
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:go-wordmark" /> Golang
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:javascript" /> JavaScript
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:postgresql" /> PostgreSQL
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:jekyll" /> Jekyll
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:java" /> Java
              </li>
              <li class="list-disc list-inside">
                <Icon inline icon="devicon:tailwindcss" /> TailwindCSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
