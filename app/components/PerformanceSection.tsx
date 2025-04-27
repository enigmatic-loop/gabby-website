'use client'

import React from "react";
import { useState } from "react";
import PerformanceTag from "./PerformanceTag";
import VideoCard from "./VideoCard";
import Link from "next/link";
import PhotoAlbumSection from "./PhotoAlbumSection";

interface PerformanceData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  videoUrl: string;
}

const performanceData: PerformanceData[] = [
  {
    id: 1,
    title: "SANCA's Up with a Twist!",
    description: "Annual Fundraiser",
    tags: ["All", "Fabric"],
    videoUrl: "https://www.youtube.com/embed/e5660LB4jJo?si=Qa-WBqEHZ9Jz292a",
  },
  {
    id: 2,
    title: "Acrobatic Conundrum",
    description: "Thresholds",
    tags: ["All", "Mini Hoop"],
    videoUrl: "https://www.youtube.com/embed/u3ADDQF2FSc?si=I8mywXsYuZnVfPn9",
  },
  {
    id: 3,
    title: "Acrobatic Conundrum",
    description: "Thresholds",
    tags: ["All", "Fabric"],
    videoUrl: "https://www.youtube.com/embed/1sy-WqTPFPE?si=qNBH8xnfBeMKVtTY",
  },
  {
    id: 4,
    title: "Acrobatic Conundrum",
    description: "Thresholds",
    tags: ["All", "Mini Hoop"],
    videoUrl: "https://www.youtube.com/embed/EBGLOQBGLps?si=mUb345xknTju1lOa",
  },
  {
    id: 5,
    title: "Acrobatic Conundrum",
    description: "Thresholds",
    tags: ["All", "Silk Fans"],
    videoUrl: "https://www.youtube.com/embed/3UKoMEf3vaY?si=ZP3xrcPp0zFAJzeN",
  },
  {
    id: 5,
    title: "Acrobatic Conundrum",
    description: "Thresholds",
    tags: ["All", "LED Buugeng"],
    videoUrl: "https://www.youtube.com/embed/yLySfcNqMyU?si=w3MCbNvnjnl6h23g",
  },
  {
    id: 5,
    title: "Acrobatic Conundrum",
    description: "Thresholds",
    tags: ["Photo Albums"],
    videoUrl: "https://photos.app.goo.gl/7wjmyHuCav9JhYv86",
  },
];

const PerformanceSection = (): JSX.Element => {
  const [tag, setTag] = useState("All")

  const handleTagChange = (newTag : string) => {
    setTag(newTag)
  }

  const filteredPerformances = performanceData.filter((performance) => 
    performance.tags.includes(tag)
  );

  return (
    <section id='media'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 md:max-w-fit">
        Media
      </h2>
      <div className="flex flex-grid flex-wrap justify-center items-center gap-2 py-6">
        <PerformanceTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <PerformanceTag onClick={handleTagChange} name="Fabric" isSelected={tag === "Fabric"} />
        <PerformanceTag onClick={handleTagChange} name="Mini Hoop" isSelected={tag === "Mini Hoop"} />
        <PerformanceTag onClick={handleTagChange} name="Silk Fans" isSelected={tag === "Silk Fans"} />
        <PerformanceTag onClick={handleTagChange} name="LED Buugeng" isSelected={tag === "LED Buugeng"} />
        <PerformanceTag onClick={handleTagChange} name="Photo Albums" isSelected={tag === "Photo Albums"} />
      </div>
      <div className="flex flex-grid flex-wrap justify-center items-center gap-10 py-6">
        {tag === "Photo Albums" ? <PhotoAlbumSection />
          : filteredPerformances.map((performance, index) => (
          <VideoCard
            key={index}
            title={performance.title}
            videoUrl={performance.videoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default PerformanceSection;
