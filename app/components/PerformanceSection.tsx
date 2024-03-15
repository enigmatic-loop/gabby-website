import React from 'react'
import PerformanceCard from './PerformanceCard'

interface PerformanceData {
  id: number,
  title: string,
  description: string,
  image: string | null,
  morePhotosUrl: string | null,
  videoUrl: string
}

const performanceData: PerformanceData[] = [
  {
    id: 1,
    title: "SANCA's Up with a Twist!",
    description: "I did great",
    image: '/images/gabby_aerial.jpg',
    morePhotosUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=BciVTdmuaF0'
  },
  {
    id: 2,
    title: "Acrobatic Conundrum",
    description: "mwahahaha",
    image: null,
    morePhotosUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=BciVTdmuaF0'
  },
]

const PerformanceSection = (): JSX.Element => {
  return (
    <h2>{performanceData.map((project) => 
      <PerformanceCard key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        morePhotosUrl={project.morePhotosUrl}
        videoUrl={project.videoUrl}
      />
    )}</h2>
  )
}

export default PerformanceSection