"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React</li>
        <li>Next.JS</li>
        <li>Angular</li>
        <li>Django</li>
        <li>SQL</li>
        <li>Javascript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>UCSC: Bachelors degree, Computer Science - 2017</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>productOps: Software Engineer</li>
        <li>BMC: Software Engineer</li>
        <li>Fullpower: Software Engineer</li>
        <li>Fullpower: Engineering Intern</li>
        <li>Pegasus Racing: Composite Fabrication, Procurement manager </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/desktop.jpg" width={500} height={500} alt="Computer workstation"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m a software engineer with a solid background in developing both
            web and mobile applications. I&apos;ve worked extensively with React,
            Next.js, and Angular, crafting user-friendly front-ends, and have a
            good handle on Django for robust back-end solutions. My experience
            with APIs allows me to integrate diverse systems seamlessly. In
            addition, I&apos;m skilled in SQL, which aids in efficient data
            management and manipulation. I also have a passion for data
            visualization, enabling me to represent complex data sets in a clear
            and engaging way.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
