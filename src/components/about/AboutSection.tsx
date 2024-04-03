"use client";

import { TabData } from "@/models";
import { TabButton } from "./TabButton";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NextJs</li>
        <li>SQL</li>
        <li>TypeScript</li>
        <li>Go</li>
        <li>React</li>
        <li>Angular</li>
        <li>Flutter</li>
        <li>Dot Net</li>
        <li>No SQL</li>
        <li>Docker</li>
        <li>Microservices</li>
        <li>Domain Driven Design</li>
        <li>Spring / SpringBoot</li>
        <li>DJango</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>CTP Calle Blancos</li>
        <li>Platzi</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Servicios Internacionales Multidiciplinarios (SIM) | Jan 2024 -
          Present
        </li>
        <li>Freelance Web Developer and Consultant | June 2020 - Present</li>
        <li>Orbitas Software Development | November 2022 - DIC 2023</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [_, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/about.jpeg"
          width={500}
          height={500}
          alt="Danny Sequeira"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Highly motivated and skilled programmer with a passion for building
            innovative software solutions. Experienced in ASP.NET Core, Flutter,
            Django, and React, with a proven ability to develop efficient and
            scalable web and mobile applications. Dedicated to continuous
            learning and staying updated with the latest industry trends.
            Excellent problem-solving and teamwork skills, with a strong
            commitment to delivering high-quality results.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {" "}
                {tabData.title}{" "}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)!.content}
          </div>
        </div>
      </div>
    </section>
  );
};
