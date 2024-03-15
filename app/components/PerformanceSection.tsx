import React from 'react'
import PerformanceCard from './PerformanceCard'

const performanceData = [
  {
    id: 1,
    title: "SANCA's Up with a Twist!",
    description: "I did great",
    image: '/images/gabby_aerial.jpg',
  },
  {
    id: 2,
    title: "Acrobatic Conundrum",
    description: "mwahahaha",
    image: null,
  },
]

const PerformanceSection = () => {
  return (
    <h2>{performanceData.map((project) => 
      <PerformanceCard key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
      />
    )}</h2>
  )
}

export default PerformanceSection