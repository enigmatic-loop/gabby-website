'use client'

import React from "react";
import { useState } from "react";
import PerformanceCard from "./PerformanceCard";
import PerformanceTag from "./PerformanceTag";

interface PerformanceData {
  id: number;
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  morePhotosUrl: string | null;
  videoUrl: string;
}

const performanceData: PerformanceData[] = [
  {
    id: 1,
    title: "SANCA's Up with a Twist!",
    description: "I did great",
    image: "/images/gabby_aerial.jpg",
    tags: ["All", "Fabric"],
    morePhotosUrl: null,
    videoUrl: "https://www.youtube.com/watch?v=BciVTdmuaF0",
  },
  {
    id: 2,
    title: "Acrobatic Conundrum",
    description: "mwahahaha",
    image: "/images/gabby_mini_hoop.JPG",
    tags: ["All", "Lyra"],
    morePhotosUrl: null,
    videoUrl: "https://www.youtube.com/watch?v=BciVTdmuaF0",
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
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Performances
      </h2>
      <div className=" flex flex-row justify-center items-center gap-2 py-6">
        <PerformanceTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <PerformanceTag onClick={handleTagChange} name="Fabric" isSelected={tag === "Fabric"} />
        <PerformanceTag onClick={handleTagChange} name="Lyra" isSelected={tag === "Lyra"} />
      </div>
      <div>
        {filteredPerformances.map((performance, index) => (
          <PerformanceCard
            key={index}
            title={performance.title}
            description={performance.description}
            imgUrl={performance.image}
            morePhotosUrl={performance.morePhotosUrl}
            videoUrl={performance.videoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default PerformanceSection;
