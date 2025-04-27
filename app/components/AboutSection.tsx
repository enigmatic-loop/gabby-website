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
        <li>Silk Fans</li>
        <li>Buugeng (S Staff)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-6">
        <li>Chrysalis Circus</li>
        <li>Acrobatic Conundrum</li>
        <li>Suite Lounge/Restaurant</li>
        <li>The Cabiri</li>
        <li>EnJoy Productions</li>
        <li>Space Oddity</li>
        <li>Muse Movement Collective</li>
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
    <section id='about' className="sm:pt-55 pt-5 ">
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
          <h2 className=" text-2xl text-gray-400">About</h2>
          <p className="text-base md:text-xl sm:text-sm">
          Gabby grew up in southern California for most of her life. In 2016, she moved up to Seattle to run away with the circus. After graduating from SANCA’s Professional Preparatory Program in 2017, she moved forward to performing with companies such as Chrysalis Circus, Acrobatic Conundrum, Vuelta La Luna, and The Cabiri. She creates acts that utilizes the beauty of aerial, acrobatics, and flow arts as a medium for artistic expression. 
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
