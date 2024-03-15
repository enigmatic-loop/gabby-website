/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-6">
        <li>Aerial Silks</li>
        <li>Aerial Mini Hoop</li>
        <li>Lollipop</li>
        <li>Tumbling</li>
        <li>Handstands</li>
        <li>Buugeng (S Staff)</li>
        <li>Silk Fans</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-6">
        <li>Acrobatic Conundrum</li>
        <li>Up With a Twist!</li>
        <li>Chrysalis Circus</li>
        <li>Animate Objects</li>
        <li>Arcadia</li>
        <li>Vuelta La Luna</li>
      </ul>
    ),
  },
];

const AboutSection = (): JSX.Element => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="sm:pt-60 pt-5 ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/gabby_mini_hoop.JPG"}
          alt="Gabby doing a single knee hang on aerial mini hoop"
          width={400}
          height={500}
          priority={true}
          className=" border rounded-3xl border-gray-400"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className=" text-2xl text-gray-400">About Me</h2>
          <p className="text-base md:text-sm sm:text-xl">
            Joining the circus was the best decision I ever made. I was accepted
            into SANCA's professional preparatory program in Seattle, WA and
            graduated in 2017. My life has been an ecstatic roller coaster ever
            since. I now coach and perform aerial, tumbling, handstands, and
            some object manipulation. I'm thrilled to continue creating pieces
            that feed my hunger for meaningful art and move the audiences that
            are witnessing these vulnerable creations.
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
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
